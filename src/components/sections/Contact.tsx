import { useState } from "react";
import { z } from "zod";
import { SectionHeader } from "../SectionHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MessageCircle, MapPin, Linkedin, Github, Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

const contacts = [
  { icon: Mail, label: "Email", value: "k.dorianbenjamin@gmail.com", href: "mailto:k.dorianbenjamin@gmail.com" },
  { icon: Phone, label: "Phone", value: "+1 876-490-0848", href: "tel:+18764900848" },
  { icon: MessageCircle, label: "WhatsApp", value: "+1 649-243-1463", href: "https://wa.me/16492431463" },
  { icon: MapPin, label: "Location", value: "Manchester, Jamaica" },
];

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((i) => { fieldErrors[String(i.path[0])] = i.message; });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSending(true);
    const subject = encodeURIComponent(`Portfolio inquiry from ${result.data.name}`);
    const body = encodeURIComponent(`${result.data.message}\n\n— ${result.data.name} (${result.data.email})`);
    window.location.href = `mailto:k.dorianbenjamin@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      toast.success("Opening your email client…");
      setSending(false);
      setForm({ name: "", email: "", message: "" });
    }, 400);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something."
          description="Open to full-time, contract, and freelance opportunities. I usually reply within a day."
        />
        <div className="grid lg:grid-cols-5 gap-6">
          <Card className="lg:col-span-2 p-6 shadow-card border-border/50 space-y-5">
            {contacts.map((c) => {
              const inner = (
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <c.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    <div className="font-medium">{c.value}</div>
                  </div>
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-smooth">
                  {inner}
                </a>
              ) : (
                <div key={c.label}>{inner}</div>
              );
            })}
            <div className="flex gap-2 pt-4 border-t border-border/50">
              <a href="https://www.linkedin.com/in/kevaughn-benjamin-6148b430b" target="_blank" rel="noopener noreferrer"
                 aria-label="LinkedIn" className="p-2.5 rounded-full bg-muted hover:text-primary transition-smooth">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                 aria-label="GitHub" className="p-2.5 rounded-full bg-muted hover:text-primary transition-smooth">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </Card>

          <Card className="lg:col-span-3 p-6 shadow-card border-border/50">
            <form onSubmit={submit} className="space-y-4" noValidate>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" value={form.name} maxLength={100}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} />
                  {errors.name && <p id="name-err" className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={form.email} maxLength={255}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} />
                  {errors.email && <p id="email-err" className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={6} value={form.message} maxLength={1000}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} />
                {errors.message && <p id="message-err" className="text-xs text-destructive mt-1">{errors.message}</p>}
                <p className="text-xs text-muted-foreground mt-1 text-right">{form.message.length}/1000</p>
              </div>
              <Button type="submit" disabled={sending} size="lg" className="w-full gradient-primary text-primary-foreground border-0 shadow-elegant hover:shadow-glow transition-smooth">
                <Send className="h-4 w-4 mr-2" />
                {sending ? "Sending…" : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
