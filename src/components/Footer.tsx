export const Footer = () => (
  <footer className="border-t border-border/50 py-8">
    <div className="container mx-auto px-4 flex flex-col sm:flex-row gap-3 items-center justify-between text-sm text-muted-foreground">
      <p>
        © {new Date().getFullYear()} Kevaughn Benjamin. Built with React & Tailwind.
      </p>
      <p className="font-mono text-xs">Manchester, Jamaica 🇯🇲</p>
    </div>
  </footer>
);
