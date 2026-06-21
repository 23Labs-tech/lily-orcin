import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import SiteShell from "@/components/SiteShell";
import { INSIGHT_TIMER_URL, PLACEHOLDER_IMG } from "@/lib/constants";
import "./services.css";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore therapy and personal growth services designed to support emotional wellbeing, stronger relationships, and positive life change. Tailored support for individuals and couples.",
};

const modalities = [
  { name: "Psychodynamic Therapy", desc: "Exploring how past experiences and unconscious patterns shape present thoughts, emotions, and relationships." },
  { name: "Person-Centred Therapy", desc: "A humanistic approach creating a non-judgmental, empathetic space where you lead your own healing process." },
  { name: "CBT", desc: "Identifying and reframing unhelpful thought patterns to shift behaviour, build resilience, and improve wellbeing." },
  { name: "Trauma-Informed Practice", desc: "A gentle, stabilising framework that prioritises safety and empowerment for those impacted by trauma." },
  { name: "Narrative Therapy", desc: "Separating your identity from your problems and rewriting the stories that no longer serve you." },
  { name: "Somatic Approaches", desc: "Recognising the body's role in emotional processing, using body awareness to support healing and regulation." },
  { name: "Attachment Theory", desc: "Understanding how early relational bonds influence how you connect, communicate, and trust in adult life." },
  { name: "Mindfulness-Based", desc: "Integrating present-moment awareness to reduce stress, manage emotions, and cultivate inner calm." },
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
            <Image src={PLACEHOLDER_IMG} alt="Individual Therapy" width={600} height={480} unoptimized />
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
            <Image src={PLACEHOLDER_IMG} alt="Couples Therapy" width={600} height={480} unoptimized />
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
            <Image src={PLACEHOLDER_IMG} alt="Wellbeing Content Writing" width={600} height={480} unoptimized />
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
                <span className="modality-icon">●</span>
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
