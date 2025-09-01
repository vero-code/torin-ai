import React, { useState } from 'react';
import HeroSection from "./components/HeroSection.jsx";
import FeatureSection from "./components/FeatureSection.jsx";
import FooterSection from "./components/FooterSection.jsx";
import HeaderSection from "./components/HeaderSection.jsx";
import CandidateSection from "./components/candidate/CandidateSection.jsx";
import ChallengeSection from "./components/challenge/ChallengeSection.jsx";
import SandboxSection from "./components/sandbox/SandboxSection.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState('hero');

  const handleGetStartedClick = () => {
    setCurrentPage('candidate');
  };

  const handleFindChallenge = () => {
    setCurrentPage('challenge');
  };

  const handleTakeChallenge = () => setCurrentPage('sandbox');

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <HeaderSection onNavigate={setCurrentPage} />

      <main className="flex-1">
        {currentPage === 'hero' && <HeroSection onGetStarted={handleGetStartedClick} />}
        {currentPage === 'features' && <FeatureSection />}
        {currentPage === 'candidate' && <CandidateSection onFormSubmit={handleFindChallenge} />}
        {currentPage === 'challenge' && <ChallengeSection onTakeChallenge={handleTakeChallenge} />}
        {currentPage === 'sandbox' && <SandboxSection />}
      </main>

      <div className="mt-auto">
        <FooterSection />
      </div>
    </div>
  )
}

export default App;