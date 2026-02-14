import Button from './Button';

export default function IconButton({ icon, label, className = '', ...props }) {
  return (
    <Button aria-label={label} className={className} size="icon" variant="icon" {...props}>
      <span aria-hidden>{icon}</span>
    </Button>
  );
}
