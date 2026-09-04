"use client";
import AboutUsBanner from "../components/AboutUs/AboutUsBanner";
import OurStoryOffer from "../components/AboutUs/OurStoryOffer";
import HowItWorks from "../components/AboutUs/HowItWorks";
import WhatMakesUsDifferent from "../components/AboutUs/WhatMakesUsDifferent";
import TeamSection from "../components/AboutUs/TeamSection";
import TeamCarousel from "../components/AboutUs/TeamCarousel";
import DownloadSection from "../components/AboutUs/DownloadSection";

export const About = () => {
  return (
    <div>
      <AboutUsBanner />
      <OurStoryOffer />
      <HowItWorks />
      <WhatMakesUsDifferent />
      <TeamSection />
      <TeamCarousel />
      <DownloadSection />
    </div>
  );
};
