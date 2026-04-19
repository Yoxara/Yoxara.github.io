import { motion } from "framer-motion";
import { Mail, Github, Linkedin, BookMarked } from "lucide-react";

const socials = [
  { icon: Mail, label: "Email", href: "mailto:yoxara@lpthe.jussieu.fr" },
  { icon: BookMarked, label: "INSPIRE", href: "https://inspirehep.net/authors/1785072" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
];

export const Contact = () => {
  return (
    <section id="contact" className="relative py-32 scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-3xl mx-auto text-center glow-card rounded-3xl p-10 md:p-16 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-radial opacity-60" />
          <div className="relative">
            <div className="text-sm font-mono uppercase tracking-widest text-primary mb-3">// Contact</div>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Let's <span className="text-gradient">collaborate</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Whether it's a research idea, a paper to discuss, or just a curious question —
              feel free to reach out.
            </p>

            <a
              href="mailto:yoxara@lpthe.jussieu.fr"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-cosmos text-primary-foreground font-semibold shadow-[0_15px_50px_-15px_hsl(290_95%_65%/0.7)] hover:scale-105 transition-transform mb-10"
            >
              <Mail className="w-5 h-5" />
              yoxara@lpthe.jussieu.fr
            </a>

            <div className="flex items-center justify-center gap-3 flex-wrap">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-12 h-12 rounded-full border border-border bg-card/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:scale-110 transition-all"
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <footer className="container mx-auto px-6 mt-24 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Yoxara S. Villamizar · Built with curiosity & ⚛️
        </p>
      </footer>
    </section>
  );
};
