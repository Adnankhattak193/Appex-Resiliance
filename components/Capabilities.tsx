import React from "react";
import { Ambulance, Flame, Radio, ArrowRight, ShieldAlert } from "lucide-react";

interface CardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  className?: string;
  features?: string[];
  isFeatured?: boolean;
}

const CapabilityCard: React.FC<CardProps> = ({
  title,
  icon,
  description,
  className,
  features,
  isFeatured,
}) => {
  if (isFeatured) {
    return (
      <div
        className={`bg-primary p-8 lg:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl hover:shadow-3xl transition-all duration-500 group relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center text-left h-full gap-8 lg:gap-16 ${className || ""}`}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-accent to-accent/60"></div>
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/15 transition-colors duration-700 pointer-events-none"></div>

        <div className="flex-1 w-full">
          <div className="w-20 h-20 bg-white/5 backdrop-blur-md rounded-3xl flex items-center justify-center text-accent mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 shrink-0 border border-white/10 shadow-inner">
            {icon}
          </div>

          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
            {title}
          </h3>

          <p className="text-gray-300/90 text-lg lg:mb-0 leading-relaxed font-light">
            {description}
          </p>
        </div>

        <div className="flex-1 w-full flex flex-col justify-center">
          {features && (
            <ul className="mb-12 lg:mb-16 space-y-5 w-full">
              {features.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 text-base text-gray-300"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5 border border-accent/20">
                    <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(255,165,0,0.8)]"></div>
                  </div>
                  <span className="leading-snug">{feat}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-auto inline-flex items-center gap-4 text-white font-medium group-hover:gap-6 transition-all duration-300 cursor-pointer pt-6 border-t border-white/10 w-full">
            <span className="text-sm tracking-widest uppercase">
              Explore Strategy
            </span>
            <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center ml-auto shadow-lg shadow-accent/20 group-hover:bg-white group-hover:text-accent transition-colors">
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-white p-8 lg:p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-500 group relative overflow-hidden flex flex-col items-start text-left h-full ${className || ""}`}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-50 group-hover:bg-accent group-hover:shadow-[0_0_20px_rgba(255,165,0,0.4)] transition-all duration-500"></div>

      <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-accent/10 group-hover:text-accent transition-colors duration-500 shrink-0 border border-gray-100/50">
        {React.isValidElement(icon)
          ? React.cloneElement(icon, { size: 28 } as any)
          : icon}
      </div>

      <h3 className="text-xl font-bold text-primary mb-4 leading-snug group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>

      <p className="text-textSecondary text-sm mb-8 leading-relaxed font-light">
        {description}
      </p>

      <div className="mt-auto inline-flex items-center gap-2 text-sm text-primary font-semibold group-hover:text-accent transition-colors cursor-pointer w-full">
        <span>Learn more</span>
        <ArrowRight
          size={16}
          className="ml-auto group-hover:translate-x-2 transition-transform duration-300 opacity-40 group-hover:opacity-100"
        />
      </div>
    </div>
  );
};

export const Capabilities: React.FC = () => {
  const capabilities: Array<{
    title: string;
    icon: React.ReactNode;
    description: string;
    features?: string[];
  }> = [
    {
      title: "Disaster Preparedness & Prevention",
      icon: <ShieldAlert size={40} />,
      description:
        "Comprehensive strategies for national resilience, focusing on proactive measures to mitigate catastrophic events. We integrate advanced early warning systems and robust infrastructure planning.",
      features: [
        "National risk assessment & hazard mapping",
        "Implementation of early warning systems",
        "Resilient infrastructure planning",
        "Community vulnerability reduction programs",
      ],
    },
    {
      title: "Fire Safety & Risk",
      icon: <Flame size={40} />,
      description:
        "Built-environment risk reduction, fire engineering advisory, inspections, and comprehensive safety compliance.",
    },
    {
      title: "Hospital Infrastructure",
      icon: <Ambulance size={40} />,
      description:
        "Seamless healthcare systems integration: advanced equipment planning, layout optimization, and scalable operational support.",
    },
    {
      title: "Emergency Communications",
      icon: <Radio size={40} />,
      description:
        "Deploying robust, redundant communication networks vital for maintaining command continuity during crises.",
    },
    {
      title: "Critical Asset Security",
      icon: <ShieldAlert size={40} />,
      description:
        "Hardened physical and digital security protocols designed to protect grids, water supplies, and key logistical hubs.",
    },
    {
      title: "Logistical Readiness",
      icon: <Radio size={40} />,
      description:
        "Dynamic stockpile reserves, predictive supply chain modeling, and rapid deployment frameworks for post-disaster recovery.",
    },
    {
      title: "Strategic Advisory",
      icon: <Flame size={40} />,
      description:
        "Executive-level consultancy for government agencies, focusing on policy frameworks and legislative resilience.",
    },
  ];

  return (
    <section id="capabilities" className="py-24 lg:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-start gap-6 mb-16 lg:mb-20 max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-accent"></div>
            <span className="text-accent font-bold uppercase tracking-widest text-sm">
              Our Capabilities
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary leading-tight tracking-tight">
            Building Resilience <br className="hidden md:block" /> Through{" "}
            <span className="text-accent">Strategic Architecture</span>
          </h2>
          <p className="text-textSecondary text-lg font-light leading-relaxed">
            Transforming national infrastructure with enterprise-grade solutions
            focused on safety, efficiency, and long-term viability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className={`${index === 0 ? "md:col-span-2 lg:col-span-3" : ""}`}
            >
              <CapabilityCard
                title={cap.title}
                icon={cap.icon}
                description={cap.description}
                features={cap.features}
                isFeatured={index === 0}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-textSecondary">
            Ready to transform national infrastructure?{" "}
            <a href="#" className="text-accent font-bold underline">
              Contact us today.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
