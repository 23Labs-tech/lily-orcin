"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus("success");
    form.reset();
  };

  return (
    <>
      <form id="contactForm" noValidate onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">
              First Name <span>*</span>
            </label>
            <input type="text" id="firstName" name="firstName" placeholder="Jane" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" placeholder="Smith" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email Address <span>*</span>
          </label>
          <input type="email" id="email" name="email" placeholder="jane@example.com" required />
        </div>

        <div className="form-group">
          <label htmlFor="service">I&apos;m interested in</label>
          <select id="service" name="service" defaultValue="">
            <option value="" disabled>
              Select a service...
            </option>
            <option value="individual">Individual Therapy</option>
            <option value="couples">Couples Therapy</option>
            <option value="content">Wellbeing Content Writing</option>
            <option value="other">General Enquiry</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">
            Message <span>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell me a little about what you're looking for..."
            required
          />
        </div>

        <button type="submit" className="form-submit" id="submitBtn">
          Send Message
        </button>

        <div className={`form-message success${status === "success" ? " show" : ""}`} id="successMsg">
          Thank you — your message has been received. I&apos;ll be in touch within 1–2 business days.
        </div>
        <div className={`form-message error${status === "error" ? " show" : ""}`} id="errorMsg">
          Something went wrong. Please try again or reach out directly via social media.
        </div>
      </form>
    </>
  );
}
