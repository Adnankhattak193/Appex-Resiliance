import React from "react";
import { EMSHero } from "./EMSHero";
import { EMSStrategy } from "./EMSStrategy";
import { EMSServices } from "./EMSServices";
import { EMSGovernance } from "./EMSGovernance";

import { EMSCTA } from "./EMSCTA";
import { ScrollReveal } from "../ScrollReveal";

export const EMS: React.FC = () => {
  return (
    <div className="bg-base min-h-screen">
      <EMSHero />

      <ScrollReveal>
        <EMSStrategy />
      </ScrollReveal>

      <ScrollReveal>
        <EMSServices />
      </ScrollReveal>

      <ScrollReveal>
        <EMSGovernance />
      </ScrollReveal>

      <EMSCTA />
    </div>
  );
};
