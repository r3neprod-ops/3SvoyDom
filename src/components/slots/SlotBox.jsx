export default function SlotBox({ slotKey, kind = 'image', className = '', children }) {
  const debugEnabled = process.env.NEXT_PUBLIC_SLOT_DEBUG === 'true';

  if (!debugEnabled) {
    return null;
  }

  return (
    <div
      className={`relative rounded-xl border border-dashed border-primary/80 bg-surface/50 p-4 text-xs text-text ${className}`}
    >
      <span className="absolute left-2 top-2 rounded bg-bg/90 px-2 py-1 font-semibold uppercase tracking-wide text-primary">
        {slotKey} · {kind}
      </span>
      <div className="flex h-full min-h-24 items-center justify-center pt-6 text-center text-text/70">
        {children || `Slot: ${slotKey}`}
      </div>
    </div>
  );
}
