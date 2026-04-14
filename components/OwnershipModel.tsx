import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export const OwnershipModel: React.FC = () => {
  const steps = [
    "Rapid Response",
    "Reduced preventable mortality",
    "National Emergency Governance",
    "Data-Driven Decisions",
    "Sustainable Emergency Capacity",
  ];
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Animation range:
    // Starts when the top of the container enters the bottom 10% of the viewport.
    // Ends when the center of the container reaches the bottom 25% of the viewport (75% from top).
    // This ensures the line is fully drawn long before the user scrolls it to the center of the screen.
    offset: ["start 90%", "center 75%"],
  });

  return (
    <section id="ownership" className="py-24 bg-alt overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <div className="">
          <h2 className="text-[40px] font-bold text-primary mb-4">
            Our Impact Vision
          </h2>
        </div>

        {/* Bottom Text */}
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-textSecondary font-medium leading-relaxed border-b border-metallic/30 pb-10">
            We enable governments to establish:
          </p>
        </div>

        {/* Animated Timeline */}
        <div
          ref={containerRef}
          className="relative max-w-6xl mx-auto mb-20 mt-20"
        >
          {/* Desktop Timeline Container */}
          <div className="hidden md:flex justify-between items-start relative">
            {/* Background Line */}
            <div className="absolute top-[8px] left-0 w-full h-[3px] bg-metallic/30 -translate-y-1/2"></div>

            {/* Animated Progress Line (Scroll Linked) - Explicit Brand Orange */}
            <motion.div
              style={{ scaleX: scrollYProgress, y: "-50%" }}
              className="absolute top-[8px] left-0 w-full h-[3px] bg-[#F28C28] origin-left z-[1]"
            />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-6 relative z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.8,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
              >
                <div className="w-4 h-4 rounded-full bg-base border-[3px] border-[#F28C28] shadow-[0_0_0_4px_rgba(242,140,40,0.2)]"></div>
                <span className="text-[15px] font-bold text-primary tracking-wide uppercase">
                  {step}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Mobile Timeline (Vertical) */}
          <div className="md:hidden relative pl-8">
            {/* Background Line Mobile */}
            <div className="absolute left-[3px] top-0 w-[3px] h-full bg-metallic/30"></div>

            {/* Animated Progress Line Mobile (Scroll Linked) */}
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="absolute left-[3px] top-0 w-[3px] h-full bg-[#F28C28] origin-top z-[1]"
            />

            <div className="flex flex-col gap-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative z-10 text-left"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Dot aligned with line */}
                  <div className="absolute -left-[32.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#F28C28] border-2 border-white shadow-sm"></div>
                  <span className="text-lg font-bold text-primary block">
                    {step}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
