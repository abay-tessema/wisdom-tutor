export default function SectionHeading({
  title,
  description,
  align = "left",
  tone = "ink",
}: {
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "ink" | "paper";
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const textTone = tone === "paper" ? "text-paper" : "text-ink";
  const descTone = tone === "paper" ? "text-paper/75" : "text-slate";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      <h2 className={`text-3xl md:text-4xl font-normal ${textTone}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${descTone}`}>
          {description}
        </p>
      )}
    </div>
  );
}
