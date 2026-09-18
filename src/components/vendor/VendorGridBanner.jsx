"use client";
import "./VendorGridBanner.css";

// ── ASSET IMPORTS ──
const vendorBrowsingImg = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789595124/vendorBrowsingImg.png"; // Top-left user image asset
const foodPackImg = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789595108/foodPackImg.png"; // Bottom-right burger image asset

export default function VendorGridBanner() {
  return (
    <section className="vgb-section-container">
      <div className="vgb-grid-matrix">
        {/* BLOCK 1: TOP LEFT IMAGE */}
        <div className="vgb-grid-item vgb-image-block">
          <img
            src={vendorBrowsingImg}
            alt="Vendor managing business items on a mobile smartphone device"
            className="vgb-cover-img"
          />
        </div>

        {/* BLOCK 2: TOP RIGHT ORANGE TEXT DISPLAY */}
        <div className="vgb-grid-item vgb-text-block theme-orange">
          <p className="vgb-promo-text">
            Join our growing network of vendors and start reaching more
            customers, increasing your sales, and managing your business with
            ease.
          </p>
        </div>

        {/* BLOCK 3: BOTTOM LEFT GREEN TEXT DISPLAY */}
        <div className="vgb-grid-item vgb-text-block theme-green">
          <p className="vgb-promo-text">
            Join our growing network of vendors and start reaching more
            customers, increasing your sales, and managing your business with
            ease.
          </p>
        </div>

        {/* BLOCK 4: BOTTOM RIGHT IMAGE WITH FLOATING ANCHOR LINK */}
        <div className="vgb-grid-item vgb-image-block">
          <img
            src={foodPackImg}
            alt="Freshly prepared burgers packaged inside delivery boxes"
            className="vgb-cover-img"
          />

          {/* FLOATING ACTION LINK */}
          <a
            href="/get-started"
            className="vgb-action-link"
            rel="noopener noreferrer"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
