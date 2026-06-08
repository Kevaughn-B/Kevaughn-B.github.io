import { SectionHeader } from "../SectionHeader";
import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const roles = [
  {
    title: "Freelance Software Engineer & Web Developer",
    org: "Self-employed",
    period: "Oct 2022 – Present",
    points: [
      "Full-stack application development across modern web stacks",
      "REST API design and implementation",
      "Database architecture and query optimization",
      "Authentication, CRUD operations, and core business logic",
    ],
  },
  {
    title: "Executive Assistant to the Vice Principal",
    org: "Northern Caribbean University",
    period: "Sep 2023 – Present",
    points: [
      "Administrative support to executive leadership",
      "Documentation management and process coordination",
      "Event planning and cross-team coordination",
      "Confidential records handling and reporting",
    ],
  },
];

export const Experience = () => (
  <section id="experience" className="py-24 sm:py-32 bg-muted/30">
    <div className="container mx-auto px-4">
      <SectionHeader eyebrow="Experience" title="Where I've worked." />
      <div className="relative max-w-4xl">
        <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-border to-transparent" />
        <div className="space-y-6">
          {roles.map((r) => (
            <div key={r.title} className="relative pl-12 sm:pl-16">
              <div className="absolute left-0 top-2 w-8 sm:w-12 h-8 sm:h-12 rounded-full gradient-primary flex items-center justify-center shadow-glow">
                <Briefcase className="h-4 w-4 text-primary-foreground" />
              </div>
              <Card className="p-6 shadow-card hover:shadow-elegant transition-smooth border-border/50">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-display text-lg font-semibold">{r.title}</h3>
                  <span className="font-mono text-xs text-primary">{r.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{r.org}</p>
                <ul className="space-y-1.5 text-sm">
                  {r.points.map((p) => (
                    <li key={p} className="flex gap-2 text-muted-foreground">
                      <span className="text-primary mt-0.5">▸</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
