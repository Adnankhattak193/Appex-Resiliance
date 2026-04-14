import React from "react";

export const COLORS = {
  primary: "#0F2C4C",
  secondary: "#1C3F66",
  accent: "#F28C28",
  metallic: "#BFC7D5",
  base: "#F5F7FA",
  alt: "#E9EEF4",
  textPrimary: "#1C2B3A",
  textSecondary: "#44576A",
};

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "#",
    submenu: [
      { label: "EMS Services", href: "/services/ems" },
      { label: "Integrated Resilience (RUAAP)", href: "/services/ruaap" },
      { label: "Fire & Rescue", href: "/services/fire-rescue" },
      { label: "Command & Control", href: "/services/command-control" },
      {
        label: "Disaster Preparedness",
        href: "/services/disaster-preparedness",
      },
      {
        label: "Structured Fire Governance",
        href: "/services/structured-fire-governance",
      },
      {
        label: "Hospital Infrastructure & Medical Equipment",
        href: "/services/hospital-infrastructure",
      },
      {
        label: "Selection & Installation of Equipment",
        href: "/services/equipment-selection",
      },
      {
        label: "Training & Simulation System",
        href: "/services/training-simulation",
      },
    ],
  },
  { label: "AUER-PF Framework", href: "/auer-pf" },
  { label: "System Architecture", href: "/system-architecture" },
  { label: "Research", href: "/research" },
  { label: "Partnership", href: "/partnership" },

  {
    label: "Contact Us",
    href: "/contact",
  },
];
