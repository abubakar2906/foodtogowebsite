"use client";
import React, { useState } from "react";
import "./TeamSection.css";
const profile1 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789595046/anthonia.png";
const profile2 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789595029/daniel.png";
const profile3 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594997/wisdom.jpg";

// ── CUSTOM INLINE SVG ICONS (Bypasses external package bugs completely) ──
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const TwitterIcon = ({ size = 16 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const teamMembers = [
  {
    id: 1,
    name: "Anthonia Obodo",
    role: "Co Founder & Head of Operations",
    department: "Co Founder & Head of Operations",
    image: profile1,
    bio: "Anthonia specializes in assessing operational workflows, identifying resource constraints, and optimizing organizational architecture strategy.",
  },
  {
    id: 2,
    name: "Edano Daniel",
    role: "CTO",
    department: "Engineering",
    image: profile2,
    bio: "Edano drives technical infrastructure design, ensuring cloud frameworks scale dynamically with high availability and optimized data pipelines.",
  },
  {
    id: 3,
    name: "Wisdom Oyenwen",
    role: "Co Founder ",
    department: "Operations",
    image: profile3,
    bio: "Wisdom translates cross-functional client demands into concrete milestones, spearheading production roadmaps from concept to release.",
  },
  // {
  //   id: 4,
  //   name: "David Kross",
  //   role: "Senior Consultant",
  //   department: "Strategy",
  //   image: profile4,
  //   bio: "David delivers high-level corporate governance blueprints, positioning client startups for market execution and robust financial modeling.",
  // },
];

export default function TeamSection() {
  // Controlled modal state: stores member object when open, null when closed
  const [activeModalMember, setActiveModalMember] = useState(null);

  return (
    <div className="team-wrapper-context">
      <h2 className="panel-main-title">Leadership Team</h2>

      {/* ── CORE TEAM GRID LAYOUT ── */}
      <div className="leadership-main-grid">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="member-card-wrapper"
            onClick={() => setActiveModalMember(member)}
          >
            <div className="card-image-box">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="card-info-box">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── INTERACTIVE POP-OUT OVERLAY MODAL ── */}
      {activeModalMember && (
        <div
          className="modal-backdrop-overlay"
          onClick={() => setActiveModalMember(null)} // Closes out when clicking background blur
        >
          <div
            className="modal-popout-card"
            onClick={(e) => e.stopPropagation()} // Disables backdrop trigger inside the dashboard card
          >
            {/* Close Trigger Button */}
            <button
              className="modal-close-btn"
              onClick={() => setActiveModalMember(null)}
              aria-label="Close modal"
            >
              <CloseIcon />
            </button>

            {/* Left Column: Visual Profile Segment */}
            <div className="modal-profile-column">
              <div className="modal-img-box">
                <img
                  src={activeModalMember.image}
                  alt={activeModalMember.name}
                />
              </div>
              <div className="modal-meta-box">
                <h3>{activeModalMember.name}</h3>
                <p>{activeModalMember.role}</p>
              </div>
            </div>

            {/* Right Column: Information & Connected Links Stack */}
            <div className="modal-details-column">
              <h4 className="modal-section-heading">Detailed Profile</h4>
              <p className="modal-bio-text">{activeModalMember.bio}</p>

              <div className="modal-links-stack">
                <div className="modal-link-row">
                  <span className="modal-row-name">
                    {activeModalMember.name}
                  </span>
                  <span className="modal-row-divider">|</span>
                  <span className="modal-row-dept">
                    {activeModalMember.department}
                  </span>
                  <span className="modal-row-divider">|</span>

                  <div className="modal-row-actions">
                    <a
                      href="#twitter"
                      aria-label="Twitter"
                      className="modal-action-btn"
                    >
                      <TwitterIcon size={16} />
                    </a>
                    <a
                      href="#linkedin"
                      aria-label="LinkedIn"
                      className="modal-action-btn"
                    >
                      <LinkedinIcon size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
