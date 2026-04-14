import React from "react";
import { RUAAPHero } from "./RUAAPHero";
import { RUAAPStrategy } from "./RUAAPStrategy";
import { RUAAPServices } from "./RUAAPServices";
import { RUAAPGovernance } from "./RUAAPGovernance";
import { RUAAPCTA } from "./RUAAPCTA";
import { ScrollReveal } from "../ScrollReveal";

export const RUAAP: React.FC = () => {
  return (
    <div className="bg-base min-h-screen">
      <RUAAPHero />

      <ScrollReveal>
        <RUAAPStrategy />
      </ScrollReveal>

      <ScrollReveal>
        <RUAAPServices />
      </ScrollReveal>

      <ScrollReveal>
        <RUAAPGovernance />
      </ScrollReveal>

      <RUAAPCTA />
    </div>
  );
};
