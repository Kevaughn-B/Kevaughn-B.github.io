import { SectionHeader } from "../SectionHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";

export const Resume = () => (
  <section id="resume" className="py-24 sm:py-32">
    <div className="container mx-auto px-4">
      <SectionHeader
        eyebrow="Resume"
        title="The TL;DR — on paper."
        description="Preview the full resume below, or download a PDF copy to share with your team."
      />
      <Card className="overflow-hidden shadow-elegant border-border/50">
        <div className="flex items-center justify-between p-4 border-b border-border/50 bg-muted/50">
          <div className="flex items-center gap-2 text-sm">
            <FileText className="h-4 w-4 text-primary" />
            <span className="font-mono">Kevaughn_Benjamin_Resume.pdf</span>
          </div>
          <Button asChild size="sm" className="gradient-primary text-primary-foreground border-0">
            <a href="/resume.pdf" download>
              <Download className="h-4 w-4 mr-1" /> Download
            </a>
          </Button>
        </div>
        <div className="aspect-[8.5/11] bg-muted/30 flex items-center justify-center">
          <object data="/resume.pdf" type="application/pdf" className="w-full h-full">
            <div className="text-center p-10">
              <FileText className="h-12 w-12 mx-auto mb-3 text-muted-foreground" />
              <p className="text-muted-foreground mb-4">
                Resume preview unavailable. Download the file to view it.
              </p>
              <Button asChild className="gradient-primary text-primary-foreground border-0">
                <a href="/resume.pdf" download>
                  <Download className="h-4 w-4 mr-1" /> Download Resume
                </a>
              </Button>
            </div>
          </object>
        </div>
      </Card>
    </div>
  </section>
);
