import React from "react";
import { motion } from "framer-motion";
import { Network } from "lucide-react";
import { Link } from "react-router-dom";

export const RUAAPStrategy: React.FC = () => {
  return (
    <section className="py-24 bg-base overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="flex items-center gap-3 text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-6">
              <div className="w-8 h-[1px] bg-secondary/30"></div>
              SYSTEM STRUCTURE
            </div>

            <h2 className="text-primary text-4xl md:text-5xl font-bold mb-8 leading-tight">
              RUAAP &{" "}
              <span className=" underline decoration-accent/30 underline-offset-8 text-4xl">
                <Link to="/auer-pf">AUER – PF</Link>
              </span>
              <br />
              <span className="text-accent underline decoration-accent/30 underline-offset-8 text-4xl">
                An Out of the Box Approach
              </span>
            </h2>

            <div className="space-y-6 text-textSecondary text-lg leading-relaxed max-w-xl">
              <p>
                Rapid Urban Ambulance Access Program (RUAAP) introduces a new
                approach to urban EMS in Africa & developing regions —
                engineered for deeper access, faster response, broader coverage,
                and significantly lower cost per life saved.
              </p>
              <p>
                Built on tri-wheel ambulances and EMS motorbike integration, it
                overcomes congestion and infrastructure limits. Guided by
                ApexResilience’s Africa Urban Emergency Response – Pilot
                Framework (AUER-PF), this scientifically structured model
                enables rapid, scalable transformation of emergency response
                systems across the continent within a practical timeframe.
              </p>
              <p>We don’t just conceive ideas — we operationalize them.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-10 md:p-12 rounded-[2rem] shadow-depth border border-primary/5"
          >
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8">
              <Network className="text-primary" size={32} />
            </div>

            <h3 className="text-2xl font-bold text-primary mb-6">
              Operational Advantages
            </h3>

            <ul className="space-y-4">
              {[
                "Faster urban response times",
                "Reduced preventable mortality",
                "Improved access to underserved communities",
                "Scalable city-by-city deployment",
                "Integration with national EMS framework",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 text-textSecondary"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5"></div>
                  <span className="text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
