import React from "react";
import { ScrollReveal } from "../ScrollReveal";
import { AUERPFHero } from "./AUERPFHero";
import { AUERPFArchitecture } from "./AUERPFArchitecture";
import { AUERPFWhyItMatters } from "./AUERPFWhyItMatters";
import { AUERPFOverview } from "./AUERPFOverview";
import { AUERPFOutcomes } from "./AUERPFOutcomes";
import { AUERPFCTA } from "./AUERPFCTA";

export const AUERPF: React.FC = () => {
  return (
    <div className="bg-base min-h-screen">
      <AUERPFHero />

      <ScrollReveal>
        <AUERPFOverview />
      </ScrollReveal>

      {/* <ScrollReveal>
        <AUERPFArchitecture />
      </ScrollReveal> */}

      <ScrollReveal>
        <AUERPFWhyItMatters />
      </ScrollReveal>

      <ScrollReveal>
        <AUERPFOutcomes />
      </ScrollReveal>

      <AUERPFCTA />
    </div>
  );
};
