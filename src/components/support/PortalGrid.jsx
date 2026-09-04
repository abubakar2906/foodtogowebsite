"use client";
import "./PortalGrid.css";

// ── ASSET CONFIGURATIONS (Swap these file location paths with your actual project images) ──
const vendorBg = "/assets/vendorBg.jpg";
const riderBg = "/assets/riderBg.jpg";
const customerBg = "/assets/customerBg.jpg";

export default function PortalGrid() {
  const portalItems = [
    {
      id: "vendor",
      title: "I’m a Vendor",
      linkText: "Vendor Support",
      bgImage: vendorBg,
      destination: "/support",
    },
    {
      id: "rider",
      title: "I’m a Rider",
      linkText: "Rider Support",
      bgImage: riderBg,
      destination: "/support",
    },
    {
      id: "customer",
      title: "I’m a Customer",
      linkText: "Customer Support",
      bgImage: customerBg,
      destination: "/support",
    },
  ];

  return (
    <section className="portal-section-wrapper">
      <div className="portal-grid-container">
        {portalItems.map((card) => (
          <div
            key={card.id}
            className="portal-card"
            style={{ backgroundImage: `url(${card.bgImage})` }}
          >
            {/* Dark translucent gradient mask overlay ensuring font readability */}
            <div className="portal-card-overlay" />

            {/* Content panel arranged absolutely on top of the image container */}
            <div className="portal-card-content">
              <h3 className="portal-card-title">{card.title}</h3>

              <a href={card.destination} className="portal-card-link">
                <span>{card.linkText}</span>
                {/* Embedded dynamic vector arrow matches image dimensions cleanly */}
                <svg
                  className="portal-arrow-svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
