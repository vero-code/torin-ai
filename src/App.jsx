import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import HeroSection from "./components/HeroSection.jsx";
import FeatureSection from "./components/FeatureSection.jsx";
import FooterSection from "./components/FooterSection.jsx";
import HeaderSection from "./components/HeaderSection.jsx";
import CandidateSection from "./components/candidate/CandidateSection.jsx";
import ChallengeSection from "./components/challenge/ChallengeSection.jsx";
import SandboxSection from "./components/sandbox/SandboxSection.jsx";

import EmployerLayout from './components/employer/EmployerLayout.jsx';
import TalentPoolDashboard from './components/employer/TalentPoolDashboard.jsx';

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <HeaderSection />
      <main className="flex-1">
        <Outlet />
      </main>
      <div className="mt-auto">
        <FooterSection />
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <HeroSection />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="features" element={<FeatureSection />} />
        <Route path="sandbox" element={<SandboxSection />} />
        <Route path="candidate" element={<CandidateSection />} />
        <Route path="challenge" element={<ChallengeSection />} />
      </Route>

      <Route path="/employer" element={<EmployerLayout />}>
        <Route path="dashboard" element={<TalentPoolDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;