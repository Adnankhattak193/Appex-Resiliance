import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert } from "lucide-react";

export const FireRescueStrategy: React.FC = () => {
  return (
    <section className="py-24 bg-base overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="flex items-center gap-3 text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-6">
              <div className="w-8 h-[1px] bg-secondary/30"></div>
              SAFETY ARCHITECTURE
            </div>

            <h2 className="text-primary text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Risk-Engineered Protection Systems
            </h2>

            <div className="space-y-6 text-textSecondary text-lg leading-relaxed max-w-xl">
              <p>
                Rapid urbanization, vertical construction growth, industrial
                expansion, and informal settlement density are increasing fire
                risk exposure across emerging economies.
              </p>

              <p>
                ApexResilience transforms Fire & Rescue from equipment-focused
                procurement into a comprehensive national fire protection
                system. This ensures readiness, resilience, and measurable
                performance at city, regional, and national levels.
                ApexResilience design and implement modern, risk-based Fire &
                Rescue architectures integrated within national emergency
                command systems. The approach combines Fleet modernization,
                Operational doctrine, Training & certification, Risk mapping and
                institutional governance alignment
              </p>
            </div>
          </motion.div>

          {/* Right: Institutional Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="relative"
          >
            <div className="bg-white p-10 md:p-12 rounded-[2rem] shadow-depth border border-primary/5 relative z-10">
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8">
                <ShieldAlert className="text-primary" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-primary mb-6">
                Operational Outcomes :
              </h3>

              <ul className="space-y-4">
                {[
                  "Faster and safer fire suppression",
                  "High-rise response capability",
                  "Reduced property and life loss",
                  "Improved responder safety",
                  "Data-driven deployment efficiency",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-textSecondary group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 transition-transform group-hover:scale-125"></div>
                    <span className="text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-10 border-t border-primary/5">
                <p className="text-sm font-bold text-primary/40 uppercase tracking-widest">
                  System principle: Civil protection must be engineered—never
                  improvised.
                </p>
              </div>
            </div>

            {/* Background decorative element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-secondary/5 rounded-[2rem] -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
