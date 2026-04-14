import React from "react";
import { motion } from "framer-motion";
import { Network } from "lucide-react";

export const EMSStrategy: React.FC = () => {
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
              SYSTEM STRUCTURE
            </div>

            <h2 className="text-primary text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Designing EMS as <br />
              National Infrastructure
            </h2>

            <div className="space-y-6 text-textSecondary text-lg leading-relaxed max-w-xl">
              <p>
                EMS must be engineered as a core pillar of national resilience.
                Beyond simple emergency response, a robust medical architecture
                ensures that critical care is scalable, predictable, and
                integrated with the wider national health security framework.
              </p>
              <p>
                Our approach prioritizes{" "}
                <span className="text-primary font-semibold">
                  structured network planning
                </span>{" "}
                and{" "}
                <span className="text-primary font-semibold">
                  risk-based deployment
                </span>{" "}
                to ensure optimal coverage and resource allocation, moving away
                from reactive procurement toward comprehensive system
                architecture.
              </p>
              <p>
                We conduct a detailed feasibility study to design a pilot
                program, recommending optimal Emergency Response Station
                locations, cost-effective fleet and equipment specifications,
                Command & Control structuring, and targeted training
                implementation.
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
                <Network className="text-primary" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-primary mb-6">
                ApexResilience delivers
              </h3>

              <ul className="space-y-4">
                {[
                  "EMS network planning & coverage modeling",
                  "Tiered response deployment models",
                  "Clinical protocols, SOPs & QA frameworks",
                  "Fleet typology & equipment loadouts",
                  "Hospital interface pathways & patient transfer protocols",
                  "Response time KPIs & outcome monitoring",
                  "Integrated dispatch workflows",
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
                  System principle: Medical response must be structured—not
                  reactive.
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
