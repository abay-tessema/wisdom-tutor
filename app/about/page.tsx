import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Wisdom Tutor is a tutoring agency connecting parents and students in Kigali with tutors suited to their needs.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Wisdom Tutor"
        title="Helping families in Kigali find the right tutor"
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <div className="space-y-10 md:sticky md:top-24 md:self-start">
            <div>
              <p className="text-sm text-moss">Who we are</p>
              <p className="mt-3 text-lg leading-relaxed text-ink-soft">
                Wisdom Tutor is a tutoring agency connecting parents and
                students with tutors in Kigali.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="border-t border-line pt-8">
              <h2 className="text-2xl text-ink">Our mission</h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate">
                Our mission is to make it easier for families to access
                personalized academic support by connecting students with
                tutors suited to their needs.
              </p>
            </div>

            <div className="border-t border-line pt-8">
              <h2 className="text-2xl text-ink">Our approach</h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate">
                We focus on understanding what a student needs — their grade
                level, subjects, and the kind of support that fits them best —
                and connecting them with a tutor suited to that.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Have questions about how Wisdom Tutor works?"
        description="Reach out on WhatsApp and we'll be happy to help."
      />
    </>
  );
}
