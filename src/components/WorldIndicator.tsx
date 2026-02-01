import { WORLD_LABELS } from '../visuals/scenes';
import type { WorldName } from '../visuals/scenes';

export function WorldIndicator({ world }: { world: WorldName }) {
  return (
    <div className="fixed bottom-6 right-6 z-20 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-xs uppercase tracking-[0.3em] text-[var(--indicator)] shadow-soft">
      {WORLD_LABELS[world]}
    </div>
  );
}
