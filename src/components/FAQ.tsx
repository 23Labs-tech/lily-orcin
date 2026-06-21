"use client";

import { useState } from "react";
import FadeUp from "./FadeUp";

const faqs = [
  {
    question: "How do I know if therapy is right for me?",
    answer:
      "Therapy can be helpful for anyone navigating challenges, looking to understand themselves better, or simply wanting a consistent space to reflect. You don't need to be in crisis to benefit — many people find therapy valuable as a proactive investment in their wellbeing.",
  },
  {
    question: "Do you offer online sessions?",
    answer:
      "Yes — sessions are available both in-person in Auckland and online via video call, making it easy to access support wherever you are.",
  },
  {
    question: "How much does a session cost?",
    answer:
      "Individual therapy sessions are $120 per session. For couples therapy and facilitation pricing, please get in touch directly and I'll be happy to provide details tailored to your situation.",
  },
  {
    question: "What happens in the first session?",
    answer:
      "The first session is relaxed and unhurried. We'll get to know each other, I'll ask about your background and what's brought you to therapy, and we'll explore what you'd like to work towards. There's no pressure to share more than you're comfortable with.",
  },
  {
    question: "Is everything I share confidential?",
    answer:
      "Confidentiality is a cornerstone of the therapeutic relationship. What you share stays between us, with a small number of legal and ethical exceptions (such as risk of serious harm) that I'll explain clearly before we begin.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <FadeUp key={faq.question} className={`faq-item${isOpen ? " open" : ""}`} style={{ transitionDelay: `${index * 0.05}s` }}>
            <button
              type="button"
              className="faq-question"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="faq-question-text">{faq.question}</span>
              <span className="faq-icon">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <line x1="5.5" y1="1" x2="5.5" y2="10" />
                  <line x1="1" y1="5.5" x2="10" y2="5.5" />
                </svg>
              </span>
            </button>
            <div className="faq-answer">{faq.answer}</div>
          </FadeUp>
        );
      })}
    </div>
  );
}
