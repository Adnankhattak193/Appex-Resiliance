import React from "react";
import { motion } from "framer-motion";

export const EquipmentEnding: React.FC = () => {
  return (
    <section className="py-24 bg-base overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image Placeholder Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-depth">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Engineered Readiness"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] transition-all hover:backdrop-blur-none" />
            </div>
            {/* Visual Decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-[60px]" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary text-4xl md:text-5xl font-bold mb-8 leading-tight font-sans">
              Engineered Readiness
            </h2>

            <div className="space-y-6 text-textSecondary text-lg mb-10 leading-relaxed font-light">
              <p>
                The right equipment is not a purchase decision—it is a strategic
                investment in safety, performance, and institutional strength.
                ApexResilience ensures every selection, installation, and
                training phase aligns with operational reality and long-term
                resilience goals.
              </p>
              <p>
                We transform technical specifications into measurable
                capability.
              </p>
            </div>

            <div className="relative pl-8 py-4">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-accent rounded-full" />
              <p className="text-xl font-bold text-primary italic font-sans leading-relaxed">
                Because systems only perform when every component is
                purpose-built.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
