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
  CommandControl1,
  CommandControl2,
  CommandControl3,
  CommandControl4,
  CommandControl5,
} from "../../Public/images/services/command-control/CommandControlImages";

const services = [
  {
    id: "strategic-planning",
    label: "Central Command Authorit",
    icon: Plane,
    title: "Central Command Authorit",
    features: [
      {
        icon: Globe,
        text: "A national Command & Control center is where incidents become coordinated operations — not scattered phone calls. It turns public alerts, responder status, and leadership decisions into one controlled workflow.",
      },
      {
        icon: Clock,
        text: "ApexResilience designs the operating model: roles, shift structure, escalation rules, and incident command protocols that work under pressure.",
      },
      {
        icon: ShieldCheck,
        text: "The distinction is governance-grade command authority with field practicality — clear accountability, faster decisions, and consistent outcomes across EMS, Fire & Rescue, and civil emergency response.",
      },
    ],
    image: CommandControl1,
    imageAlt: "RUAAP Strategic Planning",
  },
  {
    id: "command-control",
    label: "Dispatch Workflow & CAD Logic",
    icon: Ship,
    title: "Dispatch Workflow & CAD Logic",
    features: [
      {
        icon: Package,
        text: "Dispatch is more than “send the nearest unit.” It is triage, prioritization, and resource allocation based on risk, location, and capability — in seconds.",
      },
      {
        icon: MapPin,
        text: "We build end-to-end dispatch workflows: call-taking scripts, medical and fire triage pathways, unit recommendation logic, and automated time stamps for auditability. ",
      },
      {
        icon: ClipboardList,
        text: "Our difference is operational realism: dispatch rules are tuned to local geography, traffic, and fleet mix, producing fewer delays, better utilization, and reliable performance reporting.",
      },
    ],
    image: CommandControl2,
    imageAlt: "RUAAP Command & Control",
  },
  {
    id: "monitoring",
    label: "Customized Software & Dashboards",
    icon: Truck,
    title: " Customized Software & Dashboards",
    features: [
      {
        icon: Navigation,
        text: "Modern emergency operations require software built for response, not generic ticketing. The system must see the city, the fleet, and the incident in one view.",
      },
      {
        icon: Truck,
        text: "ApexResilience specifies and configures CAD, GIS mapping, AVL tracking, case records, and supervisor dashboards — tailored to national standards and local realities.",
      },
      {
        icon: ShieldCheck,
        text: "What makes it different is decision clarity: we design interfaces, alerts, and data layers so leaders and operators can act faster, verify results, and continuously improve.",
      },
    ],
    image: CommandControl3,
    imageAlt: "RUAAP Monitoring",
  },
  {
    id: "logistics",
    label: " Modern Communications & Connectivity",
    icon: Truck,
    title: "  Modern Communications & Connectivity",
    features: [
      {
        icon: Navigation,
        text: "A command center is only as strong as its communications. Voice, radio, mobile data, and interoperability must function even when networks are strained.",
      },
      {
        icon: Truck,
        text: "We architect resilient communications: radio integration, dispatch telephony, redundancy planning, secure channels, and disciplined communications protocols for multi-agency operations.",
      },
      {
        icon: ShieldCheck,
        text: "Our distinction is reliability-by-design — engineered failover, clear comms discipline, and secure information flow, enabling uninterrupted coordination during peak incidents and city-wide disruptions.",
      },
    ],
    image: CommandControl4,
    imageAlt: "RUAAP Monitoring",
  },
  {
    id: "scalability",
    label: "Multi-Agency Integration & Performance",
    icon: Truck,
    title: " Multi-Agency Integration & Performance",
    features: [
      {
        icon: Navigation,
        text: "Integration means every responder works from the same incident picture — shared location, shared status, shared priorities — without confusion or duplication. ",
      },
      {
        icon: Truck,
        text: "ApexResilience designs integration across agencies and services: common incident taxonomy, interoperability rules, shared data exchange, and unified situation reporting.",
      },
      {
        icon: ShieldCheck,
        text: "The difference is measurable governance: performance intelligence dashboards track response times, coverage gaps, and compliance, turning daily operations into a managed national capability that can scale city by city.",
      },
    ],
    image: CommandControl5,
    imageAlt: "RUAAP Monitoring",
  },
];

export const CommandControlServices: React.FC = () => {
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
            End-to-end Command & Control solutions.
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
