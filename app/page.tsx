import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import GradeLevelCard from "@/components/GradeLevelCard";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";
import { gradeLevels, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — Tutors in Kigali, Rwanda`,
  description:
    "Wisdom Tutor connects parents in Kigali with tutors suited to their child's grade level and learning needs, from foundational grades through exam preparation.",
  alternates: { canonical: "/" },
};

const whyPoints = [
  {
    title: "Personalized matching",
    description: "Tutors are suggested based on your child's grade level and needs.",
  },
  {
    title: "Convenient communication",
    description: "Reach us directly on WhatsApp whenever you need to.",
  },
  {
    title: "Tailored support",
    description: "Support that fits the student, not a one-size-fits-all lesson plan.",
  },
  {
    title: "A connection you can rely on",
    description: "We help families find tutors, and help tutors find students.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="border-b border-line py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            title="Who we serve"
            description="Wisdom Tutor currently supports students across three stages of school."
          />
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {gradeLevels.map((grade, index) => (
              <GradeLevelCard
                key={grade.id}
                index={index}
                range={grade.range}
                title={grade.title}
                description={grade.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line py-16 md:py-24">
        <div className="container-page">
          <SectionHeading title="How it works" />
          <div className="mt-12">
            <HowItWorks />
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper-raised/60 py-16 md:py-24">
        <div className="container-page grid gap-10 md:grid-cols-2 md:gap-16">
          <h2 className="text-3xl leading-snug text-ink md:text-4xl">
            Why families choose to work with Wisdom Tutor
          </h2>
          <ul className="space-y-6">
            {whyPoints.map((point) => (
              <li key={point.title} className="flex gap-4 border-t border-line pt-5">
                <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-moss" />
                <div>
                  <p className="font-medium text-ink">{point.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate">
                    {point.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="Ready to find the right tutor for your child?"
        description={`Message ${site.name} on WhatsApp and tell us what your student needs.`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: site.name,
            url: site.url,
            email: site.email,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kigali",
              addressCountry: "RW",
            },
            areaServed: "Kigali, Rwanda",
          }),
        }}
      />
    </>
  );
}
