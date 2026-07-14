import { useI18n, type LangCode } from "@/lib/i18n";

export type PageCopy = {
  home: {
    stats: { k: string; v: string }[];
    pillars: { title: string; desc: string }[];
    sec: {
      values: string;
      expertise: string;
      firm: string;
      counsel: string;
      voices: string;
    };
    aboutBody: string;
    aboutBullets: string[];
    readStory: string;
    managingPartner: string;
    viewAllAreas: string;
    meetTeam: string;
  };
  about: {
    eyebrow: string;
    title: string;
    storyTitle: string;
    storyBody: string;
    missionTitle: string;
    missionBody: string;
    visionTitle: string;
    visionBody: string;
    valuesTitle: string;
    values: string[];
    membershipsTitle: string;
    memberships: string[];
    speak: string;
    partnerRole: string;
    partnerBio: string;
  };
  lawyers: {
    eyebrow: string;
    title: string;
    sub: string;
    focus: string;
    languages: string;
    bookWith: string; // e.g. "Book with {name} →"
  };
  contact: {
    title: string;
    sub: string;
    whatsappDesc: string;
    mapTitle: string;
  };
  careers: {
    eyebrow: string;
    title: string;
    sub: string;
    apply: string;
    roles: { role: string; loc: string }[];
  };
  faqs: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };
  articles: {
    eyebrow: string;
    title: string;
    sub: string;
    readMore: string;
    body: string;
    items: { t: string; c: string }[];
  };
  gallery: {
    eyebrow: string;
    title: string;
  };
  practice: {
    eyebrow: string;
    title: string;
    sub: string;
    book: string;
  };
  book: {
    expectTitle: string;
    expectItems: string[];
  };
};

const en: PageCopy = {
  home: {
    stats: [
      { k: "20+", v: "Years of practice" },
      { k: "1,200+", v: "Matters handled" },
      { k: "9", v: "Languages served" },
      { k: "24/7", v: "Emergency response" },
    ],
    pillars: [
      { title: "Principled advocacy", desc: "Every matter is prepared as if it will be tried before the highest court." },
      { title: "Discreet counsel", desc: "Confidentiality and judgment expected by institutions and private clients alike." },
      { title: "Institutional depth", desc: "Cross-disciplinary teams built around your matter, not a single practice silo." },
    ],
    sec: { values: "01 · Values", expertise: "02 · Expertise", firm: "03 · The Firm", counsel: "04 · Counsel", voices: "05 · Voices" },
    aboutBody: "Ambeli Jeylan Law Office is an Addis Ababa-based full-service firm founded on the belief that principled advocacy and precise counsel are inseparable. We represent multinational enterprises, Ethiopian institutions, and private clients across the country's most consequential matters.",
    aboutBullets: [
      "Serving clients in 9 languages including Amharic, Oromo, Tigrinya and Arabic.",
      "Cross-disciplinary teams built around each matter.",
      "Trusted counsel to banks, investors, and public institutions.",
    ],
    readStory: "Read our story",
    managingPartner: "Managing Partner",
    viewAllAreas: "View all areas",
    meetTeam: "Meet the full team",
  },
  about: {
    eyebrow: "About the firm",
    title: "A modern Ethiopian law office, built for consequence.",
    storyTitle: "Our story",
    storyBody: "Ambeli Jeylan Law Office was founded to bring international standards of legal practice to a rapidly modernising Ethiopian economy. From our offices in Addis Ababa we advise clients on the transactions and disputes that define institutions — from cross-border investment to constitutional litigation.",
    missionTitle: "Mission",
    missionBody: "To deliver counsel of consequence — clear, courageous, and grounded in the law — to every client we serve.",
    visionTitle: "Vision",
    visionBody: "To be the reference firm of the Horn of Africa: a house of lawyers Ethiopian and international clients turn to when the outcome matters most.",
    valuesTitle: "Core values",
    values: [
      "Integrity above every commercial consideration.",
      "Preparation over performance.",
      "Discretion in every client relationship.",
      "Excellence measured by outcome, not by billable hour.",
    ],
    membershipsTitle: "Memberships & admissions",
    memberships: [
      "Ethiopian Federal Supreme Court",
      "Ethiopian Lawyers Association",
      "Ethiopian Arbitration & Conciliation Centre",
      "International Bar Association",
      "Africa Business Legal Network",
      "ICC International Court of Arbitration",
    ],
    speak: "Speak with a partner",
    partnerRole: "Managing Partner",
    partnerBio: "Two decades of representing corporate and institutional clients before every level of the Ethiopian judiciary and international arbitral tribunals.",
  },
  lawyers: {
    eyebrow: "Counsel",
    title: "The lawyers behind the firm.",
    sub: "Senior partners and associates chosen for judgment, discipline and demonstrated results.",
    focus: "Focus",
    languages: "Languages",
    bookWith: "Book with {name} →",
  },
  contact: {
    title: "We are ready when you are.",
    sub: "Confidential enquiries welcomed. We respond within one business day.",
    whatsappDesc: "Start a chat directly from your phone.",
    mapTitle: "Office location",
  },
  careers: {
    eyebrow: "Careers",
    title: "Join a house of lawyers.",
    sub: "We look for lawyers with judgment, discipline, and a commitment to excellence.",
    apply: "Apply",
    roles: [
      { role: "Senior Associate — Commercial", loc: "Addis Ababa" },
      { role: "Associate — Litigation", loc: "Addis Ababa" },
      { role: "Legal Intern", loc: "Addis Ababa" },
    ],
  },
  faqs: {
    eyebrow: "Answers",
    title: "Frequently asked questions.",
    items: [
      { q: "Do you offer consultations in Amharic and other Ethiopian languages?", a: "Yes. Our lawyers serve clients in Amharic, Oromo, Tigrinya, Somali, Afar, Sidama, Wolaytta, Arabic and English." },
      { q: "How quickly will you respond to my request?", a: "We confirm every consultation request within one business day." },
      { q: "Are consultations confidential?", a: "Absolutely. Every enquiry is protected by lawyer-client privilege from first contact." },
      { q: "Can meetings be virtual?", a: "Yes — Google Meet, Zoom, WhatsApp video or telephone. In-person meetings are available at our Addis Ababa offices." },
      { q: "Do you handle international clients?", a: "We regularly represent foreign investors, multinational corporations and international institutions operating in Ethiopia and the wider region." },
      { q: "How are your fees structured?", a: "We work on hourly, project-based, and retainer arrangements depending on the matter. Fee estimates are discussed at intake." },
    ],
  },
  articles: {
    eyebrow: "Insight",
    title: "Legal articles & analysis.",
    sub: "Commentary from our counsel on the developments shaping Ethiopian law and business.",
    readMore: "Read more →",
    body: "A brief overview of the practical implications for institutions operating in Ethiopia.",
    items: [
      { t: "Ethiopia's new Investment Law: what changes for foreign investors", c: "Investment" },
      { t: "Enforcing foreign arbitral awards in Ethiopia", c: "Arbitration" },
      { t: "Understanding the revised Commercial Code", c: "Commercial" },
      { t: "Data protection obligations for Ethiopian financial institutions", c: "Banking" },
      { t: "Employment reforms and their impact on employers", c: "Employment" },
      { t: "Trademark enforcement strategies in the Horn of Africa", c: "IP" },
    ],
  },
  gallery: {
    eyebrow: "Gallery",
    title: "The firm in pictures.",
  },
  practice: {
    eyebrow: "Expertise",
    title: "Comprehensive counsel across every discipline that matters.",
    sub: "From high-stakes commercial transactions to constitutional litigation, our teams are organised around outcomes, not silos.",
    book: "Book a consultation",
  },
  book: {
    expectTitle: "What to expect",
    expectItems: [
      "Confidential intake reviewed by a senior lawyer.",
      "Confirmation and calendar invite within one business day.",
      "Option of in-person, Google Meet, Zoom or phone consultation.",
      "Available in Amharic, English, Oromo, Tigrinya, Arabic and more.",
    ],
  },
};

const am: PageCopy = {
  home: {
    stats: [
      { k: "20+", v: "ዓመታት ልምድ" },
      { k: "1,200+", v: "የተከናወኑ ጉዳዮች" },
      { k: "9", v: "የተገልገሉ ቋንቋዎች" },
      { k: "24/7", v: "አስቸኳይ ምላሽ" },
    ],
    pillars: [
      { title: "መርሆአዊ አሟጋችነት", desc: "እያንዳንዱ ጉዳይ በከፍተኛው ፍርድ ቤት እንደሚታይ ተደርጎ ይዘጋጃል።" },
      { title: "ሚስጥራዊ አማካሪነት", desc: "ተቋማት እና የግል ደንበኞች የሚጠብቁት ሚስጥራዊነት እና ብልህነት።" },
      { title: "ተቋማዊ ጥልቀት", desc: "በአንድ ዘርፍ ብቻ ሳይሆን ጉዳይዎን ማዕከል ያደረጉ ተባባሪ ቡድኖች።" },
    ],
    sec: { values: "01 · እሴቶች", expertise: "02 · ልምድ", firm: "03 · ቢሮው", counsel: "04 · ጠበቆች", voices: "05 · ድምፆች" },
    aboutBody: "አምበሊ ጀይላን የሕግ ቢሮ በአዲስ አበባ የተመሠረተ የተሟላ የሕግ አገልግሎት ቢሮ ነው። መርሆአዊ አሟጋችነት እና ትክክለኛ አማካሪነት አንድ ናቸው በሚል መርህ ላይ ተመሥርቷል። ብዙ ዓለም አቀፍ ድርጅቶችን፣ የኢትዮጵያ ተቋማትን እና የግል ደንበኞችን በሀገሪቱ ዋና ዋና ጉዳዮች ላይ እናገለግላለን።",
    aboutBullets: [
      "በ9 ቋንቋዎች — አማርኛ፣ ኦሮምኛ፣ ትግርኛ እና ዐረብኛ ጨምሮ — ደንበኞችን እናገለግላለን።",
      "ለእያንዳንዱ ጉዳይ የተዋቀሩ ተባባሪ ቡድኖች።",
      "ለባንኮች፣ ለባለሀብቶች እና ለመንግስት ተቋማት እምነት የተጣለ አማካሪ።",
    ],
    readStory: "ታሪካችንን ያንብቡ",
    managingPartner: "ዋና አጋር",
    viewAllAreas: "ሁሉንም ዘርፎች ይመልከቱ",
    meetTeam: "ሙሉ ቡድናችንን ይተዋወቁ",
  },
  about: {
    eyebrow: "ስለ ቢሮው",
    title: "ውጤት-ተኮር ዘመናዊ ኢትዮጵያዊ የሕግ ቢሮ።",
    storyTitle: "ታሪካችን",
    storyBody: "አምበሊ ጀይላን የሕግ ቢሮ ዓለም አቀፍ ደረጃ ያለውን የሕግ አገልግሎት ወደ በፍጥነት እያደገ ወዳለው የኢትዮጵያ ኢኮኖሚ ለማምጣት ተመሠረተ። ከአዲስ አበባ ቢሮዎቻችን ደንበኞችን በተቋም-ወሳኝ ግብይቶች እና ክርክሮች ላይ እናማክራለን።",
    missionTitle: "ተልዕኮ",
    missionBody: "ግልጽ፣ ደፋር እና በሕግ የተመሠረተ ውጤት-ተኮር አማካሪነት ለሁሉም ደንበኞቻችን መስጠት።",
    visionTitle: "ራዕይ",
    visionBody: "የአፍሪካ ቀንድ ማጣቀሻ ሕግ ቢሮ መሆን — ኢትዮጵያዊና ዓለም አቀፍ ደንበኞች ውጤት በሚያስፈልጋቸው ጊዜ የሚመለከቱት ቤት።",
    valuesTitle: "ዋና እሴቶች",
    values: [
      "ከንግድ ግንኙነት በላይ ታማኝነት።",
      "ዝግጅት ከትዕይንት በላይ።",
      "በእያንዳንዱ የደንበኛ ግንኙነት ውስጥ ሚስጥራዊነት።",
      "በተከፈለ ሰዓት ሳይሆን በውጤት የሚለካ ልዕልና።",
    ],
    membershipsTitle: "አባልነትና ፈቃዶች",
    memberships: [
      "የኢትዮጵያ ፌዴራል ጠቅላይ ፍርድ ቤት",
      "የኢትዮጵያ ጠበቆች ማህበር",
      "የኢትዮጵያ ግልግል እና እርቅ ማዕከል",
      "ዓለም አቀፍ የጠበቆች ማህበር",
      "የአፍሪካ ንግድ ሕግ አውታረ መረብ",
      "ICC ዓለም አቀፍ የግልግል ፍርድ ቤት",
    ],
    speak: "ከአጋር ጋር ይነጋገሩ",
    partnerRole: "ዋና አጋር",
    partnerBio: "ኮርፖሬትና ተቋማዊ ደንበኞችን በሁሉም የኢትዮጵያ ፍርድ ቤት ደረጃዎችና በዓለም አቀፍ የግልግል ፍርድ ቤቶች ለሁለት አስርተ ዓመታት መወከል።",
  },
  lawyers: {
    eyebrow: "ጠበቆች",
    title: "ከቢሮው ጀርባ ያሉ ጠበቆች።",
    sub: "በብልህነት፣ በተግሣጽ እና በተመዘገበ ውጤት የተመረጡ ከፍተኛ አጋሮች እና ተባባሪዎች።",
    focus: "ትኩረት",
    languages: "ቋንቋዎች",
    bookWith: "ከ{name} ጋር ቀጠሮ ይያዙ →",
  },
  contact: {
    title: "እርስዎ ዝግጁ ሲሆኑ እኛም ዝግጁ ነን።",
    sub: "ሚስጥራዊ ጥያቄዎች እንቀበላለን። በአንድ የስራ ቀን ውስጥ እናገኝዎታለን።",
    whatsappDesc: "በቀጥታ ከስልክዎ ውይይት ይጀምሩ።",
    mapTitle: "የቢሮ አድራሻ",
  },
  careers: {
    eyebrow: "የሥራ ዕድል",
    title: "ወደ ጠበቆች ቤት ይቀላቀሉ።",
    sub: "ብልህ፣ ተግሣጽ ያለው እና ለልዕልና የቆመ ጠበቃ እንፈልጋለን።",
    apply: "ያመልክቱ",
    roles: [
      { role: "ከፍተኛ ተባባሪ — ንግድ", loc: "አዲስ አበባ" },
      { role: "ተባባሪ — ክርክር", loc: "አዲስ አበባ" },
      { role: "የሕግ ተለማማጅ", loc: "አዲስ አበባ" },
    ],
  },
  faqs: {
    eyebrow: "መልሶች",
    title: "ተደጋጋሚ ጥያቄዎች።",
    items: [
      { q: "በአማርኛ እና በሌሎች የኢትዮጵያ ቋንቋዎች አማክሮ ይሰጣሉ?", a: "አዎ። ጠበቆቻችን በአማርኛ፣ ኦሮምኛ፣ ትግርኛ፣ ሶማልኛ፣ አፋርኛ፣ ሲዳምኛ፣ ወላይትኛ፣ ዐረብኛ እና እንግሊዝኛ ይሰሩ።" },
      { q: "ለጥያቄዬ ምን ያህል በፍጥነት ትመልሳላችሁ?", a: "እያንዳንዱ የቀጠሮ ጥያቄ በአንድ የስራ ቀን ውስጥ ይረጋገጣል።" },
      { q: "አማካሪነት ሚስጥራዊ ነው?", a: "ፍጹም። ከመጀመሪያ ግንኙነት ጀምሮ በጠበቃ-ደንበኛ ልዩ መብት የተጠበቀ ነው።" },
      { q: "ስብሰባዎች በኦንላይን ሊሆኑ ይችላሉ?", a: "አዎ — Google Meet፣ Zoom፣ WhatsApp ቪዲዮ ወይም ስልክ። በአዲስ አበባ ቢሮዎቻችን በአካልም ይቻላል።" },
      { q: "ዓለም አቀፍ ደንበኞችን ትሰሩ ናቸው?", a: "የውጭ ባለሀብቶችን፣ ዓለም አቀፍ ኩባንያዎችን እና በኢትዮጵያና በአካባቢው የሚንቀሳቀሱ ተቋማትን በተደጋጋሚ እንወክላለን።" },
      { q: "ክፍያ እንዴት ይዋቀራል?", a: "እንደ ጉዳዩ በሰዓት፣ በፕሮጀክት ወይም በሪቴነር መሰረት እንሰራለን። ግምት በመግቢያ ውይይት ይነጋገራል።" },
    ],
  },
  articles: {
    eyebrow: "ዕይታ",
    title: "ሕጋዊ ጽሑፎችና ትንተና።",
    sub: "የኢትዮጵያን ሕግና ንግድ በሚቀርፁ ልማቶች ላይ ከጠበቆቻችን ሐሳብ።",
    readMore: "ተጨማሪ ያንብቡ →",
    body: "በኢትዮጵያ ለሚንቀሳቀሱ ተቋማት ተግባራዊ ትርጉም ያለው አጭር ማጠቃለያ።",
    items: [
      { t: "አዲሱ የኢትዮጵያ የኢንቨስትመንት ሕግ፡ ለውጭ ባለሀብቶች ምን ተለወጠ", c: "ኢንቨስትመንት" },
      { t: "የውጭ የግልግል ውሳኔዎችን በኢትዮጵያ ማስፈጸም", c: "ግልግል" },
      { t: "የተሻሻለውን የንግድ ሕግ መረዳት", c: "ንግድ" },
      { t: "የኢትዮጵያ የፋይናንስ ተቋማት የመረጃ ጥበቃ ግዴታዎች", c: "ባንክ" },
      { t: "የሠራተኛ ማሻሻያዎችና በአሠሪዎች ላይ ያላቸው ተጽዕኖ", c: "ሠራተኛ" },
      { t: "የንግድ ምልክት ተግባራዊነት ስልቶች በአፍሪካ ቀንድ", c: "IP" },
    ],
  },
  gallery: { eyebrow: "ማዕከል", title: "ቢሮው በምስሎች።" },
  practice: {
    eyebrow: "ልምድ",
    title: "በሁሉም ወሳኝ ዘርፎች ሁለንተናዊ አማካሪነት።",
    sub: "ከከፍተኛ የንግድ ግብይቶች እስከ ሕገ-መንግስታዊ ክርክር፣ ቡድኖቻችን በውጤት ዙሪያ የተደራጁ ናቸው።",
    book: "ቀጠሮ ይያዙ",
  },
  book: {
    expectTitle: "ምን ይጠብቁ",
    expectItems: [
      "በከፍተኛ ጠበቃ የሚገመገም ሚስጥራዊ መግቢያ።",
      "በአንድ የስራ ቀን ውስጥ ማረጋገጫና የቀን መቁጠሪያ ግብዣ።",
      "በአካል፣ Google Meet፣ Zoom ወይም ስልክ አማራጭ።",
      "በአማርኛ፣ እንግሊዝኛ፣ ኦሮምኛ፣ ትግርኛ፣ ዐረብኛ እና ተጨማሪ።",
    ],
  },
};

const ar: PageCopy = {
  home: {
    stats: [
      { k: "20+", v: "سنوات من الممارسة" },
      { k: "1,200+", v: "قضية معالجة" },
      { k: "9", v: "لغات مخدومة" },
      { k: "24/7", v: "استجابة طارئة" },
    ],
    pillars: [
      { title: "مرافعة مبدئية", desc: "كل قضية تُعدّ وكأنها ستُنظر أمام أعلى محكمة." },
      { title: "استشارة رصينة", desc: "سرية وحكمة يتوقعها العملاء المؤسسيون والأفراد على حد سواء." },
      { title: "عمق مؤسسي", desc: "فرق متعددة التخصصات تُبنى حول قضيتك، لا حول تخصص واحد." },
    ],
    sec: { values: "01 · القيم", expertise: "02 · الخبرة", firm: "03 · المكتب", counsel: "04 · المحامون", voices: "05 · الأصوات" },
    aboutBody: "مكتب أمبيلي جيلان للمحاماة مكتب متكامل الخدمات مقره أديس أبابا، تأسّس على قناعة بأن المرافعة المبدئية والاستشارة الدقيقة لا يفترقان. نمثّل شركات متعددة الجنسيات ومؤسسات إثيوبية وعملاء أفراد في أهم القضايا في البلاد.",
    aboutBullets: [
      "نخدم العملاء بتسع لغات تشمل الأمهرية والأورومو والتغرينية والعربية.",
      "فرق متعددة التخصصات تُبنى لكل قضية على حدة.",
      "محامون موثوقون لدى البنوك والمستثمرين والمؤسسات العامة.",
    ],
    readStory: "اقرأ قصتنا",
    managingPartner: "الشريك الإداري",
    viewAllAreas: "عرض جميع المجالات",
    meetTeam: "تعرّف على الفريق كاملاً",
  },
  about: {
    eyebrow: "عن المكتب",
    title: "مكتب محاماة إثيوبي حديث، مبني للنتائج.",
    storyTitle: "قصتنا",
    storyBody: "تأسّس مكتب أمبيلي جيلان للمحاماة لجلب المعايير الدولية للممارسة القانونية إلى اقتصاد إثيوبي سريع التحديث. من مكاتبنا في أديس أبابا نستشير العملاء في الصفقات والنزاعات التي تحدد المؤسسات.",
    missionTitle: "الرسالة",
    missionBody: "تقديم استشارة ذات أثر — واضحة وشجاعة ومرتكزة على القانون — لكل عميل نخدمه.",
    visionTitle: "الرؤية",
    visionBody: "أن نكون المكتب المرجعي في القرن الأفريقي: بيت محامين يلجأ إليه العملاء المحليون والدوليون حين تكون النتيجة هي الأهم.",
    valuesTitle: "القيم الأساسية",
    values: [
      "النزاهة فوق أي اعتبار تجاري.",
      "التحضير قبل الأداء.",
      "التكتم في كل علاقة مع العميل.",
      "التميز يُقاس بالنتيجة لا بالساعة.",
    ],
    membershipsTitle: "العضويات والاعتمادات",
    memberships: [
      "المحكمة الفيدرالية العليا الإثيوبية",
      "نقابة المحامين الإثيوبيين",
      "مركز التحكيم والمصالحة الإثيوبي",
      "نقابة المحامين الدولية",
      "شبكة القانون التجاري الأفريقية",
      "محكمة التحكيم الدولية ICC",
    ],
    speak: "تحدّث مع شريك",
    partnerRole: "الشريك الإداري",
    partnerBio: "عقدان من تمثيل العملاء المؤسسيين والشركات أمام جميع درجات القضاء الإثيوبي وهيئات التحكيم الدولية.",
  },
  lawyers: {
    eyebrow: "المحامون",
    title: "المحامون خلف المكتب.",
    sub: "شركاء كبار ومحامون مختارون بالحكمة والانضباط والنتائج المثبتة.",
    focus: "التخصص",
    languages: "اللغات",
    bookWith: "احجز مع {name} →",
  },
  contact: {
    title: "نحن جاهزون متى كنتَ جاهزاً.",
    sub: "الاستفسارات السرية مرحّب بها. نرد خلال يوم عمل واحد.",
    whatsappDesc: "ابدأ محادثة مباشرة من هاتفك.",
    mapTitle: "موقع المكتب",
  },
  careers: {
    eyebrow: "الوظائف",
    title: "انضمّ إلى بيت المحامين.",
    sub: "نبحث عن محامين يتمتعون بالحكمة والانضباط والالتزام بالتميز.",
    apply: "تقديم",
    roles: [
      { role: "محامٍ رئيسي — تجاري", loc: "أديس أبابا" },
      { role: "محامٍ — تقاضٍ", loc: "أديس أبابا" },
      { role: "متدرب قانوني", loc: "أديس أبابا" },
    ],
  },
  faqs: {
    eyebrow: "إجابات",
    title: "الأسئلة الشائعة.",
    items: [
      { q: "هل تقدمون استشارات بالأمهرية ولغات إثيوبية أخرى؟", a: "نعم. يخدم محامونا العملاء بالأمهرية والأورومو والتغرينية والصومالية والعفرية والسيدامية والولاياتية والعربية والإنجليزية." },
      { q: "متى تردون على طلبي؟", a: "نؤكد كل طلب استشارة خلال يوم عمل واحد." },
      { q: "هل الاستشارات سرية؟", a: "بالطبع. كل استفسار محمي بسرية العلاقة بين المحامي وموكله منذ أول اتصال." },
      { q: "هل الاجتماعات يمكن أن تكون افتراضية؟", a: "نعم — Google Meet وZoom وفيديو WhatsApp أو الهاتف. الاجتماعات الحضورية متاحة في مكاتبنا بأديس أبابا." },
      { q: "هل تتعاملون مع عملاء دوليين؟", a: "نمثل بانتظام المستثمرين الأجانب والشركات متعددة الجنسيات والمؤسسات الدولية العاملة في إثيوبيا والمنطقة." },
      { q: "كيف تُحدَّد أتعابكم؟", a: "نعمل بالساعة أو بالمشروع أو بترتيبات ثابتة حسب طبيعة القضية. تُناقَش التقديرات في الاستقبال." },
    ],
  },
  articles: {
    eyebrow: "رؤية",
    title: "مقالات وتحليلات قانونية.",
    sub: "تعليقات محامينا على التطورات التي تشكّل القانون والأعمال في إثيوبيا.",
    readMore: "اقرأ المزيد ←",
    body: "نظرة موجزة على الآثار العملية للمؤسسات العاملة في إثيوبيا.",
    items: [
      { t: "قانون الاستثمار الجديد في إثيوبيا: ما يتغيّر للمستثمرين الأجانب", c: "استثمار" },
      { t: "تنفيذ أحكام التحكيم الأجنبية في إثيوبيا", c: "تحكيم" },
      { t: "فهم القانون التجاري المعدَّل", c: "تجاري" },
      { t: "التزامات حماية البيانات للمؤسسات المالية الإثيوبية", c: "مصرفي" },
      { t: "إصلاحات العمل وأثرها على أصحاب العمل", c: "عمل" },
      { t: "استراتيجيات إنفاذ العلامات التجارية في القرن الأفريقي", c: "ملكية فكرية" },
    ],
  },
  gallery: { eyebrow: "معرض", title: "المكتب في صور." },
  practice: {
    eyebrow: "الخبرة",
    title: "استشارة شاملة في كل تخصص يهم.",
    sub: "من الصفقات التجارية الكبرى إلى التقاضي الدستوري، تُنظّم فرقنا حول النتائج لا حول الصوامع.",
    book: "احجز استشارة",
  },
  book: {
    expectTitle: "ما الذي تتوقعه",
    expectItems: [
      "استقبال سرّي يراجعه محامٍ كبير.",
      "تأكيد ودعوة تقويم خلال يوم عمل واحد.",
      "خيار الحضور شخصياً أو عبر Google Meet أو Zoom أو الهاتف.",
      "متوفر بالأمهرية والإنجليزية والأورومو والتغرينية والعربية وغيرها.",
    ],
  },
};

const ti: PageCopy = {
  home: {
    stats: [
      { k: "20+", v: "ዓመታት ተመኩሮ" },
      { k: "1,200+", v: "ዝተታሓዙ ጉዳያት" },
      { k: "9", v: "ዝተኣገለጉ ቋንቋታት" },
      { k: "24/7", v: "ናይ ህጹጽ ምላሽ" },
    ],
    pillars: [
      { title: "መርሆኣዊ ተጣብቕነት", desc: "ኩሉ ጉዳይ ናብ ላዕለዋይ ቤት-ፍርዲ ከም ዝቐርብ ኮይኑ ይዳሎ።" },
      { title: "ምስጢራዊ ምኽሪ", desc: "ትካላትን ውልቀ-ዓማዊልን ዝጽበይዎ ምስጢርን ብልሓትን።" },
      { title: "ትካላዊ ጥልቀት", desc: "ጉዳይኩም ማእከል ዝገበሩ ሓባራዊ ጋንታታት።" },
    ],
    sec: { values: "01 · እሴታት", expertise: "02 · ተሞክሮ", firm: "03 · ቤት-ጽሕፈት", counsel: "04 · ጠበቓታት", voices: "05 · ድምጽታት" },
    aboutBody: "ኣምበሊ ጀይላን ናይ ሕጊ ቤት-ጽሕፈት ኣብ ኣዲስ ኣበባ ዝርከብ ምሉእ ኣገልግሎት ዝህብ ትካል እዩ። መርኣያዊ ተጣብቕነትን ልክዕ ምኽርን ዘይፍለዩ ኣብ ዝብል መርሆ ተመስሪቱ።",
    aboutBullets: [
      "ብ9 ቋንቋታት — ኣምሓርኛ፣ ኦሮምኛ፣ ትግርኛን ዓረብን ሓዊሱ — ንዓማዊል ነገልግል።",
      "ንነፍሲ ወከፍ ጉዳይ ዝተዳለዉ ጋንታታት።",
      "ንባንክታት፣ ንኢንቨስተራትን ንህዝባዊ ትካላትን እሙን ኣማኻሪ።",
    ],
    readStory: "ታሪኽና ኣንብቡ",
    managingPartner: "ኣመሓዳሪ ኣጋር",
    viewAllAreas: "ኩሎም ዓውደታት ርኣዩ",
    meetTeam: "ምሉእ ጋንታ ተላለዩ",
  },
  about: {
    eyebrow: "ብዛዕባ እቲ ቤት-ጽሕፈት",
    title: "ውጽኢት-ተኮር ዘመናዊ ኢትዮጵያዊ ናይ ሕጊ ቤት-ጽሕፈት።",
    storyTitle: "ታሪኽና",
    storyBody: "ኣምበሊ ጀይላን ቤት-ጽሕፈት ኣህጉራዊ ደረጃ ዘለዎ ሕጋዊ ኣገልግሎት ናብ ብቕልጡፍ ዝምዕብል ኢትዮጵያዊ ቁጠባ ንምምጻእ ተመስሪቱ።",
    missionTitle: "ተልእኮ",
    missionBody: "ንኹሉ ዓሚል ግልጺ፣ ተባዕን ብሕጊ ዝተመስረተን ዉጽኢት-ተኮር ምኽሪ ምሃብ።",
    visionTitle: "ራእይ",
    visionBody: "ናይ ቀርኒ ኣፍሪቃ መወከሲ ቤት-ጽሕፈት ምዃን።",
    valuesTitle: "ቀንዲ እሴታት",
    values: [
      "ካብ ንግዳዊ ጉዳይ ንላዕሊ ተኣማንነት።",
      "ካብ ትዕይንቲ ንላዕሊ ምድላው።",
      "ኣብ ነፍሲ ወከፍ ናይ ዓሚል ርክብ ምስጢራዊነት።",
      "ብዉጽኢት እምበር ብዝኸፈልናዮ ሰዓት ዘይልካዕ ብልጫ።",
    ],
    membershipsTitle: "ኣባልነትን ፍቓድን",
    memberships: [
      "ኢትዮጵያ ፌደራላዊ ጠቕላላ ቤት-ፍርዲ",
      "ማሕበር ጠበቓታት ኢትዮጵያ",
      "ማእከል ግልግልን ዕርቅን ኢትዮጵያ",
      "ኣህጉራዊ ማሕበር ጠበቓታት",
      "ናይ ኣፍሪቃ ንግዳዊ ሕጊ መርበብ",
      "ICC ኣህጉራዊ ቤት-ፍርዲ ግልግል",
    ],
    speak: "ምስ ኣጋር ተዘራረቡ",
    partnerRole: "ኣመሓዳሪ ኣጋር",
    partnerBio: "ንዕስራ ዓመታት ንኮርፖሬትን ትካላዊ ዓማዊልን ኣብ ኩሉ ደረጃ ናይ ኢትዮጵያ ፍርዲ ወኪሉ።",
  },
  lawyers: {
    eyebrow: "ጠበቓታት",
    title: "ካብ ድሕሪ እቲ ቤት-ጽሕፈት ዘለዉ ጠበቓታት።",
    sub: "ብብልሓት፣ ብስነ-ስርዓትን ብተመዝጊቡ ውጽኢትን ዝተመርጹ ላዕለዎት ኣጋራት።",
    focus: "ትኹረት",
    languages: "ቋንቋታት",
    bookWith: "ምስ {name} ቆጸራ ውሰዱ →",
  },
  contact: {
    title: "ንስኹም ድሉዋት ምስ ትኾኑ ንሕና እውን ድሉዋት ኢና።",
    sub: "ምስጢራዊ ሕቶታት ንቕበል። ኣብ ውሽጢ ሓደ ናይ ስራሕ መዓልቲ ንምላሽ።",
    whatsappDesc: "ብቐጥታ ካብ ተሌፎንኩም ዕላል ጀምሩ።",
    mapTitle: "ኣድራሻ ቤት-ጽሕፈት",
  },
  careers: {
    eyebrow: "ናይ ስራሕ ዕድላት",
    title: "ናብ ቤት ጠበቓታት ተጸምበሩ።",
    sub: "ብልሓት፣ ስነ-ስርዓትን ንብልጫ ዝቖመ ጠበቓ ንደሊ።",
    apply: "ኣመልክቱ",
    roles: [
      { role: "ላዕለዋይ ተሓባባሪ — ንግዲ", loc: "ኣዲስ ኣበባ" },
      { role: "ተሓባባሪ — ክርክር", loc: "ኣዲስ ኣበባ" },
      { role: "ናይ ሕጊ ተለማማዲ", loc: "ኣዲስ ኣበባ" },
    ],
  },
  faqs: {
    eyebrow: "መልስታት",
    title: "ተደጋገምቲ ሕቶታት።",
    items: [
      { q: "ብኣምሓርኛን ካልኦት ናይ ኢትዮጵያ ቋንቋታትን ምኽሪ ትህቡ ዲኹም?", a: "እወ። ጠበቓታትና ብኣምሓርኛ፣ ኦሮምኛ፣ ትግርኛ፣ ሶማልኛ፣ ዓፋርኛ፣ ሲዳምኛ፣ ዎላይትኛ፣ ዓረብን እንግሊዝኛን የገልግሉ።" },
      { q: "ንሕቶይ ብኸመይ ብቕልጡፍ ትምልሱ?", a: "ኩሉ ናይ ቆጸራ ሕቶ ኣብ ውሽጢ ሓደ ናይ ስራሕ መዓልቲ የረጋግጽ።" },
      { q: "ምኽሪ ምስጢራዊ ድዩ?", a: "ብጭራሽ። ካብ መጀመርታ ርክብ ጀሚሩ ብጠበቓ-ዓሚል ውሕስነት ዝተሓለወ እዩ።" },
      { q: "ኣኼባታት ብኦንላይን ክኸውን ይኽእልዶ?", a: "እወ — Google Meet፣ Zoom፣ WhatsApp ቪድዮ ወይ ተሌፎን። ብኣካል እውን ኣብ ኣዲስ ኣበባ ቤት-ጽሕፈትና ይከኣል።" },
      { q: "ኣህጉራዊ ዓማዊል ትሓቁ ዲኹም?", a: "ኣብ ኢትዮጵያን ከባቢአን ንዝንቀሳቐሱ ወጻእተኛ ኢንቨስተራት ብተደጋጋሚ ንውክል።" },
      { q: "ክፍሊት ብኸመይ ይግምገም?", a: "ብጉዳዩ መሰረት ብሰዓት፣ ብፕሮጀክት ወይ ብሪቴነር ኣገባብ ንሰርሕ።" },
    ],
  },
  articles: {
    eyebrow: "ዕይታ",
    title: "ሕጋዊ ጽሑፋትን ትንተናን።",
    sub: "ብዛዕባ ሕጊ ኢትዮጵያን ንግድን ልማታት ካብ ጠበቓታትና ርእይቶ።",
    readMore: "ተወሳኺ ኣንብቡ →",
    body: "ኣብ ኢትዮጵያ ንዝንቀሳቐሱ ትካላት ተግባራዊ ትርጉም ዘለዎ ሓጺር ገለጻ።",
    items: [
      { t: "ሓድሽ ናይ ኢትዮጵያ ኢንቨስትመንት ሕጊ፡ ንወጻእተኛ ኢንቨስተራት እንታይ ተቐይሩ", c: "ኢንቨስትመንት" },
      { t: "ወጻእተኛ ናይ ግልግል ውሳነታት ኣብ ኢትዮጵያ ምፍጻም", c: "ግልግል" },
      { t: "ዝተመሓየሸ ናይ ንግድ ሕጊ ምርዳእ", c: "ንግድ" },
      { t: "ናይ ኢትዮጵያ ፋይናንሳዊ ትካላት ናይ ዳታ ጽላል ግዴታታት", c: "ባንክ" },
      { t: "ናይ ስራሕ ማሻሻያታትን ኣብ ኣስራሕቲ ዘለዎ ጽልዋን", c: "ስራሕ" },
      { t: "ናይ ንግድ ምልክት ምፍጻም ስትራተጂታት ኣብ ቀርኒ ኣፍሪቃ", c: "IP" },
    ],
  },
  gallery: { eyebrow: "ማዕከል ስእሊ", title: "ቤት-ጽሕፈት ብስእሊ።" },
  practice: {
    eyebrow: "ተሞክሮ",
    title: "ኣብ ኩሉ ኣገዳሲ ዓውዲ ምሉእ ምኽሪ።",
    sub: "ካብ ላዕለዋይ ንግዳዊ ግብይታት ክሳብ ሕገ-መንግስታዊ ክርክር።",
    book: "ቆጸራ ውሰዱ",
  },
  book: {
    expectTitle: "እንታይ ትጽበዩ",
    expectItems: [
      "ብላዕለዋይ ጠበቓ ዝግምገም ምስጢራዊ መእተዊ።",
      "ኣብ ውሽጢ ሓደ ናይ ስራሕ መዓልቲ ምርግጋጽን ጋዜጣ-ቆጸራን።",
      "ብኣካል፣ Google Meet፣ Zoom ወይ ተሌፎን ኣማራጺ።",
      "ብኣምሓርኛ፣ እንግሊዝኛ፣ ኦሮምኛ፣ ትግርኛ፣ ዓረብን ካልኦትን።",
    ],
  },
};

const om: PageCopy = {
  home: {
    stats: [
      { k: "20+", v: "Waggoota muuxannoo" },
      { k: "1,200+", v: "Dhimmoota qabaman" },
      { k: "9", v: "Afaanota tajaajilaman" },
      { k: "24/7", v: "Deebii ariifachiisaa" },
    ],
    pillars: [
      { title: "Falmii amanamaa", desc: "Dhimmi hundi akka fuula mana murtii ol'aanaatti dhihaatutti qophaa'a." },
      { title: "Gorsa iccitii", desc: "Iccitii fi ogummaa dhaabbileen fi maamiltoonni dhuunfaa eegan." },
      { title: "Gadi fageenya dhaabbataa", desc: "Garee ogummaa gara garaa dhimma keessan irratti hundaa'e." },
    ],
    sec: { values: "01 · Gatiiwwan", expertise: "02 · Muuxannoo", firm: "03 · Waajjirichi", counsel: "04 · Abukaattota", voices: "05 · Sagalee" },
    aboutBody: "Waajjirri Seeraa Ambeli Jeylan waajjira tajaajila guutuu Finfinnee keessatti argamu dha. Falmii amanamaan fi gorsi sirrii gargar hin baane jedhu irratti hundaa'e.",
    aboutBullets: [
      "Afaan 9 — Amaariffa, Afaan Oromoo, Tigrinyaa fi Arabiffaa dabalatee — maamiltoota keenya tajaajilla.",
      "Dhimma tokkoon tokkoon isaatiif garee ogummaa gara garaa qopheessina.",
      "Baankiiwwan, invastaroota fi dhaabbilee mootummaatiif gorsituu amanamaa.",
    ],
    readStory: "Seenaa keenya dubbisi",
    managingPartner: "Michuu Hoogganaa",
    viewAllAreas: "Damee hunda ilaali",
    meetTeam: "Garee guutuu wal beeki",
  },
  about: {
    eyebrow: "Waa'ee waajjirichaa",
    title: "Waajjira seeraa Itoophiyaa ammayyaa, bu'aaf ijaarame.",
    storyTitle: "Seenaa keenya",
    storyBody: "Waajjirri Seeraa Ambeli Jeylan sadarkaa idil-addunyaa gara diinagdee Itoophiyaa saffisaan ammayyoomaa jiruutti fiduuf hundeeffame.",
    missionTitle: "Ergama",
    missionBody: "Maamila keenya hundaaf gorsa bu'aa qabu — ifaa, ija jabaa fi seera irratti hundaa'e — kennuu.",
    visionTitle: "Mul'ata",
    visionBody: "Waajjira wabii Gaanfa Afriikaa ta'uu — maamiltoonni Itoophiyaa fi idil-addunyaa yeroo bu'aan barbaachisu itti dhufan.",
    valuesTitle: "Gatiiwwan bu'uura",
    values: [
      "Amanamummaan hunda irra caala.",
      "Qophaa'uun raawwii caala.",
      "Iccitii walitti dhufeenya maamilaa hunda keessatti.",
      "Cimini bu'aan malee sa'aatii kaffalameen hin madaalamu.",
    ],
    membershipsTitle: "Miseensummaa fi hayyama",
    memberships: [
      "Mana Murtii Waliigalaa Federaalaa Itoophiyaa",
      "Waldaa Abukaattota Itoophiyaa",
      "Giddu-gala Adda Baastuu fi Araaraa Itoophiyaa",
      "Waldaa Abukaattota Idil-Addunyaa",
      "Netiwoorkii Seeraa Daldala Afriikaa",
      "Mana Murtii Adda Baastuu Idil-Addunyaa ICC",
    ],
    speak: "Michuu waliin dubbadhu",
    partnerRole: "Michuu Hoogganaa",
    partnerBio: "Waggoota digdamaaf maamiltoota koorporeetii sadarkaa mana murtii Itoophiyaa hunda irratti bakka bu'uu.",
  },
  lawyers: {
    eyebrow: "Abukaattota",
    title: "Abukaattoonni duuba waajjirichaa jiran.",
    sub: "Michoonni ol'aanoo fi hidhattoonni ogummaa fi bu'aa qabatamaan filataman.",
    focus: "Xiyyeeffannoo",
    languages: "Afaanota",
    bookWith: "{name} waliin beellama qabadhu →",
  },
  contact: {
    title: "Isin yoo qophoofte, nu qophii dha.",
    sub: "Gaaffiiwwan iccitii keessummeessina. Guyyaa hojii tokko keessatti deebii kennina.",
    whatsappDesc: "Kallattiin bilbila keessan irraa haasaa jalqabaa.",
    mapTitle: "Bakka waajjirichaa",
  },
  careers: {
    eyebrow: "Carraa Hojii",
    title: "Mana abukaattotaatti makami.",
    sub: "Abukaattota ogummaa, seer-qabeessa fi cimina qaban barbaadna.",
    apply: "Iyyadhu",
    roles: [
      { role: "Michuu Ol'aanaa — Daldala", loc: "Finfinnee" },
      { role: "Michuu — Falmii", loc: "Finfinnee" },
      { role: "Leenjifamaa Seeraa", loc: "Finfinnee" },
    ],
  },
  faqs: {
    eyebrow: "Deebii",
    title: "Gaaffiiwwan yeroo baay'ee gaafataman.",
    items: [
      { q: "Amaariffa fi afaanota Itoophiyaa biroon gorsa kennitanii?", a: "Eeyyee. Abukaattonni keenya Amaariffa, Afaan Oromoo, Tigrinyaa, Somaalii, Afaar, Sidaamaa, Wolayittaa, Arabiffaa fi Ingiliffaan maamiltoota tajaajilu." },
      { q: "Gaaffii koof yoom deebii kennitu?", a: "Gaaffiin beellamaa hundi guyyaa hojii tokko keessatti ni mirkanaa'a." },
      { q: "Gorsi iccitii dhaa?", a: "Dhugumatti. Tuqaa jalqabaatii kaasee mirga abukaattoo-maamilaan eegama." },
      { q: "Walga'iin sarara irraa ta'uu danda'aa?", a: "Eeyyee — Google Meet, Zoom, WhatsApp vidiyoo yookaan bilbila. Waajjira keenya Finfinneetti qaamaanis ni danda'ama." },
      { q: "Maamiltoota idil-addunyaa keessummeessitanii?", a: "Invastaroota alaa fi dhaabbilee idil-addunyaa Itoophiyaa fi naannoo keessa hojjetan yeroo hedduu bakka buuna." },
      { q: "Kaffaltiin akkamitti caasoftamaa?", a: "Akka dhimmichaatti sa'aatiin, pirojektii yookaan riteenaraan ni hojjenna." },
    ],
  },
  articles: {
    eyebrow: "Xiinxala",
    title: "Barreeffamootaa fi xiinxala seeraa.",
    sub: "Waa'ee misooma seera Itoophiyaa fi daldalaa irratti ilaalcha abukaattota keenyaa.",
    readMore: "Dabalata dubbisi →",
    body: "Dhaabbilee Itoophiyaa keessatti hojjetaniif ibsa gabaabaa bu'aa qabatamaa.",
    items: [
      { t: "Seerri Invastimentii Itoophiyaa haaraa: invastaroota alaatiif maal jijjiirama", c: "Invastimentii" },
      { t: "Murteewwan araaraa alaa Itoophiyaa keessatti raawwachiisuu", c: "Araara" },
      { t: "Seera Daldalaa fooyya'e hubachuu", c: "Daldala" },
      { t: "Dhaabbilee faayinaansii Itoophiyaatiif dirqama eegumsa daataa", c: "Baankii" },
      { t: "Fooyya'iinsi seera hojii fi dhiibbaa hojii-adeemsisaa irratti qabu", c: "Hojii" },
      { t: "Tarsiimoo raawwachiisuu mallattoo daldalaa Gaanfa Afriikaa keessatti", c: "IP" },
    ],
  },
  gallery: { eyebrow: "Gaallarii", title: "Waajjirri suuraa keessa." },
  practice: {
    eyebrow: "Muuxannoo",
    title: "Dameewwan barbaachisoo hunda irratti gorsa guutuu.",
    sub: "Daldala sadarkaa ol'aanaa irraa hanga falmii heera-mootummaa.",
    book: "Beellama qabadhu",
  },
  book: {
    expectTitle: "Maal eeguu qabdu",
    expectItems: [
      "Simannaa iccitii abukaattoo ol'aanaan sakatta'amu.",
      "Guyyaa hojii tokko keessatti mirkaneessaa fi affeerraa kaalendarii.",
      "Filannoo qaamaan, Google Meet, Zoom yookaan bilbilaan.",
      "Amaariffa, Ingiliffa, Afaan Oromoo, Tigrinyaa, Arabiffaa fi kanneen biroon jira.",
    ],
  },
};

const so: PageCopy = {
  home: {
    stats: [
      { k: "20+", v: "Sano khibrad ah" },
      { k: "1,200+", v: "Kiisas la qabtay" },
      { k: "9", v: "Luqado la adeegayo" },
      { k: "24/7", v: "Jawaab degdeg ah" },
    ],
    pillars: [
      { title: "U doodid mabda' leh", desc: "Kiis kasta waxaa loo diyaariyaa sida in laga eegayo maxkamadda ugu sarraysa." },
      { title: "Talo qarsoodi ah", desc: "Sirta iyo garaadka ay filayaan hay'adaha iyo shakhsiyaadku." },
      { title: "Qoto dheeraan hay'adeed", desc: "Kooxo takhasusyo kala duwan oo lagu dhiso kiiskaaga." },
    ],
    sec: { values: "01 · Qiyamka", expertise: "02 · Khibrada", firm: "03 · Xafiiska", counsel: "04 · Qareenada", voices: "05 · Codadka" },
    aboutBody: "Xafiiska Sharciga Ambeli Jeylan waa xafiis adeeg buuxa oo fadhigiisu yahay Addis Ababa. Wuxuu ku dhisan yahay caqiidada in u doodid mabda'aysan iyo talo sax ah aysan kala go'in.",
    aboutBullets: [
      "9 luqado — Amxaari, Oromo, Tigrigna iyo Carabi — ayaan macaamiisha ku adeegnaa.",
      "Kooxo takhasusyo badan leh oo la sameeyo kiis walba.",
      "Qareen la aamin karo bangiyada, maalgashadayaasha iyo hay'adaha dawladda.",
    ],
    readStory: "Akhriso sheekadeenna",
    managingPartner: "Wakiilka Guud",
    viewAllAreas: "Eeg dhammaan qaybaha",
    meetTeam: "La kulan kooxda oo dhan",
  },
  about: {
    eyebrow: "Ku saabsan xafiiska",
    title: "Xafiis sharci Itoobiyaan ah oo casri ah, oo loo dhisay natiijo.",
    storyTitle: "Sheekadeenna",
    storyBody: "Xafiiska Sharciga Ambeli Jeylan waxaa loo aasaasay in heerarka caalamiga ah ee sharciga la keeno dhaqaalaha Itoobiya ee si xawli leh u casriyoobaya.",
    missionTitle: "Hadafka",
    missionBody: "In macmiil kastaba la siiyo talo saameyn leh — cad, geesi ah, oo sharciga ku salaysan.",
    visionTitle: "Aragtida",
    visionBody: "In aan noqonno xafiiska tixraaca ah ee Geeska Afrika.",
    valuesTitle: "Qiyamka aasaasiga ah",
    values: [
      "Daacadnimo ka sarraysa mid kasta oo ganacsi.",
      "Diyaargarow ka sarreeya bandhig.",
      "Sirdaris cilaaqaad kasta oo macmiil.",
      "Fiicnaan lagu qiyaaso natiijada, ma aha saacadaha lacag laga qaato.",
    ],
    membershipsTitle: "Xubinnimo iyo shatiyo",
    memberships: [
      "Maxkamadda Sare ee Federaalka Itoobiya",
      "Ururka Qareenada Itoobiya",
      "Xarunta Garqaadka iyo Dhexdhexaadinta Itoobiya",
      "Ururka Qareenada Caalamiga",
      "Shabakada Sharciga Ganacsiga Afrika",
      "Maxkamadda Garqaadka Caalamiga ah ICC",
    ],
    speak: "La hadal wakiil",
    partnerRole: "Wakiilka Guud",
    partnerBio: "Labaatan sano oo aan matalayay macaamiisha shirkadaha iyo hay'adaha heerarka maxkamadaha Itoobiya oo dhan.",
  },
  lawyers: {
    eyebrow: "Qareenada",
    title: "Qareenada ka dambeeya xafiiska.",
    sub: "Wakiilo waaweyn iyo qareenno lagu doortay garaadka, edbinta iyo natiijo la muujiyay.",
    focus: "Diirada",
    languages: "Luqadaha",
    bookWith: "La qorso {name} →",
  },
  contact: {
    title: "Waxaan diyaar u nahay markaad diyaar tahay.",
    sub: "Su'aalaha qarsoodiga ah waa la soo dhaweynayaa. Waxaan ka jawaabnaa hal maalin gudaheed.",
    whatsappDesc: "Toos uga bilow sheeko taleefankaaga.",
    mapTitle: "Goobta xafiiska",
  },
  careers: {
    eyebrow: "Fursado Shaqo",
    title: "Ku biir guriga qareenada.",
    sub: "Waxaan doonaynaa qareen leh garaad, edbin iyo ballan qaad fiicnaan.",
    apply: "Codso",
    roles: [
      { role: "Qareen Sare — Ganacsi", loc: "Addis Ababa" },
      { role: "Qareen — Muran Maxkamadeed", loc: "Addis Ababa" },
      { role: "Tababaraha Sharciga", loc: "Addis Ababa" },
    ],
  },
  faqs: {
    eyebrow: "Jawaabo",
    title: "Su'aalaha caadiga ah.",
    items: [
      { q: "Ma bixisaan la-talin Amxaari iyo luqado kale oo Itoobiya?", a: "Haa. Qareenadeennu waxay ku adeegaan Amxaari, Oromo, Tigrigna, Soomaali, Afar, Sidama, Wolaytta, Carabi iyo Ingiriisi." },
      { q: "Sida degdegga ah maad iga jawaabaysaa?", a: "Waxaan xaqiijinnaa codsi kasta oo la-talin ah hal maalin gudaheed." },
      { q: "La-tashiga ma qarsoodi baa?", a: "Dhab ahaan. Waxbariskii ugu horreeyay wuxuu ku ilaalinayaa mudnaanta qareen-macmiil." },
      { q: "Kulanku miyuu noqon karaa mid online ah?", a: "Haa — Google Meet, Zoom, WhatsApp fiidiyaha ama taleefan. Kulamada shakhsi ahaaneed waxay ka bilaabmaan xafiiskeenna Addis Ababa." },
      { q: "Ma qabtaan macaamiisha caalamiga ah?", a: "Waxaan si joogto ah u matalnaa maalgashadayaasha shisheeye, shirkadaha caalamiga ah iyo hay'adaha ka shaqeeya Itoobiya iyo gobolka." },
      { q: "Sida khidmadaha loo qorsheeyo?", a: "Waxaan ku shaqeynaa saacadaha, mashruuca ama qandaraaska ku salaysan kiiska." },
    ],
  },
  articles: {
    eyebrow: "Fiiro",
    title: "Maqaallo iyo falanqayn sharci.",
    sub: "Faallada qareenadeennu ee horumarka sharciga iyo ganacsiga Itoobiya.",
    readMore: "Akhri wax badan →",
    body: "Faahfaahin gaaban oo saameynta ka sameynaya hay'adaha ka shaqeeya Itoobiya.",
    items: [
      { t: "Sharciga cusub ee Maalgashiga Itoobiya", c: "Maalgashi" },
      { t: "Fulinta go'aannada garqaadka shisheeye ee Itoobiya", c: "Garqaad" },
      { t: "Fahmida Xeerka Ganacsiga ee la cusboonaysiiyay", c: "Ganacsi" },
      { t: "Waajibaadka ilaalinta xogta ee hay'adaha maaliyadeed", c: "Bangi" },
      { t: "Dib-u-habaynta shaqada iyo saameynteeda", c: "Shaqo" },
      { t: "Xeeladaha fulinta calaamadaha ganacsi", c: "IP" },
    ],
  },
  gallery: { eyebrow: "Sawirro", title: "Xafiiska sawirro." },
  practice: {
    eyebrow: "Khibrada",
    title: "Talo dhamaystiran oo takhasus kasta oo muhiim ah leh.",
    sub: "Laga bilaabo ganacsi weyn ilaa muran dastuuri.",
    book: "Qabso ballan",
  },
  book: {
    expectTitle: "Waxa aad filan karto",
    expectItems: [
      "Qaadis qarsoodi ah oo qareen sare eegayo.",
      "Xaqiijin iyo casumaad jadwaleed hal maalin gudaheed.",
      "Doorasho shakhsi ahaan, Google Meet, Zoom ama taleefan.",
      "Wuxuu ku diyaar yahay Amxaari, Ingiriisi, Oromo, Tigrigna, Carabi iyo kuwa kale.",
    ],
  },
};

const DICTS: Record<LangCode, PageCopy> = {
  en,
  am,
  ti,
  om,
  so,
  aa: en,
  sid: en,
  wal: en,
  ar,
};

export function usePageCopy(): PageCopy {
  const { lang } = useI18n();
  return DICTS[lang] ?? en;
}
