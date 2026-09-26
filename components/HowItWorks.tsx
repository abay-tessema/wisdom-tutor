const steps = [
  {
    title: "Tell us what your student needs",
    description:
      "Share your child's grade level and the kind of academic support they're looking for.",
  },
  {
    title: "We connect you with a suitable tutor",
    description:
      "Wisdom Tutor matches your student with a tutor suited to their grade level and needs.",
  },
  {
    title: "Start learning",
    description: "Begin working with your tutor and build on progress from there.",
  },
];

export default function HowItWorks() {
  return (
    <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
      {steps.map((step, index) => (
        <li key={step.title} className="relative">
          <div className="flex items-center gap-4 md:block">
            <span className="font-serif text-3xl text-gold">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="h-px flex-1 bg-line md:mt-4 md:mb-5 md:h-px md:w-full" />
          </div>
          <p className="text-lg font-medium text-ink">{step.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-slate">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
