import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { ArrowRight, Shield } from "lucide-react";
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
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary">
      {/* Background with subtle overlay */}
      <div className="absolute inset-0 z-0 bg-primary">
        {/* The images slider, positioned under the gradient because of z-index */}
        <AnimatePresence>
          <motion.img
            key={currentImageIndex}
            src={HERO_IMAGES[currentImageIndex]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.85, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            alt="Infrastructure Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Strong Gradient Overlay over the images to protect text on the left */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(to_right,rgba(5,29,66,1)_0%,rgba(5,29,66,0.8)_18%,rgba(5,29,66,0.35)_32%,rgba(5,29,66,0.1)_45%,rgba(5,29,66,0.02)_55%,transparent_65%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full lg:grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/30 border border-secondary/50 text-accent text-[11px] font-bold uppercase tracking-widest mb-6">
            <Shield size={12} />
            <span>Institutional Resilience</span>
          </div>

          <h1 className="text-white text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
            ApexResilience{" "}
            <span className="text-accent underline decoration-accent/30 underline-offset-8">
              International
            </span>
            <br />
          </h1>

          <h2 className="text-white/60 text-xl font-medium mb-8 max-w-xl leading-relaxed">
            Resilience by Design
          </h2>

          {/* <p className="text-gray-300 text-lg mb-10 max-w-2xl leading-relaxed">
            We build modern response ecosystem -- structured, sustainable, and
            sovereign. Designing emergency architecture that saves lives.
          </p> */}

          {/* <div className="flex flex-wrap gap-4">
            <Button
              variant="accent"
              className="px-8 py-4 rounded-full font-bold uppercase tracking-wider shadow-lg hover:shadow-accent/20 transition-all flex items-center gap-2"
            >
              Explore Our Architecture <ArrowRight size={18} />
            </Button>
            <Button
              variant="outline"
              className="px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-white border-white/20 hover:bg-white/5 transition-all"
            >
              Our Institutional Mandate
            </Button>
          </div> */}
        </motion.div>

        {/* Decorative architectural grid element */}
        <div className="hidden lg:block relative h-full min-h-[400px]">
          <div className="absolute inset-0 border-[1px] border-white/5 grid grid-cols-6 grid-rows-6 pointer-events-none">
            {[...Array(36)].map((_, i) => (
              <div key={i} className="border-[0.5px] border-white/5"></div>
            ))}
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-[100px]"></div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-32 left-6 md:left-1/2 md:-translate-x-1/2 z-20 flex gap-3">
        {HERO_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImageIndex(idx)}
            className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${currentImageIndex === idx ? "w-8 bg-accent" : "w-2 bg-white/30 hover:bg-white/50"}`}
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
