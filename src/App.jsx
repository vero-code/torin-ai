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
import CandidateProfile from "./components/employer/CandidateProfile.jsx";
import PlaceholderPage from "./components/PlaceholderPage.jsx";

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
        <Route path="login" element={<PlaceholderPage title="Login / Registration" theme="dark" />} />

        <Route path="pricing" element={<PlaceholderPage title="Pricing" theme="dark" />} />
      </Route>

      <Route path="/employer" element={<EmployerLayout />}>
        <Route path="dashboard" element={<TalentPoolDashboard />} />
        <Route path="candidate/:candidateId" element={<CandidateProfile />} />
        <Route path="post-challenge" element={<PlaceholderPage title="Post a Challenge" theme="light" />} />
        <Route path="settings" element={<PlaceholderPage title="Settings" theme="light" />} />
      </Route>
    </Routes>
  );
}

export default App;