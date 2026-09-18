"use client";
import React, { useState } from "react";
import "./RiderCarousel.css";

// ── ASSET IMPORTS ──
const badgeLogo = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594637/badgeLogo.png";

// Phone Mockups
const phoneMain1 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594931/phoneMain1.png";
const phoneSide1 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789595140/phoneSide1.png";
const phoneMain2 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594810/phoneMain2.png";
const phoneSide2 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789595065/phoneSide2.png";
const phoneMain3 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594653/phoneMain3.png";
const phoneSide3 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594993/phoneSide3.png";

// Mascot Characters
const mascot1 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594752/mascot1.png";
const mascot2 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594615/mascot2.png";
const mascot3 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789595199/mascot3.png";

// ── 1. IMPORT YOUR BACKGROUND IMAGE ──
const step2BgImage = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789595224/green_fluffy.png"; // Replace with your actual background image path

const CAROUSEL_DATA = [
  {
    id: 1,
    title: "Be Part of Your Community",
    description:
      "Help customers receive their favorite meals quickly while supporting local restaurants and businesses.",
    mascot: mascot1,
    phoneMain: phoneMain1,
    phoneSide: phoneSide1,
    theme: "step-green",
    bgImage: null, // Uses default CSS green background
  },
  {
    id: 2,
    title: "Simple and Convenient",
    description:
      "Use the FoodToGo Rider app to receive orders, navigate routes, and track your earnings all in one place.",
    mascot: mascot2,
    phoneMain: phoneMain2,
    phoneSide: phoneSide2,
    theme: "step-dripping",
    bgImage: step2BgImage, // 👈 Attached background image here
  },
  {
    id: 3,
    title: "Competitive Earnings",
    description:
      "Get rewarded for every delivery you complete, with opportunities to increase your earnings during busy periods.",
    mascot: mascot3,
    phoneMain: phoneMain3,
    phoneSide: phoneSide3,
    theme: "step-green",
    bgImage: null, // Uses default CSS green background
  },
];

export default function RiderCarousel() {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (index) => {
    setActiveStep(index);
  };

  const current = CAROUSEL_DATA[activeStep];

  return (
    <div className="carousel-section-frame">
      {/* ── 2. APPLY INLINE BACKGROUND IMAGE IF PRESENT ── */}
      <div
        className={`carousel-banner-container ${current.theme}`}
        style={
          current.bgImage ? { backgroundImage: `url(${current.bgImage})` } : {}
        }
      >
        {/* CONDITIONAL DRIPPING SAUCE BACKGROUND ACCENT (STEP 2 ONLY) */}
        {current.theme === "step-dripping" && (
          <div className="carousel-sauce-overlay">
            <div className="carousel-drip"></div>
            <div className="carousel-drip"></div>
            <div className="carousel-drip"></div>
            <div className="carousel-drip"></div>
            <div className="carousel-drip"></div>
            <div className="carousel-drip"></div>
          </div>
        )}

        {/* LEFT PANEL: TEXT, STAMP AND CONTROLS */}
        <div className="carousel-left-panel">
          <div className="carousel-brand-badge">
            <img
              src={badgeLogo}
              alt="FoodToGo Logo Stamp"
              className="brand-badge-img"
            />
          </div>

          <div className="carousel-text-group" key={`text-${current.id}`}>
            <h2 className="carousel-heading-title">{current.title}</h2>
            <p className="carousel-body-desc">{current.description}</p>
          </div>

          {/* DYNAMIC NUMBERED STEP CONTROLLERS */}
          <div className="carousel-navigation-dots">
            {CAROUSEL_DATA.map((step, idx) => (
              <button
                key={step.id}
                type="button"
                className={`nav-step-btn ${idx === activeStep ? "is-active" : ""}`}
                onClick={() => handleStepChange(idx)}
                aria-label={`Go to step ${step.id}`}
              >
                {step.id}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL: PHONE MOCKUPS AND INTERLOCKING MASCOTS */}
        <div className="carousel-right-panel" key={`visuals-${current.id}`}>
          <div className={`carousel-mascot-box position-step-${current.id}`}>
            <img
              src={current.mascot}
              alt="Mascot Illustrator Accent"
              className="carousel-mascot-img"
            />
          </div>

          <div className="phone-primary-wrapper">
            <img
              src={current.phoneMain}
              alt="Application Core Interface"
              className="phone-primary-img"
            />
          </div>

          <div className="phone-secondary-wrapper">
            <img
              src={current.phoneSide}
              alt="Application Secondary Interface"
              className="phone-secondary-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
