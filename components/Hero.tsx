import Link from "next/link";
import StepPath from "./StepPath";
import WhatsAppButton from "./WhatsAppButton";
import { waMessages } from "@/lib/site";

export default function Hero() {
  return (
    <section className="overflow-hidden border-b border-line">
      <div className="container-page grid items-center gap-12 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
        <div className="max-w-xl">
          <h1 className="text-4xl leading-[1.1] text-ink md:text-5xl">
            Finding the right tutor for your child, made simple.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate">
            Wisdom Tutor connects students in Kigali with tutors suited to
            their grade level and learning needs, so parents don&apos;t have
            to search alone.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton message={waMessages.parent} variant="primary">
              Find a Tutor
            </WhatsAppButton>
            <Link
              href="/tutors"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink/20 px-6 py-3 text-[0.95rem] font-medium text-ink transition-colors hover:border-ink"
            >
              Become a Tutor
            </Link>
          </div>
        </div>

        <div className="hidden md:block">
          <StepPath />
        </div>
      </div>
    </section>
  );
}
