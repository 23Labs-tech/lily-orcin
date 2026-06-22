import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import SiteShell from "@/components/SiteShell";
import {
  INSIGHT_TIMER_URL,
  LILY_APPROACH_IMG,
  LILY_HERO_IMG,
  LILY_MEET_IMG,
  TOGETHER_INDIVIDUAL_IMG,
  TOGETHER_COUPLES_IMG,
  TOGETHER_FACILITATION_IMG,
  TOGETHER_CONTENT_IMG,
} from "@/lib/constants";
import "./home.css";

const testimonials = [
  "Lily, I am so grateful for your incredible and intensive support. You have really helped me to unravel some deep wounds and hurts and given me the tools to heal and work through them.",
  "You have been totally non-judgmental, validating and honouring of my personal process. Absolutely outstanding. It has been life changing. Thankyou ×1000.",
  "Lily is a truly incredible person. Through my journey with her I have grown exponentially and healed so many areas in life to become more balanced, happy and energetic.",
  "Lily's clinical knowledge combined with her experience in holistic health creates a balanced approach to psychological and spiritual healing. I find myself full of hope and strength for the future.",
  "Lily is the first therapist I've worked with that can get to the core issue so quickly. She has a way of being thorough but also empathetic, understanding and genuine.",
];

const homeServices = [
  {
    title: "Individual Therapy",
    desc: "Using personalised therapeutic approaches, our therapy sessions meet you where you are on your journey to wellbeing.",
    alt: "Individual Therapy",
    img: TOGETHER_INDIVIDUAL_IMG,
  },
  {
    title: "Couples Therapy",
    desc: "With compassion and care, our couples therapy sessions are thoughtfully tailored to meet you both where you are, creating a safe space to heal, reconnect, and build a deeper, more loving relationship together.",
    alt: "Couples Therapy",
    img: TOGETHER_COUPLES_IMG,
  },
  {
    title: "Facilitation",
    desc: "Workshops and webinars are an engaging way to empower participants through psychoeducation towards their personal and professional growth.",
    alt: "Facilitation",
    img: TOGETHER_FACILITATION_IMG,
  },
  {
    title: "Wellbeing Content Writing",
    desc: "Evidence-based wellbeing content for organisations that support emotional health, resilience, and psychological safety — blending clinical insight with practical, accessible guidance.",
    alt: "Wellbeing Content Writing",
    img: TOGETHER_CONTENT_IMG,
    link: INSIGHT_TIMER_URL,
  },
];

export default function HomePage() {
  return (
    <SiteShell active="home">
      <section className="hero" id="home">
        <div className="hero-inner">
          <FadeUp className="hero-text">
            <p className="hero-eyebrow">Auckland, New Zealand</p>
            <h1 className="hero-title">
              Helping You Create
              <br />
              <span className="em-word">Meaningful</span>
              <br />
              Change
            </h1>
            <p className="hero-sub">
              Professional therapy and personal growth support — helping you navigate life&apos;s
              challenges with clarity, confidence, and emotional wellbeing.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn-primary">
                Start Your Journey
              </Link>
              <Link href="/about" className="btn-outline">
                Learn More
              </Link>
            </div>
          </FadeUp>
          <FadeUp className="hero-image-wrap" style={{ transitionDelay: "0.15s" }}>
            <Image src={LILY_HERO_IMG} alt="Lily the Lightworker" width={600} height={600} priority />
            <div className="hero-ornament">
              <div className="num">10+</div>
              <div className="label">Years Experience</div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="meet" id="about">
        <div className="meet-inner section-inner">
          <FadeUp className="meet-image">
            <Image src={LILY_MEET_IMG} alt="Lily" width={600} height={580} />
          </FadeUp>
          <FadeUp className="meet-content" style={{ transitionDelay: "0.1s" }}>
            <span className="section-label">About</span>
            <h2 className="section-title">
              Meet <span className="em-word">Lily</span>
            </h2>
            <div className="divider" />
            <p className="meet-role">Therapist / Counsellor / Facilitator</p>
            <p className="meet-body">
              Lily is a qualified therapist from Auckland, New Zealand. She is passionate about
              helping you overcome unhelpful patterns, past experiences, and mental health
              challenges by drawing on various therapeutic approaches.
            </p>
            <p className="meet-body">
              Combining a holistic approach with her background in psychology, Lily is dedicated to
              creating a balanced and supportive environment in your work together.
            </p>
            <Link href="/about" className="btn-primary">
              Get to Know Me
            </Link>
          </FadeUp>
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-inner">
          <FadeUp className="services-header">
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">
              How We Can <span className="em-word">Work Together</span>
            </h2>
            <div className="divider" />
          </FadeUp>
          <div className="services-grid">
            {homeServices.map((service, index) => (
              <FadeUp key={service.title} className="service-card" style={{ transitionDelay: `${index * 0.05}s` }}>
                <Image className="service-img" src={service.img} alt={service.alt} width={90} height={90} />
                <div className="service-body">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.desc}</p>
                  {service.link && (
                    <a href={service.link} target="_blank" rel="noopener noreferrer" className="service-link">
                      Learn More →
                    </a>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="approach-inner">
          <FadeUp className="approach-content">
            <span className="section-label">Philosophy</span>
            <h2 className="section-title">
              My <span className="em-word">Approach</span>
            </h2>
            <div className="divider" />
            <p className="approach-body">
              Your mental health comes first. I create a safe and judgement-free environment where
              you can take the required steps to begin your healing and self-improvement journey.
            </p>
            <Link href="/about" className="btn-primary">
              Get to Know Me
            </Link>
          </FadeUp>
          <FadeUp className="approach-image" style={{ transitionDelay: "0.1s" }}>
            <Image src={LILY_APPROACH_IMG} alt="Lily's approach" width={732} height={755} quality={90} />
          </FadeUp>
        </div>
      </section>

      <section className="quals">
        <div className="quals-inner section-inner">
          <FadeUp className="quals-block">
            <span className="section-label">Education</span>
            <h3>Qualifications</h3>
            <ul className="quals-list">
              <li>Master of Counselling (First Class Honours)</li>
              <li>Post-Graduate Diploma of Counselling Theory</li>
              <li>Bachelor of Social Science</li>
            </ul>
          </FadeUp>
          <FadeUp className="quals-block" style={{ transitionDelay: "0.1s" }}>
            <span className="section-label">Memberships</span>
            <h3>Affiliations</h3>
            <ul className="quals-list">
              <li>Full Member of the New Zealand Association of Counsellors</li>
              <li>
                Completed professional training in clinical psychology concepts (Centre of Clinical
                Psychology and Psychotherapy)
              </li>
            </ul>
          </FadeUp>
        </div>
      </section>

      <section className="testimonials">
        <div className="section-inner">
          <FadeUp className="testimonials-header">
            <span className="section-label">Kind Words</span>
            <h2 className="section-title">
              Client <span className="em-word">Testimonials</span>
            </h2>
            <div className="divider" />
          </FadeUp>
        </div>
        <div className="testimonials-track-wrap">
          <div className="testimonials-track">
            {[...testimonials, ...testimonials].map((quote, index) => (
              <div key={`${quote.slice(0, 24)}-${index}`} className="testi-card">
                <p className="testi-quote">{quote}</p>
                <p className="testi-author">Identity Protected</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="insight-strip">
        <FadeUp className="insight-strip-inner section-inner">
          <div className="insight-text">
            <span className="section-label">Free Resources</span>
            <h3 className="insight-heading">
              Free Meditations on <span className="em-word">Insight Timer</span>
            </h3>
            <p>
              Check out my free guided meditations — a gentle complement to therapy, or simply a
              place to begin.
            </p>
          </div>
          <a href={INSIGHT_TIMER_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Listen for Free
          </a>
        </FadeUp>
      </section>

      <section className="cta-banner" id="contact">
        <FadeUp className="cta-banner-inner">
          <span className="section-label">Begin Today</span>
          <h2 className="section-title">
            Ready to Start Your <span className="em-word">Journey?</span>
          </h2>
          <p>
            Take the first step towards meaningful change. Reach out to book a session or learn
            more about how we can work together.
          </p>
          <Link href="/contact" className="btn-light">
            Get in Touch
          </Link>
        </FadeUp>
      </section>
    </SiteShell>
  );
}
