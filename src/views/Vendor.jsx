"use client";
import VendorBanner from "../components/vendor/VendorBarnner";
import NewOpportunities from "../components/vendor/NewOpportunities";
import HowItWorks from "../components/vendor/HowItWorks";
import BusinessVideoSection from "../components/vendor/BusinessVideoSection";
import VendorGridBanner from "../components/vendor/VendorGridBanner";

export const Vendor = () => {
  return (
    <div>
      <VendorBanner />
      <NewOpportunities />
      <HowItWorks />
      <BusinessVideoSection />
      <VendorGridBanner />
    </div>
  );
};
