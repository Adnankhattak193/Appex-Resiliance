import React from "react";
import { ScrollReveal } from "../ScrollReveal";
import { HospitalInfraHero } from "./HospitalInfraHero";
import { HospitalInfraIntro } from "./HospitalInfraIntro";
import { HospitalInfraServices } from "./HospitalInfraServices";
import { HospitalInfraEnding } from "./HospitalInfraEnding";
import { HospitalInfraCTA } from "./HospitalInfraCTA";

export const HospitalInfra: React.FC = () => {
  return (
    <div className="bg-base min-h-screen">
      <HospitalInfraHero />

      <ScrollReveal>
        <HospitalInfraIntro />
      </ScrollReveal>

      <ScrollReveal>
        <HospitalInfraServices />
      </ScrollReveal>

      <ScrollReveal>
        <HospitalInfraEnding />
      </ScrollReveal>

      <HospitalInfraCTA />
    </div>
  );
};
