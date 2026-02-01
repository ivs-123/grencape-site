export type WorldName = 'space' | 'ocean' | 'desert';
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
  space: 'Space',
  ocean: 'Ocean',
  desert: 'Desert'
};

const lightPresets: Record<WorldName, WorldPreset> = {
  space: {
    label: 'Space',
    background: {
      top: '#F9FAF5',
      bottom: '#E6EFE8'
    },
    particle: {
      color: '#1F5F3A',
      alpha: 0.45,
      size: [0.6, 1.6],
      speed: { x: 2, y: 1 },
      wobble: 0.4,
      twinkle: 1.4,
      mode: 0
    },
    nebula: {
      core: '#EAF4EE',
      outer: '#DDEBE2'
    },
    accent: '#CFE8DD'
  },
  ocean: {
    label: 'Ocean',
    background: {
      top: '#F3FAF6',
      bottom: '#DCEFE7'
    },
    particle: {
      color: '#2E7355',
      alpha: 0.35,
      size: [1.2, 3.2],
      speed: { x: 0.6, y: -6 },
      wobble: 1.2,
      twinkle: 0.4,
      mode: 1
    },
    nebula: {
      core: '#E6F4EE',
      outer: '#D3E8DF'
    },
    accent: '#BBD8CC'
  },
  desert: {
    label: 'Desert',
    background: {
      top: '#FBF7F0',
      bottom: '#F0E5D4'
    },
    particle: {
      color: '#7B5C3A',
      alpha: 0.32,
      size: [0.5, 1.4],
      speed: { x: 6, y: 0.4 },
      wobble: 0.8,
      twinkle: 0.2,
      mode: 2
    },
    nebula: {
      core: '#F6EEDD',
      outer: '#E6D8C7'
    },
    accent: '#D3BFA7'
  }
};

const darkPresets: Record<WorldName, WorldPreset> = {
  space: {
    label: 'Space',
    background: {
      top: '#0B1511',
      bottom: '#0F1F18'
    },
    particle: {
      color: '#FAFAF7',
      alpha: 0.55,
      size: [0.7, 1.8],
      speed: { x: 1.4, y: 0.8 },
      wobble: 0.3,
      twinkle: 1.3,
      mode: 0
    },
    nebula: {
      core: '#203E30',
      outer: '#14271F'
    },
    accent: '#95C0AA'
  },
  ocean: {
    label: 'Ocean',
    background: {
      top: '#10281D',
      bottom: '#0B1F17'
    },
    particle: {
      color: '#CFE8DD',
      alpha: 0.4,
      size: [1.4, 3.4],
      speed: { x: 0.5, y: -5.2 },
      wobble: 1,
      twinkle: 0.3,
      mode: 1
    },
    nebula: {
      core: '#1F3B2E',
      outer: '#0F241B'
    },
    accent: '#7BAA95'
  },
  desert: {
    label: 'Desert',
    background: {
      top: '#173123',
      bottom: '#13261C'
    },
    particle: {
      color: '#EADCC6',
      alpha: 0.35,
      size: [0.6, 1.6],
      speed: { x: 5, y: 0.3 },
      wobble: 0.7,
      twinkle: 0.2,
      mode: 2
    },
    nebula: {
      core: '#2B3C2E',
      outer: '#1C281F'
    },
    accent: '#BFAF98'
  }
};

export function getWorldPreset(world: WorldName, theme: ThemeName): WorldPreset {
  return theme === 'dark' ? darkPresets[world] : lightPresets[world];
}
