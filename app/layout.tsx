import type { Metadata } from "next";
import "@fontsource/fraunces/latin-400.css";
import "@fontsource/fraunces/latin-500.css";
import "@fontsource/fraunces/latin-600.css";
import "@fontsource/fraunces/latin-400-italic.css";
import "@fontsource/ibm-plex-sans/latin-400.css";
import "@fontsource/ibm-plex-sans/latin-500.css";
import "@fontsource/ibm-plex-sans/latin-600.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Tutors in Kigali, Rwanda`,
    template: `%s — ${site.name}`,
  },
  description:
    "Wisdom Tutor connects parents and students in Kigali with tutors suited to their grade level and learning needs.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: `${site.name} — Tutors in Kigali, Rwanda`,
    description:
      "Wisdom Tutor connects parents and students in Kigali with tutors suited to their grade level and learning needs.",
  },
  twitter: {
    card: "summary",
    title: `${site.name} — Tutors in Kigali, Rwanda`,
    description:
      "Wisdom Tutor connects parents and students in Kigali with tutors suited to their grade level and learning needs.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
