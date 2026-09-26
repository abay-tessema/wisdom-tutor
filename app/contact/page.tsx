import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { mailtoLink, site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Wisdom Tutor in Kigali, Rwanda by WhatsApp or email. Whether you're a parent looking for a tutor or a tutor interested in working with us, we'd be happy to hear from you.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact Wisdom Tutor"
        description="Whether you&#39;re a parent looking for a tutor or a tutor interested in working with us, we&#39;d be happy to hear from you."
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-8 sm:grid-cols-2">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-line p-8 transition-colors hover:border-ink"
          >
            <p className="text-sm text-moss">WhatsApp</p>
            <p className="mt-3 font-serif text-2xl text-ink">
              {site.whatsappDisplay}
            </p>
            <span className="mt-6 inline-block text-sm font-medium text-ink underline decoration-line underline-offset-4 group-hover:decoration-ink">
              Message on WhatsApp
            </span>
          </a>

          <a
            href={mailtoLink()}
            className="group border border-line p-8 transition-colors hover:border-ink"
          >
            <p className="text-sm text-moss">Email</p>
            <p className="mt-3 break-all font-serif text-2xl text-ink">
              {site.email}
            </p>
            <span className="mt-6 inline-block text-sm font-medium text-ink underline decoration-line underline-offset-4 group-hover:decoration-ink">
              Send an email
            </span>
          </a>
        </div>

        <div className="container-page mt-10 border-t border-line px-0 pt-8">
          <p className="text-base text-slate">{site.location}</p>
        </div>
      </section>
    </>
  );
}
