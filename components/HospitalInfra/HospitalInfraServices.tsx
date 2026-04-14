import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Stethoscope,
  Layout,
  Settings,
  ShieldCheck,
  Users,
  CheckCircle2,
  ArrowRight,
  ClipboardList,
  Activity,
  Search,
  PenTool,
  Truck,
  BookOpen,
} from "lucide-react";
import {
  Hospital1,
  Hospital2,
  Hospital3,
  Hospital4,
  Hospital5,
  Hospital6,
} from "../../Public/images/services/HospitalInfrastructure/Hospital";

const services = [
  {
    id: "facility-assessment",
    label: "Assessment & Planning",
    icon: Search,
    title: "Facility Assessment & Master Planning",
    features: [
      {
        icon: Search,
        text: "Every hospital upgrade must start with a clear operational picture. We assess clinical demand, patient pathways, departmental adjacencies, utilities, safety compliance, and capacity constraints.",
      },
      {
        icon: Layout,
        text: "From this, ApexResilience develops phased master plans and room-by-room functional programs—what each space must achieve, and how it connects to the whole facility.",
      },
      {
        icon: CheckCircle2,
        text: "The result is a realistic roadmap that improves performance without disrupting essential services.",
      },
    ],
    image: Hospital1,
    imageAlt: "Clinical Facility Assessment",
  },
  {
    id: "interior-design",
    label: "Interior Design & Workflow",
    icon: Layout,
    title: "Interior Medical Design & Workflow",
    features: [
      {
        icon: PenTool,
        text: "Clinical interiors are not decoration—they are productivity infrastructure. We design complete or partial medical interiors that reduce cross-traffic, shorten staff movement, and protect infection control zones.",
      },
      {
        icon: Activity,
        text: "ApexResilience translates clinical workflow into layouts, furniture logic, storage systems, and patient-safe circulation—aligned with nursing efficiency and clinical protocols.",
      },
      {
        icon: ShieldCheck,
        text: "You gain calmer operations, safer care delivery, and measurable improvement in throughput.",
      },
    ],
    image: Hospital2,
    imageAlt: "Medical Interior Design",
  },
  {
    id: "equipment-strategy",
    label: "Equipment Strategy",
    icon: Settings,
    title: "Equipment & Furniture Selection Strategy",
    features: [
      {
        icon: ClipboardList,
        text: "Equipment choices should match case-mix, staffing skill, and maintenance capacity—not vendor pressure. We define the right specifications, quantities, and standardization rules for each department.",
      },
      {
        icon: Settings,
        text: "ApexResilience aligns medical technology and furniture with power load, medical gases, IT, and space constraints, ensuring interoperability and lifecycle value.",
      },
      {
        icon: CheckCircle2,
        text: "This reduces underutilized assets and strengthens budgeting control for hospital management.",
      },
    ],
    image: Hospital3,
    imageAlt: "Medical Equipment Strategy",
  },
  {
    id: "installation-handover",
    label: "Installation & Handover",
    icon: Truck,
    title: "Installation, Commissioning & Handover",
    features: [
      {
        icon: Truck,
        text: "Successful supply is proven only when systems work reliably on day one. We supervise installations, verify site readiness, coordinate vendors, and commission equipment against acceptance criteria.",
      },
      {
        icon: Activity,
        text: "ApexResilience delivers documentation, calibration records, asset tagging, and preventive maintenance schedules—so biomedical and facility teams inherit clarity, not confusion.",
      },
      {
        icon: CheckCircle2,
        text: "Handover becomes structured, accountable, and easy to manage operationally.",
      },
    ],
    image: Hospital4,
    imageAlt: "Equipment Commissioning",
  },
  {
    id: "clinical-training",
    label: "Training & Sustainability",
    icon: BookOpen,
    title: "Clinical Training & Operational Sustainability",
    features: [
      {
        icon: Users,
        text: "New infrastructure fails when teams are not prepared to operate it. We provide role-based training for clinicians, biomedical staff, and facility managers—covering safe use, routine checks, and escalation pathways.",
      },
      {
        icon: ClipboardList,
        text: "ApexResilience embeds SOPs, inventory discipline, maintenance routines, and performance monitoring dashboards to protect uptime.",
      },
      {
        icon: ShieldCheck,
        text: "Hospital management gains resilient operations, reduced downtime, and sustained service quality.",
      },
    ],
    image: Hospital5,
    imageAlt: "Clinical Training Session",
  },
];

export const HospitalInfraServices: React.FC = () => {
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
            End-to-end Healthcare Infrastructure solutions.
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
