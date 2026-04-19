import { motion } from "framer-motion";
import darkMatter from "@/assets/dark-matter.png";
import collider from "@/assets/collider.png";
import feynman from "@/assets/feynman.png";

const items = [
  {
    img: darkMatter,
    title: "Dark Matter & LHC",
    desc: "Constraint analysis of full BSM models at the LHC, leveraging SModelS and MadGraph frameworks to test what hides in plain sight.",
    tags: ["SModelS", "MadGraph", "MadDM"],
  },
  {
    img: collider,
    title: "BSM Models",
    desc: "Development and exploration of 3-3-1, 2HDM, and seesaw frameworks — with a special focus on collider signatures and phenomenology.",
    tags: ["3-3-1", "2HDM", "Seesaw"],
  },
  {
    img: feynman,
    title: "Computational Tools",
    desc: "Python, LaTeX, SARAH, FeynRules, Delphes and the full simulation pipeline — turning theory into testable predictions.",
    tags: ["SARAH", "FeynRules", "Delphes"],
  },
];

export const Research = () => {
  return (
    <section id="research" className="relative py-32 scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="text-sm font-mono uppercase tracking-widest text-primary mb-3">// Research</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            What I <span className="text-gradient">work on</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Three intertwined directions where theory meets experiment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="glow-card rounded-3xl p-7 group relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-700" />
              <div className="relative">
                <div className="w-24 h-24 mb-5 flex items-center justify-center">
                  <img
                    src={it.img}
                    alt={it.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">{it.title}</h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">{it.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {it.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
