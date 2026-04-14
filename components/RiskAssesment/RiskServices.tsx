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
  FireGovernance1,
  FireGovernance2,
  FireGovernance3,
  FireGovernance4,
  FireGovernance5,
} from "../../Public/images/services/FireGovernance/FireGovernance";

const services = [
  {
    id: "strategic-planning",
    label: "Risk Assessment & Fire Strategy",
    icon: Plane,
    title: "Risk Assessment & Fire Strategy",
    features: [
      {
        icon: Globe,
        text: "We begin with a structured fire risk assessment across buildings, campuses, and high-risk occupancies. Our teams map ignition sources, evacuation constraints, compartmentation gaps, and operational vulnerabilities—then translate findings into a practical risk register.",
      },
      {
        icon: Clock,
        text: "Next, we build a fire safety strategy aligned to international standards and local codes, with clear responsibilities and timelines.",
      },
      {
        icon: ShieldCheck,
        text: "Outcome: prevention by design, not reaction by habit.",
      },
    ],
    image: FireGovernance1,
    imageAlt: "RUAAP Strategic Planning",
  },
  {
    id: "command-control",
    label: "Systems Design & Installations Oversight",
    icon: Ship,
    title: "Systems Design & Installations Oversight",
    features: [
      {
        icon: Package,
        text: "Effective installations require more than procurement—they require engineering governance. We specify, review, and supervise fire detection, alarm, suppression, hydrant networks, smoke control, and emergency lighting for performance, compatibility, and maintainability.",
      },
      {
        icon: MapPin,
        text: "We ensure commissioning discipline, documentation integrity, and lifecycle planning so systems remain reliable beyond handover.",
      },
      {
        icon: ClipboardList,
        text: "Result: compliant infrastructure that actually works when tested under pressure.",
      },
    ],
    image: FireGovernance2,
    imageAlt: "RUAAP Command & Control",
  },
  {
    id: "monitoring",
    label: "Compliance, Inspections & Performance Audits",
    icon: Truck,
    title: " Compliance, Inspections & Performance Audits",
    features: [
      {
        icon: Navigation,
        text: "We help institutions shift from “one-time approvals” to continuous compliance. ApexResilience designs inspection regimes, audit checklists, reporting formats, and escalation pathways that strengthen regulatory clarity and internal accountability.",
      },
      {
        icon: Truck,
        text: "We also support corrective action planning, contractor control, and periodic performance testing with evidence-based records.",
      },
      {
        icon: ShieldCheck,
        text: "This creates a measurable compliance culture that reduces risk year after year.",
      },
    ],
    image: FireGovernance3,
    imageAlt: "RUAAP Monitoring",
  },
  {
    id: "logistics",
    label: "Professional Training & Incident Readiness",
    icon: Truck,
    title: "Professional Training & Incident Readiness",
    features: [
      {
        icon: Navigation,
        text: "Fire safety fails when people are unprepared. We deliver structured training for facility teams, safety officers, responders, and contractors—covering prevention routines, equipment use, evacuation leadership, and incident coordination.",
      },
      {
        icon: Truck,
        text: "Drills are designed to reflect real constraints: congestion, high-rise movement, critical assets, and night operations.",
      },
      {
        icon: ShieldCheck,
        text: "The outcome is disciplined readiness—calm, fast, and coordinated under stress.",
      },
    ],
    image: FireGovernance4,
    imageAlt: "RUAAP Monitoring",
  },
  {
    id: "scalability",
    label: "Community Awareness & National Safety Culture",
    icon: Truck,
    title: "Community Awareness & National Safety Culture",
    features: [
      {
        icon: Navigation,
        text: "Safer communities require public understanding, not just institutional policies. We design targeted awareness campaigns for schools, markets, transport hubs, and residential clusters—focused on practical behaviors, early reporting, and safe evacuation. ",
      },
      {
        icon: Truck,
        text: "We connect community education to municipal enforcement and responder integration, so prevention becomes shared responsibility.",
      },
      {
        icon: ShieldCheck,
        text: "ApexResilience helps build a national safety culture—visible, trusted, and sustainable.",
      },
    ],
    image: FireGovernance5,
    imageAlt: "RUAAP Monitoring",
  },
];

export const RiskServices: React.FC = () => {
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
