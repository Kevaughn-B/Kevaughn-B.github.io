import { SectionHeader } from "../SectionHeader";
import { Card } from "@/components/ui/card";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const traits = [
  { icon: Code2, title: "Full-Stack Engineering", desc: "Comfortable across the stack — from databases and APIs to polished UIs." },
  { icon: Rocket, title: "Cloud Deployment", desc: "Shipping apps to AWS, Azure, and GCP with Docker-based workflows." },
  { icon: Lightbulb, title: "Problem Solving", desc: "Translating ambiguous requirements into reliable, maintainable systems." },
  { icon: Users, title: "Team Collaboration", desc: "Strong communicator with experience supporting executives and clients." },
];

export const About = () => (
  <section id="about" className="py-24 sm:py-32">
    <div className="container mx-auto px-4">
      <SectionHeader eyebrow="About" title="Engineer, builder, lifelong learner." />
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a <span className="text-foreground font-medium">junior software engineer</span> based in
            Manchester, Jamaica, with hands-on experience in web and mobile application development.
          </p>
          <p>
            I'm proficient in Python, JavaScript, Java and C#, with a working knowledge of relational
            databases, cloud deployment, and REST API design. I care about writing clean, accessible,
            and performant code that solves real problems.
          </p>
          <p>
            Strong problem-solving, adaptability, and a genuine passion for learning new technologies
            keep me growing — whether shipping side projects or supporting a team.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {traits.map((t) => (
            <Card key={t.title} className="p-6 shadow-card hover:shadow-elegant transition-smooth border-border/50">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center mb-4 shadow-glow">
                <t.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold mb-1.5">{t.title}</h3>
              <p className="text-sm text-muted-foreground">{t.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </section>
);
