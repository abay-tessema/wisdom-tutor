import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import WhatsAppButton from "@/components/WhatsAppButton";
import { waMessages } from "@/lib/site";

export const metadata: Metadata = {
  title: "For Tutors",
  description:
    "Join the Wisdom Tutor network in Kigali. Wisdom Tutor connects tutors with students and families looking for academic support — message us on WhatsApp to get started.",
  alternates: { canonical: "/tutors" },
};

export default function TutorsPage() {
  return (
    <>
      <PageHero
        eyebrow="For tutors"
        title="Work with families looking for the right tutor"
        description="Wisdom Tutor connects tutors with students and families in Kigali looking for academic support."
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-14 md:grid-cols-[1fr_1fr] md:gap-20">
          <div>
            <h2 className="text-2xl text-ink">How it works</h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate">
              Parents come to Wisdom Tutor looking for a tutor suited to
              their child&apos;s grade level and needs. When there&apos;s a good
              fit, we connect you directly.
            </p>
          </div>

          <div className="border-t border-line pt-8 md:border-t-0 md:border-l md:pl-12 md:pt-0">
            <h2 className="text-2xl text-ink">Interested in joining?</h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate">
              Reach out to Wisdom Tutor on WhatsApp and let us know you&apos;d
              like to be part of our tutor network.
            </p>
            <div className="mt-6">
              <WhatsAppButton message={waMessages.tutor} variant="primary">
                Join Our Tutor Network
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
