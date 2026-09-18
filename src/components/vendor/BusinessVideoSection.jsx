"use client";
import { useState, useRef, useEffect } from "react";
import "./BusinessVideoSection.css";

// ── ASSET IMPORTS ──
const brandLogo = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789595133/logo_icon.png";
const videoThumbnail = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594799/videoThumbnailB.png";
const businessVideo = "https://res.cloudinary.com/ddzackjqq/video/upload/v1789595435/Video.mp4";

export default function BusinessVideoSection() {
  // 1. Initialize state to true since it starts automatically
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  // 2. Ensure autoplay triggers properly on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => {
          console.log("Autoplay failed or was blocked by browser:", error);
          setIsPlaying(false);
        });
    }
  }, []);

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section className="bvs-outer-container">
      <div className="bvs-content-alignment-box">
        {/* VIDEO WRAPPER CORE WINDOW */}
        <div className="bvs-video-window" onClick={handleTogglePlay}>
          {/* 3. Added autoPlay and muted attributes */}
          <video
            ref={videoRef}
            className="bvs-native-video-player"
            src={businessVideo}
            poster={videoThumbnail}
            autoPlay
            muted
            playsInline
            loop
          />

          {/* PERMANENT BRAND OVERLAY SHIELD */}
          <div className="bvs-overlay-shield">
            {/* Top Branding Metadata Group */}
            <div className="bvs-overlay-header">
              <img
                src={brandLogo}
                alt="FoodToGo White Circular Logo"
                className="bvs-overlay-logo"
              />
              <div className="bvs-overlay-titles">
                <h3 className="bvs-title-main">
                  Grow your business with FoodtoGo
                </h3>
                <p className="bvs-title-sub">Foodtogo Official</p>
              </div>
            </div>

            {/* Playback indicator dot */}
            {isPlaying && <div className="bvs-live-indicator"></div>}
          </div>
        </div>
      </div>

      {/* BACKGROUND BRAND BELT */}
      <div className="bvs-shifted-green-belt"></div>
    </section>
  );
}
