"use client";
import React from "react";
import "./Privacy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      {/* Header / Hero Section */}
      <header className="privacy-hero">
        <div className="hero-content">
          <h1>PRIVACY POLICY</h1>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="privacy-body">
        <div className="meta-info">
          <p>
            <strong>Effective Date: 29 May 2026 </strong>
          </p>
          <p>
            <strong>Last Updated: 29 May 2026 </strong>
          </p>
        </div>

        <section className="policy-section">
          <h2>1. INTRODUCTION</h2>
          <p>
            FoodToGo ("FoodToGo," "we," "our," or "us") is committed to
            protecting the privacy, confidentiality, and security of personal
            information entrusted to us by our customers, restaurant partners,
            riders, website visitors, and other users of our platform.
          </p>

          <p>
            This Privacy Policy explains how we collect, use, store, disclose,
            process, and protect personal information when you access or use:
          </p>

          <ul>
            <ul>
              <li>The FoodToGo Customer Application</li>
              <li>The FoodToGo Vendor Application </li>
              <li>The FoodToGo Rider Application</li>
              <li>The FoodToGo Website</li>
              <li>Related services, communications, and support channels </li>
            </ul>
          </ul>
        </section>

        <section className="policy-section">
          <h2>2. DEFINITIONS</h2>
          <p>
            <strong>Customer</strong> means any person who places orders through
            the FoodToGo platform.
          </p>
          <p>
            <strong>Vendor</strong> means any restaurant, food vendor, merchant,
            or business offering products through FoodToGo.
          </p>
          <p>
            <strong>Rider</strong>means any delivery partner providing delivery
            services through the platform.
          </p>
          <p>
            <strong>Personal Data</strong> means any information that identifies
            or can reasonably identify an individual.
          </p>
          <p>
            <strong>Platform</strong> means all FoodToGo applications, websites,
            systems, and services.
          </p>
        </section>

        <section className="policy-section">
          <h2>3. INFORMATION WE COLLECT</h2>
          <h3>3.1 Information Collected from Customers </h3>
          <h3>We may collect:</h3>
          <ul>
            <ul>
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Mobile phone number</li>
              <li>Delivery addresses </li>
              <li>Account credentials </li>
              <li>Order history </li>
              <li>Customer support interactions </li>
              <li>Device information </li>
              <li>IP address </li>
              <li>Location information </li>
              <li>Marketing preferences </li>
            </ul>
          </ul>

          <h3>3.2 Information Collected from Vendors </h3>
          <h3>We may collect:</h3>
          <ul>
            <ul>
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Mobile phone number</li>
              <li>Business Name</li>
              <li>Business registration details </li>
              <li>CAC information </li>
              <li>Business address </li>
              <li>Contact details </li>
              <li>Bank account information </li>
              <li>Tax information (where applicable) </li>
              <li>Product listings </li>
              <li>Order fulfillment records </li>
              <li>Customer ratings and reviews </li>
            </ul>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. PAYMENT INFORMATION </h2>

          <p>
            FoodToGo may process payments through licensed third-party payment
            providers.
          </p>
          <h3>We may collect:</h3>
          <ul>
            <ul>
              <li>Payment transaction details </li>
              <li>Payment status </li>
              <li>Transaction references </li>
            </ul>
          </ul>

          <p>
            FoodToGo does not intentionally store complete debit card or credit
            card information on its servers unless required by applicable law or
            payment processing requirements.
          </p>
          <p>
            Payment information is processed in accordance with applicable
            financial security standards and payment provider requirements.
          </p>
        </section>

        <section className="policy-section">
          <h2>5. LOCATION TRACKING </h2>
          <h3>Customers</h3>
          <p>We may collect location information to:</p>
          <ul>
            <ul>
              <li> Identify nearby vendors </li>
              <li>Improve delivery accuracy </li>
              <li>Provide location-based services </li>
            </ul>
          </ul>

          <h3>Riders</h3>
          <p>FoodToGo may collect: </p>
          <ul>
            <ul>
              <li> Real-time GPS location </li>
              <li>Background location data </li>
              <li>Delivery route information </li>
            </ul>
          </ul>
          <p>
            This information may be collected while deliveries are active and,
            where necessary, during operational hours to facilitate delivery
            coordination, safety, fraud prevention, and customer support.
          </p>

          <h3>Vendors</h3>
          <p>Location information may be used to: </p>
          <ul>
            <ul>
              <li>Display business locations </li>
              <li>Coordinate deliveries </li>
              <li>Improve service efficiency </li>
            </ul>
          </ul>
        </section>

        <section className="policy-section">
          <h2>6. COOKIES AND ANALYTICS </h2>
          <p>
            FoodToGo may use cookies, pixels, SDKs, and similar technologies to:
          </p>

          <ul>
            <ul>
              <li>Authenticate users </li>
              <li>Improve user experience </li>
              <li>Measure platform performance </li>
              <li>Analyze user behavior </li>
              <li>Prevent fraud </li>
              <li>Deliver relevant content </li>
            </ul>
          </ul>
          <p>Analytics tools may include:</p>

          <ul>
            <ul>
              <li>Google Analytics </li>
              <li>Firebase Analytics </li>
              <li>Application performance monitoring tools </li>
              <li>Other approved analytics providers </li>
            </ul>
          </ul>
          <p>
            Users may manage cookie preferences through their browser settings
            where applicable.
          </p>
        </section>

        <section className="policy-section">
          <h2>7. HOW WE USE PERSONAL INFORMATION </h2>
          <p>We may use information to:</p>
          <ul>
            <ul>
              <li>Create and manage user accounts </li>
              <li>Process orders and deliveries</li>
              <li>Verify identities </li>
              <li>Process payments </li>
              <li>Communicate with users </li>
              <li>Provide customer support </li>
              <li>Improve platform functionality </li>
              <li>Conduct analytics </li>
              <li>Prevent fraud and abuse </li>
              <li>Meet legal obligations </li>
              <li>Conduct business operations </li>
              <li>Enforce platform policies </li>
            </ul>
          </ul>
        </section>

        <section className="policy-section">
          <h2>8. MARKETING COMMUNICATIONS </h2>

          <p>FoodToGo may send: </p>
          <ul>
            <ul>
              <li>Promotional emails </li>
              <li>SMS messages</li>
              <li>Push notifications </li>
              <li>WhatsApp notifications </li>
              <li>Product updates </li>
              <li>Special offers </li>
              <li>Loyalty program communications </li>
            </ul>
          </ul>

          <p>
            Users may opt out of marketing communications at any time using
            available unsubscribe mechanisms.
          </p>
          <p>
            Operational and transactional communications may continue where
            necessary to provide services.
          </p>
        </section>

        <section className="policy-section">
          <h2>9. DATA SHARING AND DISCLOSURE </h2>
          <p>FoodToGo may share information with:</p>
          <h3>Vendors</h3>
          <p>
            To facilitate order fulfillment. <br />
            Examples include:
          </p>

          <ul>
            <ul>
              <li> Customer name </li>
              <li> Contact information </li>
              <li> Delivery information </li>
              <li> Order details </li>
            </ul>
          </ul>

          <h3>Riders</h3>
          <p>
            To facilitate delivery services. <br />
            Examples include:
          </p>

          <ul>
            <ul>
              <li>Customer name </li>
              <li>Delivery address </li>
              <li>Contact information </li>
              <li>Order information </li>
            </ul>
          </ul>

          <h3>Payment Providers </h3>
          <p>To process transactions securely. </p>
          <h3>Service Providers </h3>
          <p>including:</p>
          <ul>
            <ul>
              <li>Hosting providers </li>
              <li>Analytics providers </li>
              <li>Customer support providers </li>
              <li>Marketing providers </li>
              <li>Communication providers </li>
            </ul>
          </ul>

          <h3>Government Authorities </h3>
          <p>
            Where required by law, regulation, court order, or lawful request.
          </p>

          <h3>Corporate Transactions </h3>
          <p>Information may be transferred during:</p>

          <ul>
            <ul>
              <li>Mergers </li>
              <li>Acquisitions </li>
              <li>Business restructuring </li>
              <li>Asset sales </li>
            </ul>
          </ul>
        </section>

        <section className="policy-section">
          <h2>10. DATA RETENTION </h2>
          <p>
            FoodToGo retains personal information only for as long as necessary
            to:
          </p>

          <ul>
            <ul>
              <li>Provide services </li>
              <li>Meet legal obligations </li>
              <li>Resolve disputes </li>
              <li>Enforce agreements </li>
              <li>Maintain business records </li>
            </ul>
          </ul>
          <p>Retention periods may vary depending on: </p>

          <ul>
            <ul>
              <li>User type</li>
              <li>Legal requirements</li>
              <li>Business necessity </li>
            </ul>
          </ul>
          <p>
            Information that is no longer required may be deleted, anonymized,
            or securely archived.{" "}
          </p>
        </section>

        <section className="policy-section">
          <h2>11. DATA SECURITY </h2>
          <p>
            FoodToGo implements reasonable administrative, technical, and
            organizational safeguards designed to protect personal information
            against:
          </p>

          <ul>
            <ul>
              <li>Unauthorized access </li>
              <li>Disclosure</li>
              <li>Alteration </li>
              <li>Destruction </li>
              <li> Misuse </li>
            </ul>
          </ul>
          <p>
            While we strive to protect user information, no electronic
            transmission or storage system can be guaranteed to be completely
            secure.
          </p>
        </section>

        <section className="policy-section">
          <h2>12. USER RIGHTS </h2>
          <p>Subject to applicable law, users may have the right to:</p>

          <ul>
            <ul>
              <li>Access personal information </li>
              <li>Request correction of inaccurate information </li>
              <li>Request deletion of personal information </li>
              <li>Withdraw consent where applicable </li>
              <li>Restrict certain processing activities </li>
              <li>Object to processing </li>
              <li>Request data portability </li>
              <li>Lodge complaints with relevant regulatory authorities </li>
            </ul>
          </ul>
          <p>
            Requests may be submitted through the contact details provided in
            this Privacy Policy.
          </p>
        </section>

        <section className="policy-section">
          <h2>13. CHILDREN'S PRIVACY </h2>
          <p>
            FoodToGo services are not intended for individuals under the age of
            18. <br />
            We do not knowingly collect personal information from minors without
            appropriate legal authorization.
          </p>
        </section>

        <section className="policy-section">
          <h2>14. INTERNATIONAL DATA TRANSFERS </h2>
          <p>
            Where necessary, FoodToGo may transfer personal information to
            service providers or partners located outside Nigeria.
          </p>
          <p>
            Such transfers shall be conducted in accordance with applicable data
            protection laws and appropriate safeguards.
          </p>
        </section>

        <section className="policy-section">
          <h2>15. COMPLIANCE WITH THE NIGERIAN DATA PROTECTION ACT (NDPA) </h2>
          <p>
            FoodToGo is committed to processing personal data in accordance
            with:
          </p>
          <ul>
            <ul>
              <li>The Nigerian Data Protection Act (NDPA) </li>
              <li>Applicable regulations issued by relevant authorities </li>
              <li>Other applicable privacy and data protection laws </li>
            </ul>
          </ul>
          <p>
            FoodToGo shall implement appropriate measures to ensure lawful,
            fair, transparent, and secure processing of personal information
          </p>
        </section>

        <section className="policy-section">
          <h2>16. THIRD-PARTY LINKS AND SERVICES </h2>
          <p>
            FoodToGo may contain links to third-party websites, applications, or
            services.
          </p>
          <p>
            We are not responsible for the privacy practices or content of
            third-party platforms.
          </p>
          <p>
            Users are encouraged to review the privacy policies of such third
            parties before providing personal information.
          </p>
        </section>

        <section className="policy-section">
          <h2>17. CHANGES TO THIS PRIVACY POLICY </h2>
          <p>FoodToGo may update this Privacy Policy periodically.</p>
          <p>Material changes may be communicated through:</p>

          <ul>
            <ul>
              <li>Email</li>
              <li>Website notices</li>
              <li>In-app notifications</li>
              <li>Other official communication channels</li>
            </ul>
          </ul>
          <p>
            Continued use of the platform following updates constitutes
            acceptance of the revised Privacy Policy.
          </p>
        </section>

        <section className="policy-section">
          <h2>18. CONTACT US </h2>
          <p>
            For questions, complaints, requests, or privacy-related concerns,
            please contact:
          </p>
          <h3>FoodToGo </h3>
          <ul>
            <ul>
              <li>
                Email:{"  "}
                <a
                  href="mailto:contactus@foodtogo-order.com"
                  className="cs-detail-link"
                >
                  contactus@foodtogo-order.com
                </a>
              </li>
              <li>
                Phone:{"  "}
                <a href="tel:+2347014128270" className="cs-detail-link">
                  +2347014128270
                </a>
              </li>
            </ul>
          </ul>
          <p>
            Continued use of the platform following updates constitutes
            acceptance of the revised Privacy Policy.
          </p>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
