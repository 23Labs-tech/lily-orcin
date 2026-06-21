import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import SiteShell from "@/components/SiteShell";
import {
  LILY_HERO_IMG,
  ABOUT_APPROACH_IMG,
  ABOUT_SUPPORT_IMG,
  SPECIALITY_IMGS,
} from "@/lib/constants";
import "./about.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Lily The Lightworker's approach to therapy and personal development. Supporting clients with clarity, emotional balance, and practical guidance for real-life growth.",
};

const pillars = [
  {
    title: "My Approach",
    desc: "My approach is holistic, evidence-based and trauma-informed. I aim to provide a safe and nurturing space for us to navigate your inner world, uncovering limiting beliefs, patterns, and emotions. I believe that every individual has the capacity to evolve, and my role is to facilitate that process by offering guidance and tools tailored to you.",
    alt: "My Approach",
    img: ABOUT_APPROACH_IMG,
  },
  {
    title: "How I Support You",
    desc: "With over a decade of experience across NGOs, schools, the public sector, corporate settings, and EAP services, I bring a well-rounded perspective to mental health and wellbeing. My role is to be a compassionate guide, helping you navigate challenges while uncovering your inner strength, authenticity, and resilience.",
    alt: "How I Support You",
    img: ABOUT_SUPPORT_IMG,
  },
];

const specialities = [
  {
    num: "01",
    title: "Women's Wellbeing Across Life Stages",
    desc: "Guiding women from young adults to those navigating perinatal transitions, infertility, and perimenopause/menopause through emotional, physical, and identity-related challenges.",
    alt: "Women's Wellbeing",
  },
  {
    num: "02",
    title: "Trauma-Informed Counselling",
    desc: "Supporting individuals impacted by trauma, vicarious trauma, or chronic stress with a gentle, stabilising, and empathetic approach.",
    alt: "Trauma-Informed Counselling",
  },
  {
    num: "03",
    title: "Mental Health Challenges",
    desc: "Supporting clients experiencing anxiety, depression, and stress using evidence-based strategies, practical tools, and compassionate guidance.",
    alt: "Mental Health",
  },
  {
    num: "04",
    title: "Neurodiversity-Affirming Support",
    desc: "Working with neurodivergent clients and those exploring neurodivergence with validation, education, and practical strategies to navigate daily life and relationships.",
    alt: "Neurodiversity",
  },
  {
    num: "05",
    title: "Couples & Relationship Support",
    desc: "Assisting couples to improve communication, manage conflict, and strengthen connection using evidence-informed techniques tailored to their needs.",
    alt: "Couples & Relationships",
  },
  {
    num: "06",
    title: "Workplace Stress, Burnout & Psychological Safety",
    desc: "Helping clients navigate workplace stress, change, and burnout while fostering healthy boundaries, resilience, and wellbeing at work.",
    alt: "Workplace Stress",
  },
];

export default function AboutPage() {
  return (
    <SiteShell active="about">
      <section className="page-hero">
        <div className="page-hero-inner">
          <FadeUp className="page-hero-text">
            <p className="page-hero-eyebrow">About Lily</p>
            <h1 className="page-hero-title">
              Hi, I&apos;m <span className="em-word">Lily</span>
            </h1>
            <div className="page-hero-lead">
              <p>
                I am a qualified therapist and counsellor (NZAC) based in Auckland, New Zealand. I
                support individuals and couples, drawing on a range of therapeutic modalities to
                meet your unique needs.
              </p>
              <p>
                As a Psychodynamic therapist, I help my clients explore the ways past experiences
                and unconscious thoughts influence present behaviour and relationships. Together, we
                honour where you&apos;ve been, while creating room for where you want to go.
              </p>
              <p>
                I aim to provide a safe and nurturing space for us to navigate your inner world,
                uncovering limiting beliefs, patterns, and emotions. I believe that every individual
                has the capacity to evolve, and my role is to facilitate that process.
              </p>
            </div>
          </FadeUp>
          <FadeUp className="page-hero-image" style={{ transitionDelay: "0.15s" }}>
            <Image src={LILY_HERO_IMG} alt="Lily the Lightworker" width={600} height={580} priority />
          </FadeUp>
        </div>
      </section>

      <section className="pillars">
        <div className="pillars-inner">
          <FadeUp className="pillars-header">
            <span className="section-label">How I Work</span>
            <h2 className="section-title">
              My <span className="em-word">Philosophy</span>
            </h2>
            <div className="divider" />
          </FadeUp>
          <div className="pillars-grid">
            {pillars.map((pillar, index) => (
              <FadeUp key={pillar.title} className="pillar-card" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="pillar-icon">
                  <Image src={pillar.img} alt={pillar.alt} width={80} height={80} />
                </div>
                <div className="pillar-body">
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-desc">{pillar.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="specialities">
        <div className="section-inner">
          <FadeUp className="specialities-header">
            <span className="section-label">Areas of Focus</span>
            <h2 className="section-title">
              My <span className="em-word">Specialities</span>
            </h2>
            <div className="divider" />
          </FadeUp>
          <div className="spec-grid">
            {specialities.map((spec, index) => (
              <FadeUp key={spec.num} className="spec-card" style={{ transitionDelay: `${(index % 3) * 0.08}s` }}>
                <span className="spec-num">{spec.num}</span>
                <div className="spec-img-wrap">
                  <Image src={SPECIALITY_IMGS[index]} alt={spec.alt} width={64} height={64} />
                </div>
                <h3 className="spec-title">{spec.title}</h3>
                <p className="spec-desc">{spec.desc}</p>
              </FadeUp>
            ))}
          </div>
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
              <li>Full Member of the New Zealand Association of Counsellors (NZAC)</li>
              <li>
                Completed professional training in clinical psychology concepts — Centre of Clinical
                Psychology and Psychotherapy
              </li>
            </ul>
          </FadeUp>
        </div>
      </section>

      <section className="cta-banner">
        <FadeUp className="cta-banner-inner">
          <span className="section-label">Take the First Step</span>
          <h2 className="section-title">
            Ready to Begin Your <span className="em-word">Journey?</span>
          </h2>
          <p>Whether you&apos;re navigating a challenge or simply ready for change, I&apos;m here to walk alongside you.</p>
          <div className="cta-actions">
            <Link href="/contact" className="btn-light">
              Get in Touch
            </Link>
            <Link href="/services" className="btn-light-outline">
              View Services
            </Link>
          </div>
        </FadeUp>
      </section>
    </SiteShell>
  );
}
