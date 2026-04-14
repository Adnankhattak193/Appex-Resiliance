import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Truck,
  Gavel,
  BookOpen,
  MonitorDot,
  PieChart,
  Target,
  BarChart4,
  MapPin,
  Activity,
} from "lucide-react";

const systemModules = [
  { title: "Infrastructure Architecture", icon: Building2 },
  { title: "Fleet & Access Modeling", icon: Truck },
  { title: "Governance & Legislation", icon: Gavel },
  { title: "Training Standards", icon: BookOpen },
  { title: "Digital Command Systems", icon: MonitorDot },
  { title: "Performance & Financial Analytics", icon: PieChart },
];

const validationIndicators = [
  {
    title: "Geo-Spatial Deployment Mapping",
    description: "Visualizing system reach across urban zones.",
    icon: MapPin,
  },
  {
    title: "Demand-Based Density Modeling",
    description: "Aligning capacity with population requirement.",
    icon: Activity,
  },
  {
    title: "Cost-Efficiency Tracking",
    description: "Measurable financial sustainability modeling.",
    icon: BarChart4,
  },
  {
    title: "Institutional Readiness Index",
    description: "Evaluating governance and leadership capacity.",
    icon: Target,
  },
];

export const SystemArchitectureIntro: React.FC = () => {
  return (
    <section className="py-24 bg-[#F4F6F8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* SECTION HEADER */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold text-[10px] tracking-[0.3em] uppercase mb-4"
          >
            System Architecture
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-primary text-4xl md:text-5xl font-bold mb-6"
          >
            Framework Architecture
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-textSecondary text-lg"
          >
            Integrated pilot deployment under one measurable system model.
          </motion.p>
        </div>

        {/* TOP HALF – SYSTEM FLOW DIAGRAM */}
        <div className="relative mb-24 overflow-x-auto lg:overflow-visible pb-12 lg:pb-0 scrollbar-hide">
          <div className="flex justify-between items-center min-w-[1000px] lg:min-w-0 relative z-10">
            {systemModules.map((module, index) => (
              <React.Fragment key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="w-40 flex-shrink-0"
                >
                  <div className="bg-white border border-primary/20 rounded-xl p-4 shadow-sm relative pt-6 group hover:shadow-md transition-shadow">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-accent rounded-t-xl"></div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center mb-4 text-primary">
                        <module.icon size={20} />
                      </div>
                      <h4 className="text-[11px] font-bold text-primary uppercase leading-tight tracking-wider">
                        {module.title}
                      </h4>
                    </div>
                  </div>
                </motion.div>

                {index < systemModules.length - 1 && (
                  <div className="flex-grow flex items-center justify-center relative">
                    <div className="w-full h-[1px] bg-primary/30"></div>
                    <div className="absolute w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* BOTTOM HALF – VISUAL + VALIDATION STRIP */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT SIDE – IMAGE PLACEHOLDER */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-200 border-2 border-dashed border-gray-300 rounded-3xl aspect-[16/10] flex items-center justify-center relative shadow-sm"
          >
            <div className="text-gray-400 font-bold uppercase tracking-widest text-sm text-center px-8">
              Urban Deployment Mapping <br />
              <span className="text-xs font-normal lowercase mt-2 block opacity-60 italic">
                Image Placeholder
              </span>
            </div>
          </motion.div>

          {/* RIGHT SIDE – PILOT VALIDATION PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-3xl p-10 shadow-depth"
          >
            <h3 className="text-white text-2xl font-bold mb-10 pb-4 border-b border-white/10">
              Pilot Validation Mechanism
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {validationIndicators.map((indicator, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 text-accent">
                    <indicator.icon size={20} />
                  </div>
                  <div>
                    <h5 className="text-white text-sm font-bold mb-1 leading-snug">
                      {indicator.title}
                    </h5>
                    {/* <p className="text-white/50 text-xs leading-relaxed">
                      {indicator.description}
                    </p> */}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
