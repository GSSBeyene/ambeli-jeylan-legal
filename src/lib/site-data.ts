export const PRACTICE_AREAS = [
  { title: "Civil Law", desc: "Contracts, obligations, torts and civil litigation." },
  { title: "Commercial Law", desc: "Trade, contracts, agencies, distribution and commercial disputes." },
  { title: "Corporate Law", desc: "Formation, governance, M&A and corporate restructuring." },
  { title: "Investment Law", desc: "FDI structuring, incentives and Ethiopian Investment Commission matters." },
  { title: "Banking & Insurance", desc: "Facility documentation, regulatory compliance and claims." },
  { title: "Tax Law", desc: "Advisory, tax audits, appeals and international taxation." },
  { title: "Employment Law", desc: "Contracts, disputes, workplace policy and CBA negotiation." },
  { title: "Family Law", desc: "Divorce, child custody, inheritance and marital property." },
  { title: "Property & Land", desc: "Real estate, construction and land administration matters." },
  { title: "Immigration", desc: "Visas, residence, work permits and citizenship advisory." },
  { title: "Intellectual Property", desc: "Trademark, copyright and patent registration and enforcement." },
  { title: "Criminal Defense", desc: "Trial and appellate criminal defense across all instances." },
  { title: "Human Rights", desc: "Constitutional rights, public interest and international bodies." },
  { title: "Arbitration & Mediation", desc: "Domestic and international ADR representation." },
  { title: "International Business", desc: "Cross-border contracting, joint ventures and compliance." },
  { title: "NGO & Company Registration", desc: "End-to-end incorporation, licensing and secretarial." },
  { title: "Contract Drafting", desc: "Bespoke drafting, review and negotiation support." },
  { title: "Debt Collection & Tenders", desc: "Recovery, enforcement and government procurement." },
] as const;

export const LAWYERS = [
  {
    name: "Ambeli Jeylan",
    role: "Managing Partner",
    bio: "Managing Partner with two decades of experience representing corporate and institutional clients before every level of the Ethiopian judiciary and international arbitral tribunals.",
    focus: ["Corporate", "Arbitration", "Investment"],
    languages: ["Amharic", "English", "Afaan Oromo", "Arabic"],
  },
  {
    name: "Hanna Bekele",
    role: "Senior Associate — Commercial",
    bio: "Advises multinational and Ethiopian enterprises on commercial contracts, M&A, and cross-border transactions with a focus on the financial services sector.",
    focus: ["Commercial", "Banking", "M&A"],
    languages: ["Amharic", "English", "Tigrinya"],
  },
  {
    name: "Yohannes Girma",
    role: "Senior Associate — Litigation",
    bio: "Trial lawyer with an extensive record before the Federal Supreme Court, appearing in complex civil, criminal and constitutional matters.",
    focus: ["Civil Litigation", "Criminal Defense", "Constitutional"],
    languages: ["Amharic", "English"],
  },
  {
    name: "Sofia Mohammed",
    role: "Associate — Family & Immigration",
    bio: "Client-centered counsel for families and individuals navigating divorce, custody, inheritance, and Ethiopian immigration and citizenship processes.",
    focus: ["Family", "Immigration", "Inheritance"],
    languages: ["Amharic", "English", "Af Soomaali", "Arabic"],
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "The team combined technical excellence with real commercial judgment. They closed our transaction on time and on our terms.",
    name: "General Counsel, Regional Bank",
  },
  {
    quote:
      "Discreet, tireless, and deeply prepared. Their advocacy carried our matter through three instances of appeal.",
    name: "CEO, Manufacturing Group",
  },
  {
    quote:
      "They treated a difficult family matter with the dignity it deserved. I felt heard at every step.",
    name: "Private Client",
  },
] as const;

export const CONTACT = {
  phone: "+251 911 746 221",
  phones: ["+251 911 746 221", "+251 977 117 782", "+251 977 111 202"],
  emergency: "+251 977 111 202",
  email: "info@ambelijeylan.law",
  address: "Bole Sub-city, Africa Avenue, Addis Ababa, Ethiopia",
  whatsapp: "+251911746221",
} as const;

export const SOCIALS = {
  facebook: "#",
  linkedin: "#",
  instagram: "#",
  tiktok: "#",
  telegram: "#",
  youtube: "#",
  twitter: "#",
} as const;

export const APPOINTMENT_TIMES = [
  "09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00",
] as const;
