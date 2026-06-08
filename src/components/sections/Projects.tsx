import { useMemo, useState } from "react";
import { SectionHeader } from "../SectionHeader";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Sparkles } from "lucide-react";

interface Project {
  title: string;
  description: string;
  features: string[];
  achievement?: string;
  stack: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "Smart Budgeting App",
    description: "Full-stack budgeting platform for tracking income, expenses, and goals across multiple users.",
    features: [
      "Multi-user income, expense & budget tracking",
      "Financial analytics dashboard and visualizations",
      "Real-time spending insights and budgeting tools",
    ],
    achievement: "Users can log and categorize expenses in under 10 seconds.",
    stack: ["FastAPI", "Python", "PostgreSQL"],
    github: "#",
  },
  {
    title: "Personal Portfolio Website",
    description: "Responsive portfolio site focused on accessibility, keyboard navigation, and crisp UX.",
    features: [
      "Accessibility and keyboard navigation",
      "Clean UI/UX and cross-device compatibility",
      "Lightweight, fast-loading static build",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "Git"],
    github: "#",
    demo: "#",
  },
  {
    title: "Grocery List Android App",
    description: "Mobile grocery planner with cloud sync and offline-first capabilities.",
    features: [
      "Firebase authentication and cloud sync",
      "Offline and online functionality",
      "Material-design native experience",
    ],
    stack: ["Java", "Kotlin", "Firebase", "Android Studio"],
    github: "#",
  },
  {
    title: "AI Student Academic Assistant",
    description: "Intelligent academic support platform that helps students study smarter.",
    features: [
      "PDF text extraction",
      "NLP-powered question answering",
      "Personalized recommendations and web API integrations",
    ],
    stack: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    github: "#",
  },
];

export const Projects = () => {
  const techs = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.stack.forEach((s) => set.add(s)));
    return ["All", ...Array.from(set)];
  }, []);
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.stack.includes(filter));

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work."
          description="Real-world apps spanning web, mobile, AI, and developer tooling."
        />

        <div className="flex flex-wrap gap-2 mb-10">
          {techs.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium font-mono transition-smooth border ${
                filter === t
                  ? "gradient-primary text-primary-foreground border-transparent shadow-glow"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((p) => (
            <Card
              key={p.title}
              className="group overflow-hidden shadow-card hover:shadow-elegant transition-smooth border-border/50 flex flex-col"
            >
              <div className="relative aspect-video gradient-hero overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-4xl font-bold text-primary-foreground/30 group-hover:text-primary-foreground/60 transition-smooth">
                    {p.title.split(" ").map((w) => w[0]).join("").slice(0, 3)}
                  </span>
                </div>
                <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-primary mt-0.5">▸</span>
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                {p.achievement && (
                  <div className="mt-4 flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/20">
                    <Sparkles className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/90">{p.achievement}</span>
                  </div>
                )}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <Badge key={s} variant="secondary" className="font-mono text-[10px] font-normal">{s}</Badge>
                  ))}
                </div>
                <div className="mt-5 flex gap-2 pt-4 border-t border-border/50">
                  {p.github && (
                    <Button asChild size="sm" variant="outline">
                      <a href={p.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" /> Code
                      </a>
                    </Button>
                  )}
                  {p.demo && (
                    <Button asChild size="sm" className="gradient-primary text-primary-foreground border-0">
                      <a href={p.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
