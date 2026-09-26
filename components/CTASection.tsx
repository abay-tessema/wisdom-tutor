import WhatsAppButton from "./WhatsAppButton";
import { waMessages } from "@/lib/site";

export default function CTASection({
  title,
  description,
  buttonLabel = "Message Wisdom Tutor on WhatsApp",
  message = waMessages.parent,
}: {
  title: string;
  description?: string;
  buttonLabel?: string;
  message?: string;
}) {
  return (
    <section className="bg-ink">
      <div className="container-page flex flex-col items-start gap-6 py-16 md:py-20">
        <h2 className="max-w-xl text-3xl text-paper md:text-4xl">{title}</h2>
        {description && (
          <p className="max-w-lg text-base leading-relaxed text-paper/75">
            {description}
          </p>
        )}
        <WhatsAppButton message={message} variant="primary">
          {buttonLabel}
        </WhatsAppButton>
      </div>
    </section>
  );
}
