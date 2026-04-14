import React from "react";
import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { main5 } from "@/Public/images/main/main";

export const WhyApex: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-20 left-10 grid grid-cols-3 gap-2 opacity-20">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-accent"></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
        {/* Left: Image Collage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative w-full lg:w-1/2 flex justify-center"
        >
          <div className="w-[450px] h-[450px] rounded-full overflow-hidden border-8 border-alt shadow-depth relative z-10">
            <img
              src={main5}
              alt="Strategic Resilience"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="lg:w-1/2"
        >
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="text-accent" size={20} />
            <span className="text-secondary font-bold uppercase tracking-widest text-sm">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-[40px] font-bold text-primary mb-6">
            Why <br /> <span className="text-accent">ApexResilience?</span>
          </h2>

          <p className="text-textSecondary leading-relaxed mb-8 text-lg">
            Traditional approaches to emergency response often rely on
            fragmented procurement. ApexResilience utilizes an engineering-first
            approach, treating national safety as a critical utility.
          </p>

          <div className="space-y-4 mb-10">
            {[
              "Systems Engineering Approach — not fragmented procurement",
              "Governance + Operational Balance",
              "Urban-Focused Innovation",
              "Data-Driven Planning &amp; Performance Intelligence",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                </div>
                <span className="font-medium text-primary">{item}</span>
              </div>
            ))}
          </div>

          {/* Counters */}
          <div className="flex gap-12 border-t border-gray-100 pt-8">
            {[
              { val: "25+", label: "Years Experience" },
              { val: "10+", label: "National Projects" },
              { val: "100%", label: "Sovereign Owned" },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl font-black text-accent mb-1">
                  {stat.val}
                </div>
                <div className="text-xs text-textSecondary font-bold uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
