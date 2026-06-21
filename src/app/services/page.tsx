import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import SiteShell from "@/components/SiteShell";
import {
  INSIGHT_TIMER_URL,
  SERVICE_CONTENT_IMG,
  SERVICE_COUPLES_IMG,
  SERVICE_INDIVIDUAL_IMG,
} from "@/lib/constants";
import "./services.css";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore therapy and personal growth services designed to support emotional wellbeing, stronger relationships, and positive life change. Tailored support for individuals and couples.",
};

const modalities = [
  {
    name: "Psychodynamic Therapy",
    desc: "Exploring how past experiences and unconscious patterns shape present thoughts, emotions, and relationships.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
        <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
        <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
        <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
        <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
        <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
        <path d="M6 18a4 4 0 0 1-1.967-.516" />
        <path d="M19.967 17.484A4 4 0 0 1 18 18" />
      </svg>
    ),
  },
  {
    name: "Person-Centred Therapy",
    desc: "A humanistic approach creating a non-judgmental, empathetic space where you lead your own healing process.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 20h10" />
        <path d="M10 20c5.5-2.5.8-6.4 3-10" />
        <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
        <path d="M14.1 6a7 7 0 0 1 1.5 6 4 4 0 0 1-3.4-.3c-.9-.5-1.7-1.4-2.2-2.9 2-.8 3.4-.9 4.1.2z" />
      </svg>
    ),
  },
  {
    name: "CBT",
    desc: "Identifying and reframing unhelpful thought patterns to shift behaviour, build resilience, and improve wellbeing.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
  },
  {
    name: "Trauma-Informed Practice",
    desc: "A gentle, stabilising framework that prioritises safety and empowerment for those impacted by trauma.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 22l8-8" />
        <path d="M16.5 4a4.5 4.5 0 0 1 4.5 4.5c0 2-1.5 4.5-4.5 6S8 17 3 22c0 0 5-4 8-8 2.5-2.5 5.5-3 5.5-5.5a2.5 2.5 0 0 0-2.5-2.5C11 6 9 9 9 9" />
        <circle cx="17" cy="7" r="1" />
      </svg>
    ),
  },
  {
    name: "Narrative Therapy",
    desc: "Separating your identity from your problems and rewriting the stories that no longer serve you.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    name: "Somatic Approaches",
    desc: "Recognising the body's role in emotional processing, using body awareness to support healing and regulation.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
        <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
        <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      </svg>
    ),
  },
  {
    name: "Attachment Theory",
    desc: "Understanding how early relational bonds influence how you connect, communicate, and trust in adult life.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 11H6a4 4 0 0 0 0 8h7" />
        <path d="M7 11V7a5 5 0 0 1 9.33-2.5" />
        <path d="M15 6h2a2 2 0 0 1 2 2v3.5" />
        <path d="M13.5 15.5 16 18l4-4" />
      </svg>
    ),
  },
  {
    name: "Mindfulness-Based",
    desc: "Integrating present-moment awareness to reduce stress, manage emotions, and cultivate inner calm.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8C8 10 5.9 16.17 3.82 22" />
        <path d="M17 8c0 0 2 6-4 10" />
        <path d="M17 8C9 5 5 9 3.82 22" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    num: "01",
    title: "Reach Out",
    desc: "Send me a message through the contact page. There's no pressure — just a simple note to say you're interested. I'll respond within 1–2 business days to arrange a time to connect.",
  },
  {
    num: "02",
    title: "Initial Consultation",
    desc: "We'll have a brief introductory call to discuss what you're hoping to work on and how I might be able to help. It's also a chance for you to ask any questions and get a feel for whether we're a good fit.",
  },
  {
    num: "03",
    title: "First Session",
    desc: "Your first session is about getting to know each other. We'll explore your background, current challenges, and what you'd like to achieve. There's no agenda — just an open, unhurried conversation.",
  },
  {
    num: "04",
    title: "Ongoing Work Together",
    desc: "From there, we'll establish a rhythm that works for you — weekly or fortnightly sessions — drawing on therapeutic approaches tailored to your unique needs and goals as they evolve.",
  },
];

export default function ServicesPage() {
  return (
    <SiteShell active="services">
      <section className="page-hero">
        <FadeUp className="page-hero-inner">
          <span className="page-hero-eyebrow">What I Offer</span>
          <h1 className="page-hero-title">
            Therapy &amp; <span className="em-word">Wellbeing</span>
            <br />
            Services
          </h1>
          <p className="page-hero-lead">
            Every service is tailored to meet you where you are — whether you&apos;re working through
            something difficult, seeking growth, or simply ready for change.
          </p>
          <div className="hero-jump-links">
            <a href="#individual" className="jump-link">
              Individual Therapy
            </a>
            <a href="#couples" className="jump-link">
              Couples Therapy
            </a>
            <a href="#content" className="jump-link">
              Content Writing
            </a>
          </div>
        </FadeUp>
      </section>

      <section className="service-block" id="individual">
        <div className="service-block-inner section-inner">
          <FadeUp className="service-image">
            <Image src={SERVICE_INDIVIDUAL_IMG} alt="Individual Therapy" width={600} height={480} />
            <div className="service-badge">
              <span className="service-badge-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 8C8 10 5.9 16.17 3.82 22" />
                  <path d="M17 8c0 0 2 6-4 10" />
                  <path d="M17 8C9 5 5 9 3.82 22" />
                </svg>
              </span>
              <span className="service-badge-label">
                1 on 1
                <br />
                Sessions
              </span>
            </div>
          </FadeUp>
          <FadeUp className="service-content" style={{ transitionDelay: "0.1s" }}>
            <span className="service-num">01</span>
            <h2 className="service-title">
              Individual
              <br />
              <span className="em-word">Therapy</span>
            </h2>
            <div className="divider" />
            <p className="service-desc">
              In our individual therapy sessions, I provide a safe and confidential space for you to
              explore personal challenges, emotional difficulties, and life transitions.
            </p>
            <p className="service-desc">
              Together, we will develop coping strategies, enhance self-awareness, and work towards
              achieving your personal goals and overall well-being.
            </p>
            <div className="service-price">
              <span className="service-price-amount">$120</span>
              <span className="service-price-label">per session</span>
            </div>
            <div className="service-tags">
              {["Anxiety", "Depression", "Life Transitions", "Trauma", "Self-growth", "Burnout"].map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="service-actions">
              <Link href="/contact" className="btn-primary">
                Book a Session
              </Link>
              <Link href="/about" className="btn-outline">
                Learn About My Approach
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="service-block" id="couples">
        <div className="service-block-inner reverse section-inner">
          <FadeUp className="service-image">
            <Image src={SERVICE_COUPLES_IMG} alt="Couples Therapy" width={600} height={480} />
            <div className="service-badge">
              <span className="service-badge-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </span>
              <span className="service-badge-label">
                For
                <br />
                Couples
              </span>
            </div>
          </FadeUp>
          <FadeUp className="service-content" style={{ transitionDelay: "0.1s" }}>
            <span className="service-num">02</span>
            <h2 className="service-title">
              Couples
              <br />
              <span className="em-word">Therapy</span>
            </h2>
            <div className="divider" />
            <p className="service-desc">
              In couples therapy, I work with both of you to strengthen your relationship by
              addressing communication issues, resolving conflicts, and fostering deeper
              understanding.
            </p>
            <p className="service-desc">
              Through our guided sessions, we&apos;ll navigate challenges, rebuild trust, and cultivate
              a healthier, more fulfilling partnership together.
            </p>
            <div className="service-tags">
              {["Communication", "Trust & Repair", "Conflict Resolution", "Connection", "Attachment"].map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="service-actions">
              <Link href="/contact" className="btn-primary">
                Book a Session
              </Link>
              <Link href="/about" className="btn-outline">
                Learn About My Approach
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="service-block" id="content">
        <div className="service-block-inner section-inner">
          <FadeUp className="service-image">
            <Image src={SERVICE_CONTENT_IMG} alt="Wellbeing Content Writing" width={600} height={480} />
            <div className="service-badge">
              <span className="service-badge-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
              </span>
              <span className="service-badge-label">
                For
                <br />
                Brands
              </span>
            </div>
          </FadeUp>
          <FadeUp className="service-content" style={{ transitionDelay: "0.1s" }}>
            <span className="service-num">03</span>
            <h2 className="service-title">
              Wellbeing Content
              <br />
              <span className="em-word">Writing</span>
            </h2>
            <div className="divider" />
            <p className="service-desc">
              I create thoughtful, evidence-informed wellbeing content tailored to your audience and
              brand voice. Whether it&apos;s blog articles, website copy, or educational resources, the
              focus is on delivering clear, engaging, and supportive content.
            </p>
            <p className="service-desc">
              Each piece is designed to inform, connect, and add real value — building trust and
              promoting mental and emotional wellbeing for your readers.
            </p>
            <div className="service-tags">
              {["Blog Articles", "Website Copy", "Educational Resources", "Evidence-Based"].map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="service-actions">
              <Link href="/contact" className="btn-primary">
                Work With Me
              </Link>
              <a href={INSIGHT_TIMER_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
                View My Work
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="modalities">
        <div className="modalities-inner">
          <FadeUp className="modalities-header">
            <span className="section-label">My Toolkit</span>
            <h2 className="section-title">
              Therapeutic <span className="em-word">Modalities</span>
            </h2>
            <div className="divider" />
            <p style={{ fontSize: "1rem", color: "var(--text-mid)", maxWidth: "560px", lineHeight: 1.8 }}>
              I draw on a range of evidence-based approaches, tailoring each session to your unique
              needs, history, and goals.
            </p>
          </FadeUp>
          <div className="modalities-grid">
            {modalities.map((modality, index) => (
              <FadeUp key={modality.name} className="modality-card" style={{ transitionDelay: `${(index % 4) * 0.08}s` }}>
                <span className="modality-icon">{modality.icon}</span>
                <h3 className="modality-name">{modality.name}</h3>
                <p className="modality-desc">{modality.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="process">
        <div className="process-inner">
          <FadeUp className="process-header">
            <span className="section-label">Getting Started</span>
            <h2 className="section-title">
              What to <span className="em-word">Expect</span>
            </h2>
            <div className="divider" />
            <p style={{ fontSize: "1rem", color: "var(--text-mid)", maxWidth: "520px", lineHeight: 1.8 }}>
              Beginning therapy can feel daunting. Here&apos;s how our journey together typically unfolds.
            </p>
          </FadeUp>
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <FadeUp key={step.num} className="process-step" style={{ transitionDelay: `${index * 0.08}s` }}>
                <div className="step-num-wrap">
                  <span className="step-num">{step.num}</span>
                </div>
                <div className="step-body">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="insight">
        <div className="insight-inner">
          <FadeUp className="insight-text">
            <span className="section-label">Free Resources</span>
            <h2 className="insight-heading">
              Free Meditations on <span className="em-word">Insight Timer</span>
            </h2>
            <p>
              Check out my free guided meditations available on Insight Timer — a great complement
              to therapy or simply a place to begin.
            </p>
          </FadeUp>
          <FadeUp style={{ transitionDelay: "0.1s", flexShrink: 0 }}>
            <a href={INSIGHT_TIMER_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Listen for Free →
            </a>
          </FadeUp>
        </div>
      </section>

      <section className="cta-banner">
        <FadeUp className="cta-banner-inner">
          <span className="section-label">Take the First Step</span>
          <h2 className="section-title">
            Ready to Get <span className="em-word">Started?</span>
          </h2>
          <p>Whether you&apos;re navigating a challenge or simply ready for change, I&apos;m here to walk alongside you.</p>
          <div className="cta-actions">
            <Link href="/contact" className="btn-light">
              Get in Touch
            </Link>
            <Link href="/about" className="btn-light-outline">
              Learn About Me
            </Link>
          </div>
        </FadeUp>
      </section>
    </SiteShell>
  );
}
