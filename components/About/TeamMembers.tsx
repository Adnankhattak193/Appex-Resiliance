import React from "react";
import { LucideLinkedin, LucideTwitter, Mail } from "lucide-react";
import { nz, arshad, aijaz } from "@/Public/images/About-us/AboutImages";

const teamMembers = [
  {
    name: "SYED AIJAZ KARIM",
    designation: "MANAGING DIRECTOR",
    image: aijaz,
    description:
      "Syed Aijaz Karim is a biomedical engineer and qualified entrepreneur with decades of experience in EMS fleet management, medical equipment, diagnostic labs and mobile clinics. Since 1988, he has driven complex projects across the Middle East and Africa, expanding his services into global markets and advancing specialty vehicle and customized healthcare solutions.",
  },
  {
    name: "NAEEM ZARRAR",
    designation: "EXPERT EMERGENCY RESPONSE SYSTEMS",
    image: nz,
    description:
      "Naeem Zarrar is a pioneer in emergency response systems with over 30 years of leadership in emergency rescue service, fire safety, and capacity building. He has been playing a foundational role in establishing trained, professional & modern emergency response services, led large-scale humanitarian operations, and specializes in system design, command centers, and public-sector implementations.",
  },
  {
    name: "ARSHAD ALI",
    designation: "GENERAL MANAGER",
    image: arshad,
    description:
      "Arshad Ali is a seasoned mechanical engineer with 18+ years of experience in EMS equipment and vehicle design, including exposure to Rolls-Royce aero engines. He brings expertise in project management, technical documentation, and business development, with hands-on specialization in ambulances, fire and rescue, and specialty vehicle solutions.",
  },
];

export const TeamMembers: React.FC = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden text-white border-t border-white/5">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[50rem] h-[50rem] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 md:text-center max-w-3xl mx-auto lg:mb-24">
          <div className="flex items-center gap-4 mb-6 md:justify-center">
            <div className="w-12 h-[1px] bg-accent"></div>
            <span className="text-accent uppercase tracking-widest text-sm font-semibold">
              Leadership
            </span>
            <div className="w-12 h-[1px] bg-accent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Meet Our Experts
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Our multidisciplinary team unites seasoned experts in tactical
            planning, infrastructure resilience, and advanced technology to
            secure tomorrow's critical systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-[#0B0F19] rounded-2xl border border-white/10 overflow-hidden hover:border-accent/50 transition-all duration-500 will-change-transform hover:-translate-y-2 flex flex-col h-full shadow-[0_0_40px_rgba(0,0,0,0.4)]"
            >
              {/* Image Section */}
              <div className="relative h-72 overflow-hidden bg-black/40">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent z-10"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] grayscale group-hover:grayscale-0"
                />
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-10 flex-grow flex flex-col relative">
                {/* Accent line effect */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-accent to-accent/20 group-hover:w-full transition-all duration-700 ease-out"></div>

                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-accent transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-accent/90 uppercase tracking-wider text-xs font-semibold mb-6 flex-shrink-0">
                  {member.designation}
                </p>
                <div className="w-full h-[1px] bg-white/5 mb-6"></div>
                <p className="text-white/60 text-[15px] leading-relaxed flex-grow">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
