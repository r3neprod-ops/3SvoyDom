const baseClass =
  'inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition duration-200 focus-visible:outline-none';

const variants = {
  primary:
    'bg-[var(--primary)] text-white shadow-soft hover:bg-[var(--primaryHover)] focus-visible:[box-shadow:0_0_0_4px_var(--ring)]',
  secondary:
    'border border-[var(--borderStrong)] bg-white text-[var(--text)] hover:bg-[var(--surface2)] focus-visible:[box-shadow:0_0_0_4px_var(--ring)]',
  ghost:
    'border border-[var(--borderStrong)] bg-transparent text-[var(--text)] hover:bg-[rgba(111,168,161,0.10)] hover:border-[rgba(17,24,39,0.28)] focus-visible:[box-shadow:0_0_0_4px_var(--ring)]',
  icon:
    'h-10 w-10 rounded-full border border-[var(--borderStrong)] bg-white text-[var(--text)] hover:bg-[rgba(111,168,161,0.12)] focus-visible:[box-shadow:0_0_0_4px_var(--ring)]',
};

const sizes = {
  md: 'px-5 py-3',
  sm: 'px-4 py-2.5',
  icon: '',
};

export default function Button({ as: Tag = 'button', variant = 'primary', size = 'md', className = '', children, ...props }) {
  return <Tag className={`${baseClass} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>{children}</Tag>;
}
