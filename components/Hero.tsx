import React, { useState, useEffect } from "react";
import { Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SliderA,
  SliderB,
  SliderC,
  SliderD,
  SliderE,
} from "@/Public/images/main/main";

const HERO_IMAGES = [SliderA, SliderB, SliderC, SliderD, SliderE];

export const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Mobile slider image – visible below 760px */}
      <div className="min-[760px]:hidden relative h-[280px] bg-primary overflow-hidden">
        <AnimatePresence>
          <motion.img
            key={`mobile-${currentImageIndex}`}
            src={HERO_IMAGES[currentImageIndex]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.9, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            alt="Infrastructure Background"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-primary/95" />
      </div>

      {/* Desktop slider background – hidden below 760px */}
      <div className="absolute inset-0 z-0 bg-primary hidden min-[760px]:block">
        <AnimatePresence>
          <motion.img
            key={`desktop-${currentImageIndex}`}
            src={HERO_IMAGES[currentImageIndex]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.85, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            alt="Infrastructure Background"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>
        {/* Strong gradient overlay to protect text on left */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(to_right,rgba(5,29,66,1)_0%,rgba(5,29,66,0.8)_18%,rgba(5,29,66,0.35)_32%,rgba(5,29,66,0.1)_45%,rgba(5,29,66,0.02)_55%,transparent_65%)]" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-6 w-full min-[760px]:min-h-screen min-[760px]:grid min-[760px]:grid-cols-2 gap-12 min-[760px]:items-center pt-8 min-[760px]:pt-20 pb-16 min-[760px]:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/30 border border-secondary/50 text-accent text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-5 sm:mb-6">
            <Shield size={12} />
            <span>Institutional Resilience</span>
          </div>

          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-5 sm:mb-6 leading-[1.05]">
            ApexResilience{" "}
            <span className="text-accent text-3xl sm:text-4xl underline decoration-accent/30 underline-offset-8">
              International
            </span>
          </h1>

          <h2 className="text-white/60 text-xl font-medium mb-8 max-w-xl leading-relaxed">
            Resilience by Design
          </h2>
        </motion.div>

        {/* Decorative architectural grid element – desktop only */}
        <div className="hidden min-[760px]:block relative h-full min-h-[400px]">
          <div className="absolute inset-0 border-[1px] border-white/5 grid grid-cols-6 grid-rows-6 pointer-events-none">
            {[...Array(36)].map((_, i) => (
              <div key={i} className="border-[0.5px] border-white/5"></div>
            ))}
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-[100px]"></div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="relative z-30 flex justify-center gap-3 pb-6 min-[760px]:absolute min-[760px]:bottom-28 min-[760px]:left-1/2 min-[760px]:-translate-x-1/2 min-[760px]:pb-0">
        {HERO_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImageIndex(idx)}
            className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
              currentImageIndex === idx
                ? "w-8 bg-accent"
                : "w-2 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Subtle Curved Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[80px] text-[#F5F7FA]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  );
};
