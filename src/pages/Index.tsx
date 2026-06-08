import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Education, Certifications } from "@/components/sections/Education";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";
import { ScrollTop } from "@/components/ScrollTop";
import { Footer } from "@/components/Footer";

const Index = () => (
  <div className="min-h-dvh bg-background">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Resume />
      <Contact />
    </main>
    <Footer />
    <ScrollTop />
  </div>
);

export default Index;
