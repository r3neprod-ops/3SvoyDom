export default function Button({ as: Tag = 'button', className = '', children, ...props }) {
  return (
    <Tag
      className={`inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-bg transition hover:brightness-110 ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
