"use client";
import React from "react";
import "./DBanner.css";

// ── ASSET IMPORT (Swap this path with your actual phone image location) ──
const phoneHandMockup = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594682/phone-mockup.png";

export default function DownloadBanner() {
  return (
    <div className="download-banner-card">
      {/* LEFT COLUMN: CALL TO ACTION TEXT & BUTTON */}
      <div className="download-banner-text-side">
        <h2 className="download-banner-heading">
          Where Great Food
          <br />
          Meets Fast Delivery.
        </h2>

        <button className="download-action-btn">Download</button>
      </div>

      {/* RIGHT COLUMN: GRAPHICS AND POSITIONED PHONE DEVICE */}
      <div className="download-banner-image-side">
        <img
          src={phoneHandMockup}
          alt="Food App interface held in hand showing tracking and ordering features"
          className="download-phone-mockup"
        />
      </div>
    </div>
  );
}
