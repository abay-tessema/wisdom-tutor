import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import WhatsAppButton from "@/components/WhatsAppButton";
import { waMessages } from "@/lib/site";

export const metadata: Metadata = {
  title: "For Parents",
  description:
    "How Wisdom Tutor helps parents in Kigali find a tutor suited to their child's grade level and needs — message us directly on WhatsApp to get started.",
  alternates: { canonical: "/parents" },
};

const points = [
  {
    title: "Finding the right tutor can be difficult",
    description:
      "Parents often don't know where to start, or which tutor is actually the right fit for their child's grade level and needs.",
  },
  {
    title: "Wisdom Tutor simplifies the process",
    description:
      "Instead of searching on your own, you tell us what your child needs and we take it from there.",
  },
  {
    title: "Tell us what your child needs",
    description:
      "Share your child's grade level, subjects, and the kind of support you're looking for.",
  },
  {
    title: "We connect you with a suitable tutor",
    description:
      "We match your student with a tutor suited to their grade level and needs.",
  },
];

export default function ParentsPage() {
  return (
    <>
      <PageHero
        eyebrow="For parents"
        title="A simpler way to find your child a tutor"
        description="Wisdom Tutor helps parents in Kigali find tutoring support suited to their child's needs."
      />

      <section className="py-16 md:py-24">
        <div className="container-page">
          <ol className="grid gap-10 sm:grid-cols-2">
            {points.map((point, index) => (
              <li key={point.title} className="border-t border-line pt-6">
                <span className="font-serif text-2xl text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-lg font-medium text-ink">
                  {point.title}
                </p>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate">
                  {point.description}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-16 border-t border-line pt-10">
            <h2 className="text-2xl text-ink">Ready to get started?</h2>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-slate">
              Message Wisdom Tutor on WhatsApp and let us know what your
              child needs. We&apos;ll take it from there.
            </p>
            <div className="mt-6">
              <WhatsAppButton message={waMessages.parent} variant="primary">
                Message Wisdom Tutor on WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
