import React from "react";
import { motion } from "framer-motion";
import { Network } from "lucide-react";

export const TrainingSimulationStrategy: React.FC = () => {
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
              Building Human <br />
              <span className="text-accent underline decoration-accent/30 underline-offset-8 text-4xl">
                Capability
              </span>
            </h2>

            <div className="space-y-6 text-textSecondary text-lg leading-relaxed max-w-xl">
              <p>
                Effective emergency systems are built on people, not equipment.
                Continuous training and structured capacity building ensure
                responders act with clarity, coordination, and confidence under
                pressure—turning critical moments into controlled outcomes.
              </p>
              <p>
                ApexResilience brings global-standard methodologies,
                simulation-driven learning, and trainer certification models
                that institutionalize capability, not dependency. We develop
                skilled responders, capable leaders, and self-sustaining
                national training ecosystems.
              </p>
              <p className="font-bold">
                Strong systems don’t react—they are prepared to respond.
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
              Operational Advantages
            </h3>

            <ul className="space-y-4">
              {[
                "Faster, coordinated multi-agency response",
                "Skilled responders with decision confidence",
                "Reduced errors in high-risk scenarios",
                "Strong command and control execution",
                "Sustainable, self-reliant training systems",
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
