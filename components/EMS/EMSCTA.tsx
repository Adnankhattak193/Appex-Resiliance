import React from "react";
import { Button } from "../Button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const EMSCTA: React.FC = () => {
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
            Emergency Medical <br />
            Services
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Button
              variant="accent"
              className="px-10 py-5 rounded-full font-bold uppercase tracking-wider shadow-lg hover:shadow-accent/40 transition-all flex items-center gap-3"
            >
              Initiate EMS System Assessment <ArrowRight size={20} />
            </Button>
            <button className="px-10 py-5 rounded-full font-bold uppercase tracking-wider border border-white/20 text-white hover:bg-white/5 transition-all">
              Explore Full National Architecture
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
