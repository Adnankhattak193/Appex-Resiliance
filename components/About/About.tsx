import React from "react";
import { AboutHero } from "./AboutHero";
import { AboutPositioning } from "./AboutPositioning";
import { ArchitectureTimeline } from "./ArchitectureTimeline";
import { GovernanceSection } from "./GovernanceSection";
import { NationalImpact } from "./NationalImpact";
import { TeamMembers } from "./TeamMembers";
import { ScrollReveal } from "../ScrollReveal";

export const About: React.FC = () => {
  return (
    <div className="flex flex-col">
      <AboutHero />

      <ScrollReveal>
        <AboutPositioning />
      </ScrollReveal>

      <ScrollReveal>
        <ArchitectureTimeline />
      </ScrollReveal>

      <ScrollReveal>
        <GovernanceSection />
      </ScrollReveal>

      <ScrollReveal>
        <NationalImpact />
      </ScrollReveal>

      <ScrollReveal>
        <TeamMembers />
      </ScrollReveal>

      {/* Decorative footer-transition section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="w-24 h-1 bg-accent mx-auto mb-10"></div>
          <h2 className="text-3xl font-bold text-white mb-6">
            Resilience by Design
          </h2>
          <p className="text-white/40 text-sm uppercase tracking-[0.3em] font-bold">
            ApexResilience International
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5"></div>
      </section>
    </div>
  );
};
