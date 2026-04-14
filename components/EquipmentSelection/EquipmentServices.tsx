import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plane,
  Ship,
  Truck,
  Warehouse,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  Globe,
  Clock,
  ShieldCheck,
  BarChart3,
  Package,
  MapPin,
  ClipboardList,
  Boxes,
  Thermometer,
  Navigation,
  FileText,
} from "lucide-react";
import {
  RUAAP1,
  RUAAP2,
  RUAAP3,
  RUAAP4,
  RUAAP5,
} from "../../Public/images/services/ruaap/ruaap";

const services = [
  {
    id: "strategic-planning",
    label: "Disaster Preparedness – Response – Prevention",
    icon: Plane,
    title: "Disaster Preparedness – Response – Prevention",
    features: [
      {
        icon: Globe,
        text: "Effective disaster management begins with selecting the right tools before a crisis strikes. We define precise technical specifications for early warning systems, field response kits, mobile shelters, rescue tools, and risk-monitoring technologies aligned to national hazard profiles.",
      },
      {
        icon: Clock,
        text: "ApexResilience guides structured procurement, supervises installation, and ensures equipment interoperability. Through hands-on operational training, we convert hardware into functional capability—strengthening prevention, accelerating response, and improving recovery performance at institutional scale.",
      },
    ],
    image: RUAAP1,
    imageAlt: "RUAAP Strategic Planning",
  },
  {
    id: "monitoring",
    label: "Fire Safety & Risk Management",
    icon: Truck,
    title: " Fire Safety & Risk Management",
    features: [
      {
        icon: Navigation,
        text: "Modern fire safety demands more than extinguishers and alarms. We design comprehensive equipment frameworks including detection systems, suppression technologies, evacuation systems, inspection tools, and compliance monitoring instruments.",
      },
      {
        icon: Truck,
        text: "ApexResilience develops risk-informed specifications tailored to building type, occupancy load, and regulatory requirements. We oversee supply and installation while equipping facility managers and safety teams with the training necessary to sustain compliance and operational readiness",
      },
    ],
    image: RUAAP3,
    imageAlt: "RUAAP Monitoring",
  },
  {
    id: "command-control",
    label: "Command & Control Infrastructure",
    icon: Ship,
    title: "Command & Control Infrastructure",
    features: [
      {
        icon: Package,
        text: "Technology is the backbone of coordinated emergency governance. We define specifications for dispatch software, data servers, GIS mapping platforms, communication networks, video walls, and integrated monitoring systems.",
      },
      {
        icon: MapPin,
        text: "Our approach ensures compatibility, cybersecurity resilience, and scalability. ApexResilience supervises structured installation and system integration, followed by operational training—transforming infrastructure into a responsive, data-driven command environment capable of managing complex multi-agency operations.",
      },
    ],
    image: RUAAP2,
    imageAlt: "RUAAP Command & Control",
  },

  {
    id: "logistics",
    label: "Training Simulations",
    icon: Truck,
    title: "Training Simulations",
    features: [
      {
        icon: Navigation,
        text: "Preparedness improves when equipment mirrors real-world risk. We identify and specify simulation tools including trauma mannequins, fire simulation units, virtual command systems, and scenario-based training platforms.",
      },
      {
        icon: Truck,
        text: "ApexResilience manages supply, installation, and calibration to international training standards. Through instructor development and structured training programs, we ensure simulation equipment becomes a living capability—enhancing skills, decision-making, and operational confidence.",
      },
    ],
    image: RUAAP4,
    imageAlt: "RUAAP Monitoring",
  },
  {
    id: "scalability",
    label: "Hospitals, Equipment & Furniture ",
    icon: Truck,
    title: "Hospitals, Equipment & Furniture ",
    features: [
      {
        icon: Navigation,
        text: "Clinical infrastructure must align with emergency response systems. We specify critical medical equipment, emergency department systems, ICU infrastructure, diagnostic tools, and patient monitoring technologies suited to projected demand and service capacity.",
      },
      {
        icon: Truck,
        text: "ApexResilience supports technical evaluation, supplier coordination, installation oversight, and commissioning. Through clinical orientation and maintenance training, we ensure hospital equipment strengthens treatment outcomes while remaining sustainable, interoperable, and aligned with national healthcare objectives.",
      },
    ],
    image: RUAAP5,
    imageAlt: "RUAAP Monitoring",
  },
];

export const EquipmentServices: React.FC = () => {
  const [activeId, setActiveId] = useState(services[0].id);

  const activeService = services.find((s) => s.id === activeId)!;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-[0.25em] mb-4"
          >
            <span className="w-8 h-px bg-accent inline-block" />
            What We Offer
            <span className="w-8 h-px bg-accent inline-block" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-primary leading-tight"
          >
            Our <span className="text-accent">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-textSecondary text-lg max-w-2xl mx-auto"
          >
            End-to-end Fire Safety solutions.
          </motion.p>
        </div>

        {/* Split layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col lg:flex-row rounded-[2rem] overflow-hidden shadow-depth min-h-[580px]"
        >
          {/* ─── LEFT NAV ─────────────────────────────────────── */}
          <nav
            className="lg:w-[280px] xl:w-[300px] flex-shrink-0"
            style={{ background: "#0F2C4C" }}
          >
            <div className="p-6 pb-2">
              <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em]">
                Service Categories
              </p>
            </div>
            <ul className="py-4 flex flex-col overflow-x-auto lg:overflow-visible scrollbar-hide">
              {services.map((service) => {
                const isActive = service.id === activeId;
                const Icon = service.icon;
                return (
                  <li key={service.id} className="flex-shrink-0 lg:flex-shrink">
                    <button
                      onClick={() => setActiveId(service.id)}
                      className={`w-full flex items-center gap-3 px-6 py-4 text-left transition-all duration-300 relative group ${
                        isActive
                          ? "text-white"
                          : "text-white/50 hover:text-white/80"
                      }`}
                    >
                      {/* Active indicator bar */}
                      {isActive && (
                        <motion.div
                          layoutId="activeBar"
                          className="absolute left-0 top-0 h-full w-1 rounded-r-full"
                          style={{ background: "#F28C28" }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}

                      {/* Active bg highlight */}
                      {isActive && (
                        <motion.div
                          layoutId="activeBg"
                          className="absolute inset-0 opacity-10"
                          style={{ background: "#F28C28" }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}

                      <div
                        className={`hidden lg:flex w-9 h-9 rounded-xl items-center justify-center flex-shrink-0 transition-all duration-300 z-10 ${
                          isActive
                            ? "bg-accent/20 text-accent"
                            : "bg-white/5 text-white/40 group-hover:bg-white/10 group-hover:text-white/70"
                        }`}
                      >
                        <Icon size={16} />
                      </div>

                      <span
                        className={`font-semibold text-sm z-10 whitespace-nowrap lg:whitespace-normal ${
                          isActive ? "text-white" : ""
                        }`}
                      >
                        {service.label}
                      </span>

                      {isActive && (
                        <ArrowRight
                          size={14}
                          className="ml-auto text-accent z-10 hidden lg:block"
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Bottom decorative strip */}
            <div className="hidden lg:block px-6 py-8 mt-auto">
              <div className="h-px bg-white/10 mb-6" />
              <p className="text-white/25 text-xs leading-relaxed">
                ApexResilience International delivers integrated logistics
                architecture across sectors and borders.
              </p>
            </div>
          </nav>

          {/* ─── RIGHT CONTENT ───────────────────────────────── */}
          <div className="flex-1 bg-base p-6 lg:p-10 flex items-stretch">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                className="w-full flex flex-col lg:flex-row gap-6"
              >
                <div
                  className="flex-1 rounded-[1.5rem] p-8 lg:p-10 flex flex-col justify-between shadow-lg"
                  style={{ background: "#F28C28" }}
                >
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-5 ">
                      {activeService.title}
                    </h3>

                    <ul className="space-y-3">
                      {activeService.features.map((feat, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + i * 0.07 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 size={13} className="text-white" />
                          </div>
                          <span className="text-white/90 text-sm font-medium leading-snug">
                            {feat.text}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:w-[240px] xl:w-[300px] flex-shrink-0">
                  <div className="rounded-[1.5rem] overflow-hidden shadow-matte h-full">
                    <img
                      src={activeService.image}
                      alt={activeService.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
