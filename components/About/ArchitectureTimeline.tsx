import React from "react";
import { motion } from "framer-motion";
import {
  Ambulance,
  Flame,
  Radio,
  ShieldAlert,
  BookOpen,
  PenTool,
  DraftingCompass,
  Settings,
  Truck,
} from "lucide-react";

const nodes = [
  { id: "ems", label: "We design them", icon: PenTool },
  { id: "fire", label: "We architect them", icon: DraftingCompass },
  { id: "dispatch", label: "We structure them.", icon: DraftingCompass },
  { id: "command", label: "We implement them", icon: Settings },
  { id: "training", label: "We transfer them", icon: Truck },
];

export const ArchitectureTimeline: React.FC = () => {
  return (
    <section className="py-24 bg-secondary overflow-hidden relative">
      {/* Subtle architectural grid overlay for the whole section */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-4">
            Integrated Response Architecture
          </h2>
          <p className="text-white/60 text-lg">
            We do not operate emergency services.
          </p>
        </div>

        {/* Horizontal Timeline Container */}
        <div className="relative">
          {/* Main Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-0 w-full h-[2px] bg-white/10 z-0">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-accent/40"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {nodes.map((node, index) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                {/* Node Circle */}
                <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center border-2 border-white/10 group-hover:border-accent transition-all duration-300 relative group-hover:shadow-[0_0_30px_rgba(242,140,40,0.2)]">
                  {/* Active/Hover Highlight */}
                  <div className="absolute inset-0 rounded-full border-4 border-accent opacity-0 group-hover:opacity-100 transition-opacity transform scale-110 group-hover:scale-100 duration-300"></div>

                  <node.icon
                    size={32}
                    className="text-white group-hover:text-accent transition-colors duration-300"
                  />
                </div>

                {/* Label */}
                <div className="mt-6 text-center">
                  <div className="text-white font-bold text-sm uppercase tracking-wider group-hover:text-accent transition-colors duration-300">
                    {node.label}
                  </div>
                </div>

                {/* Vertical line for mobile/tablet layout when it switches from horizontal */}
                <div className="lg:hidden w-[1px] h-8 bg-white/10 mt-4"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
