import { motion } from "framer-motion";
import { Sparkles, Atom, Telescope, Lightbulb } from "lucide-react";

const concepts = [
  {
    icon: Atom,
    emoji: "⚛️",
    title: "What is the Standard Model?",
    desc: "It's our best 'periodic table' of particles — quarks, leptons, and the forces between them. But it leaves out gravity, dark matter, neutrino masses... so we know it's incomplete.",
    color: "from-primary/30 to-primary/0",
  },
  {
    icon: Telescope,
    emoji: "🌌",
    title: "Why dark matter?",
    desc: "85% of the matter in the universe is invisible. We see its gravitational effects on galaxies but we don't know what it's made of. Finding it would rewrite physics.",
    color: "from-secondary/30 to-secondary/0",
  },
  {
    icon: Sparkles,
    emoji: "💥",
    title: "What happens at the LHC?",
    desc: "We smash protons at near light speed and watch what comes out. Each collision is a tiny Big Bang where new particles can briefly appear.",
    color: "from-accent/30 to-accent/0",
  },
  {
    icon: Lightbulb,
    emoji: "🧠",
    title: "Why 'Beyond the Standard Model'?",
    desc: "BSM physics explores what lies past our current theories — supersymmetry, extra Higgs bosons, hidden sectors. The frontier where unanswered questions live.",
    color: "from-primary/30 to-secondary/0",
  },
];

export const Outreach = () => {
  return (
    <section id="outreach" className="relative py-32 scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="text-sm font-mono uppercase tracking-widest text-primary mb-3">// Outreach · Didactic</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Physics, <span className="text-gradient">explained simply</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Big questions deserve clear answers. Here are some core ideas behind my research — no equations required.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {concepts.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="glow-card rounded-3xl p-8 relative overflow-hidden group"
            >
              <div className={`absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br ${c.color} blur-3xl group-hover:scale-150 transition-transform duration-700`} />
              <div className="relative">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    {c.emoji}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-bold mb-1">{c.title}</h3>
                    <div className="h-0.5 w-12 bg-cosmos rounded-full" />
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Fun fact strip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 glow-card rounded-2xl p-6 md:p-8 flex items-center gap-5 flex-col md:flex-row text-center md:text-left"
        >
          <div className="text-6xl animate-float">🪐</div>
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-secondary mb-1">Did you know?</div>
            <p className="text-foreground">
              Every second, about <strong className="text-gradient">10 billion neutrinos from the Sun</strong> pass through every square centimeter of your body — and you don't feel a thing.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
