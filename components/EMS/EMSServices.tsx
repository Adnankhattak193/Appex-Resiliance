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
  EMS_1,
  EMS_2,
  EMS_3,
  EMS_4,
  EMS_5,
} from "../../Public/images/services/ems/EmsImages";

const services = [
  {
    id: "air-freight",
    label: "Strategic EMS Infrastructure Planning",
    icon: Plane,
    title: "Strategic EMS Infrastructure Planning",
    // subtitle: "Rapid, reliable air cargo movement across global corridors.",
    // description:
    //   "We deliver fast, secure air freight services tailored to time-critical cargo requirements. From express packages to large-scale commercial shipments, our network ensures seamless clearance and delivery worldwide.",
    features: [
      {
        icon: Globe,
        text: "ApexResilience designs EMS networks through data-driven feasibility studies and geo-spatial risk mapping. ",
      },
      {
        icon: Clock,
        text: "We determine optimal Emergency Response Station locations based on population density, traffic flow, incident patterns, and accessibility constraints. The objective is balanced coverage — minimizing response time while maximizing operational sustainability. ",
      },
      {
        icon: ShieldCheck,
        text: "Infrastructure planning includes station typology, fleet mix strategy, equipment standards, and phased deployment modeling aligned with national resilience priorities.",
      },
    ],
    image: EMS_1,
    imageAlt: "Commercial aircraft on runway",
  },
  {
    id: "ocean-freight",
    label: "Integrated Command & Control Architecture",
    icon: Ship,
    title: "Ocean Freight Solutions",
    // subtitle: "Scalable sea freight for bulk international trade.",
    // description:
    //   "Our ocean freight services support full-container-load (FCL) and less-than-container-load (LCL) shipments, optimized for cost efficiency and transit reliability across major global ports.",
    features: [
      {
        icon: Package,
        text: "We architect centralized Emergency Dispatch and Command Centers that unify EMS with existing national emergency services. ",
      },
      {
        icon: MapPin,
        text: "The system integrates call handling, GPS fleet tracking, digital dispatch protocols, performance dashboards, and real-time decision support. ",
      },
      {
        icon: ClipboardList,
        text: "Designed for interoperability, the platform ensures structured coordination, accountability, and data transparency — transforming fragmented response models into a disciplined, intelligence-driven national EMS framework.",
      },
    ],
    image: EMS_2,
    imageAlt: "Container ship at sea",
  },
  {
    id: "road-transport",
    label: "Communication, Monitoring & Performance Intelligence",
    icon: Truck,
    title: "Road Transport Solutions",
    // subtitle:
    //   "Flexible overland freight across domestic and cross-border routes.",
    // description:
    //   "We offer comprehensive road transport solutions across regional and national corridors, ensuring first and last-mile delivery efficiency. Our vetted fleet and qualified drivers guarantee safe, on-time cargo movement.",
    features: [
      {
        icon: Navigation,
        text: "Modern EMS requires continuous oversight. ApexResilience implements secure communication networks, radio interoperability systems, incident data platforms, and live operational dashboards. ",
      },
      {
        icon: Truck,
        text: "Performance indicators such as response intervals, coverage gaps, fleet readiness, and case outcomes are continuously monitored.",
      },
      {
        icon: ShieldCheck,
        text: "This intelligence layer enables adaptive deployment, policy refinement, and measurable service improvement — ensuring EMS evolves through evidence, not assumption.",
      },
    ],
    image: EMS_3,
    imageAlt: "Trucks on a highway",
  },
  {
    id: "warehousing",
    label: "Professional Training & Institutional Capacity Development",
    icon: Warehouse,
    title: "Warehousing & Distribution",
    // subtitle: "Strategic storage and fulfillment infrastructure.",
    // description:
    //   "Our warehousing network provides scalable short- and long-term storage solutions with advanced inventory management systems, enabling efficient pick-and-pack operations and distribution for all business sizes.",
    features: [
      {
        icon: Boxes,
        text: "We design structured EMS training programs covering paramedic competency, dispatch protocol, incident command principles, equipment handling, and patient stabilization standards. ",
      },
      {
        icon: BarChart3,
        text: "Beyond technical skills, we establish training academies, certification frameworks, and instructor development pathways. ",
      },
      {
        icon: Thermometer,
        text: "The goal is institutional strength — ensuring the EMS system is sustained by nationally empowered professionals rather than external dependence.",
      },
    ],
    image: EMS_4,
    imageAlt: "Modern warehouse interior",
  },
  {
    id: "customs-clearance",
    label: "Pilot Implementation, Test-Run & Scalable Expansion",
    icon: FileCheck,
    title: "Customs Clearance",
    // subtitle: "Expert trade compliance and regulatory navigation.",
    // description:
    //   "Our specialists manage the full spectrum of customs processes — from classification and valuation to duty optimization and regulatory compliance — minimizing delays and ensuring smooth border crossings.",
    features: [
      {
        icon: FileText,
        text: "Before national rollout, ApexResilience implements a structured pilot phase. This includes controlled deployment, operational stress testing, simulated incident drills, and performance audits. ",
      },
      {
        icon: ShieldCheck,
        text: "Lessons learned are integrated into system refinement prior to handover. ",
      },
      {
        icon: BarChart3,
        text: "The architecture is built for scalability — allowing phased city-by-city expansion while maintaining governance oversight, cost control, and service standardization",
      },
    ],
    image: EMS_5,
    imageAlt: "Customs documentation and port",
  },
];

export const EMSServices: React.FC = () => {
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
            End-to-end Emergency Management solutions.
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
                {/* Content card (orange) */}
                <div
                  className="flex-1 rounded-[1.5rem] p-8 lg:p-10 flex flex-col justify-between shadow-lg"
                  style={{ background: "#F28C28" }}
                >
                  {/* Top */}
                  <div>
                    <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold tracking-[0.18em] rounded-full px-3 py-1.5 mb-6">
                      <activeService.icon size={12} />
                      Resilience by Design
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-5 ">
                      {activeService.title.split(" ").slice(0, 2).join(" ")}
                      <br />
                      {activeService.title.split(" ").slice(2).join(" ")}
                    </h3>

                    {/* {activeService.description && (
                      <p className="text-white/80 font-medium text-sm mb-6 leading-relaxed">
                        {activeService.description}
                      </p>
                    )} */}

                    {/* Feature list */}
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

                  {/* CTA bottom */}
                  {/* <div className="mt-8">
                    <button className="inline-flex items-center gap-2 bg-white text-accent font-bold text-sm px-5 py-3 rounded-xl hover:bg-white/90 transition-all duration-200 shadow-md hover:shadow-lg">
                      Learn More
                      <ArrowRight size={15} />
                    </button>
                  </div> */}
                </div>

                {/* Supporting image card */}
                <div className="lg:w-[240px] xl:w-[280px] flex-shrink-0 flex flex-col gap-4">
                  {/* Image */}
                  <div className="flex-1 rounded-[1.5rem] overflow-hidden shadow-matte min-h-[200px]">
                    <img
                      src={activeService.image}
                      alt={activeService.imageAlt}
                      className="w-full h-full object-cover"
                      style={{ minHeight: "200px" }}
                    />
                  </div>

                  {/* Subtitle card */}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
