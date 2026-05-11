import React from "react";
import { Ambulance, Flame, Radio, ArrowRight, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";
import ourCapabilityImage from "@/public/images/our_capability.png";
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  className?: string;
  isFeatured?: boolean;
  link: string;
}

const CapabilityCard: React.FC<CardProps> = ({
  title,
  icon,
  description,
  className,
  isFeatured,
  link,
}) => {
  if (isFeatured) {
    return (
      <div
        className={`bg-primary p-8 lg:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl hover:shadow-3xl transition-all duration-500 group relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center text-left h-full gap-8 lg:gap-16 max-w-6xl mx-auto w-full ${className || ""}`}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-accent to-accent/60"></div>
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/15 transition-colors duration-700 pointer-events-none"></div>

        <div className="flex-1 w-full">
          <div className="w-20 h-20 bg-white/5 backdrop-blur-md rounded-3xl flex items-center justify-center text-accent mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 shrink-0 border border-white/10 shadow-inner">
            {icon}
          </div>

          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight">
            From Wheels to Systems — We Build and Equip
          </h3>

          <div className="text-gray-300/90 text-lg lg:mb-0 leading-relaxed font-light space-y-6">
            {description.split("\n\n").map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
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

      <Link
        className="mt-auto inline-flex items-center gap-2 text-sm text-primary font-semibold group-hover:text-accent transition-colors cursor-pointer w-full"
        to={link}
      >
        <span>Learn More</span>
        <ArrowRight
          size={16}
          className="ml-auto group-hover:translate-x-2 transition-transform duration-300 opacity-40 group-hover:opacity-100"
        />
      </Link>
    </div>
  );
};

export const Capabilities: React.FC = () => {
  const capabilities: Array<{
    title: string;
    icon: React.ReactNode;
    description: string;
    features?: string[];
    link: string;
  }> = [
    {
      title: "Featured Solution",
      icon: <ShieldAlert size={40} />,
      description:
        "ApexResilience delivers purpose-built mobile and institutional solutions—ranging from ambulances, mobile clinics, and command centers to firefighting vehicles and specialized platforms on wheels. Each solution is engineered for operational reliability, rapid deployment, and contextual adaptability.\n\nWe complement this with high-quality equipment for hospitals, diagnostics, disaster management, communication systems, and training simulators—ensuring every component strengthens performance, integration, and long-term resilience.",
      link: "#",
    },
    {
      title: "Disaster Preparedness",
      icon: <Flame size={40} />,
      description:
        "Built-environment risk reduction, fire engineering advisory, inspections, and comprehensive safety compliance.",
      link: "/services/disaster-preparedness",
    },
    {
      title: "Hospital Infrastructure",
      icon: <Ambulance size={40} />,
      description:
        "Seamless healthcare systems integration: advanced equipment planning, layout optimization, and scalable operational support.",
      link: "/services/hospital-infrastructure",
    },
    {
      title: "Command & Control",
      icon: <Radio size={40} />,
      description:
        "Deploying robust, redundant communication networks vital for maintaining command continuity during crises.",
      link: "/services/command-control",
    },
    {
      title: "Fire & Rescue",
      icon: <ShieldAlert size={40} />,
      description:
        "Hardened physical and digital security protocols designed to protect grids, water supplies, and key logistical hubs.",
      link: "/services/fire-rescue",
    },
    {
      title: "Medical Equipment",
      icon: <Radio size={40} />,
      description:
        "Dynamic stockpile reserves, predictive supply chain modeling, and rapid deployment frameworks for post-disaster recovery.",
      link: "/services/medical-equipment",
    },
    {
      title: "Training & ToT",
      icon: <Flame size={40} />,
      description:
        "Executive-level consultancy for government agencies, focusing on policy frameworks and legislative resilience.",
      link: "/services/training-tot",
    },
  ];

  return (
    <section id="capabilities" className="py-24 lg:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        {/* ********************Hero Section Reimages________________ */}

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-0 mb-20 relative z-0">
          <div className="lg:w-[50%] relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-0.5 bg-orange-500"></div>
              <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs">
                OUR CAPABILITIES
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl lg:text-5xl font-bold leading-[1.2] mb-6 relative z-[1]"
            >
              <span className="text-[#001F3F]">Products & Equipment</span>

              <br />

              <span className="block mt-3 text-lg lg:text-2xl font-medium text-orange-500">
                Engineered for Real-world Performance
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-500 text-lg lg:text-xl mb-12 max-w-xl font-light leading-relaxed"
            >
              Transforming national infrastructure with enterprise-grade
              solutions focused on safety, efficiency, and long-term viability.
            </motion.p>
          </div>

          <div className="lg:w-[60%] relative z-[-1] lg:-ml-[10%]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Main Image Wrapper */}
              <div className="relative overflow-visible">
                <img
                  src={ourCapabilityImage}
                  alt="ApexResilience Specialized Vehicles"
                  className="
    w-[115%]
    max-w-none
    h-auto
    object-contain
    translate-x-6
    [mask-image:linear-gradient(to_right,transparent_0%,black_20%,black_80%,transparent_100%)]
    [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_20%,black_80%,transparent_100%)]
  "
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>

        {/* ********************Hero Section Reimages________________ */}

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
                link={cap.link}
                isFeatured={index === 0}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-textSecondary">
            Ready to transform national infrastructure?{" "}
            <Link to="/contact" className="text-accent font-bold underline">
              Contact us today.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
