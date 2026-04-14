import React, { Suspense, lazy } from "react";
import { Hero } from "./Hero";
import { ScrollReveal } from "./ScrollReveal";

// Lazy load components to improve initial performance
const Mission = lazy(() =>
  import("./Mission").then((module) => ({ default: module.Mission })),
);
const WhoWeAre = lazy(() =>
  import("./WhoWeAre").then((module) => ({ default: module.WhoWeAre })),
);
const Capabilities = lazy(() =>
  import("./Capabilities").then((module) => ({ default: module.Capabilities })),
);
const WhyApex = lazy(() =>
  import("./WhyApex").then((module) => ({ default: module.WhyApex })),
);
const OwnershipModel = lazy(() =>
  import("./OwnershipModel").then((module) => ({
    default: module.OwnershipModel,
  })),
);
const Impact = lazy(() =>
  import("./Impact").then((module) => ({ default: module.Impact })),
);
const StrategicCall = lazy(() =>
  import("./StrategicCall").then((module) => ({
    default: module.StrategicCall,
  })),
);

// Loading fallback
const SectionLoader = () => (
  <div className="py-24 flex justify-center items-center bg-base text-primary">
    <div className="w-8 h-8 border-4 border-primary/10 border-t-accent rounded-full animate-spin"></div>
  </div>
);

export const Home: React.FC = () => {
  return (
    <>
      {/* Hero is loaded eagerly for LCP */}
      <Hero />

      <Suspense fallback={<SectionLoader />}>
        <ScrollReveal>
          <Mission />
        </ScrollReveal>

        <ScrollReveal>
          <WhoWeAre />
        </ScrollReveal>

        <ScrollReveal>
          <Capabilities />
        </ScrollReveal>

        <ScrollReveal>
          <WhyApex />
        </ScrollReveal>

        <ScrollReveal>
          <OwnershipModel />
        </ScrollReveal>

        <Suspense fallback={<SectionLoader />}>
          {/* <ScrollReveal>
            <Impact />
          </ScrollReveal> */}

          <ScrollReveal>
            <StrategicCall />
          </ScrollReveal>
        </Suspense>
      </Suspense>
    </>
  );
};
