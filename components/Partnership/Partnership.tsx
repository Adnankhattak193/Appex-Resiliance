import React from "react";
import { ScrollReveal } from "../ScrollReveal";
import { PartnershipHero } from "./PartnershipHero";
import { PartnershipWhyItMatters } from "./PartnershipWhyItMatters";
import { PartnershipOverview } from "./PartnershipOverview";
import { PartnershipOutcomes } from "./PartnershipOutcomes";
import { PartnershipCTA } from "./PartnershipCTA";

export const Partnership: React.FC = () => {
  return (
    <div className="bg-base min-h-screen">
      <PartnershipHero />

      <ScrollReveal>
        <PartnershipOverview />
      </ScrollReveal>

      <ScrollReveal>
        <PartnershipWhyItMatters />
      </ScrollReveal>

      <ScrollReveal>
        <PartnershipOutcomes />
      </ScrollReveal>

      <PartnershipCTA />
    </div>
  );
};
