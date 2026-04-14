import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  icon: React.ReactNode;
}

export interface ProcessStep {
  title: string;
  description?: string;
}

export interface ImpactItem {
  text: string;
}

declare module "*.png" {
  const value: any;
  export default value;
}