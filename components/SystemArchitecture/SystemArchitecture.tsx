import React from "react";
import { ScrollReveal } from "../ScrollReveal";
import { SystemArchitectureHero } from "./SystemArchitectureHero";
import { SystemArchitectureWhyItMatters } from "./SystemArchitectureWhyItMatters";
import { SystemArchitectureOverview } from "./SystemArchitectureOverview";
import { SystemArchitectureOutcomes } from "./SystemArchitectureOutcomes";
import { SystemArchitectureCTA } from "./SystemArchitectureCTA";

export const SystemArchitecture: React.FC = () => {
  return (
    <div className="bg-base min-h-screen">
      <SystemArchitectureHero />

      <ScrollReveal>
        <SystemArchitectureOverview />
      </ScrollReveal>

      <ScrollReveal>
        <SystemArchitectureWhyItMatters />
      </ScrollReveal>

      <ScrollReveal>
        <SystemArchitectureOutcomes />
      </ScrollReveal>

      <SystemArchitectureCTA />
    </div>
  );
};
