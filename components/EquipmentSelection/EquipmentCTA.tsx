import React from "react";
import { Button } from "../Button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const EquipmentCTA: React.FC = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background visual */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/40 via-primary to-primary" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 font-sans">
            Selection & Installation <br /> of Equipment
          </h2>

          <p className="text-white/60 text-xl mb-12 font-light">
            ApexResilience International
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Button
              variant="accent"
              className="px-10 py-5 rounded-full font-bold uppercase tracking-wider shadow-lg hover:shadow-accent/40 transition-all flex items-center gap-3 font-sans"
            >
              Initiate Strategic Selection <ArrowRight size={20} />
            </Button>
            <button className="px-10 py-5 rounded-full font-bold uppercase tracking-wider border border-white/20 text-white hover:bg-white/5 transition-all font-sans">
              Request Technical Audit
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
