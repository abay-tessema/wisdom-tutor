import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Tutoring services from Wisdom Tutor for Grades 0–5, 6–8, and 9–12, covering foundational learning, independent study skills, and exam preparation in Kigali.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    range: "Grades 0–5",
    title: "Foundational learning",
    points: [
      "Support with foundational learning and core academic skills",
      "Help with homework and daily classwork",
      "Support understanding classroom concepts",
    ],
  },
  {
    range: "Grades 6–8",
    title: "Building independence",
    points: [
      "Academic support as students move into more advanced subjects",
      "Help developing stronger independent learning skills",
      "Support keeping pace with a growing course load",
    ],
  },
  {
    range: "Grades 9–12",
    title: "Focused subject support",
    points: [
      "More focused academic support in specific subjects",
      "Exam preparation",
      "Help with challenging concepts",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Tutoring support for every stage of school"
        description="Wisdom Tutor connects students with tutors suited to their grade level, from foundational learning through exam preparation."
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.range} {...service} />
          ))}
        </div>
      </section>

      <CTASection
        title="Not sure which level of support your child needs?"
        description="Tell us on WhatsApp and we'll help you find the right fit."
      />
    </>
  );
}
