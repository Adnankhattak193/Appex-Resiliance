import React from "react";
import { TrendingUp, Activity, Lock } from "lucide-react";
import { motion } from "framer-motion";

export const Impact: React.FC = () => {
  const cards = [
    {
      title: "94%",
      subtitle: "Economic Protection",
      description:
        "Safeguarding national GDP through resilient disaster risk reduction architecture.",
      icon: TrendingUp,
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "96%",
      subtitle: "Response Efficiency",
      description:
        "Drastic reduction in emergency response times through centralized command.",
      icon: Activity,
      img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "100%",
      subtitle: "Sovereignty",
      description:
        "Full government ownership of all data, infrastructure, and operational protocols.",
      icon: Lock,
      img: "https://images.unsplash.com/photo-1590103514966-5e2a11c13e21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="impact" className="py-24 bg-base">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm">
              National Impact
            </span>
          </div>
          <h2 className="text-[40px] font-bold text-primary">
            Highlights our <span className="text-accent">impactful work</span>
          </h2>
          <p className="text-textSecondary max-w-2xl mx-auto mt-4 text-lg">
            Discover the positive change we've created through our strategic
            architecture partnerships.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="bg-white rounded-[2rem] p-8 shadow-matte flex flex-col items-center text-center relative overflow-hidden group hover:shadow-depth transition-all duration-300"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <card.icon size={100} className="text-accent" />
              </div>
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-6">
                <img
                  src={card.img}
                  alt={card.subtitle}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <h3 className="text-[36px] font-black text-accent mb-2">
                {card.title}
              </h3>
              <h4 className="text-xl font-bold text-primary mb-3">
                {card.subtitle}
              </h4>
              <p className="text-textSecondary text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
