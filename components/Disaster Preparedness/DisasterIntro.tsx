import React from "react";
import { motion } from "framer-motion";
import { Network } from "lucide-react";

export const DisasterIntro: React.FC = () => {
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
              The ApexResilience Preparedness Framework
              <br />
            </h2>

            <div className="space-y-6 text-textSecondary text-lg leading-relaxed max-w-xl">
              <p>
                Disasters should not define national response systems —
                preparation should. Across emerging economies, disaster impact
                is intensified by rapid urban expansion, informal settlement
                growth, climate-related flood and storm exposure, limited hazard
                mapping integration, and weak early warning dissemination
                systems.
              </p>
              <p>
                Without structured preparedness, emergency response becomes
                overwhelmed at scale. Disaster preparedness is not a secondary
                layer — it is the foundation of sustainable emergency
                governance.
              </p>
              <p>
                ApexResilience enables governments to transition from crisis
                reaction to strategic national resilience architecture through
                risk intelligence, structured planning, and institutional
                alignment. Our approach focuses on reducing loss before impact
                occurs.
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
                "Reduced disaster-related mortality",
                "Lower economic loss exposure",
                "Faster recovery timelines",
                "Structured inter-agency coordination",
                "Improved public trust and resilience",
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
