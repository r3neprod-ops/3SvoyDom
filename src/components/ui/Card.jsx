export default function Card({ className = '', style, children }) {
  return (
    <article className={`rounded-2xl border bg-white shadow-soft ${className}`} style={{ borderColor: 'var(--border)', ...style }}>
      {children}
    </article>
  );
}
