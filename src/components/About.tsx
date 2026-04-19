import { motion } from "framer-motion";
import { GraduationCap, MapPin, Atom, Quote } from "lucide-react";
import avatar from "@/assets/avatar.png";

export const About = () => {
  return (
    <section id="about" className="relative py-32 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 relative"
          >
            <div className="relative w-64 h-64 mx-auto md:mx-0">
              <div className="absolute inset-0 bg-cosmos rounded-full blur-3xl opacity-50 animate-pulse-glow" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-border bg-card">
                <img src={avatar} alt="Yoxara Sánchez Villamizar" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="absolute top-1/2 left-1/2 w-4 h-4 -ml-2 -mt-2 bg-secondary rounded-full animate-orbit shadow-[0_0_20px_hsl(195_100%_60%)]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-3"
          >
            <div className="text-sm font-mono uppercase tracking-widest text-primary mb-3">// About me</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Hi, I'm <span className="text-gradient">Yoxara</span> 👋
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              I'm a postdoctoral researcher at <strong className="text-foreground">LPTHE — Sorbonne Université (CNRS)</strong>,
              working at the intersection of <strong className="text-foreground">collider physics</strong> and{" "}
              <strong className="text-foreground">dark matter phenomenology</strong>. My work focuses on probing what lies
              beyond the Standard Model — the universe still has plenty of secrets to share.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I love bridging <strong className="text-foreground">theory and experiment</strong>: building models, simulating
              signals at the LHC, and confronting them with real data. When I'm not chasing new particles, I enjoy
              teaching, mentoring students and making science accessible to everyone.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Badge icon={<MapPin className="w-3.5 h-3.5" />} label="Paris, France" />
              <Badge icon={<GraduationCap className="w-3.5 h-3.5" />} label="PhD in Physics" />
              <Badge icon={<Atom className="w-3.5 h-3.5" />} label="BSM Theorist" />
            </div>

            <div className="glow-card rounded-2xl p-6 relative">
              <Quote className="absolute -top-3 -left-3 w-8 h-8 text-primary bg-background rounded-full p-1.5 border border-border" />
              <p className="italic text-muted-foreground leading-relaxed">
                "If we knew what it was we were doing, it would not be called research, would it?"
              </p>
              <p className="mt-3 text-sm font-mono text-primary">— Albert Einstein</p>
            </div>
          </motion.div>
        </div>

        {/* Quick stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
        >
          {[
            { v: "5+", l: "Years of Research" },
            { v: "10+", l: "Publications" },
            { v: "15+", l: "International Talks" },
            { v: "3", l: "Countries Lived In" },
          ].map((s) => (
            <div key={s.l} className="glow-card rounded-2xl p-6 text-center">
              <div className="font-display text-4xl font-bold text-gradient mb-2">{s.v}</div>
              <div className="text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Badge = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/60 text-sm text-muted-foreground">
    <span className="text-primary">{icon}</span>
    {label}
  </span>
);
