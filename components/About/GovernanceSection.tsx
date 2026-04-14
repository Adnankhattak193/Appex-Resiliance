import React from "react";
import { motion } from "framer-motion";
import { Landmark, Users, GraduationCap, FileText, Siren } from "lucide-react";
import {
  aboutussquare,
  aboutusverticle,
} from "../../Public/images/About-us/AboutImages";

export const GovernanceSection: React.FC = () => {
  const points = [
    { icon: Landmark, text: "Reduce preventable mortality" },
    {
      icon: FileText,
      text: "Improve response time reliability",
    },
    {
      icon: GraduationCap,
      text: "Institutionalize training and certification",
    },
    { icon: Siren, text: "Strengthen risk governance" },
    {
      icon: Users,
      text: "Establish sustainable national emergency frameworks",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side: Interactive Image Composition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative"
          >
            {/* Main Image */}
            <div className="rounded-[2.5rem] overflow-hidden shadow-depth aspect-[4/5] relative z-10">
              <img
                src={aboutusverticle}
                alt="Command Center"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>

            {/* Overlapping Small Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-10 -right-10 w-2/3 rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl z-20 aspect-video md:aspect-square"
            >
              <img
                src={aboutussquare}
                alt="Professional Training"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Accent Shapes */}
            <div className="absolute -top-12 -left-12 w-40 h-40 bg-accent/5 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
              Our Commitment
              <br />
              <span className="text-textPrimary text-lg font-medium ">
                We are committed to enabling governments to
              </span>
            </h2>

            <div className="space-y-8 mb-12">
              {points.map((point, index) => (
                <div key={index} className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-alt flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <point.icon size={22} />
                  </div>
                  <span className="text-textPrimary text-lg font-medium">
                    {point.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-8 border-l-4 border-accent bg-alt/50 rounded-r-2xl">
              <p className="text-primary text-xl font-bold italic">
                "Our Vision"
              </p>
              <p className="mt-2 text-textSecondary font-medium uppercase tracking-[0.1em] text-xs">
                — To become a trusted strategic partner for governments seeking
                to transform emergency response from fragmented reaction into
                structured national resilience architecture.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
