import React from "react";
import { FireRescueHero } from "./FireRescueHero";
import { FireRescueStrategy } from "./FireRescueStrategy";
import { FireRescueServices } from "./FireRescueServices";
import { FireRescueGovernance } from "./FireRescueGovernance";
import { FireRescueCTA } from "./FireRescueCTA";
import { ScrollReveal } from "../ScrollReveal";

export const FireRescue: React.FC = () => {
  return (
    <div className="bg-base min-h-screen">
      <FireRescueHero />

      <ScrollReveal>
        <FireRescueStrategy />
      </ScrollReveal>

      <ScrollReveal>
        <FireRescueServices />
      </ScrollReveal>

      <ScrollReveal>
        <FireRescueGovernance />
      </ScrollReveal>

      <FireRescueCTA />
    </div>
  );
};
