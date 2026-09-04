"use client";
import React, { useState } from "react";
import "./FaqSection.css";

// ── ASSET IMORTS ──
const badgeIcon = "/assets/badgeIcon.png"; // Left smiling orange badge
const characterIcon = "/assets/characterIcon.png"; // Bottom-right orange character outline

export default function FaqSection() {
  // Set the first item (Index 0) open by default to match the design blueprint
  const [activeIndex, setActiveIndex] = useState(0);

  const faqData = [
    {
      question: "What is FoodToGo?",
      answer:
        "FoodToGo makes food ordering simple. Discover nearby restaurants, place your order in minutes, and have your favorite meals delivered straight to your door.",
    },
    {
      question: "How do I place an order?",
      answer:
        "Browse available menus from your favorite local vendors, select items to add to your cart, fill in your delivery location, select a payment option, and submit your request instantly.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Standard delivery processing ranges between 25 to 45 minutes depending on vendor food preparation timelines and your real-time proximity distance from dispatch riders.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We support a wide array of payment frameworks including secure card networks, direct bank transfer configurations, and integrated localized mobile wallet solutions.",
    },
    {
      question: "Can restaurants update their menus?",
      answer:
        "Yes, all authorized vendors gain access to a dedicated merchant management system dashboard to instantly control item stock levels, pricing points, and active promotions.",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-sticky-viewport-section">
      {/* BACKGROUND SCROLL RUNWAY BANNER */}
      <div className="faq-sticky-green-strip">
        {/* Floating illustrative background branding layers */}
        <img src={badgeIcon} alt="" className="faq-float-graphic left-badge" />
        <img
          src={characterIcon}
          alt=""
          className="faq-float-graphic right-character"
        />
      </div>

      {/* FOREGROUND CARD INTERACTION PLANE */}
      <div className="faq-card-scroller-layer">
        <div className="faq-main-card-frame">
          <h2 className="faq-main-title">FAQs.</h2>

          <div className="faq-accordion-container">
            {faqData.map((item, index) => {
              const isOpen = activeIndex === index;
              return (
                <div
                  key={index}
                  className={`faq-row-item ${isOpen ? "state-expanded" : "state-collapsed"}`}
                >
                  {/* ACCORDION HEADER INTERACTION ZONE */}
                  <button
                    className="faq-header-trigger"
                    onClick={() => handleToggle(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{item.question}</span>

                    {/* Inline decorative smiling orange icon only shown on the active element */}
                    {isOpen && (
                      <span
                        className="faq-active-smile-icon"
                        aria-hidden="true"
                      >
                        😊
                      </span>
                    )}
                  </button>

                  {/* ACCORDION DRAWER ACCESSIBILITY CONTAINER */}
                  <div className="faq-drawer-wrapper">
                    <div className="faq-answer-content">
                      <p className="faq-answer-text">{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
