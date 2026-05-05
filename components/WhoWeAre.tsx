import React from "react";
import { Button } from "./Button";
import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Target } from "lucide-react";
import { main3, main4 } from "@/Public/images/main/main";

export const WhoWeAre: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Right: Text Content */}
        <div className="lg:pr-10 mt-12 lg:mt-0">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="text-accent" size={20} />
            <span className="text-secondary font-bold uppercase tracking-widest text-sm">
              Amazing Solution
            </span>
          </div>

          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <h2 className="text-primary text-4xl md:text-5xl font-bold mb-8 leading-tight">
              <span className="text-accent">RUAAP</span>
              <br />A Breakthrough
            </h2>

            <div className="space-y-6 text-textSecondary text-lg leading-relaxed max-w-xl">
              <p>
                A breakthrough in cost-effective urban emergency response; 6
                Tri-Wheel Ambulances for the cost of one conventional ambulance.
                The Rapid Urban Ambulance Access Program (RUAAP) combines
                Tri-Wheel Ambulances and EMS Motorbikes to deliver speed, deep
                access, and rapid deployment across Africa’s most congested
                cities. ApexResilience engineers scalable, government-owned EMS
                systems that are economical, quickly deployable, and
                operationally transformative.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Left: Collage Images */}
        <div className="relative">
          {/* Main Image */}
          <div className="w-[85%] rounded-[2rem] overflow-hidden shadow-xl border-8 border-white">
            <img
              src={main3}
              alt="Team planning"
              className="w-full h-auto object-cover hover:grayscale-0 transition-all duration-500"
              loading="lazy"
            />
          </div>

          {/* Overlapping Secondary Image */}
          <div className="absolute -bottom-12 -right-4 w-[55%] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
            <img
              src={main4}
              alt="Engineer"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute top-10 right-0 bg-accent text-white p-6 rounded-2xl shadow-lg animate-bounce duration-[3000ms]">
            <Target size={32} className="mb-2" />
            <div className="font-bold text-2xl">Speed</div>
            <div className="text-sm font-medium">
              Access
              <br />
              Impact
            </div>
          </div>
        </div>

        {/* Minimal thin divider line */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl border-t border-metallic/30"></div>
      </div>
    </section>
  );
};
