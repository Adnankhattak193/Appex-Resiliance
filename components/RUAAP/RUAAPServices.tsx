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
    label: "Operational Model",
    icon: Plane,
    title: "Operational Model",
    features: [
      {
        icon: Globe,
        text: "RUAAP is engineered for congested African and developing regions’ cities where conventional ambulances lose critical time. The model combines tri-wheel ambulances for narrow urban penetration with EMS motorbikes for rapid first response stabilization",
      },
      {
        icon: Clock,
        text: "Incidents are triaged through centralized dispatch, enabling tiered deployment based on severity and accessibility",
      },
      {
        icon: ShieldCheck,
        text: "This structured mobility logic converts traffic barriers into operational advantage, reducing response intervals while maintaining clinical standards.",
      },
    ],
    image: RUAAP1,
    imageAlt: "RUAAP Strategic Planning",
  },
  {
    id: "command-control",
    label: "Fleet Architecture",
    icon: Ship,
    title: "Fleet Architecture",
    features: [
      {
        icon: Package,
        text: "The fleet architecture is purpose-built for urban density and infrastructure limitations. Tri-wheel ambulances are compact, medically equipped, and maneuverable, while EMS motorbikes provide ultra-fast first-contact capability.",
      },
      {
        icon: MapPin,
        text: "Fleet mix ratios are determined through geo-spatial and demand analysis under the AUER-PF framework. ",
      },
      {
        icon: ClipboardList,
        text: "Standardized equipment, maintenance protocols, and training integration ensure reliability, interoperability, and sustainable performance across deployment zones.",
      },
    ],
    image: RUAAP2,
    imageAlt: "RUAAP Command & Control",
  },
  {
    id: "monitoring",
    label: "Command & Governance Integration",
    icon: Truck,
    title: " Command & Governance Integration",
    features: [
      {
        icon: Navigation,
        text: "RUAAP is not a parallel system — it is architected to integrate within national EMS and emergency governance structures. Dispatch, GPS tracking, performance dashboards, and reporting mechanisms connect directly to Command & Control centers. ",
      },
      {
        icon: Truck,
        text: "This ensures oversight, transparency, and data-driven accountability.",
      },
      {
        icon: ShieldCheck,
        text: "The model strengthens institutional authority while modernizing operational capability, aligning urban response improvements with national resilience strategy.",
      },
    ],
    image: RUAAP3,
    imageAlt: "RUAAP Monitoring",
  },
  {
    id: "logistics",
    label: "Cost-Effectiveness & Deployment Logic",
    icon: Truck,
    title: " Cost-Effectiveness & Deployment Logic",
    features: [
      {
        icon: Navigation,
        text: "RUAAP dramatically reduces capital and operational expenditure compared to conventional ambulance-heavy models. Multiple tri-wheel units can be deployed at the cost of a single traditional ambulance, expanding coverage without proportional budget escalation. ",
      },
      {
        icon: Truck,
        text: "Phased deployment allows controlled investment and measurable performance tracking.",
      },
      {
        icon: ShieldCheck,
        text: "The result is higher response density, improved coverage reach, and faster system impact within constrained fiscal environments.",
      },
    ],
    image: RUAAP4,
    imageAlt: "RUAAP Monitoring",
  },
  {
    id: "scalability",
    label: "Scalability & Institutional Sustainability",
    icon: Truck,
    title: " Scalability & Institutional Sustainability",
    features: [
      {
        icon: Navigation,
        text: "Through the AUER-PF methodology, RUAAP begins as a structured pilot before city-by-city expansion. Performance data from controlled deployments informs optimization prior to national scale-up. ",
      },
      {
        icon: Truck,
        text: "Training programs, maintenance systems, and governance protocols are embedded from inception.",
      },
      {
        icon: ShieldCheck,
        text: "This ensures that growth is institutional — not improvised — enabling African governments to scale urban emergency access sustainably and independently.",
      },
    ],
    image: RUAAP5,
    imageAlt: "RUAAP Monitoring",
  },
];

export const RUAAPServices: React.FC = () => {
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
            Our <span className="text-accent">Product</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-textSecondary text-lg max-w-2xl mx-auto"
          >
            End-to-end RUAAP solutions.
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
