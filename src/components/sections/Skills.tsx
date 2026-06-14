import { SectionHeader } from "../SectionHeader";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code, Layout, Server, Database, Cloud, Wrench, Monitor,
  Book, Gamepad, Users,
} from "lucide-react";

const groups = [
  { icon: Code, title: "Languages", items: ["Python", "JavaScript (ES6+)", "TypeScript", "C#",  "Java", "Kotlin", "PHP"] },
  { icon: Layout, title: "Frontend", items: ["HTML5", "CSS3", "React", "Vue.js"] },
  { icon: Server, title: "Backend", items: ["FastAPI", "Django", "Node.js", "Express.js", "Spring Boot", "ASP.NET", "Laravel"] },
  { icon: Database, title: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"] },
  { icon: Cloud, title: "Cloud & DevOps", items: ["AWS (EC2, S3)", "Microsoft Azure", "Google Cloud Platform", "Docker"] },
  { icon: Wrench, title: "Developer Tools", items: ["Git/GitHub", "VS Code", "Visual Studio", "IntelliJ IDEA", "Eclipse", "Postman", "JetBrains Rider"] },
  { icon: Monitor, title: "Operating Systems", items: ["Windows", "macOS", "Linux", "Android"] },
  { icon: Gamepad, title: "Game Development", items: ["Unity", "Unreal Engine 5", "Godot", "Blender" ] },
  { icon: Book, title: "Learning", items: ["Cobol", "SQL", "Swift", "Bash"]},
  { icon: Users, title: "Soft Skills", items: ["Motivated & Fast Learner", "Problem Solving", "Communication", "Collaboration", "Independent Work", "Remote Work", "Adaptability", "Teamwork", "Time Management", "Attention to Detail", "Critical Thinking", "Continuous Learning"]},
];

export const Skills = () => (
  <section id="skills" className="py-24 sm:py-32 bg-muted/30">
    <div className="container mx-auto px-4">
      <SectionHeader
        eyebrow="Skills"
        title="A modern, polyglot toolkit."
        description="Languages, frameworks, and platforms I use to ship full-stack products."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g) => (
          <Card key={g.title} className="p-6 shadow-card hover:shadow-elegant transition-smooth border-border/50 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center group-hover:scale-110 transition-smooth">
                <g.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <Badge key={i} variant="secondary" className="font-mono text-xs font-normal">
                  {i}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>

);
