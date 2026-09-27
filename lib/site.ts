export const site = {
  name: "Wisdom Tutor",
  location: "Kigali, Rwanda",
  email: "wisdomtutor782@gmail.com",
  whatsappNumber: "250796370747",
  whatsappDisplay: "+250 796 370 747",
  // Update this to the live domain before deploying. Used for canonical
  // URLs, sitemap.xml, robots.txt and Open Graph metadata.
  url: "https://wisdom-tutor-gilt.vercel.app",
};

export function waLink(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function mailtoLink(subject?: string) {
  const base = `mailto:${site.email}`;
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base;
}

export const waMessages = {
  parent: "Hello Wisdom Tutor, I am looking for a tutor for my child.",
  tutor: "Hello Wisdom Tutor, I am interested in becoming a tutor.",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/parents", label: "For Parents" },
  { href: "/tutors", label: "For Tutors" },
  { href: "/contact", label: "Contact" },
];

export const gradeLevels = [
  {
    id: "0-5",
    range: "Grades 0–5",
    title: "Foundational learning",
    description:
      "Support with core academic skills, reading and number sense, homework, and building confidence with classroom concepts.",
  },
  {
    id: "6-8",
    range: "Grades 6–8",
    title: "Building independence",
    description:
      "Support as subjects grow more advanced, helping students develop stronger study habits and independent learning skills.",
  },
  {
    id: "9-12",
    range: "Grades 9–12",
    title: "Focused subject support",
    description:
      "More focused academic support, subject tutoring, exam preparation, and help working through challenging concepts.",
  },
];
