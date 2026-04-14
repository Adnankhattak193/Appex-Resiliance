import React from "react";
import { motion } from "framer-motion";
import { Network } from "lucide-react";

export const CommandControlIntro: React.FC = () => {
  return (
    <section className="py-24 bg-base overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="flex items-center gap-3 text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-6">
              <div className="w-8 h-[1px] bg-secondary/30"></div>
              SYSTEM STRUCTURE
            </div>

            <h2 className="text-primary text-4xl md:text-5xl font-bold mb-8 leading-tight">
              National Emergency Data Management <br />
            </h2>

            <div className="space-y-6 text-textSecondary text-lg leading-relaxed max-w-xl">
              <p>
                Integrated Command & Control transforms emergency services from
                isolated operational units into a coordinated national response
                ecosystem. This centralized modern communication system unifies
                all civil emergency services under one structured operational
                framework.
              </p>
              <p>
                This ensures that: Field responders act on unified intelligence;
                Decision-makers operate with real-time visibility; Performance
                is measurable and continuously optimized. ApexResilience
                delivers not just dispatch technology — but the architecture for
                structured national emergency governance.
              </p>
              <p className="font-bold">
                This is not a call center. It is a National Civil Emergency
                Management Nerve Center.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-10 md:p-12 rounded-[2rem] shadow-depth border border-primary/5"
          >
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8">
              <Network className="text-primary" size={32} />
            </div>

            <h3 className="text-2xl font-bold text-primary mb-6">
              Operational Outcomes
            </h3>

            <ul className="space-y-4">
              {[
                "Unified multi-agency coordination",
                " Reduced dispatch-to-scene time",
                "Transparent operational accountability",
                "Data-backed decision support",
                " Improved crisis escalation management",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 text-textSecondary"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5"></div>
                  <span className="text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
