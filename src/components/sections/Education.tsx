import { SectionHeader } from "../SectionHeader";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const courses = [
  "Website Design & Implementation",
  "Data Structures & Algorithms",
  "Systems Administration & Engineering",
  "Fundamentals of Information Systems",
  "Cybersecurity",
];

export const Education = () => (
  <section id="education" className="py-24 sm:py-32">
    <div className="container mx-auto px-4">
      <SectionHeader eyebrow="Education" title="Academic foundation." />
      <Card className="max-w-4xl p-8 shadow-card border-border/50">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-glow flex-shrink-0">
            <GraduationCap className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <h3 className="font-display text-xl font-semibold">
              Bachelor of Science in Information Technology
            </h3>
            <p className="text-muted-foreground">Northern Caribbean University</p>
            <div className="flex flex-wrap gap-3 mt-2 text-sm">
              <span className="font-mono text-primary">2021 – 2026</span>
              <span className="text-muted-foreground">•</span>
              <span className="font-medium">GPA: 3.3 / 4.0</span>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-border/50">
          <div className="flex items-center gap-2 mb-3 text-sm font-medium">
            <BookOpen className="h-4 w-4 text-primary" /> Relevant Coursework
          </div>
          <div className="flex flex-wrap gap-2">
            {courses.map((c) => (
              <Badge key={c} variant="secondary" className="font-mono font-normal text-xs">
                {c}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </div>
  </section>
);

const certifications = [
  { title: "Meta Front-End Developer Professional Certificate", issuer: "Meta / Coursera" },
  { title: "Harvard CS50x — Introduction to Computer Science", issuer: "Harvard University" },
  { title: "Most Outstanding Fundamentals of Information Systems Student", issuer: "Northern Caribbean University" },
];

export const Certifications = () => (
  <section id="certifications" className="py-24 sm:py-32 bg-muted/30">
    <div className="container mx-auto px-4">
      <SectionHeader eyebrow="Certifications" title="Credentials & awards." />
      <div className="grid md:grid-cols-3 gap-5">
        {certifications.map((c) => (
          <Card key={c.title} className="p-6 shadow-card hover:shadow-elegant transition-smooth border-border/50">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center mb-4 shadow-glow">
              <Award className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="font-display font-semibold leading-snug">{c.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{c.issuer}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
