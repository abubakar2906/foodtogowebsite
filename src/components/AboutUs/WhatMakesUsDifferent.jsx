"use client";
import React from "react";
import "./WhatMakesUsDifferent.css";

// Import your assets here
const foodBoxImg = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789595154/food.png"; // Your central food container image
// Optional: if your lime starburst background is a separate image asset

export default function WhatMakesUsDifferent() {
  // Array of stickers with text, color variant, and custom layout positioning classes
  const stickers = [
    {
      text: "Fast Delivery !!",
      variant: "green",
      posClass: "st-fast-delivery",
    },
    { text: "Easy Ordering", variant: "orange", posClass: "st-easy-ordering" },
    { text: "Better Experience", variant: "green", posClass: "st-better-exp" },
    { text: "Fresh Meals", variant: "orange", posClass: "st-fresh-meals" },
    { text: "Quick Service", variant: "orange", posClass: "st-quick-service" },
    { text: "Track Your Delivery", variant: "green", posClass: "st-track-del" },
  ];

  return (
    <section className="wmud-section">
      {/* ── HEADER ── */}
      <div className="wmud-header">
        <h1 className="wmud-title-bg">What Makes Us</h1>
        <p className="wmud-title-fg">Different?</p>
      </div>

      {/* ── INTERACTIVE HERO GRAPHIC AREA ── */}
      <div className="wmud-display-container">
        {/* Starburst backdrop - created with pure CSS clip-path or an imported asset */}
        <div className="wmud-starburst">
          {/* If using an image file instead of CSS layout: <img src={starburstBg} alt="" /> */}
        </div>

        {/* Central Food Box Element */}
        <div className="wmud-center-image-wrapper">
          <img
            src={foodBoxImg}
            alt="Food container filled with chicken, rice, and salad"
            className="wmud-food-img"
          />
        </div>

        {/* Floating, Jittering Stickers Layer */}
        {stickers.map((sticker, index) => (
          <div
            key={index}
            className={`wmud-sticker wmud-sticker--${sticker.variant} ${sticker.posClass}`}
            style={{
              // Offset animation start times so they feel random and unique
              animationDelay: `${index * 0.15}s`,
            }}
          >
            {sticker.text}
          </div>
        ))}
      </div>
    </section>
  );
}
