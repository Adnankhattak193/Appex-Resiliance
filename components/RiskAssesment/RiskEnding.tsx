import React from "react";
import { motion } from "framer-motion";
import { FireGovernance6 } from "../../Public/images/services/FireGovernance/FireGovernance";

export const RiskEnding: React.FC = () => {
  return (
    <section className="py-24 bg-base overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-depth">
              <img
                src={FireGovernance6}
                alt="Strategic Safety Operations"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            <h2 className="text-primary text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Safer Foundations
            </h2>

            <div className="space-y-6 text-textSecondary text-lg mb-10 leading-relaxed">
              <p>
                Fire safety is not an accessory to development — it is a
                prerequisite for stability, investment, and public confidence.
                ApexResilience integrates prevention, compliance, engineering
                discipline, and institutional accountability into one coherent
                fire risk governance framework.
              </p>
              <p>
                We help governments and institutions move from fragmented
                enforcement to structured protection — building safer cities
                with clarity and responsibility.
              </p>
            </div>

            {/* Quote Block */}
            <div className="relative pl-8 py-2">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-full"></div>
              <blockquote className="bg-base/50 p-6 rounded-2xl border border-primary/5">
                <p className="text-primary font-bold text-xl italic leading-relaxed">
                  Build Safety. Protect Futures.
                </p>
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
