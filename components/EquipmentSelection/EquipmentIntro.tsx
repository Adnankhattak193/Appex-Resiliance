import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export const EquipmentIntro: React.FC = () => {
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
            <div className="flex items-center gap-3 text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-6 font-sans">
              <div className="w-8 h-[1px] bg-secondary/30"></div>
              Selection & Installation of Equipment
            </div>

            <h2 className="text-primary text-4xl md:text-5xl font-bold mb-8 leading-tight font-sans">
              Precision. Performance. Reliability.
            </h2>

            <div className="space-y-6 text-textSecondary text-lg leading-relaxed max-w-xl font-light">
              <p>
                The strength of any emergency system lies in the quality and
                suitability of its equipment. ApexResilience supports
                governments and institutions in the structured selection,
                technical evaluation, procurement guidance, and professional
                installation of critical systems—across EMS, Fire & Rescue,
                Disaster Preparedness, Fire Safety, Command & Control,
                simulation training, and hospital infrastructure.
              </p>
              <p>
                Our distinction lies in systems-thinking. We do not recommend
                equipment in isolation; we align every specification with
                operational doctrine, risk profile, budget sustainability, and
                long-term scalability—ensuring performance today and resilience
                for decades ahead.
              </p>
            </div>
          </motion.div>

          {/* Right side: Operational Impact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-10 md:p-12 rounded-[2rem] shadow-depth border border-primary/5"
          >
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8">
              <ShieldCheck className="text-primary" size={32} />
            </div>

            <h3 className="text-2xl font-bold text-primary mb-6 font-sans">
              Operational Impact
            </h3>

            <ul className="space-y-4">
              {[
                "Optimized equipment performance",
                "Reduced lifecycle and maintenance costs",
                "Seamless integration with existing infrastructure",
                "Improved responder efficiency and safety standards",
                "Sustainable, scalable system readiness",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 text-textSecondary"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5"></div>
                  <span className="text-lg font-medium font-sans">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
