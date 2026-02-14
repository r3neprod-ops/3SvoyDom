export default function SlotBox({ slotKey, kind = 'image', className = '', style, children }) {
  const debugEnabled = process.env.NEXT_PUBLIC_SLOT_DEBUG === 'true';

  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={{
        ...style,
        border: debugEnabled ? '2px dashed rgba(17,24,39,0.28)' : 'none',
      }}
    >
      {debugEnabled && (
        <span
          className="absolute left-2 top-2 z-10 rounded-md px-2 py-1 text-[12px]"
          style={{
            background: 'rgba(255,255,255,0.82)',
            border: '1px solid rgba(17,24,39,0.14)',
            pointerEvents: 'none',
          }}
        >
          {kind}:{slotKey}
        </span>
      )}
      {children}
    </div>
  );
}
