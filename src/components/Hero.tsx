import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-cosmos.jpg";
import { ParticleField } from "./ParticleField";

export const Hero = () => {
  return (
    <header id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Cosmic galaxy background with particle collision streaks"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <ParticleField />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur text-sm text-muted-foreground mb-6"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          Postdoctoral Researcher · LPTHE — Sorbonne (CNRS)
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[0.95] mb-6"
        >
          Exploring physics
          <br />
          <span className="text-gradient">beyond the standard.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10"
        >
          Dark matter, colliders & theoretical physics — chasing the missing pieces of the universe,
          one collision at a time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#research"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-cosmos text-primary-foreground font-semibold shadow-[0_10px_40px_-10px_hsl(290_95%_65%/0.6)] hover:scale-105 transition-transform"
          >
            Explore my research
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#publications"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border bg-card/50 backdrop-blur font-semibold hover:bg-muted/60 transition-colors"
          >
            View publications
          </a>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {[
            { v: "BSM", l: "Frameworks" },
            { v: "LHC", l: "Phenomenology" },
            { v: "DM", l: "Dark Matter" },
          ].map((s) => (
            <div key={s.l} className="glow-card rounded-2xl p-4">
              <div className="font-display text-2xl font-bold text-gradient">{s.v}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/40 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </header>
  );
};
