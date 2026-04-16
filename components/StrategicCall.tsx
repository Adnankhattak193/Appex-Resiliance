import React from "react";
import { Button } from "./Button";
import { PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

export const StrategicCall: React.FC = () => {
  return (
    <section className="relative py-32 bg-primary overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-white"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-[2px] bg-accent"></div>
            <span className="uppercase tracking-widest text-sm font-semibold text-accent">
              Strategic Partnership
            </span>
          </div>
          <h2 className="text-[48px] font-bold leading-tight mb-6">
            From Blueprint to <br />{" "}
            <span className="text-accent">Operational Readiness</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            ApexResilience partners with ministries, civil protection
            authorities, and national stakeholders to transform emergency
            response from reactive service delivery into structured national
            resilience architecture.
          </p>
        </motion.div>

        {/* Right: Floating Card (Contact Form) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl max-w-lg mx-auto lg:ml-auto w-full"
        >
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-accent uppercase tracking-widest mb-2 block">
              Initiate Dialogue
            </span>
            <h3 className="text-3xl font-bold text-primary">
              Start Consultation
            </h3>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-100 bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
                  Professional Email
                </label>
                <input
                  type="email"
                  placeholder="name@organization.gov"
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-100 bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
                Organization / Department
              </label>
              <input
                type="text"
                placeholder="e.g. Ministry of Interior"
                className="w-full px-5 py-3.5 rounded-xl border border-gray-100 bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
                Inquiry Details
              </label>
              <textarea
                rows={3}
                placeholder="Describe your strategic requirements..."
                className="w-full px-5 py-3.5 rounded-xl border border-gray-100 bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all resize-none"
              ></textarea>
            </div>

            <div className="pt-4">
              <Button
                variant="accent"
                fullWidth
                className="text-[15px] font-black uppercase tracking-widest py-4 shadow-xl rounded-xl"
              >
                Schedule Briefing
              </Button>
            </div>

            <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-4">
              Strict confidentiality assured for all governmental inquiries.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
