export default function ServiceCard({
  range,
  title,
  points,
}: {
  range: string;
  title: string;
  points: string[];
}) {
  return (
    <div className="border border-line bg-white/60 p-7">
      <p className="text-sm font-medium text-moss">{range}</p>
      <h3 className="mt-2 text-2xl text-ink">{title}</h3>
      <ul className="mt-5 space-y-3">
        {points.map((point) => (
          <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
