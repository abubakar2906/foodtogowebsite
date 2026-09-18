"use client";
import "./HowToJoin.css";

// ── ASSET IMPORTS ──
const signupIcon = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594969/signupIcon.png";
const approvedIcon = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594895/approvedIcon.png";
const deliveryIcon = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789595110/deliveryIcon.png";

const JOIN_STEPS = [
  {
    number: "1",
    icon: signupIcon,
    title: "Download/Sign up",
    description:
      "Download the app, Sign up, Fill out the form and upload the documents",
  },
  {
    number: "2",
    icon: approvedIcon,
    title: "Get Approved",
    description: "Wait to get verified",
  },
  {
    number: "3",
    icon: deliveryIcon,
    title: "Start Delivering",
    description: "Start earning",
  },
];

const REQUIREMENTS = [
  "18+ years old",
  "Smart phone and vehicle",
  "Valid ID",
  "Right to work in your country",
];

export default function HowToJoin() {
  return (
    <section className="htj-section-container">
      <div className="htj-content-wrapper">
        {/* SECTION HEADER */}
        <h2 className="htj-main-title">How to join</h2>

        {/* THREE-STEP WORKFLOW GRID */}
        <div className="htj-steps-grid">
          {JOIN_STEPS.map((step) => (
            <div key={step.number} className="htj-step-card">
              <div className="htj-graphic-row">
                <span className="htj-step-number">{step.number}</span>
                <div className="htj-icon-frame">
                  <img
                    src={step.icon}
                    alt={`${step.title} icon`}
                    className="htj-icon-img"
                  />
                </div>
              </div>
              <h3 className="htj-step-title">{step.title}</h3>
              <p className="htj-step-desc">{step.description}</p>
            </div>
          ))}
        </div>

        {/* BOTTOM REQUIREMENTS ALERT CARD */}
        <div className="htj-requirements-card">
          <h4 className="htj-req-title">Requirements to become a rider</h4>
          <ul className="htj-req-list">
            {REQUIREMENTS.map((req, index) => (
              <li key={index} className="htj-req-item">
                <span className="htj-bullet-dot"></span>
                {req}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
