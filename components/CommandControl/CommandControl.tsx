import React from "react";
import { CommandControlHero } from "./CommandControlHero";
import { ScrollReveal } from "../ScrollReveal";
import { CommandControlIntro } from "./CommandControlIntro";
import { CommandControlServices } from "./CommandControlService";
import { CommandControlLastSection } from "./CommandControlLastSection";
import { CommandControlCTA } from "./CommandControlEnding";

export const CommandControl: React.FC = () => {
  return (
    <div className="bg-base min-h-screen">
      <CommandControlHero />

      <ScrollReveal>
        <CommandControlIntro />
      </ScrollReveal>

      <ScrollReveal>
        <CommandControlServices />
      </ScrollReveal>

      <ScrollReveal>
        <CommandControlLastSection />
      </ScrollReveal>

      <CommandControlCTA />
    </div>
  );
};
