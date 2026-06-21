"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type NavProps = {
  active?: "home" | "about" | "services" | "contact";
};

const links = [
  { href: "/", label: "Home", key: "home" as const },
  { href: "/about", label: "About", key: "about" as const },
  { href: "/services", label: "Services", key: "services" as const },
  { href: "/contact", label: "Contact Us", key: "contact" as const, cta: true },
];

export default function Nav({ active }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav id="nav" className={scrolled ? "nav-scrolled" : ""}>
      <Link href="/" className="nav-logo">
        <Image
          src="/LTLW_-_Clear_black.svg"
          alt="Lily Olsen Counselling"
          className="nav-logo-img"
          width={120}
          height={32}
          priority
        />
      </Link>
      <ul className={`nav-links${mobileOpen ? " mobile-open" : ""}`}>
        {links.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className={[
                active === link.key ? "active" : "",
                link.cta ? "nav-cta" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className={`nav-hamburger${mobileOpen ? " open" : ""}`}
        aria-label="Toggle menu"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
