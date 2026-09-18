"use client";
import "./HowItWorks.css";

// ── ASSET IMPORTS ──
const receiveOrdersIcon = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789595002/receiveOrdersIcon.png";
const prepareCareIcon = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594915/prepareCareIcon.png";
const fastDeliveryIcon = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594668/fastDeliveryIcon.png";
const increaseEarningsIcon = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789595013/increaseEarningsIcon.png";

const STEPS = [
  {
    id: "receive",
    icon: receiveOrdersIcon,
    title: "Receive Orders",
    description: "Get notified instantly whenever a customer places an order.",
  },
  {
    id: "prepare",
    icon: prepareCareIcon,
    title: "Prepare with Care",
    description: "Cook and package each meal while updating its status.",
  },
  {
    id: "delivery",
    icon: fastDeliveryIcon,
    title: "Fast Delivery",
    description:
      "Our riders handle pickup and delivery, keeping customers updated in real time.",
  },
  {
    id: "earnings",
    icon: increaseEarningsIcon,
    title: "Increase Your Earnings",
    description: "Track sales, receive secure payouts, and grow your business.",
  },
];

export default function HowItWorks() {
  return (
    <section className="hiw-section-container">
      <div className="hiw-content-wrapper">
        {/* MAIN SECTION TITLE */}
        <h2 className="hiw-main-heading">How It Works</h2>

        {/* 4-COLUMN WORKFLOW GRID */}
        <div className="hiw-steps-grid">
          {STEPS.map((step) => (
            <div key={step.id} className="hiw-step-card">
              {/* IMAGE WRAPPER (This handles the playful bounce animation) */}
              <div className="hiw-icon-box">
                <img
                  src={step.icon}
                  alt={`${step.title} visual illustration`}
                  className="hiw-3d-icon"
                />
              </div>

              {/* CARD DETAILS */}
              <h3 className="hiw-card-title">{step.title}</h3>
              <p className="hiw-card-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
