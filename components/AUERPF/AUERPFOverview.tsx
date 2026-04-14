import React from "react";
import { motion } from "framer-motion";
import { BarChart3, ShieldCheck } from "lucide-react";

export const AUERPFOverview: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                <BarChart3 size={24} />
              </div>
              <h2 className="text-primary text-3xl font-bold italic">
                Strategic System Alignment
              </h2>
            </div>

            <p className="text-textSecondary text-xl leading-relaxed mb-8">
              Rather than deploying isolated assets, AUER-PF aligns
              infrastructure, fleet architecture, governance structures,
              legislation, training standards, and digital command systems under
              one measurable pilot model.
            </p>

            <div className="p-6 bg-[#F4F6F8] rounded-2xl border-l-4 border-accent">
              <p className="text-primary font-medium">
                Each deployment is geo-spatially mapped, demand-analyzed, and
                performance-tracked to ensure operational efficiency and
                financial sustainability.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-primary rounded-[2.5rem] p-10 text-white shadow-2xl relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-accent">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-2xl font-bold">Validation & De-risking</h3>
              </div>

              <p className="text-white/80 text-lg leading-relaxed mb-8">
                The framework enables governments to validate response density,
                access reach, cost-efficiency, and institutional readiness
                before national expansion.It reduces risk, strengthens
                accountability, and creates evidence-based justification for
                scaling.
              </p>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
