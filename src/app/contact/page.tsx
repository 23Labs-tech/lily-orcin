import type { Metadata } from "next";
import Image from "next/image";
import FadeUp from "@/components/FadeUp";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import SiteShell from "@/components/SiteShell";
import { FACEBOOK_URL, INSIGHT_TIMER_URL, INSTAGRAM_URL, PLACEHOLDER_IMG } from "@/lib/constants";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Lily The Lightworker to book a session or ask a question. Reach out for professional, compassionate support on your journey toward personal growth.",
};

export default function ContactPage() {
  return (
    <SiteShell active="contact">
      <section className="contact-page" id="contact">
        <div className="contact-inner">
          <FadeUp className="contact-info">
            <span className="section-label">Get in Touch</span>
            <h1 className="section-title">
              Have questions
              <br />
              or need <span className="em-word">support?</span>
            </h1>
            <div className="divider" />
            <Image
              src={PLACEHOLDER_IMG}
              alt="Lily Olsen"
              className="contact-photo"
              width={600}
              height={340}
              unoptimized
            />
            <p className="contact-intro">
              Whether you&apos;re ready to begin therapy or simply want to ask a question first,
              I&apos;d love to hear from you. There&apos;s no pressure — just reach out and we&apos;ll go from
              there.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="detail-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="detail-body">
                  <p className="detail-label">Location</p>
                  <p className="detail-value">Auckland, New Zealand</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="detail-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div className="detail-body">
                  <p className="detail-label">Sessions</p>
                  <p className="detail-value">In-person &amp; Online available</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="detail-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="detail-body">
                  <p className="detail-label">Response time</p>
                  <p className="detail-value">Within 1–2 business days</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="detail-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                  </svg>
                </div>
                <div className="detail-body">
                  <p className="detail-label">Meditations</p>
                  <p className="detail-value">
                    <a href={INSIGHT_TIMER_URL} target="_blank" rel="noopener noreferrer">
                      Free sessions on Insight Timer →
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <p className="contact-social-label">Follow along</p>
            <div className="contact-socials">
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </FadeUp>

          <FadeUp className="contact-form-wrap" style={{ transitionDelay: "0.12s" }}>
            <h2 className="form-title">
              Send a <span className="em-word">Message</span>
            </h2>
            <p className="form-sub">Fill in the form below and I&apos;ll be in touch shortly.</p>
            <ContactForm />
          </FadeUp>
        </div>
      </section>

      <section className="faq">
        <div className="faq-inner">
          <FadeUp className="faq-header">
            <span className="section-label">Common Questions</span>
            <h2 className="section-title">
              Before You <span className="em-word">Reach Out</span>
            </h2>
            <div className="divider" />
          </FadeUp>
          <FAQ />
        </div>
      </section>
    </SiteShell>
  );
}
