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
    <div className="bg-gray-900">
      <HeaderSection onNavigate={setCurrentPage} />
      {currentPage === 'hero' && <HeroSection onGetStarted={handleGetStartedClick} />}
      {currentPage === 'candidate' && <CandidateSection onFormSubmit={handleFindChallenge} />}
      {currentPage === 'challenge' && <ChallengeSection onTakeChallenge={handleTakeChallenge} />}
      {currentPage === 'sandbox' && <SandboxSection />}

      {currentPage === 'hero' && <FeatureSection />}
      <FooterSection />
    </div>
  )
}

export default App;