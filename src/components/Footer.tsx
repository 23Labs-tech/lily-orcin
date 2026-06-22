import Image from "next/image";
import Link from "next/link";
import { FACEBOOK_URL, INSTAGRAM_URL, LOGO_FOOTER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <Image
              src={LOGO_FOOTER}
              alt="Lily Olsen Counselling"
              className="footer-logo-img"
              width={127}
              height={110}
            />
          </Link>
          <p className="footer-tagline">
            A qualified therapist and counsellor based in Auckland, New Zealand.
            Supporting individuals and couples through a range of therapeutic
            modalities.
          </p>
          <div className="footer-socials">
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
        </div>
        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link href="/services#individual">Individual Therapy</Link></li>
            <li><Link href="/services#couples">Couples Therapy</Link></li>
            <li><Link href="/services#content">Content Writing</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; 2026 Lily Olsen Counselling. All rights reserved.</span>
        <span>
          Made with care by{" "}
          <a href="https://23labs.co" target="_blank" rel="noopener noreferrer">
            23Labs
          </a>
        </span>
        <span>Auckland, New Zealand</span>
      </div>
    </footer>
  );
}
