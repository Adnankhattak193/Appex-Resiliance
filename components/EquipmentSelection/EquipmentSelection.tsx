import React from "react";
import { ScrollReveal } from "../ScrollReveal";
import { EquipmentHero } from "./EquipmentHero";
import { EquipmentIntro } from "./EquipmentIntro";
import { EquipmentServices } from "./EquipmentServices";
import { EquipmentEnding } from "./EquipmentEnding";
import { EquipmentCTA } from "./EquipmentCTA";

export const EquipmentSelection: React.FC = () => {
  return (
    <div className="bg-base min-h-screen">
      <EquipmentHero />

      <ScrollReveal>
        <EquipmentIntro />
      </ScrollReveal>

      <ScrollReveal>
        <EquipmentServices />
      </ScrollReveal>

      <ScrollReveal>
        <EquipmentEnding />
      </ScrollReveal>

      <EquipmentCTA />
    </div>
  );
};
