import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Truck,
  FileCheck,
  BookOpen,
  Radio,
  CheckCircle2,
  ArrowRight,
  Globe,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";
import {
  FireRescue1,
  FireRescue2,
  FireRescue3,
  FireRescue4,
  FireRescue5,
} from "@/Public/images/services/Fire-Rescue/Fire-Rescue";

const services = [
  {
    id: "infrastructure",
    label: "Risk-Led Fire Protection Planning",
    icon: MapPin,
    title: "Risk-Led Fire Protection Planning",
    features: [
      {
        icon: Globe,
        text: "We begin with evidence, not assumptions. ApexResilience maps fire risk across buildings, markets, industry, and transport corridors—then translates it into station locations, fleet mix, staffing, and SOPs.",
      },
      {
        icon: MapPin,
        text: "Prevention is designed into the system: inspections, hydrant strategy, code-enforcement support, and public safety programs.",
      },
      {
        icon: ShieldCheck,
        text: "The result is a plan that reduces incident frequency, limits spread, and improves survivability—before the first siren ever sounds.",
      },
    ],
    image: FireRescue1,
    imageAlt: "Fire station blueprints",
  },
  {
    id: "fleet",
    label: "Fleet, Stations & Coverage Engineering",
    icon: Truck,
    title: "Fleet, Stations & Coverage Engineering",
    features: [
      {
        icon: Settings,
        text: "Modern fire response is a coverage problem. We engineer the right stations, routes, and appliance types for the realities of congestion, narrow streets, and high-rise growth.",
      },
      {
        icon: Truck,
        text: "We specify fit-for-purpose assets—pumps, rescue units, aerial platforms, water tankers—and the maintenance structure that keeps them mission-ready.",
      },
      {
        icon: ShieldCheck,
        text: "Governments gain predictable response times, balanced city-wide reach, and a scalable blueprint that expands from municipal to regional coverage.",
      },
    ],
    image: FireRescue2,
    imageAlt: "Modern fire engine",
  },
  {
    id: "compliance",
    label: "Command Integration & Multi-Agency Coordination",
    icon: FileCheck,
    title: "Command Integration & Multi-Agency Coordination",
    features: [
      {
        icon: FileCheck,
        text: "Fire operations succeed when information moves faster than flames. We integrate Fire & Rescue into a central dispatch and command environment with shared maps, incident triage, and standardized reporting.",
      },
      {
        icon: ShieldCheck,
        text: "Interoperability is built through common communications, unified SOPs, and joint incident management—without diluting agency roles.",
      },
      {
        icon: Globe,
        text: "This creates real-time visibility for leadership, cleaner coordination with EMS and disaster management, and measurable performance across every response zone.",
      },
    ],
    image: FireRescue3,
    imageAlt: "Fire safety inspection",
  },
  {
    id: "training",
    label: "Professional Training & Competency Systems",
    icon: BookOpen,
    title: "Professional Training & Competency Systems",
    features: [
      {
        icon: Users,
        text: "Equipment without competence is risk. ApexResilience builds training systems that upgrade responders from “brave” to professionally standardized—fireground tactics, search & rescue, hazmat awareness, high-rise operations, and safety leadership.",
      },
      {
        icon: BookOpen,
        text: "We develop instructor pipelines, drill calendars, certification pathways, and evaluation tools aligned to operational reality.",
      },
      {
        icon: ShieldCheck,
        text: "The outcome is safer crews, disciplined command on scene, and consistent service quality—regardless of station or shift.",
      },
    ],
    image: FireRescue4,
    imageAlt: "Firefighter training simulation",
  },
  {
    id: "command",
    label: "Performance, Readiness & Continuous Improvement",
    icon: Radio,
    title: "Performance, Readiness & Continuous Improvement",
    features: [
      {
        icon: Radio,
        text: "Modernization must be provable. We implement readiness metrics—vehicle availability, turnout time, response time, water supply access, and incident outcomes—supported by dashboards and audit routines.",
      },
      {
        icon: Settings,
        text: "After-action reviews convert lessons into SOP updates, training priorities, and equipment fixes.",
      },
      {
        icon: ShieldCheck,
        text: "This turns Fire & Rescue into a managed public service: transparent, budget-defensible, and continuously improving from city level to national scale.",
      },
    ],
    image: FireRescue5,
    imageAlt: "Emergency command center",
  },
];

export const FireRescueServices: React.FC = () => {
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
            Core Specializations
            <span className="w-8 h-px bg-accent inline-block" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-primary leading-tight"
          >
            Sovereign <span className="text-accent">Protection</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-textSecondary text-lg max-w-2xl mx-auto"
          >
            Comprehensive architecture for national Fire & Rescue sectors.
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
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full flex flex-col lg:flex-row gap-6"
              >
                <div
                  className="flex-1 rounded-[1.5rem] p-8 lg:p-10 flex flex-col justify-between shadow-lg"
                  style={{ background: "#F28C28" }}
                >
                  <div>
                    <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold tracking-[0.18em] rounded-full px-3 py-1.5 mb-6">
                      <activeService.icon size={12} />
                      Safety by Design
                    </div>

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

                <div className="lg:w-[240px] xl:w-[280px] flex-shrink-0">
                  <div className="rounded-[1.5rem] overflow-hidden shadow-matte h-full min-h-[200px]">
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
