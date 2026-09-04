"use client";
// import React from "react";
import "../components/Rider/HeroRider.css"; // Import the CSS file for styling
import HeroSupport from "../components/support/HeroSupport";
import ContactSection from "../components/support/ContactSection";
import FaqSection from "../components/support/FaqSection";
import PortalGrid from "../components/support/PortalGrid";
import DownloadBanner from "../components/support/DownloadBanner";

export const Support = () => {
  return (
    <div>
      <HeroSupport />

      <ContactSection />
      <FaqSection />
      <PortalGrid />
      <DownloadBanner />
    </div>
  );
};
