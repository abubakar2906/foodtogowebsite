"use client";
// import React from "react";
import HeroRider from "../components/Rider/HeroRider";
import RiderCarousel from "../components/Rider/RiderCarousel";
import DeliverWithUs from "../components/Rider/DeliverWithUs";
import HowToJoin from "../components/Rider/HowToJoin";

export const Rider = () => {
  return (
    <div>
      <HeroRider />
      <RiderCarousel />
      <DeliverWithUs />
      <HowToJoin />
    </div>
  );
};
