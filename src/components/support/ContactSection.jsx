"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactSection.css";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    message: "",
  });

  // Create a reference to bind to the HTML form element
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these placeholders with your actual keys from your EmailJS dashboard
    const SERVICE_ID = "service_m4obxup";
    const TEMPLATE_ID = "template_83llg48";
    const PUBLIC_KEY = "m2FH2hwMf1823Y0bQ";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      (result) => {
        console.log("Email sent successfully!", result.text);
        alert("Message Sent!");

        // Reset your state fields back to empty strings
        setFormData({
          firstName: "",
          lastName: "",
          emailAddress: "",
          message: "",
        });
      },
      (error) => {
        console.error("Failed to send email...", error.text);
        alert("Something went wrong, please try again.");
      },
    );
  };

  return (
    <section className="cs-section-container">
      <div className="cs-layout-wrapper">
        {/* LEFT SIDE: CONTACT DETAILS INFORMATION */}
        <div className="cs-info-sidebar">
          <h2 className="cs-main-heading">Contact Info</h2>
          <div className="cs-accent-bar"></div>

          <ul className="cs-details-list">
            <li className="cs-details-item">
              <span className="cs-icon" aria-hidden="true">
                📞
              </span>
              <a href="tel:+2347014128270" className="cs-detail-link">
                +2347014128270
              </a>
            </li>
            <li className="cs-details-item">
              <span className="cs-icon" aria-hidden="true">
                ✉️
              </span>
              <a
                href="mailto:contactus@foodtogo-order.com"
                className="cs-detail-link"
              >
                contactus@foodtogo-order.com
              </a>
            </li>
            <li className="cs-details-item">
              <span className="cs-icon" aria-hidden="true">
                📍
              </span>
              <span className="cs-detail-text">
                Filter, fillin, Lekki, Lagos, Nigeria
              </span>
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE: INTERACTIVE INPUT FORM */}
        <form
          ref={formRef}
          className="cs-interactive-form"
          onSubmit={handleSubmit}
        >
          {/* Row container for split text fields */}
          <div className="cs-form-row">
            <div className="cs-input-group">
              <label htmlFor="firstName" className="cs-form-label">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="cs-form-input"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="cs-input-group">
              <label htmlFor="lastName" className="cs-form-label">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="cs-form-input"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="cs-input-group">
            <label htmlFor="emailAddress" className="cs-form-label">
              Email Address
            </label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              className="cs-form-input"
              value={formData.emailAddress}
              onChange={handleChange}
              required
            />
          </div>

          <div className="cs-input-group">
            <label htmlFor="message" className="cs-form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="cs-form-textarea"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="cs-submit-button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
