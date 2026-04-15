import React from "react";
import { Button } from "../Button";
import { Activity } from "lucide-react";
import { motion } from "framer-motion";
import { DisasterPreparednessHeader } from "@/Public/images/Headers/SubHeaders/SubHeader";

export const DisasterHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Mobile top image */}
      <div className="relative h-[260px] sm:h-[320px] md:h-[380px] lg:hidden">
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${DisasterPreparednessHeader})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,29,66,0.25)_0%,rgba(5,29,66,0.45)_45%,rgba(5,29,66,0.95)_100%)]" />
      </div>

      {/* Desktop background */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${DisasterPreparednessHeader})` }}
        />
        <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(to_right,rgba(5,29,66,0.95)_0%,rgba(5,29,66,0.8)_22%,rgba(5,29,66,0.35)_42%,rgba(5,29,66,0.12)_60%,transparent_78%)]" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-6 w-full lg:min-h-[95vh] lg:grid lg:grid-cols-2 gap-12 items-center pt-8 sm:pt-10 lg:pt-24 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/30 border border-secondary/50 text-accent text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-5 sm:mb-6">
            <Activity size={12} />
            <span>Operational Architecture</span>
          </div>

          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-5 sm:mb-6 leading-[1.05]">
            <span>Disaster Preparedness & Prevention</span>
            <br />
            <span className="text-accent text-3xl sm:text-4xl underline decoration-accent/30 underline-offset-8">
              Resilience Before Crisis
            </span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg mb-10 max-w-2xl leading-relaxed font-light">
            Disaster Preparedness & Prevention transforms risk awareness into
            structured national readiness. It aligns hazard identification,
            policy frameworks, institutional coordination, and sustainable
            planning to reduce loss before disasters strike. ApexResilience
            embeds preparedness within governance systems—turning reactive
            response models into proactive resilience architecture.
            <br />
            <span className="font-bold mt-6 block">
              Prevent risk. Protect futures.
            </span>
          </p>
        </motion.div>

        {/* Right side: Architectural Grid Visual */}
        <div className="hidden lg:block relative h-[500px]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute inset-0 border-[1px] border-white/5 grid grid-cols-8 grid-rows-8 pointer-events-none"
          >
            {[...Array(64)].map((_, i) => (
              <div key={i} className="border-[0.5px] border-white/5"></div>
            ))}
          </motion.div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]"></div>

          <div className="absolute top-1/4 right-1/4 w-32 h-[1px] bg-accent/20"></div>
          <div className="absolute bottom-1/4 left-1/4 w-32 h-[1px] bg-accent/20"></div>
          <div className="absolute top-1/4 left-1/2 w-[1px] h-32 bg-accent/20"></div>
        </div>
      </div>

      {/* Subtle Curved Divider - unchanged */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="#F5F7FA"
          ></path>
        </svg>
      </div>
    </section>
  );
};
