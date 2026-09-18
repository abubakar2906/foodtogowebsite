"use client";
import { useState } from "react";
import "./NewOpportunities.css";

// ── ASSET IMPORTS ──
const phoneMockupImg1 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594617/VPhone1.png";
const phoneMockupImg2 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789595159/VPhone2.png";
const phoneMockupImg3 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789595094/VPhone3.png";

// ── 1. IMPORT YOUR BACKGROUND IMAGES HERE ──
const bgImg1 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789595279/bg1.png"; // Replace with your actual image paths
const bgImg2 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789595147/bg2.png";
const bgImg3 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789595061/bg3.png";

const TABS = ["Fast", "Easy", "Tracking"];

const SLIDE_DATA = {
  Fast: {
    title: "Fast & Secure Payments",
    description:
      "Get paid quickly and securely. Track earnings, view payment history, and receive timely payouts with complete transparency.",
    bgImage: bgImg1, // Attach image to slide object
    img: phoneMockupImg1,
  },
  Easy: {
    title: "Easy Order Management",
    description:
      "Accept and manage orders effortlessly. Receive orders instantly, update preparation status, and keep everything organized from one dashboard.",
    bgImage: bgImg2, // Attach image to slide object
    img: phoneMockupImg2,
  },
  Tracking: {
    title: "Delivery Tracking",
    description:
      "Know where every order is. Track deliveries in real time and keep customers updated until their food arrives.",
    bgImage: bgImg3, // Attach image to slide object
    img: phoneMockupImg3,
  },
};

export default function NewOpportunities() {
  const [activeTab, setActiveTab] = useState("Fast");

  const currentSlide = SLIDE_DATA[activeTab];

  return (
    <section className="fts-section">
      {/* HEADER CONTROL GROUP CONTAINER */}
      <div className="fts-header">
        <h2 className="fts-main-heading">
          Foodtogo brings{" "}
          <span className="fts-heading-highlight">new opportunities</span>
        </h2>

        <div className="fts-tabs-pill-box">
          {TABS?.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`fts-tab-btn ${activeTab === tab ? "is-active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* INTERACTIVE RESPONSIVE SLIDE DECK VIEWPORT */}
      {/* ── 2. APPLY INLINE BACKGROUND IMAGE STYLE HERE ── */}
      <div
        className="fts-slide-container"
        style={{ backgroundImage: `url(${currentSlide.bgImage})` }}
      >
        {/* Background Decorative Blob Elements */}
        <div className="fts-deco-blob blob-top-left"></div>
        <div className="fts-deco-blob blob-bottom-right"></div>
        <div className="fts-deco-dot dot-top-right"></div>
        <div className="fts-deco-dot dot-bottom-left"></div>

        <div className="fts-slide-layout-grid">
          {/* TEXTUAL PRESENTATION BLOCK */}
          <div className="fts-text-pane">
            <h3 className="fts-slide-title">{currentSlide.title}</h3>
            <p className="fts-slide-desc">{currentSlide.description}</p>
          </div>

          {/* DEVICE MOCKUP FRAME OVERLAY */}
          <div className="fts-image-pane">
            <div className="fts-mockup-wrapper">
              <img
                src={currentSlide.img}
                alt={`FoodToGo app viewport highlighting ${currentSlide.title}`}
                className="fts-phone-device-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
