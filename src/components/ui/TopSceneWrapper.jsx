import SlotBox from '../slots/SlotBox';

export default function TopSceneWrapper({ children }) {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0">
        <SlotBox className="h-full w-full rounded-none" kind="bg" slotKey="top-bg" />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(120deg, rgba(111,168,161,0.22) 0%, rgba(191,166,214,0.18) 42%, rgba(242,198,180,0.12) 100%), linear-gradient(180deg, rgba(246,244,240,0.92) 0%, rgba(246,244,240,0.68) 60%, rgba(246,244,240,0.92) 100%)',
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
