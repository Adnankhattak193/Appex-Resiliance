import React from "react";
import { Button } from "../Button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const HospitalInfraCTA: React.FC = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background visual */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        ></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-secondary/30 backdrop-blur-sm p-12 md:p-20 rounded-[3rem] border border-white/10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-4xl md:text-5xl font-bold mb-6"
          >
            Hospital Infrastructure & <br /> Medical Equipment
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-xl mb-12"
          >
            ApexResilience International
          </motion.p>
        </div>
      </div>
    </section>
  );
};
