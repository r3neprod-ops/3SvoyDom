export default function IconButton({ icon, children, className = '', ...props }) {
  return (
    <button
      className={`inline-flex items-center gap-2 rounded-lg border border-soft bg-surface px-4 py-2 text-sm font-medium text-text hover:border-primary ${className}`}
      {...props}
    >
      <span aria-hidden>{icon}</span>
      {children}
    </button>
  );
}
