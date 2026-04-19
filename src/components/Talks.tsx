import { motion } from "framer-motion";
import { Mic, MapPin, Calendar } from "lucide-react";

const talks = [
  {
    year: "2025",
    title: "Exploring BSM Frameworks",
    place: "CERN Workshop",
    type: "Invited Talk",
  },
  {
    year: "2024",
    title: "SModelS v3: Going Beyond Z₂",
    place: "SUSY24 — Madrid",
    type: "Conference Talk",
  },
  {
    year: "2023",
    title: "Beyond Ordinary Matter",
    place: "EPSBF",
    type: "Plenary",
  },
];

export const Talks = () => {
  return (
    <section id="talks" className="relative py-32 scroll-mt-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="text-sm font-mono uppercase tracking-widest text-primary mb-3">// Talks & Posters</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Sharing the <span className="text-gradient">science</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent md:-translate-x-px" />

          <div className="space-y-10">
            {talks.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={`relative flex md:items-center gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-cosmos animate-pulse-glow ring-4 ring-background z-10" />

                <div className="md:w-1/2" />

                <div className="flex-1 ml-16 md:ml-0 md:w-1/2 md:px-8">
                  <div className="glow-card rounded-2xl p-6">
                    <div className="flex items-center gap-2 text-xs font-mono mb-3">
                      <span className="px-2 py-0.5 rounded bg-cosmos text-primary-foreground font-bold flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {t.year}
                      </span>
                      <span className="text-muted-foreground">{t.type}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold mb-2">{t.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5 text-secondary" />
                      {t.place}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center text-muted-foreground flex items-center justify-center gap-2"
        >
          <Mic className="w-4 h-4 text-primary" />
          <span className="text-sm">More talks available on request.</span>
        </motion.div>
      </div>
    </section>
  );
};
