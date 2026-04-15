import React from "react";
import { Button } from "../Button";
import { ArrowRight, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { TrainingHeader } from "@/Public/images/Headers/SubHeaders/SubHeader";
export const TrainingSimulationHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Background Overlay */}
      {/* Mobile image – visible below 760px */}
      <div className="min-[760px]:hidden relative h-[280px]">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${TrainingHeader})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-primary/95" />
      </div>

      {/* Desktop background – hidden below 760px */}
      <div className="absolute inset-0 z-0 hidden min-[760px]:block">
        <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(to_right,rgba(5,29,66,1)_0%,rgba(5,29,66,0.8)_18%,rgba(5,29,66,0.35)_32%,rgba(5,29,66,0.1)_45%,rgba(5,29,66,0.02)_55%,transparent_65%)]" />
        <div className="absolute inset-0 opacity-60 mix-blend-overlay">
          {/* Abstract pattern or very muted visual */}
          <div
            className="absolute inset-0 bg-top md:bg-center bg-contain md:bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${TrainingHeader})` }}
          ></div>
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-6 w-full min-[760px]:min-h-[95vh] min-[760px]:grid min-[760px]:grid-cols-2 gap-12 min-[760px]:items-center pt-8 min-[760px]:pt-24 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/30 border border-secondary/50 text-accent text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-5 sm:mb-6">
            <Activity size={12} />
            <span>Training & Simulation Systems</span>
          </div>

          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-5 sm:mb-6 leading-[1.05]">
            <span> Training </span> <br />
            <span className="text-accent text-3xl sm:text-4xl underline decoration-accent/30 underline-offset-8">
              Simulation Systems
            </span>{" "}
          </h1>

          <h2 className="text-white/80 text-lg md:text-xl font-medium mb-8 max-w-xl leading-relaxed">
            National & Regional RUAAP Architecture
          </h2>

          <p className="text-gray-300 text-base sm:text-lg mb-10 max-w-2xl leading-relaxed font-light">
            ApexResilience designs and delivers immersive, scenario-based
            training ecosystems that prepare responders for real-world
            emergencies across EMS, Fire & Rescue, and Command & Control.
            Through simulation labs, field drills, and instructor development,
            we build measurable capability—not just knowledge—aligned with
            operational realities and national response frameworks.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              variant="accent"
              className="px-8 py-4 rounded-full font-bold uppercase tracking-wider shadow-lg hover:shadow-accent/20 transition-all"
            >
              Request RUAAP Architecture Consultation
            </Button>
            <button className="px-8 py-4 rounded-full font-bold uppercase tracking-wider border border-white/20 text-white hover:bg-white/5 transition-all">
              View Integrated Response Model
            </button>
          </div>
        </motion.div>

        {/* Right side: Architectural Grid Visual */}
        <div className="hidden min-[760px]:block relative h-[500px]">
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

          {/* Subtle tech elements */}
          <div className="absolute top-1/4 right-1/4 w-32 h-[1px] bg-accent/20"></div>
          <div className="absolute bottom-1/4 left-1/4 w-32 h-[1px] bg-accent/20"></div>
          <div className="absolute top-1/4 left-1/2 w-[1px] h-32 bg-accent/20"></div>
        </div>
      </div>

      {/* Subtle Curved Divider */}
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
