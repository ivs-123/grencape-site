export type WorldName = 'deep' | 'nebula' | 'lensing' | 'accretion';
export type ThemeName = 'light' | 'dark';

export interface WorldPreset {
  label: string;
  background: {
    top: string;
    bottom: string;
  };
  particle: {
    color: string;
    alpha: number;
    size: [number, number];
    speed: { x: number; y: number };
    wobble: number;
    twinkle: number;
    mode: number;
  };
  nebula: {
    core: string;
    outer: string;
  };
  accent: string;
}

export const WORLD_LABELS: Record<WorldName, string> = {
  deep: 'Deep Space',
  nebula: 'Nebula',
  lensing: 'Lensing',
  accretion: 'Accretion'
};

const lightPresets: Record<WorldName, WorldPreset> = {
  deep: {
    label: 'Deep Space',
    background: {
      top: '#0A0F18',
      bottom: '#0C1320'
    },
    particle: {
      color: '#CFE6FF',
      alpha: 0.55,
      size: [0.6, 2.2],
      speed: { x: 1.2, y: 0.8 },
      wobble: 0.5,
      twinkle: 2,
      mode: 0
    },
    nebula: {
      core: '#1C2940',
      outer: '#10192C'
    },
    accent: '#7BC8FF'
  },
  nebula: {
    label: 'Nebula',
    background: {
      top: '#0A101C',
      bottom: '#0A1524'
    },
    particle: {
      color: '#AEE2FF',
      alpha: 0.42,
      size: [0.8, 2.6],
      speed: { x: 0.6, y: -3.8 },
      wobble: 1.1,
      twinkle: 0.6,
      mode: 1
    },
    nebula: {
      core: '#1C3046',
      outer: '#0E1B2F'
    },
    accent: '#7FB2FF'
  },
  lensing: {
    label: 'Lensing',
    background: {
      top: '#0C1322',
      bottom: '#0B1222'
    },
    particle: {
      color: '#BFD7FF',
      alpha: 0.38,
      size: [0.6, 2],
      speed: { x: 1.6, y: 0.3 },
      wobble: 0.7,
      twinkle: 0.4,
      mode: 2
    },
    nebula: {
      core: '#1A243B',
      outer: '#0D162A'
    },
    accent: '#7EA8FF'
  },
  accretion: {
    label: 'Accretion',
    background: {
      top: '#0A0F1A',
      bottom: '#0A0F1D'
    },
    particle: {
      color: '#CBE4FF',
      alpha: 0.45,
      size: [0.7, 2.4],
      speed: { x: 1.4, y: 0.6 },
      wobble: 0.6,
      twinkle: 1.3,
      mode: 3
    },
    nebula: {
      core: '#1B2A40',
      outer: '#0E182B'
    },
    accent: '#9FD4FF'
  }
};

const darkPresets: Record<WorldName, WorldPreset> = {
  deep: {
    label: 'Deep Space',
    background: {
      top: '#050913',
      bottom: '#070C19'
    },
    particle: {
      color: '#E6F0FF',
      alpha: 0.55,
      size: [0.7, 2.4],
      speed: { x: 1.1, y: 0.7 },
      wobble: 0.4,
      twinkle: 2,
      mode: 0
    },
    nebula: {
      core: '#121E3A',
      outer: '#0A1226'
    },
    accent: '#7DCBFF'
  },
  nebula: {
    label: 'Nebula',
    background: {
      top: '#050A16',
      bottom: '#081021'
    },
    particle: {
      color: '#B5D7FF',
      alpha: 0.42,
      size: [0.9, 2.6],
      speed: { x: 0.5, y: -3.4 },
      wobble: 1,
      twinkle: 0.5,
      mode: 1
    },
    nebula: {
      core: '#121F36',
      outer: '#0A1327'
    },
    accent: '#7FB2FF'
  },
  lensing: {
    label: 'Lensing',
    background: {
      top: '#060B18',
      bottom: '#08101D'
    },
    particle: {
      color: '#C7DAFF',
      alpha: 0.4,
      size: [0.7, 2.2],
      speed: { x: 1.4, y: 0.3 },
      wobble: 0.7,
      twinkle: 0.4,
      mode: 2
    },
    nebula: {
      core: '#111C34',
      outer: '#0A1226'
    },
    accent: '#7EA8FF'
  },
  accretion: {
    label: 'Accretion',
    background: {
      top: '#040813',
      bottom: '#070B18'
    },
    particle: {
      color: '#D7E8FF',
      alpha: 0.45,
      size: [0.8, 2.6],
      speed: { x: 1.2, y: 0.6 },
      wobble: 0.6,
      twinkle: 1.2,
      mode: 3
    },
    nebula: {
      core: '#13203A',
      outer: '#0A1226'
    },
    accent: '#9FD4FF'
  }
};

export function getWorldPreset(world: WorldName, theme: ThemeName): WorldPreset {
  return theme === 'dark' ? darkPresets[world] : lightPresets[world];
}
