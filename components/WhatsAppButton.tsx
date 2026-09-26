import { waLink } from "@/lib/site";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-gold text-ink hover:bg-gold-dark focus-visible:bg-gold-dark",
  secondary:
    "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  ghost:
    "border border-paper/40 text-paper hover:border-paper hover:bg-paper hover:text-ink",
};

export default function WhatsAppButton({
  message,
  children,
  variant = "primary",
  className = "",
}: {
  message?: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-medium transition-colors duration-200 ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
