export default function GradeLevelCard({
  index,
  range,
  title,
  description,
}: {
  index: number;
  range: string;
  title: string;
  description: string;
}) {
  const roman = ["I", "II", "III"][index] ?? String(index + 1);

  return (
    <div className="border-t-2 border-ink pt-5">
      <div className="flex items-baseline justify-between gap-4">
        <p className="font-serif text-lg text-ink">{range}</p>
        <span className="text-sm text-moss">{roman}</span>
      </div>
      <p className="mt-3 text-base font-medium text-ink-soft">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-slate">{description}</p>
    </div>
  );
}
