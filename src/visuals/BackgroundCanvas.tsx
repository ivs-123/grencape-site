import { useEffect, useMemo, useRef } from 'react';
import { getWorldPreset } from './scenes';
import type { ThemeName, WorldName } from './scenes';
import { useViewport } from '../hooks/useViewport';

interface Particle {
  x: number;
  y: number;
  seed: number;
  size: number;
  layer: number;
}

interface SceneState {
  bgTop: [number, number, number];
  bgBottom: [number, number, number];
  particleColor: [number, number, number];
  particleAlpha: number;
  nebulaCore: [number, number, number];
  nebulaOuter: [number, number, number];
  accent: [number, number, number];
  sizeMin: number;
  sizeMax: number;
  speedX: number;
  speedY: number;
  wobble: number;
  twinkle: number;
  mode: number;
}

const TARGET_FPS = 30;
const TRANSITION_SECONDS = 12;
const ARM_COUNT = 3;
const GRID_SIZE = 120;

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return [r, g, b];
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function lerpColor(a: [number, number, number], b: [number, number, number], t: number): [number, number, number] {
  return [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
}

function stateFromPreset(world: WorldName, theme: ThemeName): SceneState {
  const preset = getWorldPreset(world, theme);
  return {
    bgTop: hexToRgb(preset.background.top),
    bgBottom: hexToRgb(preset.background.bottom),
    particleColor: hexToRgb(preset.particle.color),
    particleAlpha: preset.particle.alpha,
    nebulaCore: hexToRgb(preset.nebula.core),
    nebulaOuter: hexToRgb(preset.nebula.outer),
    accent: hexToRgb(preset.accent),
    sizeMin: preset.particle.size[0],
    sizeMax: preset.particle.size[1],
    speedX: preset.particle.speed.x,
    speedY: preset.particle.speed.y,
    wobble: preset.particle.wobble,
    twinkle: preset.particle.twinkle,
    mode: preset.particle.mode
  };
}

function blendState(current: SceneState, target: SceneState, t: number): SceneState {
  return {
    bgTop: lerpColor(current.bgTop, target.bgTop, t),
    bgBottom: lerpColor(current.bgBottom, target.bgBottom, t),
    particleColor: lerpColor(current.particleColor, target.particleColor, t),
    particleAlpha: lerp(current.particleAlpha, target.particleAlpha, t),
    nebulaCore: lerpColor(current.nebulaCore, target.nebulaCore, t),
    nebulaOuter: lerpColor(current.nebulaOuter, target.nebulaOuter, t),
    accent: lerpColor(current.accent, target.accent, t),
    sizeMin: lerp(current.sizeMin, target.sizeMin, t),
    sizeMax: lerp(current.sizeMax, target.sizeMax, t),
    speedX: lerp(current.speedX, target.speedX, t),
    speedY: lerp(current.speedY, target.speedY, t),
    wobble: lerp(current.wobble, target.wobble, t),
    twinkle: lerp(current.twinkle, target.twinkle, t),
    mode: lerp(current.mode, target.mode, t)
  };
}

function createParticles(count: number, width: number, height: number): Particle[] {
  return Array.from({ length: count }).map(() => ({
    x: Math.random() * width,
    y: Math.random() * height,
    seed: Math.random() * 1000,
    size: Math.random(),
    layer: Math.random()
  }));
}

interface Wisp {
  x: number;
  y: number;
  radius: number;
  drift: number;
  seed: number;
}

interface Comet {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
}

interface Pulse {
  x: number;
  y: number;
  radius: number;
  life: number;
}

function createWisps(count: number, width: number, height: number): Wisp[] {
  return Array.from({ length: count }).map(() => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: lerp(180, 420, Math.random()),
    drift: lerp(0.5, 1.8, Math.random()),
    seed: Math.random() * 1000
  }));
}

export function BackgroundCanvas({ world, theme, reducedMotion }: { world: WorldName; theme: ThemeName; reducedMotion: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const wispsRef = useRef<Wisp[]>([]);
  const cometsRef = useRef<Comet[]>([]);
  const pulsesRef = useRef<Pulse[]>([]);
  const stateRef = useRef<SceneState>(stateFromPreset(world, theme));
  const targetRef = useRef<SceneState>(stateFromPreset(world, theme));
  const { width, height, dpr, isMobile } = useViewport();

  const particleCount = useMemo(() => {
    const area = width * height;
    const base = Math.max(40, Math.floor(area / 18000));
    const mobileScale = isMobile ? 0.6 : 1;
    const reducedScale = reducedMotion ? 0.2 : 1;
    return Math.floor(base * mobileScale * reducedScale);
  }, [width, height, isMobile, reducedMotion]);

  useEffect(() => {
    targetRef.current = stateFromPreset(world, theme);
  }, [world, theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    particlesRef.current = createParticles(particleCount, width, height);
    wispsRef.current = createWisps(Math.max(4, Math.floor(particleCount / 18)), width, height);
  }, [width, height, dpr, particleCount]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frameId = 0;
    let last = performance.now();

    const draw = (now: number) => {
      const elapsed = now - last;
      if (elapsed < 1000 / TARGET_FPS) {
        frameId = requestAnimationFrame(draw);
        return;
      }

      const dt = Math.min(elapsed / 1000, 0.05);
      last = now;

      const blend = 1 - Math.exp(-dt / TRANSITION_SECONDS);
      stateRef.current = blendState(stateRef.current, targetRef.current, blend);
      const state = stateRef.current;

      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, `rgb(${state.bgTop[0]}, ${state.bgTop[1]}, ${state.bgTop[2]})`);
      gradient.addColorStop(1, `rgb(${state.bgBottom[0]}, ${state.bgBottom[1]}, ${state.bgBottom[2]})`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      const nebulaCore = `rgb(${state.nebulaCore[0]}, ${state.nebulaCore[1]}, ${state.nebulaCore[2]})`;
      const nebulaOuter = `rgb(${state.nebulaOuter[0]}, ${state.nebulaOuter[1]}, ${state.nebulaOuter[2]})`;
      const accent = `rgb(${state.accent[0]}, ${state.accent[1]}, ${state.accent[2]})`;
      const wisps = wispsRef.current;
      const centerX = width * 0.5;
      const centerY = height * 0.45;
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      ctx.globalAlpha = reducedMotion ? 0.04 : 0.08;
      ctx.strokeStyle = accent;
      ctx.lineWidth = 1;
      const offsetX = (now * 0.003) % GRID_SIZE;
      const offsetY = (now * 0.002) % GRID_SIZE;
      for (let x = -GRID_SIZE; x <= width + GRID_SIZE; x += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(x + offsetX, 0);
        ctx.lineTo(x + offsetX, height);
        ctx.stroke();
      }
      for (let y = -GRID_SIZE; y <= height + GRID_SIZE; y += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(0, y + offsetY);
        ctx.lineTo(width, y + offsetY);
        ctx.stroke();
      }
      ctx.restore();
      ctx.save();
      ctx.globalAlpha = reducedMotion ? 0.12 : 0.2;
      ctx.globalCompositeOperation = 'screen';
      wisps.forEach((wisp, index) => {
        const wobble = Math.sin(now * 0.00015 + wisp.seed) * 18;
        const driftX = Math.cos(now * 0.00008 + index) * wisp.drift;
        const driftY = Math.sin(now * 0.0001 + index) * wisp.drift;
        const x = wisp.x + driftX + wobble;
        const y = wisp.y + driftY - wobble * 0.3;
        const radius = wisp.radius + Math.sin(now * 0.0002 + wisp.seed) * 20;
        const glow = ctx.createRadialGradient(x, y, radius * 0.2, x, y, radius);
        glow.addColorStop(0, nebulaCore);
        glow.addColorStop(1, nebulaOuter);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();

      if (!reducedMotion) {
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        ctx.globalAlpha = 0.12;
        for (let arm = 0; arm < ARM_COUNT; arm += 1) {
          const phase = (Math.PI * 2 * arm) / ARM_COUNT + now * 0.00005;
          ctx.beginPath();
          for (let i = 0; i < 220; i += 1) {
            const t = i / 220;
            const radius = t * Math.min(width, height) * 0.6;
            const angle = phase + t * 5.2;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius * 0.6;
            if (i === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.strokeStyle = accent;
          ctx.lineWidth = 18;
          ctx.stroke();
        }
        ctx.restore();
      }

      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      ctx.globalAlpha = reducedMotion ? 0.08 : 0.16;
      for (let i = 0; i < 3; i += 1) {
        const offset = (now * 0.00003 + i * 1.4) % (Math.PI * 2);
        const x = centerX + Math.cos(offset) * width * 0.18;
        const y = centerY + Math.sin(offset * 0.9) * height * 0.12;
        const radius = Math.min(width, height) * (0.42 + i * 0.08);
        const glow = ctx.createRadialGradient(x, y, radius * 0.15, x, y, radius);
        glow.addColorStop(0, nebulaCore);
        glow.addColorStop(1, 'transparent');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      const w0 = Math.max(0, 1 - Math.abs(state.mode - 0));
      const w1 = Math.max(0, 1 - Math.abs(state.mode - 1));
      const w2 = Math.max(0, 1 - Math.abs(state.mode - 2));
      const sum = w0 + w1 + w2 || 1;
      const starW = w0 / sum;
      const bubbleW = w1 / sum;
      const dustW = w2 / sum;

      const baseAlpha = state.particleAlpha;
      const color = `rgb(${state.particleColor[0]}, ${state.particleColor[1]}, ${state.particleColor[2]})`;
      const particles = particlesRef.current;

      particles.forEach((particle) => {
        const depth = 0.4 + particle.layer * 0.8;
        const driftX = state.speedX * dt * depth;
        const driftY = state.speedY * dt * depth;
        const wobble = Math.sin(now * 0.0008 + particle.seed) * state.wobble;

        if (!reducedMotion) {
          particle.x += driftX + wobble * 0.3;
          particle.y += driftY + wobble * 0.2;
        }

        if (particle.x > width + 20) particle.x = -20;
        if (particle.x < -20) particle.x = width + 20;
        if (particle.y > height + 20) particle.y = -20;
        if (particle.y < -20) particle.y = height + 20;

        const twinkle = 0.7 + 0.3 * Math.sin(now * 0.0012 * state.twinkle + particle.seed);
        const alpha = baseAlpha * depth * (starW * twinkle + bubbleW * 0.7 + dustW * 0.5);
        const sizeRange = lerp(state.sizeMin, state.sizeMax, particle.size);
        const radius = sizeRange * depth * (starW * 0.7 + bubbleW * 1.6 + dustW * 0.4);

        ctx.beginPath();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = color;
        ctx.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!reducedMotion && starW > 0.4) {
        if (Math.random() < 0.015) {
          cometsRef.current.push({
            x: Math.random() * width * 1.2 - width * 0.1,
            y: Math.random() * height * 0.4,
            vx: lerp(120, 220, Math.random()),
            vy: lerp(40, 120, Math.random()),
            life: 1
          });
        }
        if (Math.random() < 0.01) {
          pulsesRef.current.push({
            x: width * (0.3 + Math.random() * 0.4),
            y: height * (0.2 + Math.random() * 0.4),
            radius: lerp(80, 160, Math.random()),
            life: 1
          });
        }
      }

      if (!reducedMotion) {
        const comets = cometsRef.current;
        comets.forEach((comet) => {
          comet.x += comet.vx * dt;
          comet.y += comet.vy * dt;
          comet.life -= dt * 0.6;
          const tail = 140;
          const grad = ctx.createLinearGradient(comet.x, comet.y, comet.x - tail, comet.y - tail * 0.6);
          grad.addColorStop(0, accent);
          grad.addColorStop(1, 'transparent');
          ctx.strokeStyle = grad;
          ctx.lineWidth = 2.2;
          ctx.globalAlpha = Math.max(0, comet.life);
          ctx.beginPath();
          ctx.moveTo(comet.x, comet.y);
          ctx.lineTo(comet.x - tail, comet.y - tail * 0.6);
          ctx.stroke();
        });
        cometsRef.current = comets.filter((comet) => comet.life > 0 && comet.x < width + 200 && comet.y < height + 200);
        const pulses = pulsesRef.current;
        pulses.forEach((pulse) => {
          pulse.life -= dt * 0.4;
          pulse.radius += dt * 80;
          const fade = Math.max(0, pulse.life);
          const glow = ctx.createRadialGradient(pulse.x, pulse.y, 0, pulse.x, pulse.y, pulse.radius);
          glow.addColorStop(0, accent);
          glow.addColorStop(1, 'transparent');
          ctx.fillStyle = glow;
          ctx.globalAlpha = 0.25 * fade;
          ctx.beginPath();
          ctx.arc(pulse.x, pulse.y, pulse.radius, 0, Math.PI * 2);
          ctx.fill();
        });
        pulsesRef.current = pulses.filter((pulse) => pulse.life > 0);
        ctx.globalAlpha = 0.3 + starW * 0.5;
        ctx.globalCompositeOperation = 'screen';
        const ring = ctx.createRadialGradient(centerX, centerY, 30, centerX, centerY, width * 0.5);
        ring.addColorStop(0, 'transparent');
        ring.addColorStop(0.4, accent);
        ring.addColorStop(1, 'transparent');
        ctx.fillStyle = ring;
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, width * 0.55, width * 0.22, now * 0.00012, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = 'source-over';
      }

      ctx.globalAlpha = 1;
      frameId = requestAnimationFrame(draw);
    };

    frameId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frameId);
  }, [width, height, reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      aria-hidden="true"
    />
  );
}
