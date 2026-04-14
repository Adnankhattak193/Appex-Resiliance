import React from "react";
import { motion } from "framer-motion";

export const SystemArchitectureWhyItMatters: React.FC = () => {
  return (
    <section className="py-24 bg-[#0F2B46] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Why System Architecture & Deployment Models Matter
          </h2>
          <div className="w-24 h-1 bg-accent mb-8 "></div>

          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Without architecture, expansion creates fragmentation. With
              architecture, expansion creates strength.
            </p>
            <p>
              Structured deployment prevents resource duplication, strengthens
              accountability, and ensures interoperability between agencies and
              regions.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative background visual */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>
      </div>
    </section>
  );
};
