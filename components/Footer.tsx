import Link from "next/link";
import { mailtoLink, navLinks, site, waLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-serif text-xl">Wisdom Tutor</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/70">
            Connecting parents and students in Kigali with tutors suited to
            their needs.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-paper/60">Navigate</p>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-paper/85 hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-paper/60">Contact</p>
          <ul className="mt-4 space-y-2.5 text-sm text-paper/85">
            <li>{site.location}</li>
            <li>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                WhatsApp: {site.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={mailtoLink()} className="hover:text-gold break-all">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Wisdom Tutor. All rights reserved.</p>
          <p>Kigali, Rwanda</p>
        </div>
      </div>
    </footer>
  );
}
