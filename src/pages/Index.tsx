import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Research } from "@/components/Research";
import { Outreach } from "@/components/Outreach";
import { Publications } from "@/components/Publications";
import { Skills } from "@/components/Skills";
import { Career } from "@/components/Career";
import { Awards } from "@/components/Awards";
import { Talks } from "@/components/Talks";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Research />
      <Outreach />
      <Publications />
      <Skills />
      <Career />
      <Awards />
      <Talks />
      <Contact />
    </main>
  );
};

export default Index;
