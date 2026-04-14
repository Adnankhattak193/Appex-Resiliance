import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

// Lazy load page components
const Home = lazy(() =>
  import("./components/Home").then((module) => ({ default: module.Home })),
);
const About = lazy(() =>
  import("./components/About/About").then((module) => ({
    default: module.About,
  })),
);
const EMS = lazy(() =>
  import("./components/EMS/EMS").then((module) => ({
    default: module.EMS,
  })),
);
const RUAAP = lazy(() =>
  import("./components/RUAAP/RUAAP").then((module) => ({
    default: module.RUAAP,
  })),
);
const FireRescue = lazy(() =>
  import("./components/FireRescue/FireRescue").then((module) => ({
    default: module.FireRescue,
  })),
);
const CommandControl = lazy(() =>
  import("./components/CommandControl/CommandControl.tsx").then((module) => ({
    default: module.CommandControl,
  })),
);

const DisasterPreparedness = lazy(() =>
  import("./components/Disaster Preparedness/DisasterPreparedness.tsx").then(
    (module) => ({
      default: module.DisasterPreparedness,
    }),
  ),
);

const StructuredFireGovernance = lazy(() =>
  import("./components/RiskAssesment/RiskAssesment.tsx").then((module) => ({
    default: module.RiskAssesment,
  })),
);

const HospitalInfra = lazy(() =>
  import("./components/HospitalInfra/HospitalInfra.tsx").then((module) => ({
    default: module.HospitalInfra,
  })),
);

const EquipmentSelection = lazy(() =>
  import("./components/EquipmentSelection/EquipmentSelection.tsx").then(
    (module) => ({
      default: module.EquipmentSelection,
    }),
  ),
);

const AUERPF = lazy(() =>
  import("./components/AUERPF/AUERPF.tsx").then((module) => ({
    default: module.AUERPF,
  })),
);

const SystemArchitecture = lazy(() =>
  import("./components/SystemArchitecture/SystemArchitecture.tsx").then(
    (module) => ({
      default: module.SystemArchitecture,
    }),
  ),
);
const Research = lazy(() =>
  import("./components/Research/Research.tsx").then((module) => ({
    default: module.Research,
  })),
);
const Partnership = lazy(() =>
  import("./components/Partnership/Partnership.tsx").then((module) => ({
    default: module.Partnership,
  })),
);
const ContactUs = lazy(() =>
  import("./components/ContactUs/ContactUs.tsx").then((module) => ({
    default: module.ContactUs,
  })),
);

const TrainingSimulation = lazy(() =>
  import("./components/TrainingAndSimulationSystem/TrainingSimulation.tsx").then(
    (module) => ({
      default: module.TrainingSimulation,
    }),
  ),
);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Loading fallback
const SectionLoader = () => (
  <div className="py-24 flex justify-center items-center bg-base text-primary">
    <div className="w-8 h-8 border-4 border-primary/10 border-t-accent rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<SectionLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/ems" element={<EMS />} />
            <Route path="/services/ruaap" element={<RUAAP />} />
            <Route path="/services/fire-rescue" element={<FireRescue />} />
            <Route
              path="/services/disaster-preparedness"
              element={<DisasterPreparedness />}
            />
            <Route
              path="/services/structured-fire-governance"
              element={<StructuredFireGovernance />}
            />
            <Route
              path="/services/command-control"
              element={<CommandControl />}
            />

            <Route
              path="/services/hospital-infrastructure"
              element={<HospitalInfra />}
            />
            <Route
              path="/services/equipment-selection"
              element={<EquipmentSelection />}
            />
            <Route path="/auer-pf" element={<AUERPF />} />
            <Route
              path="/system-architecture"
              element={<SystemArchitecture />}
            />

            <Route
              path="/services/training-simulation"
              element={<TrainingSimulation />}
            />
            <Route path="/research" element={<Research />} />
            <Route path="/partnership" element={<Partnership />} />
            <Route path="/contact" element={<ContactUs />} />
            {/* Fallback to home for now */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;
