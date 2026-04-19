import { motion } from "framer-motion";
import { Code2, FlaskConical, Languages, BookOpen } from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Programming",
    items: ["Python", "C++", "Bash", "Mathematica", "LaTeX", "Git"],
  },
  {
    icon: FlaskConical,
    title: "Physics Tools",
    items: ["MadGraph", "SARAH", "FeynRules", "SModelS", "MadDM", "Delphes", "Pythia", "micrOMEGAs"],
  },
  {
    icon: BookOpen,
    title: "Topics",
    items: ["BSM Phenomenology", "Dark Matter", "Collider Physics", "Higgs Sector", "Neutrino Masses", "Effective Theories"],
  },
  {
    icon: Languages,
    title: "Languages",
    items: ["Spanish (native)", "English (fluent)", "French (intermediate)", "Portuguese (basic)"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="relative py-32 scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="text-sm font-mono uppercase tracking-widest text-primary mb-3">// Skills & Tools</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-gradient">toolkit</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From writing Lagrangians to running event generators — the everyday tools of theoretical phenomenology.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glow-card rounded-3xl p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-cosmos flex items-center justify-center mb-4 shadow-[0_8px_30px_-10px_hsl(290_95%_65%/0.6)]">
                <g.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold mb-4">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2.5 py-1.5 rounded-md bg-muted text-foreground border border-border hover:border-primary hover:text-primary transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
