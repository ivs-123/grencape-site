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
      top: '#F6FAF8',
      bottom: '#DCE7E6'
    },
    particle: {
      color: '#1F5F3A',
      alpha: 0.55,
      size: [0.6, 1.8],
      speed: { x: 1.6, y: 1.1 },
      wobble: 0.4,
      twinkle: 1.8,
      mode: 0
    },
    nebula: {
      core: '#E6F5F1',
      outer: '#D2E4E2'
    },
    accent: '#B8DCD0'
  },
  ocean: {
    label: 'Ocean',
    background: {
      top: '#F1F8F4',
      bottom: '#D5E7DF'
    },
    particle: {
      color: '#2E7355',
      alpha: 0.4,
      size: [1.1, 3.4],
      speed: { x: 0.5, y: -5.5 },
      wobble: 1.4,
      twinkle: 0.4,
      mode: 1
    },
    nebula: {
      core: '#E2F2EA',
      outer: '#CFE3DA'
    },
    accent: '#AFCFC1'
  },
  desert: {
    label: 'Desert',
    background: {
      top: '#FAF4EA',
      bottom: '#EADCC8'
    },
    particle: {
      color: '#7B5C3A',
      alpha: 0.34,
      size: [0.5, 1.4],
      speed: { x: 5.6, y: 0.4 },
      wobble: 0.9,
      twinkle: 0.2,
      mode: 2
    },
    nebula: {
      core: '#F3E8D4',
      outer: '#E4D1BE'
    },
    accent: '#C8B199'
  }
};

const darkPresets: Record<WorldName, WorldPreset> = {
  space: {
    label: 'Space',
    background: {
      top: '#07120E',
      bottom: '#0C1B16'
    },
    particle: {
      color: '#FAFAF7',
      alpha: 0.55,
      size: [0.7, 2],
      speed: { x: 1.2, y: 0.8 },
      wobble: 0.3,
      twinkle: 1.7,
      mode: 0
    },
    nebula: {
      core: '#1B3A2E',
      outer: '#11241B'
    },
    accent: '#86B09A'
  },
  ocean: {
    label: 'Ocean',
    background: {
      top: '#0E241A',
      bottom: '#0A1A14'
    },
    particle: {
      color: '#CFE8DD',
      alpha: 0.4,
      size: [1.2, 3.4],
      speed: { x: 0.4, y: -4.8 },
      wobble: 1.1,
      twinkle: 0.3,
      mode: 1
    },
    nebula: {
      core: '#1B352A',
      outer: '#0D1F17'
    },
    accent: '#77A28D'
  },
  desert: {
    label: 'Desert',
    background: {
      top: '#142B20',
      bottom: '#0E2018'
    },
    particle: {
      color: '#EADCC6',
      alpha: 0.35,
      size: [0.6, 1.6],
      speed: { x: 4.6, y: 0.3 },
      wobble: 0.8,
      twinkle: 0.2,
      mode: 2
    },
    nebula: {
      core: '#26372A',
      outer: '#18261D'
    },
    accent: '#B4A48E'
  }
};

export function getWorldPreset(world: WorldName, theme: ThemeName): WorldPreset {
  return theme === 'dark' ? darkPresets[world] : lightPresets[world];
}
