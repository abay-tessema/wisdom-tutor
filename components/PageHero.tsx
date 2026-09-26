export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-line">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="text-sm text-moss">{eyebrow}</p>
          <h1 className="mt-3 text-4xl text-ink md:text-5xl">{title}</h1>
          {description && (
            <p className="mt-5 text-lg leading-relaxed text-slate">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
