import React from "react";
import { ScrollReveal } from "../ScrollReveal";
import { ResearchHero } from "./ResearchHero";
import { ResearchWhyItMatters } from "./ResearchWhyItMatters";
import { ResearchOverview } from "./ResearchOverview";
import { ResearchOutcomes } from "./ResearchOutcomes";
import { ResearchCTA } from "./ResearchCTA";

export const Research: React.FC = () => {
  return (
    <div className="bg-base min-h-screen">
      <ResearchHero />

      <ScrollReveal>
        <ResearchOverview />
      </ScrollReveal>

      <ScrollReveal>
        <ResearchWhyItMatters />
      </ScrollReveal>

      <ScrollReveal>
        <ResearchOutcomes />
      </ScrollReveal>

      <ResearchCTA />
    </div>
  );
};
