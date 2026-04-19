import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "about", label: "About" },
  { id: "research", label: "Research" },
  { id: "outreach", label: "Outreach" },
  { id: "publications", label: "Publications" },
  { id: "career", label: "Career" },
  { id: "talks", label: "Talks" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let current = "about";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && window.scrollY >= el.offsetTop - 120) current = s.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-xl bg-background/70 border-b border-border" : "py-5"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-cosmos animate-pulse-glow flex items-center justify-center font-display font-bold text-primary-foreground">
            Y
          </div>
          <span className="font-display font-semibold tracking-tight hidden sm:block">
            Yoxara <span className="text-gradient">Sánchez</span>
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-1 p-1 rounded-full bg-muted/40 border border-border">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className={`nav-pill ${active === s.id ? "active" : ""}`}>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden sm:inline-flex px-5 py-2 rounded-full bg-cosmos text-primary-foreground font-medium text-sm hover:scale-105 transition-transform"
        >
          Get in touch
        </a>
      </nav>
    </motion.header>
  );
};
