import React from "react";
import { motion } from "framer-motion";
import {
  aboutus1,
  aboutus2,
  aboutus3,
  aboutus4,
  aboutus5,
  aboutus6,
} from "../../Public/images/About-us/AboutImages";

export const NationalImpact: React.FC = () => {
  const stats = [
    {
      image: aboutus1,
    },
    {
      image: aboutus2,
    },
    {
      image: aboutus3,
    },
    {
      image: aboutus4,
    },
    {
      image: aboutus5,
    },
    {
      image: aboutus6,
    },
  ];

  return (
    <section className="py-24 bg-alt relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px] -mr-64 -mt-64"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Measured National Impact
          </h2>
          <p className="text-textSecondary text-xl">
            Modern response infrastructure strengthens the foundational pillars
            of national stability and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-4 rounded-[2rem] shadow-matte border border-gray-100 flex flex-col items-center text-center group"
            >
              <div className="text-textSecondary font-bold text-xs uppercase tracking-[0.2em]">
                <img
                  src={stat.image}
                  alt=""
                  className="w-full h-full object-cover rounded-[2rem]"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block px-10 py-6 bg-primary rounded-[2.5rem] shadow-depth border border-white/5">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="text-center md:text-left">
                <div className="text-accent text-3xl font-black">20+ Years</div>
                <div className="text-white/60 text-xs font-bold uppercase tracking-widest mt-1">
                  Strategic Design
                </div>
              </div>
              <div className="hidden md:block w-[1px] h-12 bg-white/10"></div>
              <div className="text-center md:text-left">
                <div className="text-accent text-3xl font-black">National</div>
                <div className="text-white/60 text-xs font-bold uppercase tracking-widest mt-1">
                  Scale Reach
                </div>
              </div>
              <div className="hidden md:block w-[1px] h-12 bg-white/10"></div>
              <div className="text-center md:text-left">
                <div className="text-accent text-3xl font-black">100%</div>
                <div className="text-white/60 text-xs font-bold uppercase tracking-widest mt-1">
                  Sovereign Asset
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
