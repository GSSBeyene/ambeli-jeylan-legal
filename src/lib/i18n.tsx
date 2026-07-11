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

const ti: Dict = {
  "nav.home": "መእተዊ",
  "nav.about": "ብዛዕባና",
  "nav.practice": "ዓውደ-ስራሕ",
  "nav.lawyers": "ጠበቓታት",
  "nav.articles": "ጽሑፋት",
  "nav.news": "ዜናታት",
  "nav.gallery": "ማዕከል ስእሊ",
  "nav.testimonials": "ምስክርነታት",
  "nav.faqs": "ተደጋገምቲ ሕቶታት",
  "nav.careers": "ናይ ስራሕ ዕድላት",
  "nav.contact": "ርኸቡና",
  "nav.book": "ቆጸራ ውሰዱ",

  "brand.name": "ኣምበሊ ጀይላን ናይ ሕጊ ቤት-ጽሕፈት",
  "brand.tagline": "ፍትሒ · እሙንነት · ብልጫ",

  "hero.eyebrow": "ኣዲስ ኣበባ · ኢትዮጵያ",
  "hero.title": "ንዘመናዊት ኢትዮጵያ ዝኸውን ተዓዛቢ ምኽሪ ሕጊ።",
  "hero.sub":
    "ንውልቀ-ሰባት፣ ትካላትን ካልኦት ኣካላትን ኣብ ሲቪላዊ፣ ንግዳዊ፣ ኮርፖሬትን ኣህጉራውን ጉዳያት ምሉእ ኣገልግሎት ሕጊ።",
  "hero.cta.book": "ቆጸራ ውሰዱ",
  "hero.cta.contact": "ርኸቡና",
  "hero.cta.services": "ኣገልግሎትና",

  "section.practice": "ዓውደ-ስራሕ",
  "section.practice.sub":
    "ንኢትዮጵያውያንን ንዞባዊ ዓማዊልናን ኣብ ዘድልዩ ዓውደ-ስራሕ ጥልቕ ተሞክሮ ኣለና።",
  "section.about": "ብዛዕባ እቲ ቤት-ጽሕፈት",
  "section.about.sub":
    "መርኣያዊ ተጣብቕነትን ልክዕ ምኽርን ዘይፈላለዩ ኣብ ዝብል መርሆ ዝተሓንጸ።",
  "section.lawyers": "ጠበቓታትና",
  "section.testimonials": "ዓማዊልና እንታይ ይብሉ",
  "section.cta.title": "ምስ ላዕለዋይ ጠበቓ ተመኻኸሩ።",
  "section.cta.sub":
    "ብምስጢር፣ ብህድኣትን ብቋንቋኹምን። ሎሚ ብኣካል ወይ ብኦንላይን ቆጸራ ውሰዱ።",

  "book.title": "ቆጸራ ውሰዱ",
  "book.sub":
    "ውሑድ ሓበሬታ ኣካፍሉና፤ ጋንታና ኣብ ውሽጢ ሓደ ናይ ስራሕ መዓልቲ ቆጸራኹም የረጋግጽ።",
  "book.field.name": "ምሉእ ስም",
  "book.field.email": "ኢመይል",
  "book.field.phone": "ቁጽሪ ስልኪ",
  "book.field.lawyer": "ዝተመርጸ ጠበቓ (ኣማራጺ)",
  "book.field.lawyer.any": "ምርጫ የብለይን",
  "book.field.service": "ኣገልግሎት",
  "book.field.date": "ዝተመርጸት ዕለት",
  "book.field.time": "ዝተመርጸ ሰዓት",
  "book.field.message": "ብዛዕባ ጉዳይኩም ሓጺር መግለጺ",
  "book.submit": "ቆጸራ ሕተቱ",
  "book.submitting": "ኣብ ምልኣኽ…",
  "book.success": "የቐንየልና። ሕቶኹም ተቐቢልናዮ — ኣብ ቀረባ ግዜ ነረጋግጽ።",
  "book.error": "ጌጋ ኣጋጢሙ። እባኹም ደጊምኩም ፈትኑ ወይ ደውሉ።",

  "contact.title": "ርኸቡና",
  "contact.hours": "ሰዓታት ስራሕ",
  "contact.hours.value": "ሰኑይ – ዓርቢ · 8:30 – 18:00",
  "contact.address": "ኣድራሻ",
  "contact.address.value": "ቦሌ ክ/ከተማ፣ ኣፍሪካ ኣቨኑ፣ ኣዲስ ኣበባ",
  "contact.phone": "ስልኪ",
  "contact.email": "ኢመይል",
  "contact.emergency": "ናይ ህጹጽ መስመር",

  "footer.rights": "ኵሉ መሰላት ተሓልዩ።",
  "footer.privacy": "ናይ ብሕትና ፖሊሲ",
  "footer.terms": "ውዕላትን ኵነታትን",
  "footer.newsletter": "ናይ ሕጊ ዝማነታት ኣብ ኢመይልኩም",
  "footer.newsletter.cta": "ተመዝገቡ",
};

const om: Dict = {
  "nav.home": "Fuula Duraa",
  "nav.about": "Waa'ee Keenya",
  "nav.practice": "Damee Hojii",
  "nav.lawyers": "Abukaattota",
  "nav.articles": "Barreeffamoota",
  "nav.news": "Oduu",
  "nav.gallery": "Gaallarii",
  "nav.testimonials": "Ragaa Maamiltootaa",
  "nav.faqs": "Gaaffiiwwan Yeroo Baay'ee",
  "nav.careers": "Carraa Hojii",
  "nav.contact": "Nu Qunnamaa",
  "nav.book": "Beellama Qabadhaa",

  "brand.name": "Waajjira Seeraa Ambeli Jeylan",
  "brand.tagline": "Haqa · Amanamummaa · Cimina",

  "hero.eyebrow": "Finfinnee · Itoophiyaa",
  "hero.title": "Itoophiyaa ammayyaatiif gorsa seeraa gahaa.",
  "hero.sub":
    "Namoota dhuunfaa, dhaabbilee fi manneen hojiitiif dhimma siiviilii, daldalaa, koorporeetii fi idil-addunyaa irratti tajaajila seeraa guutuu.",
  "hero.cta.book": "Beellama qabadhaa",
  "hero.cta.contact": "Nu qunnamaa",
  "hero.cta.services": "Tajaajilawwan keenya",

  "section.practice": "Damee Hojii",
  "section.practice.sub":
    "Damee seeraa maamiltoota Itoophiyaa fi kan biyya alaa barbaachisan hunda irratti muuxannoo gadi fagoo qabna.",
  "section.about": "Waa'ee waajjirichaa",
  "section.about.sub":
    "Falmii amanamaa fi gorsi sirrii gargar hin baane jedhu irratti kan hundaa'e.",
  "section.lawyers": "Abukaattota keenya",
  "section.testimonials": "Maamiltoonni maal jedhu",
  "section.cta.title": "Abukaattoo ol'aanaa waliin mari'adhaa.",
  "section.cta.sub":
    "Iccitiin, tasgabbiin, afaan keessaniin. Har'a qaamaan yookaan sarara ol beellama qabadhaa.",

  "book.title": "Beellama Qabadhaa",
  "book.sub":
    "Odeeffannoo muraasa nuu qoodaa; garee keenya guyyaa hojii tokko keessatti beellama keessan ni mirkaneessa.",
  "book.field.name": "Maqaa guutuu",
  "book.field.email": "Imeelii",
  "book.field.phone": "Bilbila",
  "book.field.lawyer": "Abukaattoo filatame (filannoo)",
  "book.field.lawyer.any": "Filannoo hin qabu",
  "book.field.service": "Tajaajila",
  "book.field.date": "Guyyaa filatame",
  "book.field.time": "Sa'aatii filatame",
  "book.field.message": "Waa'ee dhimma keessanii ibsa gabaabaa",
  "book.submit": "Beellama gaafadhaa",
  "book.submitting": "Ergaa jira…",
  "book.success": "Galatoomaa. Gaaffiin keessan nu gahe — dhihootti ni mirkaneessina.",
  "book.error": "Rakkoon uumameera. Maaloo irra deebi'aatii yaalaa yookaan bilbilaa.",

  "contact.title": "Nu Qunnamaa",
  "contact.hours": "Sa'aatii hojii",
  "contact.hours.value": "Wiixata – Jimaata · 8:30 – 18:00",
  "contact.address": "Teessoo",
  "contact.address.value": "Bole Kutaa Magaalaa, Karaa Afrikaa, Finfinnee",
  "contact.phone": "Bilbila",
  "contact.email": "Imeelii",
  "contact.emergency": "Sarara ariifachiisaa",

  "footer.rights": "Mirgi hundi seeraan eegameera.",
  "footer.privacy": "Imaammata Iccitii",
  "footer.terms": "Haalotaa fi Waliigalteewwan",
  "footer.newsletter": "Haaromsa seeraa imeelii keessaniin argadhaa",
  "footer.newsletter.cta": "Galmaa'aa",
};

const so: Dict = {
  "nav.home": "Bogga Hore",
  "nav.about": "Nagayage",
  "nav.practice": "Qaybaha Shaqada",
  "nav.lawyers": "Qareenada",
  "nav.articles": "Maqaallo",
  "nav.news": "Wararka",
  "nav.gallery": "Sawirro",
  "nav.testimonials": "Marag-kaca Macaamiisha",
  "nav.faqs": "Su'aalaha Caadiga",
  "nav.careers": "Fursado Shaqo",
  "nav.contact": "Nala Soo Xiriir",
  "nav.book": "Ballan Qabo",

  "brand.name": "Xafiiska Sharciga Ambeli Jeylan",
  "brand.tagline": "Cadaalad · Daacadnimo · Fiicnaan",

  "hero.eyebrow": "Addis Ababa · Itoobiya",
  "hero.title": "Talo sharci oo hufan Itoobiya casriga ah.",
  "hero.sub":
    "Adeeg sharci oo dhamaystiran shaqsi, ganacsi iyo hay'ado ku saabsan arrimaha madaniga, ganacsiga, shirkadaha iyo caalamiga.",
  "hero.cta.book": "Ballan qabo",
  "hero.cta.contact": "Nala soo xiriir",
  "hero.cta.services": "Adeegyadeena",

  "section.practice": "Qaybaha Shaqada",
  "section.practice.sub":
    "Waxaan leenahay khibrad qoto dheer dhinacyada sharci ee ugu muhiimsan macaamiisha Itoobiyaanka iyo caalamiga ah.",
  "section.about": "Ku saabsan xafiiska",
  "section.about.sub":
    "Waxa lagu dhisay caqiidada in u doodid mabda'aysan iyo talo sax ah aysan kala go'in.",
  "section.lawyers": "Qareenadeena",
  "section.testimonials": "Waxa ay macaamiishu odhanayaan",
  "section.cta.title": "La tasho qareen sare.",
  "section.cta.sub":
    "Sir ah, deggan, oo luqadaada ah. Maanta hel ballan shaqsi ama online.",

  "book.title": "Ballan Qabo",
  "book.sub":
    "Nala wadaag xoogaa faahfaahin ah; kooxdeenu ballantaada ayey xaqiijin doonaan hal maalin gudaheed.",
  "book.field.name": "Magaca oo dhan",
  "book.field.email": "Iimayl",
  "book.field.phone": "Taleefan",
  "book.field.lawyer": "Qareen la doorbiday (ikhtiyaari)",
  "book.field.lawyer.any": "Doorasho ma jirto",
  "book.field.service": "Adeeg",
  "book.field.date": "Taariikh la doorbiday",
  "book.field.time": "Waqti la doorbiday",
  "book.field.message": "Sharraxaad gaaban oo arrintaada ah",
  "book.submit": "Codso ballan",
  "book.submitting": "Waa la dirayaa…",
  "book.success": "Mahadsanid. Codsigaaga waa la helay — waan xaqiijin doonaa dhawaan.",
  "book.error": "Wax baa qaldamay. Fadlan mar kale isku day ama nala soo wac.",

  "contact.title": "Nala Soo Xiriir",
  "contact.hours": "Saacadaha shaqada",
  "contact.hours.value": "Isniin – Jimce · 8:30 – 18:00",
  "contact.address": "Cinwaanka",
  "contact.address.value": "Bole Sub-city, Waddada Afrika, Addis Ababa",
  "contact.phone": "Taleefan",
  "contact.email": "Iimayl",
  "contact.emergency": "Khadka degdegga",

  "footer.rights": "Xuquuqda oo dhan way xifdisan tahay.",
  "footer.privacy": "Siyaasadda Sirta",
  "footer.terms": "Shuruudo iyo Xaalado",
  "footer.newsletter": "Cusboonaysiin sharci iimaylkaaga",
  "footer.newsletter.cta": "Isdiwaangeli",
};

const ar: Dict = {
  "nav.home": "الرئيسية",
  "nav.about": "من نحن",
  "nav.practice": "مجالات الممارسة",
  "nav.lawyers": "المحامون",
  "nav.articles": "مقالات",
  "nav.news": "الأخبار",
  "nav.gallery": "معرض الصور",
  "nav.testimonials": "شهادات العملاء",
  "nav.faqs": "الأسئلة الشائعة",
  "nav.careers": "الوظائف",
  "nav.contact": "اتصل بنا",
  "nav.book": "احجز موعداً",

  "brand.name": "مكتب أمبيلي جيلان للمحاماة",
  "brand.tagline": "عدالة · نزاهة · تميّز",

  "hero.eyebrow": "أديس أبابا · إثيوبيا",
  "hero.title": "استشارة قانونية ذات أثر لإثيوبيا الحديثة.",
  "hero.sub":
    "مكتب محاماة متكامل الخدمات للأفراد والشركات والمؤسسات في القضايا المدنية والتجارية والشركات والدولية.",
  "hero.cta.book": "احجز موعداً",
  "hero.cta.contact": "تواصل معنا",
  "hero.cta.services": "خدماتنا",

  "section.practice": "مجالات الممارسة",
  "section.practice.sub":
    "خبرة عميقة في التخصصات الأكثر أهمية للعملاء الإثيوبيين والدوليين.",
  "section.about": "عن المكتب",
  "section.about.sub":
    "مبني على قناعة بأن المرافعة المبدئية والاستشارة الدقيقة لا يفترقان.",
  "section.lawyers": "محامونا",
  "section.testimonials": "ماذا يقول العملاء",
  "section.cta.title": "استشر محامياً كبيراً.",
  "section.cta.sub":
    "بسرية وهدوء وبلغتك. احجز موعداً حضورياً أو عبر الإنترنت اليوم.",

  "book.title": "احجز موعداً",
  "book.sub":
    "شاركنا بعض التفاصيل وسيؤكد فريقنا موعدك خلال يوم عمل واحد.",
  "book.field.name": "الاسم الكامل",
  "book.field.email": "البريد الإلكتروني",
  "book.field.phone": "رقم الهاتف",
  "book.field.lawyer": "المحامي المفضل (اختياري)",
  "book.field.lawyer.any": "لا يوجد تفضيل",
  "book.field.service": "الخدمة",
  "book.field.date": "التاريخ المفضل",
  "book.field.time": "الوقت المفضل",
  "book.field.message": "وصف موجز لقضيتك",
  "book.submit": "طلب موعد",
  "book.submitting": "جارٍ الإرسال…",
  "book.success": "شكراً لك. تم استلام طلبك — سنؤكده قريباً.",
  "book.error": "حدث خطأ ما. يُرجى المحاولة مرة أخرى أو الاتصال بمكتبنا.",

  "contact.title": "اتصل بنا",
  "contact.hours": "ساعات العمل",
  "contact.hours.value": "الاثنين – الجمعة · 8:30 – 18:00",
  "contact.address": "العنوان",
  "contact.address.value": "بولي، شارع أفريقيا، أديس أبابا",
  "contact.phone": "الهاتف",
  "contact.email": "البريد الإلكتروني",
  "contact.emergency": "خط الطوارئ",

  "footer.rights": "جميع الحقوق محفوظة.",
  "footer.privacy": "سياسة الخصوصية",
  "footer.terms": "الشروط والأحكام",
  "footer.newsletter": "التحديثات القانونية في بريدك",
  "footer.newsletter.cta": "اشترك",
};

const aa: Dict = {
  "nav.home": "Qaxaa",
  "nav.about": "Nee birat",
  "nav.practice": "Taama Baxsó",
  "nav.lawyers": "Sharcih marootii",
  "nav.articles": "Qaafisa",
  "nav.news": "Xagar",
  "nav.gallery": "Gaalarii",
  "nav.testimonials": "Sumaaqit",
  "nav.faqs": "Faggino esserooma",
  "nav.careers": "Taama fanteena",
  "nav.contact": "Nee xagnisa",
  "nav.book": "Ballan haysa",

  "brand.name": "Ambeli Jeylan Sharcih Baxsó",
  "brand.tagline": "Qadaalat · Nummaaqe · Fayya",

  "hero.eyebrow": "Addis Ababa · Itiyoppiya",
  "hero.title": "Casri Itiyoppiyah gexso-le sharcih heyto.",
  "hero.sub":
    "Marootuh, kabaawaa kee dabooqah siwilih, gadó, kompaanih kee addunyalih caagiidah duddu-le sharcih meqe.",
  "hero.cta.book": "Ballan haysa",
  "hero.cta.contact": "Nee xagnisa",
  "hero.cta.services": "Ni-meqeh gexoona",

  "section.practice": "Taama baxsó",
  "section.practice.sub":
    "Itiyoppiyaanaah kee addunyaalih maamalátaah kadmimta sharcih baxsó irkih ninni.",
  "section.about": "Baxsoh birat",
  "section.about.sub":
    "Nummu falmiiy meqe heyto siinih mari akke waanam yekke qangraah bictimeh.",
  "section.lawyers": "Ni-sharcih marootii",
  "section.testimonials": "Maamaláti macaay ittam",
  "section.cta.title": "Kaxxa sharcih maruh luk maggada.",
  "section.cta.sub":
    "Sadqih, sissikuh, si-afaal. Asaaku qaraanuh yaawakeh yeemenih ballan haysa.",

  "book.title": "Ballan haysa",
  "book.sub":
    "Dagom xaagu nee cabbulà; ni-buttá inki taama ayrót ballan siinik nummasseleh.",
  "book.field.name": "Migaq kullim",
  "book.field.email": "Imeel",
  "book.field.phone": "Silki",
  "book.field.lawyer": "Doorimte sharcih num (dooritó)",
  "book.field.lawyer.any": "Dooritó mali",
  "book.field.service": "Meqe",
  "book.field.date": "Doorimte ayró",
  "book.field.time": "Doorimte saaqat",
  "book.field.message": "Caagitih dago yaabbé",
  "book.submit": "Ballan esser",
  "book.submitting": "Ruubimaanam…",
  "book.success": "Faatiya. Esserintó nee guftem — dagoh nummasseleh.",
  "book.error": "Qellitté taamitte. Ayti mahaggite hinnak nee sec.",

  "contact.title": "Nee xagnisa",
  "contact.hours": "Taamah saaqoota",
  "contact.hours.value": "Sanbat-lakah – Jimqata · 8:30 – 18:00",
  "contact.address": "Adres",
  "contact.address.value": "Bole, Afrika Gita, Addis Ababa",
  "contact.phone": "Silki",
  "contact.email": "Imeel",
  "contact.emergency": "Qataatatóh gita",

  "footer.rights": "Cakoona inkih dacrisan.",
  "footer.privacy": "Sadqih ittinam",
  "footer.terms": "Sharatoota kee caaloota",
  "footer.newsletter": "Sharcih xaagu imeelal beya",
  "footer.newsletter.cta": "Kutbé",
};

const sid: Dict = {
  "nav.home": "Umi Qoola",
  "nav.about": "Ninke Daafira",
  "nav.practice": "Loosu Bayicho",
  "nav.lawyers": "Higate manna",
  "nav.articles": "Borro",
  "nav.news": "Duduwo",
  "nav.gallery": "Misile",
  "nav.testimonials": "Ammanamme",
  "nav.faqs": "Baxxille xa'muwwa",
  "nav.careers": "Loosu faro",
  "nav.contact": "Xaadisine",
  "nav.book": "Yannate qixxeessi",

  "brand.name": "Ambeli Jeylan Higate Biiro",
  "brand.tagline": "Halaale · Ammana · Danchimma",

  "hero.eyebrow": "Addis Ababa · Toophiya",
  "hero.title": "Xaano Toophiyara ikkanno higate amaale.",
  "hero.sub":
    "Mannaho, kaampaniwwara nna dhaabbilewwara siiviilinni, daddalate, koorporeete nna gobbate atooteessa woyyaawino higate loosu.",
  "hero.cta.book": "Yannate qixxeessi",
  "hero.cta.contact": "Xaadisine",
  "hero.cta.services": "Loonseemma",

  "section.practice": "Loosu Bayicho",
  "section.practice.sub":
    "Toophiyawwa nna gobbate atooteessa hasiisannohu higate bayichuwa aana meddisamino egenno noonke.",
  "section.about": "Biirore daafira",
  "section.about.sub":
    "Halaalu tuurate nna barete amaale mittu yannihu diyeee'ru assaawe aana suudisamino.",
  "section.lawyers": "Higate mannanke",
  "section.testimonials": "Atootenke ma yaanno",
  "section.cta.title": "Aliidi higate manchi ledo hasaawi.",
  "section.cta.sub":
    "Maaxamu, keerihu, afookki widoonni. Techo qaraanni woy internetenni yannate qixxeessi.",

  "book.title": "Yannate qixxeessi",
  "book.sub":
    "Shiimadi xaggewwa afidhinke; garenke mitte loosu barrira yannatte woyyeessanno.",
  "book.field.name": "Woloonta suuma",
  "book.field.email": "Imeele",
  "book.field.phone": "Bilbila",
  "book.field.lawyer": "Doorroonnihu higate manchi (dooro)",
  "book.field.lawyer.any": "Dooro dino",
  "book.field.service": "Loosu",
  "book.field.date": "Doorroonnihu barra",
  "book.field.time": "Doorroonnihu saate",
  "book.field.message": "Coyi'ne daafira shiima xawishsha",
  "book.submit": "Yannate xa'mi",
  "book.submitting": "Sokkinanni no…",
  "book.success": "Galatoomi'ne. Xa'mokki adhinoommo — muli yannara woyyeessineemmo.",
  "book.error": "Soro kalaqamino. Wolqa fooliishsho woy nira bilbili.",

  "contact.title": "Xaadisine",
  "contact.hours": "Loosu saate",
  "contact.hours.value": "Sambata Kayinshoho – Arbi · 8:30 – 18:00",
  "contact.address": "Adrase",
  "contact.address.value": "Bole, Afrika Doogo, Addis Ababa",
  "contact.phone": "Bilbila",
  "contact.email": "Imeele",
  "contact.emergency": "Rakkate doogo",

  "footer.rights": "Baalu qooso agarantino.",
  "footer.privacy": "Maaxinye Seera",
  "footer.terms": "Xa'muwwanna coyibba",
  "footer.newsletter": "Higate haaruwa imeelekki widoonni",
  "footer.newsletter.cta": "Borreessi'ne",
};

const wal: Dict = {
  "nav.home": "Sinttana",
  "nav.about": "Nubaa",
  "nav.practice": "Oosuwaa Bessaa",
  "nav.lawyers": "Higgiyaa Eranchati",
  "nav.articles": "Xaafetteeta",
  "nav.news": "Odeta",
  "nav.gallery": "Misileta",
  "nav.testimonials": "Maachchoti Markkatettaa",
  "nav.faqs": "Zaari Zaari Oychcheta",
  "nav.careers": "Oosuwaa Injjeta",
  "nav.contact": "Nuura Gayetta",
  "nav.book": "Wodiyaa Gigissa",

  "brand.name": "Ambeli Jeylan Higgiyaa Biiruwaa",
  "brand.tagline": "Xillotettaa · Ammanettaa · Loyttidoogaa",

  "hero.eyebrow": "Addis Ababa · Toophiyaa",
  "hero.title": "Ha'i wodiyaa Toophiyaassi giigida higgiyaa zorettaa.",
  "hero.sub":
    "Asatuyyoo, waanata woykko dirijjitiyoo siwiiliyaa, zal'iyaa, kompaaniyaanne alagaa yohuwan kumetta higgiyaa oosuwaa.",
  "hero.cta.book": "Wodiyaa gigissa",
  "hero.cta.contact": "Nuura gayetta",
  "hero.cta.services": "Nu Oosuwaa",

  "section.practice": "Oosuwaa Bessaa",
  "section.practice.sub":
    "Toophiyaa asaasinne alagaa maachchotussi koshshiya higgiyaa bessaa ubban aadhida eratettay nuussi de'ees.",
  "section.about": "Biiruwaabaa",
  "section.about.sub":
    "Suure mootettaynne likke zoretty issippe deˈiya qofaa bolli keexettidaagaa.",
  "section.lawyers": "Nu Higgiyaa Eranchati",
  "section.testimonials": "Maachchoti Woygiyaakko",
  "section.cta.title": "Gita higgiyaa erancha zora.",
  "section.cta.sub":
    "Geemasan, woppu giidi, ne qaalan. Hachchi asatettan woy Interneetian wodiyaa gigissa.",

  "book.title": "Wodiyaa Gigissa",
  "book.sub":
    "Amaridabaa nuussi shaakketta; nu qommoy issi oosuwaa gallassa gidduwan ne wodiyaa mintettees.",
  "book.field.name": "Kumetta Sunttaa",
  "book.field.email": "Iimeele",
  "book.field.phone": "Bilbilaa",
  "book.field.lawyer": "Dooridobaa higgiyaa erancha (dooruwaa)",
  "book.field.lawyer.any": "Dooruwaa baawa",
  "book.field.service": "Oosuwaa",
  "book.field.date": "Dooridobaa gallassaa",
  "book.field.time": "Dooridobaa saateta",
  "book.field.message": "Ne yohuwaa qanttan qonccissa",
  "book.submit": "Wodiyaa oychchaa",
  "book.submitting": "Kiitettishin…",
  "book.success": "Galatoomite. Ne oychchaa demmida — matan mintossoos.",
  "book.error": "Balay merettiis. Hayyanaa zaarettidi malaata woy nuukko silkkia.",

  "contact.title": "Nuura Gayetta",
  "contact.hours": "Oosuwaa saateta",
  "contact.hours.value": "Wonttettaappe – Arbaa · 8:30 – 18:00",
  "contact.address": "Sohuwaa",
  "contact.address.value": "Bole, Afrikaa Ogiyaa, Addis Ababa",
  "contact.phone": "Bilbilaa",
  "contact.email": "Iimeele",
  "contact.emergency": "Eesuwaa Ogiyaa",

  "footer.rights": "Ubba maatati naagettidosona.",
  "footer.privacy": "Geemasa Wogaa",
  "footer.terms": "Wogatanne Hanotata",
  "footer.newsletter": "Higgiyaa Ooratta Iimeeleera Ekka",
  "footer.newsletter.cta": "Xaafetta",
};

const DICTS: Partial<Record<LangCode, Dict>> = {
  en,
  am,
  ti,
  om,
  so,
  aa,
  sid,
  wal,
  ar,
};

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
