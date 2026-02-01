import { useEffect, useState } from 'react';
import type { WorldName } from '../visuals/scenes';

const DEFAULT_WORLD: WorldName = 'deep';

export function useIntersectionWorld(): WorldName {
  const [activeWorld, setActiveWorld] = useState<WorldName>(DEFAULT_WORLD);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-world]'));
    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0]?.target as HTMLElement | undefined;
        const world = top?.dataset.world as WorldName | undefined;
        if (world) {
          setActiveWorld(world);
        }
      },
      {
        threshold: [0.2, 0.45, 0.7],
        rootMargin: '-10% 0px -45% 0px'
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return activeWorld;
}
