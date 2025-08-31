import React, { useState } from 'react';
import HeroSection from "./components/HeroSection.jsx";
import FeatureSection from "./components/FeatureSection.jsx";
import FooterSection from "./components/FooterSection.jsx";
import HeaderSection from "./components/HeaderSection.jsx";
import CandidateSection from "./components/candidate/CandidateSection.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState('hero');

  const handleGetStartedClick = () => {
    setCurrentPage('candidate');
  };

  return (
    <>
      <div className="bg-gray-900">
        <HeaderSection />
        {currentPage === 'hero' && <HeroSection onGetStarted={handleGetStartedClick} />}
        {currentPage === 'candidate' && <CandidateSection />}
      </div>

      {currentPage === 'hero' && <FeatureSection />}
      <FooterSection />
    </>
  )
}

export default App;