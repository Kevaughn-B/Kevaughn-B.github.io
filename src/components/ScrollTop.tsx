import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ScrollTop = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <Button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      size="icon"
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 rounded-full gradient-primary text-primary-foreground border-0 shadow-elegant hover:shadow-glow transition-smooth h-11 w-11"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
};
