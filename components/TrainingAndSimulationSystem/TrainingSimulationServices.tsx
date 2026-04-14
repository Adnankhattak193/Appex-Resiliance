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
  Training6,
  Training1,
  Training2,
  Training3,
  Training4,
  Training5,
} from "../../Public/images/services/Training/training";

const services = [
  {
    id: "strategic-planning",
    label: "Multi-Disciplinary Responder Training",
    icon: Plane,
    title: "Multi-Disciplinary Responder Training",
    features: [
      {
        icon: Globe,
        text: "We design structured training programs for emergency responders across EMS, Fire & Rescue, flood response, disaster management, and urban search & rescue, aligned with operational realities and risk environments.",
      },
      {
        icon: Clock,
        text: "Each program integrates technical skills, decision-making, communication, and coordination under pressure.",
      },
      {
        icon: ShieldCheck,
        text: "The outcome is a capable, disciplined workforce ready to respond effectively across diverse emergency scenarios.",
      },
    ],
    image: Training1,
    imageAlt: "Training1",
  },
  {
    id: "command-control",
    label: "Incident Management & Command Training",
    icon: Ship,
    title: "Incident Management & Command Training",
    features: [
      {
        icon: Package,
        text: "Effective response depends on leadership under pressure. We deliver specialized training for incident commanders, control room operators, and multi-agency coordinators to manage complex emergencies with clarity and control.",
      },
      {
        icon: MapPin,
        text: "Programs focus on command structures, decision cycles, communication protocols, and inter-agency coordination.",
      },
      {
        icon: ClipboardList,
        text: "This builds leadership confidence and ensures structured, accountable response during critical incidents",
      },
    ],
    image: Training2,
    imageAlt: "Training2",
  },
  {
    id: "monitoring",
    label: "Simulation-Based Training Environments",
    icon: Truck,
    title: " Simulation-Based Training Environments",
    features: [
      {
        icon: Navigation,
        text: "We develop realistic simulation environments that replicate high-risk scenarios, enabling responders to train in conditions that mirror real emergencies without real-world consequences.",
      },
      {
        icon: Truck,
        text: "From fire grounds to mass-casualty incidents and disaster scenarios, simulations enhance practical readiness and decision-making.",
      },
      {
        icon: ShieldCheck,
        text: "This approach transforms theoretical knowledge into operational competence through immersive, experience-based learning.",
      },
    ],
    image: Training3,
    imageAlt: "Training3",
  },
  {
    id: "logistics",
    label: "Training of Trainers (ToT) & Institutional Capacity",
    icon: Truck,
    title: " Training of Trainers (ToT) & Institutional Capacity",
    features: [
      {
        icon: Navigation,
        text: "Sustainable systems require internal training capability. We establish Training of Trainers programs that enable institutions to build, manage, and continuously deliver their own certified training programs.",
      },
      {
        icon: Truck,
        text: "We develop curricula, training standards, assessment frameworks, and instructor certification processes.",
      },
      {
        icon: ShieldCheck,
        text: "This ensures long-term capability, reducing dependency while strengthening institutional ownership of training systems.",
      },
    ],
    image: Training4,
    imageAlt: "Training4",
  },
  {
    id: "scalability",
    label: "Data-Driven Training & Performance Management",
    icon: Truck,
    title: " Data-Driven Training & Performance Management",
    features: [
      {
        icon: Navigation,
        text: "Training effectiveness must be measurable. We design systems that capture training data, performance metrics, and competency assessments to continuously improve responder readiness.",
      },
      {
        icon: Truck,
        text: "Digital platforms track participation, evaluation results, and operational performance linkage.",
      },
      {
        icon: ShieldCheck,
        text: "This enables evidence-based decision-making, ensuring training investments translate into measurable improvements in response capability.",
      },
    ],
    image: Training5,
    imageAlt: "Training5",
  },
];

export const TrainingSimulationServices: React.FC = () => {
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
