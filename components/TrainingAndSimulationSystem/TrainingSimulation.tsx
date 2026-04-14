import React from "react";
import { TrainingSimulationHero } from "./TrainingSimulationHero";
import { TrainingSimulationStrategy } from "./TrainingSimulationStrategy";
import { TrainingSimulationServices } from "./TrainingSimulationServices";
import { TrainingSimulationGovernance } from "./TrainingSimulationGovernance";
import { TrainingSimulationCTA } from "./TrainingSimulationCTA";
import { ScrollReveal } from "../ScrollReveal";

export const TrainingSimulation: React.FC = () => {
  return (
    <div className="bg-base min-h-screen">
      <TrainingSimulationHero />

      <ScrollReveal>
        <TrainingSimulationStrategy />
      </ScrollReveal>

      <ScrollReveal>
        <TrainingSimulationServices />
      </ScrollReveal>

      <ScrollReveal>
        <TrainingSimulationGovernance />
      </ScrollReveal>

      <TrainingSimulationCTA />
    </div>
  );
};
