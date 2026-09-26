"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks, waLink, waMessages } from "@/lib/site";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M3 5.5H17M3 10H17M3 14.5H17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {open && (
        <div
          id="mobile-nav"
          className="absolute left-0 right-0 top-full border-t border-line bg-paper shadow-[0_12px_24px_-16px_rgba(22,35,61,0.25)]"
        >
          <nav className="container-page flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-base text-ink last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={waLink(waMessages.parent)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-6 py-3 text-center text-[0.95rem] font-medium text-ink"
            >
              Find a Tutor
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
