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
  Disaster1,
  Disaster2,
  Disaster3,
  Disaster4,
  Disaster5,
} from "../../Public/images/services/Disaster/DisasterImages";

const services = [
  {
    id: "strategic-planning",
    label: "Risk Intelligence & Hazard Mapping",
    icon: Plane,
    title: "Risk Intelligence & Hazard Mapping",
    features: [
      {
        icon: Globe,
        text: "Preparedness starts with knowing what can happen, where, and to whom. We build risk intelligence using multi-hazard assessments, exposure profiling, and critical infrastructure mapping.",
      },
      {
        icon: Clock,
        text: "Our teams translate geospatial evidence into practical planning outputs—risk registers, priority zones, and scenario playbooks tailored to national and city realities.",
      },
      {
        icon: ShieldCheck,
        text: "The result is clarity for decision-makers: what to fund first, where to position capability, and how to reduce loss before the next shock arrives.",
      },
    ],
    image: Disaster1,
    imageAlt: "RUAAP Strategic Planning",
  },
  {
    id: "command-control",
    label: "Governance-Integrated Preparedness Frameworks",
    icon: Ship,
    title: "Governance-Integrated Preparedness Frameworks",
    features: [
      {
        icon: Package,
        text: "Disaster readiness fails when it lives outside government structure. We embed preparedness into policy, legislation, budgeting cycles, and civil protection mandates.",
      },
      {
        icon: MapPin,
        text: "ApexResilience designs coordination models that define roles, authority, escalation triggers, and accountability—across ministries, municipalities, and critical utilities. ",
      },
      {
        icon: ClipboardList,
        text: "This turns “plans on paper” into enforceable systems, enabling consistent readiness audits, measurable compliance, and sustainable funding—without dependency on ad hoc emergency declarations.",
      },
    ],
    image: Disaster2,
    imageAlt: "RUAAP Command & Control",
  },
  {
    id: "monitoring",
    label: "Command Integration & Early Warning Readiness",
    icon: Truck,
    title: " Command Integration & Early Warning Readiness",
    features: [
      {
        icon: Navigation,
        text: "Preparedness becomes actionable when it connects to a unified command. We align early warning signals, incident reporting, and resource visibility under integrated Command & Control protocols.",
      },
      {
        icon: Truck,
        text: "We develop standard operating procedures for alerting, activation, multi-agency dispatch, and public information—so decisions are fast, disciplined, and consistent.",
      },
      {
        icon: ShieldCheck,
        text: "Whether floods, fire outbreaks, or mass-casualty events, the system responds as one network—reducing confusion, shortening mobilization time, and protecting frontline responders.",
      },
    ],
    image: Disaster3,
    imageAlt: "RUAAP Monitoring",
  },
  {
    id: "logistics",
    label: "Training & Simulation Programs",
    icon: Truck,
    title: "Training & Simulation Programs",
    features: [
      {
        icon: Navigation,
        text: "Plans don’t save lives—trained people do. We deliver structured capacity-building for leadership, operations, and field responders across civil protection, EMS, fire services, and municipal units.",
      },
      {
        icon: Truck,
        text: "Training is paired with table-top exercises, live simulations, and after-action reviews that stress-test coordination, communications, and logistics under realistic pressure.",
      },
      {
        icon: ShieldCheck,
        text: "This builds muscle memory: clearer command decisions, safer deployments, stronger inter-agency trust, and a repeatable learning cycle that improves readiness year after year.",
      },
    ],
    image: Disaster4,
    imageAlt: "RUAAP Monitoring",
  },
  {
    id: "scalability",
    label: "Prevention Measures & Resilience Planning",
    icon: Truck,
    title: "Prevention Measures & Resilience Planning",
    features: [
      {
        icon: Navigation,
        text: "Prevention is the highest-return investment in emergency governance. We design mitigation programs that reduce impact: critical infrastructure protection, community risk reduction, continuity planning, and resilient site planning. ",
      },
      {
        icon: Truck,
        text: "Our advisory includes phased investment roadmaps—linking risk reduction priorities to budgets, procurement, and performance indicators governments can track.",
      },
      {
        icon: ShieldCheck,
        text: "You gain a defendable prevention strategy: fewer preventable deaths, lower economic disruption, and a resilience pathway that grows capability without overwhelming institutional capacity.",
      },
    ],
    image: Disaster5,
    imageAlt: "RUAAP Monitoring",
  },
];

export const DisasterServices: React.FC = () => {
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
            End-to-end Disaster Preparedness solutions.
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
