import React from "react";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Timer,
  Handshake,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

const outcomes = [
  {
    title: "Evidence-based policy formulation",
    icon: HeartPulse,
  },
  {
    title: "Optimized resource allocation",
    icon: Timer,
  },
  {
    title: "Reduced mortality and economic loss exposure",
    icon: Handshake,
  },
  {
    title: "Transparent performance benchmarking",
    icon: TrendingUp,
  },
  {
    title: "Long-term resilience forecasting ",
    icon: ShieldCheck,
  },
];

export const ResearchOutcomes: React.FC = () => {
  return (
    <section className="py-24 bg-base overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-[0.25em] mb-4"
          >
            <span className="w-8 h-px bg-accent inline-block" />
            Impact & results
            <span className="w-8 h-px bg-accent inline-block" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-primary leading-tight"
          >
            Core Outcomes
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {outcomes.map((outcome, index) => {
            const Icon = outcome.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-[2rem] shadow-depth border border-primary/5 flex flex-col items-center text-center group hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                  <Icon
                    className="text-primary group-hover:text-accent transition-colors"
                    size={32}
                  />
                </div>
                <h3 className="text-lg font-bold text-primary leading-tight">
                  {outcome.title}
                </h3>
                <div className="w-8 h-1 bg-accent/20 mt-6 group-hover:w-12 transition-all"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
