interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}
export const SectionHeader = ({ eyebrow, title, description }: SectionHeaderProps) => (
  <div className="max-w-2xl mb-12">
    <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">{eyebrow}</div>
    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">{title}</h2>
    {description && <p className="mt-4 text-muted-foreground text-lg">{description}</p>}
  </div>
);
