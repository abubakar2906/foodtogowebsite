"use client";
import React from "react";
import "./DownloadSection.css";

// Import your assets here
const phoneImage = "/assets/phone2.png";
const tomatoImage = "/assets/tomato.png";
const mascotCharacter = "/assets/mascotCharacter2.png";

// ── 1. IMPORT YOUR BACKGROUND IMAGE HERE ──
const bgImage = "/assets/orange fluffy.png"; // Replace with your actual background image path

export default function DownloadSection() {
  return (
    <section className="download-section-context">
      {/* ── 2. APPLY INLINE BACKGROUND IMAGE STYLE HERE ── */}
      <div
        className="download-container-fluid"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* DRIPPING SAUCE / HONEY EFFECT TOP BACKGROUND */}
        <div className="sauce-drip-overlay">
          <div className="drip-stream"></div>
          <div className="drip-stream"></div>
          <div className="drip-stream"></div>
          <div className="drip-stream"></div>
          <div className="drip-stream"></div>
          <div className="drip-stream"></div>
          <div className="drip-stream"></div>
        </div>

        {/* LEFT COLUMN: CALL TO ACTION & BADGES */}
        <div className="download-left-content">
          <h2 className="download-title">Download Now</h2>

          <div className="store-buttons-stack">
            {/* Google Play Button */}
            <a
              href="#google-play"
              className="store-badge-btn"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                viewBox="0 0 512 512"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z"
                  fill="#ea4335"
                />
                <path
                  d="M26 44.2v423.6c0 11.6 7.9 21.2 19.1 23.9l221-220.9L26 44.2z"
                  fill="#fbbc05"
                />
                <path
                  d="M325.3 277.7l60.1 60.1L104.6 499l220.7-221.3z"
                  fill="#4285f4"
                />
                <path
                  d="M471 231.2l-85.6-49.1-60.1 60.1 60.1 60.1 85.6-49.1c12.4-7.1 12.4-24.9 0-32z"
                  fill="#34a853"
                />
              </svg>
              <div className="btn-text">
                <span className="sub-text">AVAILABLE ON</span>
                <span className="main-text">Google Play</span>
              </div>
            </a>

            {/* App Store Button */}
            <a
              href="#app-store"
              className="store-badge-btn"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                viewBox="0 0 384 512"
                width="22"
                height="22"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-46-19.1-74.5-18.7-36 1-68.7 21.5-87.2 53.4-37.4 64.7-9.6 160.8 26.6 213.3 17.8 25.5 39 53.9 66.4 53 26.3-.9 36.2-16.9 67.9-16.9 31.5 0 40.5 16.9 68.3 16.3 28.2-.5 46.7-25.5 64-50.5 20.2-29.4 28.5-57.8 29-59.3-.6-.3-55.9-21.4-56.3-84.9zM294.1 84c16-19.9 26.8-47.5 23.8-75-23.7 1-52.7 15.8-69.7 35.8-14.7 17.1-27.5 45.1-24.1 72 26.4 2 54-12.9 70-32.8z" />
              </svg>
              <div className="btn-text">
                <span className="sub-text">GET IT ON</span>
                <span className="main-text">App Store</span>
              </div>
            </a>
          </div>

          {/* FLOATING TOMATO COMPONENT */}
          <div className="floating-tomato-box">
            <img
              src={tomatoImage}
              alt="Tomato Garnish"
              className="tomato-img"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: PHONE APP DISPLAY & MASCOT */}
        <div className="download-right-content">
          <div className="phone-mockup-wrapper">
            <img
              src={phoneImage}
              alt="Application Showcase"
              className="phone-mockup-img"
            />
          </div>

          {/* OVERLAY MASCOT CHARACTER */}
          <div className="mascot-wrapper">
            <img
              src={mascotCharacter}
              alt="Mascot Character"
              className="mascot-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
