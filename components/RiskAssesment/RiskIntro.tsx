import React from "react";
import { motion } from "framer-motion";
import { Network } from "lucide-react";

export const RiskIntro: React.FC = () => {
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
              Structured Fire Governance
              <br />
            </h2>

            <div className="space-y-6 text-textSecondary text-lg leading-relaxed max-w-xl">
              <p>
                ApexResilience delivers a modern, governance-based approach to
                Fire Safety & Risk Management — structured, standards-driven,
                and implementation-focused. We align international codes with
                national legislation, urban realities, and institutional
                capacity to build systems that are both compliant and practical.
              </p>
              <p>
                ApexResilience delivers a modern, governance-based approach to
                Fire Safety & Risk Management — structured, standards-driven,
                and implementation-focused. We align international codes with
                national legislation, urban realities, and institutional
                capacity to build systems that are both compliant and practical.
              </p>
              <p>
                With speed, responsibility, and long-term institutional
                commitment, we build accountable fire safety ecosystems that
                endure.
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
                "Reduced structural fire incidence",
                "Improved compliance rates",
                "Stronger inspection enforcement",
                "Lower high-rise vulnerability",
                "Institutional accountability in safety governance",
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
