import React from "react";
import { Button } from "./Button";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { main1, main2 } from "@/Public/images/main/main";
import { Link } from "react-router-dom";

export const Mission: React.FC = () => {
  return (
    <section className="py-24 bg-base relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative"
        >
          {/* Top Image */}
          <div className="w-full h-[400px] rounded-[2rem] overflow-hidden mb-6 shadow-depth">
            <img
              src={main1}
              alt="Mission"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          {/* Bottom Left Image - Overlapping */}
          <div className="w-[60%] h-[240px] rounded-[2rem] overflow-hidden -mt-32 ml-0 border-8 border-white shadow-2xl relative z-10">
            <img
              src={main2}
              alt="Strategic Meeting"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Decorative Element */}
          <div className="absolute top-10 right-10 w-20 h-20 bg-alt/50 rounded-full -z-10 blur-xl"></div>
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
        >
          <div className="flex items-center gap-2 mb-6">
            <ShieldCheck className="text-accent" size={20} />
            <span className="text-secondary font-bold uppercase tracking-widest text-sm">
              A Turn-Key Solution
            </span>
          </div>

          <h2 className="text-[42px] font-bold text-primary mb-6 leading-tight">
            Architecting Modern <br />
            <span className="text-accent">Emergency Resilience</span>
          </h2>

          <div className="space-y-6 text-textSecondary text-lg mb-10 leading-relaxed">
            <p>
              ApexResilience architects integrated national emergency response
              systems designed for speed, coordination, and resilience. From
              rapid-response infrastructure and modern fire safety frameworks to
              preparedness, prevention, and professional training of responders
              and trainers, we help governments build structured, dependable
              systems that protect lives, strengthen institutions, and secure
              communities.
            </p>
            <p className="font-semibold text-primary">
              Because resilient nations are built before emergencies happen.
            </p>
          </div>

          <div className="flex flex-col items-start pt-2">
           <Link to="/about">
            <Button
              variant="accent"
              className="rounded-full px-8 shadow-lg hover:shadow-xl"
            >
              About US <ArrowRight size={16} className="ml-2" />
            </Button>
           </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
