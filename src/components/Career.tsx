import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const career = [
  {
    type: "work",
    period: "2024 — Present",
    role: "Postdoctoral Researcher",
    place: "LPTHE — Sorbonne Université (CNRS)",
    city: "Paris, France",
    desc: "BSM phenomenology and dark matter searches at the LHC. Development of SModelS framework.",
  },
  {
    type: "work",
    period: "2022 — 2024",
    role: "Postdoctoral Researcher",
    place: "Universidade Federal de São Paulo",
    city: "São Paulo, Brazil",
    desc: "Collider phenomenology of 3-3-1 models and extended Higgs sectors.",
  },
  {
    type: "edu",
    period: "2018 — 2022",
    role: "PhD in Physics",
    place: "Universidade de São Paulo (USP)",
    city: "São Paulo, Brazil",
    desc: "Thesis on BSM signatures at the LHC. Beyond the Standard Model frameworks and dark matter candidates.",
  },
  {
    type: "edu",
    period: "2015 — 2017",
    role: "MSc in Physics",
    place: "Universidad Industrial de Santander",
    city: "Bucaramanga, Colombia",
    desc: "Theoretical particle physics — neutrino masses and seesaw mechanisms.",
  },
  {
    type: "edu",
    period: "2009 — 2014",
    role: "BSc in Physics",
    place: "Universidad Industrial de Santander",
    city: "Bucaramanga, Colombia",
    desc: "Foundations in theoretical and experimental physics.",
  },
];

export const Career = () => {
  return (
    <section id="career" className="relative py-32 scroll-mt-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="text-sm font-mono uppercase tracking-widest text-primary mb-3">// Career & Education</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-gradient">journey</span> so far
          </h2>
          <p className="text-muted-foreground text-lg">
            From the Andes of Colombia to the laboratories of Europe — chasing physics across continents.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent" />

          <div className="space-y-8">
            {career.map((c, i) => {
              const Icon = c.type === "work" ? Briefcase : GraduationCap;
              return (
                <motion.div
                  key={c.period}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative pl-20"
                >
                  <div className="absolute left-0 top-2 w-12 h-12 rounded-full bg-cosmos flex items-center justify-center shadow-[0_0_30px_hsl(290_95%_65%/0.4)] ring-4 ring-background">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>

                  <div className="glow-card rounded-2xl p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-cosmos text-primary-foreground font-bold">
                        {c.period}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-wider text-secondary">
                        {c.type === "work" ? "Position" : "Degree"}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold mb-1">{c.role}</h3>
                    <div className="text-foreground font-medium">{c.place}</div>
                    <div className="text-sm text-muted-foreground mb-2">{c.city}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
