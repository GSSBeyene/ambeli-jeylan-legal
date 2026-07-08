import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type LangCode =
  | "en"
  | "am"
  | "ti"
  | "om"
  | "so"
  | "aa"
  | "sid"
  | "wal"
  | "ar";

export const LANGUAGES: {
  code: LangCode;
  label: string;
  native: string;
  dir?: "rtl";
}[] = [
  { code: "en", label: "English", native: "English" },
  { code: "am", label: "Amharic", native: "አማርኛ" },
  { code: "ti", label: "Tigrinya", native: "ትግርኛ" },
  { code: "om", label: "Afaan Oromo", native: "Afaan Oromoo" },
  { code: "so", label: "Somali", native: "Af Soomaali" },
  { code: "aa", label: "Afar", native: "Qafar" },
  { code: "sid", label: "Sidama", native: "Sidaamu Afoo" },
  { code: "wal", label: "Wolaytta", native: "Wolayttattuwaa" },
  { code: "ar", label: "Arabic", native: "العربية", dir: "rtl" },
];

type Dict = Record<string, string>;

const en: Dict = {
  "nav.home": "Home",
  "nav.about": "About",
  "nav.practice": "Practice Areas",
  "nav.lawyers": "Lawyers",
  "nav.articles": "Articles",
  "nav.news": "News",
  "nav.gallery": "Gallery",
  "nav.testimonials": "Testimonials",
  "nav.faqs": "FAQs",
  "nav.careers": "Careers",
  "nav.contact": "Contact",
  "nav.book": "Book Consultation",

  "brand.name": "Ambeli Jeylan Law Office",
  "brand.tagline": "Justice · Integrity · Excellence",

  "hero.eyebrow": "Addis Ababa · Est. Ethiopia",
  "hero.title": "Counsel of consequence for a modern Ethiopia.",
  "hero.sub":
    "A full-service law office serving individuals, enterprises, and institutions across civil, commercial, corporate, and international matters.",
  "hero.cta.book": "Book a consultation",
  "hero.cta.contact": "Contact us",
  "hero.cta.services": "Our services",

  "section.practice": "Practice Areas",
  "section.practice.sub":
    "Deep expertise across the disciplines that matter most to Ethiopian and cross-border clients.",
  "section.about": "About the firm",
  "section.about.sub":
    "Built on the belief that principled advocacy and precise counsel are inseparable.",
  "section.lawyers": "Our Lawyers",
  "section.testimonials": "What clients say",
  "section.cta.title": "Consult with a senior counsel.",
  "section.cta.sub":
    "Confidential, unhurried, and in your language. Schedule an in-person or virtual meeting today.",

  "book.title": "Book a Consultation",
  "book.sub":
    "Share a few details and our team will confirm your appointment within one business day.",
  "book.field.name": "Full name",
  "book.field.email": "Email",
  "book.field.phone": "Phone",
  "book.field.lawyer": "Preferred lawyer (optional)",
  "book.field.lawyer.any": "No preference",
  "book.field.service": "Service",
  "book.field.date": "Preferred date",
  "book.field.time": "Preferred time",
  "book.field.message": "Brief description of your matter",
  "book.submit": "Request appointment",
  "book.submitting": "Sending…",
  "book.success":
    "Thank you. Your request has been received — we will confirm shortly.",
  "book.error": "Something went wrong. Please try again or call our office.",

  "contact.title": "Contact",
  "contact.hours": "Office hours",
  "contact.hours.value": "Mon – Fri · 8:30 – 18:00 (EAT)",
  "contact.address": "Address",
  "contact.address.value":
    "Bole Sub-city, Africa Avenue, Addis Ababa, Ethiopia",
  "contact.phone": "Phone",
  "contact.email": "Email",
  "contact.emergency": "Emergency line",

  "footer.rights": "All rights reserved.",
  "footer.privacy": "Privacy Policy",
  "footer.terms": "Terms & Conditions",
  "footer.newsletter": "Legal updates in your inbox",
  "footer.newsletter.cta": "Subscribe",
};

const am: Dict = {
  "nav.home": "መነሻ",
  "nav.about": "ስለ እኛ",
  "nav.practice": "የስራ ዘርፎች",
  "nav.lawyers": "ጠበቆች",
  "nav.articles": "ጽሑፎች",
  "nav.news": "ዜናዎች",
  "nav.gallery": "ማዕከል",
  "nav.testimonials": "የደንበኞች ምስክርነት",
  "nav.faqs": "ተደጋጋሚ ጥያቄዎች",
  "nav.careers": "የሥራ ዕድል",
  "nav.contact": "አግኙን",
  "nav.book": "ቀጠሮ ይያዙ",

  "brand.name": "አምበሊ ጀይላን የሕግ ቢሮ",
  "brand.tagline": "ፍትህ · ታማኝነት · ልዕልና",

  "hero.eyebrow": "አዲስ አበባ · ኢትዮጵያ",
  "hero.title": "ለዘመናዊ ኢትዮጵያ የተመሠረተ የሕግ አማካሪነት።",
  "hero.sub":
    "ለግለሰቦች፣ ለድርጅቶች እና ለተቋማት የፍትሐ ብሔር፣ የንግድ፣ የኮርፖሬት እና የዓለም አቀፍ ጉዳዮች የተሟላ ሕጋዊ አገልግሎት።",
  "hero.cta.book": "ቀጠሮ ይያዙ",
  "hero.cta.contact": "አግኙን",
  "hero.cta.services": "አገልግሎቶቻችን",

  "section.practice": "የስራ ዘርፎች",
  "section.practice.sub":
    "ለኢትዮጵያዊ እና ዓለም አቀፍ ደንበኞች አስፈላጊ በሆኑ የሕግ ዘርፎች ሁሉ ጥልቅ ልምድ አለን።",
  "section.about": "ስለ ቢሮው",
  "section.about.sub":
    "ትክክለኛ አሟጋችነት እና ተጨባጭ የሕግ አማካሪነት አንድ ሆነው መገለጥ ያለባቸው መርህ ላይ የተመሠረተ።",
  "section.lawyers": "ጠበቆቻችን",
  "section.testimonials": "ደንበኞቻችን ምን ይላሉ",
  "section.cta.title": "ከከፍተኛ ጠበቃ ጋር ያማክሩ።",
  "section.cta.sub":
    "በሚስጥር፣ በተረጋጋ መልኩ እና በቋንቋዎ። በአካል ወይም በኦንላይን ቀጠሮ ዛሬ ይያዙ።",

  "book.title": "ቀጠሮ ይያዙ",
  "book.sub":
    "ጥቂት መረጃዎችን ያካፍሉን፤ ቡድናችን በአንድ የሥራ ቀን ውስጥ ቀጠሮዎን ያረጋግጣል።",
  "book.field.name": "ሙሉ ስም",
  "book.field.email": "ኢሜይል",
  "book.field.phone": "ስልክ ቁጥር",
  "book.field.lawyer": "የተመረጠ ጠበቃ (አማራጭ)",
  "book.field.lawyer.any": "ምንም ምርጫ የለም",
  "book.field.service": "አገልግሎት",
  "book.field.date": "የተመረጠ ቀን",
  "book.field.time": "የተመረጠ ሰዓት",
  "book.field.message": "ስለ ጉዳይዎ አጭር መግለጫ",
  "book.submit": "ቀጠሮ ይጠይቁ",
  "book.submitting": "በመላክ ላይ…",
  "book.success": "እናመሰግናለን። ጥያቄዎ ተቀብለናል — በቅርቡ እናረጋግጣለን።",
  "book.error": "ስህተት ተከስቷል። እባክዎ እንደገና ይሞክሩ ወይም ይደውሉ።",

  "contact.title": "አግኙን",
  "contact.hours": "የሥራ ሰዓት",
  "contact.hours.value": "ሰኞ – ዓርብ · 8:30 – 18:00",
  "contact.address": "አድራሻ",
  "contact.address.value": "ቦሌ ክ/ከተማ፣ አፍሪካ አቬኑ፣ አዲስ አበባ",
  "contact.phone": "ስልክ",
  "contact.email": "ኢሜይል",
  "contact.emergency": "የአስቸኳይ መስመር",

  "footer.rights": "መብቱ በሕግ የተጠበቀ ነው።",
  "footer.privacy": "የግላዊነት መመሪያ",
  "footer.terms": "ውሎች እና ሁኔታዎች",
  "footer.newsletter": "የሕግ ዝማኔዎችን በኢሜይልዎ ይቀበሉ",
  "footer.newsletter.cta": "ተመዝገቡ",
};

const DICTS: Partial<Record<LangCode, Dict>> = { en, am };

type Ctx = {
  lang: LangCode;
  setLang: (l: LangCode) => void;
  t: (key: keyof typeof en) => string;
  dir: "ltr" | "rtl";
};

const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>("en");

  useEffect(() => {
    const stored = (typeof window !== "undefined" &&
      (localStorage.getItem("ajlo.lang") as LangCode | null)) || null;
    if (stored && LANGUAGES.some((l) => l.code === stored)) setLangState(stored);
  }, []);

  const setLang = useCallback((l: LangCode) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("ajlo.lang", l);
  }, []);

  const dir: "ltr" | "rtl" =
    LANGUAGES.find((l) => l.code === lang)?.dir === "rtl" ? "rtl" : "ltr";

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = dir;
    }
  }, [lang, dir]);

  const t = useCallback(
    (key: keyof typeof en) => {
      const d = DICTS[lang] ?? en;
      return d[key] ?? en[key] ?? String(key);
    },
    [lang],
  );

  const value = useMemo(() => ({ lang, setLang, t, dir }), [lang, setLang, t, dir]);
  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
