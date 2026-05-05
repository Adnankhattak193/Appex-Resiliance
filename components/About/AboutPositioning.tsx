import React from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export const AboutPositioning: React.FC = () => {
  const mandates = [
    "Policy & Field Operations",
    "Urban Risk & Structured Resilience",
    "Training & Institutional Capacity",
    "Procurement & Systems Architecture",
  ];

  return (
    <section className="py-24 bg-base">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="w-8 h-[2px] bg-accent"></span>
            <span className="text-secondary font-bold uppercase tracking-[0.2em] text-xs">
              Who We Are
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
            We Architect National <br />
            <span className="text-accent">Response Systems</span>
          </h2>

          <div className="space-y-6 text-textSecondary text-lg leading-relaxed max-w-2xl sm:max-w-xl">
            <p className="font-bold">
              Resilience is not reaction. It is design.
            </p>
            <p className="font-medium text-primary">
              We help nations transition from fragmented emergency response
              models to integrated, coordinated, and future-ready systems —
              structured for sustainability, scalability, and national
              ownership. We design coordinated response ecosystems that are
              operationally efficient, economically sustainable, and sovereign
              in ownership.
            </p>

            <p className="font-medium text-primary">
              Our approach ensures infrastructure readiness, operational
              continuity, and long-term compliance. We believe resilience is not
              only infrastructure — it is mindset, governance, and structured
              capability.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Mandate Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="relative"
        >
          {/* Decorative accent behind the card */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-[2rem] -z-10"></div>

          <div className="bg-white p-10 md:p-12 rounded-[2rem] shadow-depth border border-gray-100 relative overflow-hidden">
            {/* Header with icon */}
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-primary/5 rounded-xl text-primary">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl font-bold text-primary">
                We bridge the gap between
              </h3>
            </div>

            {/* Mandate List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mandates.map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="mt-1 transition-transform group-hover:scale-110">
                    <CheckCircle2 className="text-accent" size={20} />
                  </div>
                  <span className="text-textSecondary font-semibold text-sm uppercase tracking-wider">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Subtle watermark or pattern */}
            <div className="absolute -bottom-8 -right-8 opacity-[0.03] text-primary rotate-12">
              <ShieldCheck size={200} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
