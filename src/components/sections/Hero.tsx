import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => (
  <section id="home" className="relative min-h-dvh flex items-center pt-20 overflow-hidden">
    <img
      src={heroBg}
      alt=""
      width={1920}
      height={1080}
      className="absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-50"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
    <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />

    <div className="container relative mx-auto px-4 py-16">
      <div className="max-w-3xl animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6 text-xs font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-pulse-glow absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Available for opportunities
          <span className="text-muted-foreground inline-flex items-center gap-1 ml-1">
            <MapPin className="h-3 w-3" /> Manchester, JM
          </span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
          Kevaughn <span className="gradient-text">Benjamin</span>
        </h1>
        <p className="mt-4 text-xl sm:text-2xl font-medium text-foreground/90">
          Full-Stack Software Engineer & Web Developer
        </p>
        <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl">
          Building scalable web applications, APIs, and modern digital experiences, engineered with
          performance, accessibility, and craft in mind.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="gradient-primary text-primary-foreground shadow-elegant hover:shadow-glow transition-smooth border-0">
            <a href="#projects">View Projects <ArrowRight className="ml-1 h-4 w-4" /></a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="/Kevaughn_Benjamin-Resume.pdf" download>
              <Download className="mr-1 h-4 w-4" /> Download Resume
            </a>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <a href="#contact"><Mail className="mr-1 h-4 w-4" /> Contact Me</a>
          </Button>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/kevaughn-benjamin-6148b430b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="p-2.5 rounded-full glass hover:text-primary transition-smooth"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="p-2.5 rounded-full glass hover:text-primary transition-smooth"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>

      <Stats />
    </div>
  </section>
);

const stats = [
  { value: "3+", label: "Years Coding" },
  { value: "10+", label: "Projects Built" },
  { value: "15+", label: "Technologies" },
  { value: "3.3", label: "GPA / 4.0" },
];

const Stats = () => (
  <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
    {stats.map((s) => (
      <div key={s.label} className="glass rounded-xl p-4 text-center shadow-card">
        <div className="font-display text-3xl font-bold gradient-text">{s.value}</div>
        <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
      </div>
    ))}
  </div>
);
