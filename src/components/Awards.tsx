import { motion } from "framer-motion";
import { Award, Star, Trophy } from "lucide-react";

const awards = [
  {
    icon: Trophy,
    year: "2024",
    title: "CNRS Postdoctoral Fellowship",
    org: "Centre National de la Recherche Scientifique",
  },
  {
    icon: Award,
    year: "2022",
    title: "FAPESP Doctoral Grant",
    org: "São Paulo Research Foundation",
  },
  {
    icon: Star,
    year: "2021",
    title: "Best Student Talk Award",
    org: "Latin American Workshop on High Energy Physics",
  },
  {
    icon: Award,
    year: "2018",
    title: "CAPES PhD Scholarship",
    org: "Brazilian Ministry of Education",
  },
];

export const Awards = () => {
  return (
    <section id="awards" className="relative py-32 scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="text-sm font-mono uppercase tracking-widest text-primary mb-3">// Awards & Grants</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Recognition & <span className="text-gradient">funding</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {awards.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glow-card rounded-2xl p-6 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-cosmos mx-auto mb-4 flex items-center justify-center shadow-[0_8px_30px_-10px_hsl(290_95%_65%/0.6)]">
                <a.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-xs font-mono text-secondary mb-2">{a.year}</div>
              <h3 className="font-display text-base font-bold mb-2 leading-snug">{a.title}</h3>
              <p className="text-xs text-muted-foreground">{a.org}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
