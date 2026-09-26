import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { navLinks, waLink, waMessages } from "@/lib/site";

export default function Navbar() {
  return (
    <header className="relative z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="font-serif text-xl text-ink">
          Wisdom Tutor
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.95rem] text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={waLink(waMessages.parent)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-gold px-5 py-2.5 text-[0.9rem] font-medium text-ink transition-colors hover:bg-gold-dark"
          >
            Find a Tutor
          </a>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
