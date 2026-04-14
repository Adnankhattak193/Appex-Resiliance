import React from "react";
import { DisasterHero } from "./DisasterHero";
import { ScrollReveal } from "../ScrollReveal";
import { DisasterIntro } from "./DisasterIntro";
import { DisasterServices } from "./DisasterServices";
import { DisasterEnding } from "./DisasterEnding";
import { DisasterCTA } from "./DisasterCTA";

export const DisasterPreparedness: React.FC = () => {
  return (
    <div className="bg-base min-h-screen">
      <DisasterHero />

      <ScrollReveal>
        <DisasterIntro />
      </ScrollReveal>

      <ScrollReveal>
        <DisasterServices />
      </ScrollReveal>

      <ScrollReveal>
        <DisasterEnding />
      </ScrollReveal>

      <DisasterCTA />
    </div>
  );
};
