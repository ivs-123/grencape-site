import { useEffect, useMemo, useRef } from 'react';
import { getWorldPreset } from './scenes';
import type { ThemeName, WorldName } from './scenes';
import { useViewport } from '../hooks/useViewport';

interface Particle {
  x: number;
  y: number;
  seed: number;
  size: number;
}

interface SceneState {
  bgTop: [number, number, number];
  bgBottom: [number, number, number];
  particleColor: [number, number, number];
  particleAlpha: number;
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
    size: Math.random()
  }));
}

export function BackgroundCanvas({ world, theme, reducedMotion }: { world: WorldName; theme: ThemeName; reducedMotion: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
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
        const driftX = state.speedX * dt;
        const driftY = state.speedY * dt;
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
        const alpha = baseAlpha * (starW * twinkle + bubbleW * 0.7 + dustW * 0.5);
        const sizeRange = lerp(state.sizeMin, state.sizeMax, particle.size);
        const radius = sizeRange * (starW * 0.7 + bubbleW * 1.6 + dustW * 0.4);

        ctx.beginPath();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = color;
        ctx.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

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
