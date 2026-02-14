export default function SlotBox({
  slotKey,
  kind = 'image',
  fileHint,
  className = '',
  style,
  children,
}) {
  const debugEnabled = process.env.NEXT_PUBLIC_SLOT_DEBUG === 'true';

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`} style={style}>
      {debugEnabled && (
        <>
          <div className="absolute inset-0" style={{ border: '2px dashed rgba(17,24,39,0.28)' }} />
          <span
            className="absolute left-2 top-2 z-10 rounded-md px-2 py-1 text-[12px] leading-tight"
            style={{
              background: 'rgba(255,255,255,0.82)',
              border: '1px solid rgba(17,24,39,0.14)',
              pointerEvents: 'none',
              whiteSpace: 'pre-line',
            }}
          >
            {`${kind}:${slotKey}${fileHint ? `\nfile: ${fileHint}` : ''}`}
          </span>
        </>
      )}
      {children}
    </div>
  );
}
