export default function Card({ className = '', children }) {
  return <div className={`rounded-2xl border border-soft bg-surface p-6 ${className}`}>{children}</div>;
}
