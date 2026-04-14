import React from "react";

import { RiskHero } from "./RiskHero";
import { RiskIntro } from "./RiskIntro";
import { ScrollReveal } from "../ScrollReveal";
import { RiskServices } from "./RiskServices";
import { RiskEnding } from "./RiskEnding";
import { RiskCTA } from "./RiskCTA";

export const RiskAssesment: React.FC = () => {
  return (
    <div className="bg-base min-h-screen">
      <RiskHero />

      <ScrollReveal>
        <RiskIntro />
      </ScrollReveal>

      <ScrollReveal>
        <RiskServices />
      </ScrollReveal>

      <ScrollReveal>
        <RiskEnding />
      </ScrollReveal>

      <RiskCTA />
    </div>
  );
};
