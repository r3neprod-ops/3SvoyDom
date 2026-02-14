import SlotBox from '../slots/SlotBox';

export default function TopSceneWrapper({ children }) {
  const debugEnabled = process.env.NEXT_PUBLIC_SLOT_DEBUG === 'true';

  return (
    <section className="relative pb-8 pt-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: 'url("/images/top-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'linear-gradient(120deg, rgba(111,168,161,0.22) 0%, rgba(191,166,214,0.18) 42%, rgba(242,198,180,0.12) 100%), linear-gradient(180deg, rgba(246,244,240,0.92) 0%, rgba(246,244,240,0.68) 60%, rgba(246,244,240,0.92) 100%)',
        }}
      />

      {debugEnabled && (
        <>
          <SlotBox kind="bg" slotKey="top-bg" fileHint="top-bg.jpg" className="pointer-events-none absolute inset-0 -z-10 rounded-none" />
          <div
            className="pointer-events-none absolute right-3 top-3 z-20 rounded-md px-2 py-1 text-[11px] font-medium"
            style={{ background: 'rgba(255,255,255,0.82)', border: '1px solid rgba(17,24,39,0.14)' }}
          >
            TOP BG: /images/top-bg.jpg
          </div>
        </>
      )}

      <div className="relative">{children}</div>
    </section>
  );
}
