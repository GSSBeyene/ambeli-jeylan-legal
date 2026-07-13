import { LANGUAGES, type LangCode } from "@/lib/i18n";

export type SeoEntry = { title: string; description: string };

// Per-route, per-language title + description. English is the fallback.
export const SEO_META: Record<string, Partial<Record<LangCode, SeoEntry>>> = {
  "/": {
    en: {
      title: "Ambeli Jeylan Law Office — Counsel of Consequence in Addis Ababa",
      description:
        "Full-service Ethiopian law office serving individuals, enterprises and institutions across civil, commercial, corporate, investment and international matters.",
    },
    am: {
      title: "አምበሊ ጀይላን የሕግ ቢሮ — በአዲስ አበባ ተጨባጭ የሕግ አማካሪነት",
      description:
        "ለግለሰቦች፣ ለድርጅቶች እና ለተቋማት የፍትሐ ብሔር፣ የንግድ፣ የኮርፖሬት፣ የኢንቨስትመንት እና የዓለም አቀፍ ጉዳዮች የተሟላ ሕጋዊ አገልግሎት።",
    },
    ti: {
      title: "ኣምበሊ ጀይላን ናይ ሕጊ ቤት-ጽሕፈት — ኣብ ኣዲስ ኣበባ ተዓዛቢ ምኽሪ",
      description:
        "ንውልቀ-ሰባት፣ ትካላትን ኣካላትን ኣብ ሲቪላዊ፣ ንግዳዊ፣ ኮርፖሬት፣ ወፍርን ኣህጉራውን ጉዳያት ምሉእ ሕጋዊ ኣገልግሎት።",
    },
    om: {
      title: "Waajjira Seeraa Ambeli Jeylan — Finfinnee irraa Gorsa Seeraa Gahaa",
      description:
        "Namoota dhuunfaa, dhaabbilee fi manneen hojiitiif dhimma siiviilii, daldalaa, koorporeetii, invastimantii fi idil-addunyaa irratti tajaajila seeraa guutuu.",
    },
    so: {
      title: "Xafiiska Sharciga Ambeli Jeylan — Talo Sharci oo Hufan Addis Ababa",
      description:
        "Adeeg sharci dhamaystiran shakhsi, ganacsi iyo hay'ado ku saabsan arrimaha madaniga, ganacsiga, shirkadaha, maalgashiga iyo caalamiga.",
    },
    aa: {
      title: "Ambeli Jeylan Higge Biiro — Addis Ababa Aqli Higge Amaale",
      description:
        "Shaqsii, dhaabbilee kee mannen hojjihiih siiwiilii, daldalaa, koorporeete, wolqu kee addunyah caagiida ummaan higge tajaajila.",
    },
    sid: {
      title: "Ambeli Jeylan Higge Biiro — Addis Ababannira Halaalu Amaale",
      description:
        "Manna, dhaabbanna nna maccaano siwiile, daddalu, koorporeetu, wolqunna gobbate coyibba aana ummaano higge tajaajila.",
    },
    wal: {
      title: "Ambeli Jeylan Higgiyaa Biiruwaa — Addis Ababan Loˈˈo Zorettaa",
      description:
        "Asatuyyoo, dirijjitiyoo qassi maabaratuyyoo siwiiliyaa, zal'iyaa, koomppaanaa, miishshaa qaaxxiyaanne alagaa yohuwan kumetta higgiyaa oosuwaa.",
    },
    ar: {
      title: "مكتب أمبيلي جيلان للمحاماة — استشارة ذات أثر في أديس أبابا",
      description:
        "مكتب محاماة إثيوبي متكامل الخدمات للأفراد والشركات والمؤسسات في القضايا المدنية والتجارية والشركات والاستثمار والدولية.",
    },
  },

  "/about": {
    en: { title: "About — Ambeli Jeylan Law Office", description: "History, mission, vision and values of Ambeli Jeylan Law Office in Addis Ababa." },
    am: { title: "ስለ እኛ — አምበሊ ጀይላን የሕግ ቢሮ", description: "የአምበሊ ጀይላን የሕግ ቢሮ ታሪክ፣ ተልዕኮ፣ ራዕይ እና እሴቶች።" },
    ti: { title: "ብዛዕባና — ኣምበሊ ጀይላን ናይ ሕጊ ቤት-ጽሕፈት", description: "ናይ ኣምበሊ ጀይላን ናይ ሕጊ ቤት-ጽሕፈት ታሪኽ፣ ዕላማ፣ ራእይን ክብርታትን።" },
    om: { title: "Waa'ee Keenya — Waajjira Seeraa Ambeli Jeylan", description: "Seenaa, ergama, mul'ata fi gatii Waajjira Seeraa Ambeli Jeylan." },
    so: { title: "Nagayage — Xafiiska Sharciga Ambeli Jeylan", description: "Taariikhda, hadafka, aragtida iyo qiyamka xafiiska sharciga Ambeli Jeylan." },
    aa: { title: "Nagayage — Ambeli Jeylan Higge Biiro", description: "Ambeli Jeylan Higge Biiroh taariikha, hadaf, mul'anna qiimu." },
    sid: { title: "Nunnihu Daafira — Ambeli Jeylan Higge Biiro", description: "Ambeli Jeylan Higge Biirore taariiki, hajaji, la'inna guma." },
    wal: { title: "Nubaa — Ambeli Jeylan Higgiyaa Biiruwaa", description: "Ambeli Jeylan Higgiyaa Biiruwaa taarikee, halchuwaa, ajjuutaanne alˈˈotettaa." },
    ar: { title: "من نحن — مكتب أمبيلي جيلان للمحاماة", description: "تاريخ ورسالة ورؤية وقيم مكتب أمبيلي جيلان للمحاماة في أديس أبابا." },
  },

  "/practice-areas": {
    en: { title: "Practice Areas — Ambeli Jeylan Law Office", description: "Full-service practice: civil, commercial, corporate, investment, tax, family, immigration, IP, criminal defense, arbitration and more." },
    am: { title: "የስራ ዘርፎች — አምበሊ ጀይላን የሕግ ቢሮ", description: "የተሟላ የሕግ አገልግሎት፡ ፍትሐ ብሔር፣ ንግድ፣ ኮርፖሬት፣ ኢንቨስትመንት፣ ግብር፣ ቤተሰብ፣ ኢሚግሬሽን፣ የአእምሮ ንብረት፣ የወንጀል መከላከያ፣ ግልግል እና ሌሎችም።" },
    ti: { title: "ዓውደ-ስራሕ — ኣምበሊ ጀይላን ናይ ሕጊ ቤት-ጽሕፈት", description: "ምሉእ ኣገልግሎት፡ ሲቪላዊ፣ ንግዲ፣ ኮርፖሬት፣ ወፍሪ፣ ግብሪ፣ ስድራቤት፣ ኢሚግሬሽን፣ ኣእምሮ ንብረት፣ ገበን ምክልኻልን ካልኦትን።" },
    om: { title: "Damee Hojii — Waajjira Seeraa Ambeli Jeylan", description: "Tajaajila guutuu: siiviilii, daldalaa, koorporeetii, invastimantii, gibiraa, maatii, godaansa, qabeenya sammuu, falmii yakkaa fi araaraa." },
    so: { title: "Qaybaha Shaqada — Xafiiska Sharciga Ambeli Jeylan", description: "Adeeg buuxa: madaniga, ganacsi, shirkado, maalgashi, canshuur, qoys, socdaal, hantida maskaxda, difaac dembi, garsoor iyo wax kale." },
    aa: { title: "Damee Hojii — Ambeli Jeylan Higge Biiro", description: "Ummaan tajaajila: siiwiilii, daldalaa, koorporeete, wolqu, gibiri, buxa, godaansi, sammuh qabeenya, yakkah falmii kee araarii." },
    sid: { title: "Loosu Bayicho — Ambeli Jeylan Higge Biiro", description: "Ummaano tajaajila: siwiile, daddalu, koorporeetu, wolqu, gibire, maate, godaansa, xagge qeecho, cubbe agare, araarinna wolewwa." },
    wal: { title: "Oosuwaa Bessaa — Ambeli Jeylan Higgiyaa Biiruwaa", description: "Kumetta oosuwaa: siwiile, zal'iyaa, koomppaanaa, miishshaa, qaraxaa, so asaa, godaansa, wozanaa aquwaa, naaquwaa teqquwaa, sigetaanne haratuwaa." },
    ar: { title: "مجالات الممارسة — مكتب أمبيلي جيلان للمحاماة", description: "خدمات قانونية متكاملة: مدني، تجاري، شركات، استثمار، ضرائب، أسرة، هجرة، ملكية فكرية، دفاع جنائي، تحكيم وأكثر." },
  },

  "/lawyers": {
    en: { title: "Our Lawyers — Ambeli Jeylan Law Office", description: "Meet the counsel of Ambeli Jeylan Law Office — partners and senior associates serving Ethiopian and international clients." },
    am: { title: "ጠበቆቻችን — አምበሊ ጀይላን የሕግ ቢሮ", description: "የአምበሊ ጀይላን የሕግ ቢሮ ጠበቆችን ይተዋወቁ — ለኢትዮጵያ እና ዓለም አቀፍ ደንበኞች የሚያገለግሉ አጋሮች እና ከፍተኛ ተባባሪዎች።" },
    ti: { title: "ጠበቓታትና — ኣምበሊ ጀይላን ናይ ሕጊ ቤት-ጽሕፈት", description: "ንኢትዮጵያውያንን ኣህጉራውያንን ዓማዊል ዘገልግሉ ኣጋራትን ላዕለዎት ተሓባበርትን ተላለዩ።" },
    om: { title: "Abukaattota Keenya — Waajjira Seeraa Ambeli Jeylan", description: "Abukaattota keenya beeki — maamiltoota Itoophiyaa fi idil-addunyaa tajaajilan." },
    so: { title: "Qareenadeena — Xafiiska Sharciga Ambeli Jeylan", description: "La kulan qareenada xafiiska Ambeli Jeylan oo u adeegga macaamiisha Itoobiya iyo caalamiga." },
    aa: { title: "Higge Mannanke — Ambeli Jeylan Higge Biiro", description: "Toophiyah kee addunyah maamile tajaajila abukaattotanke aani." },
    sid: { title: "Higate Mannanke — Ambeli Jeylan Higge Biiro", description: "Toophiyaanna gobbate atootenke tajaajilanno higate mannanke aani." },
    wal: { title: "Nu Higgiyaa Eranchati — Ambeli Jeylan Higgiyaa Biiruwaa", description: "Toophiyaanne alagaa maachchotussi oottiya higgiyaa eranchata gayetta." },
    ar: { title: "المحامون — مكتب أمبيلي جيلان للمحاماة", description: "تعرّف على محامي مكتب أمبيلي جيلان — الشركاء وكبار المحامين الذين يخدمون العملاء الإثيوبيين والدوليين." },
  },

  "/articles": {
    en: { title: "Legal Articles — Ambeli Jeylan Law Office", description: "Analysis and commentary on Ethiopian and international legal developments from our lawyers." },
    am: { title: "የሕግ ጽሑፎች — አምበሊ ጀይላን የሕግ ቢሮ", description: "ስለ ኢትዮጵያ እና ዓለም አቀፍ የሕግ እድገቶች ከጠበቆቻችን ትንተና እና አስተያየት።" },
    ti: { title: "ናይ ሕጊ ጽሑፋት — ኣምበሊ ጀይላን ናይ ሕጊ ቤት-ጽሕፈት", description: "ብዛዕባ ኢትዮጵያውን ኣህጉራውን ናይ ሕጊ ምዕባለታት ካብ ጠበቓታትና መተንተንን ርእይቶን።" },
    om: { title: "Barreeffamoota Seeraa — Waajjira Seeraa Ambeli Jeylan", description: "Guddina seeraa Itoophiyaa fi idil-addunyaa irratti xiinxala fi yaada abukaattota keenyaa." },
    so: { title: "Maqaallo Sharci — Xafiiska Sharciga Ambeli Jeylan", description: "Falanqayn iyo faallo ku saabsan horumarka sharciga Itoobiya iyo caalamiga oo qareenadeenu qoreen." },
    aa: { title: "Higge Barrisoota — Ambeli Jeylan Higge Biiro", description: "Toophiyah kee addunyah higge asaawe daafira abukaattota nu xiinxala." },
    sid: { title: "Higge Borronshi — Ambeli Jeylan Higge Biiro", description: "Toophiyanna gobbate higge lophishsha daafira higate mannanke xiinxalonna assaawe." },
    wal: { title: "Higgiyaa Xaafetta — Ambeli Jeylan Higgiyaa Biiruwaa", description: "Toophiyaanne alagaa higgiyaa dichchaa gishshau nu higgiyaa eranchati xanna qaalaa." },
    ar: { title: "مقالات قانونية — مكتب أمبيلي جيلان للمحاماة", description: "تحليلات وتعليقات على المستجدات القانونية الإثيوبية والدولية من محامينا." },
  },

  "/gallery": {
    en: { title: "Gallery — Ambeli Jeylan Law Office", description: "Moments from the office and the courtroom — a look inside Ambeli Jeylan Law Office." },
    am: { title: "ማዕከል — አምበሊ ጀይላን የሕግ ቢሮ", description: "ከቢሮው እና ከፍርድ ቤት አጋጣሚዎች — በአምበሊ ጀይላን የሕግ ቢሮ ውስጥ አንድ ገጽታ።" },
    ti: { title: "ማዕከል ስእሊ — ኣምበሊ ጀይላን ናይ ሕጊ ቤት-ጽሕፈት", description: "ካብ ቤት-ጽሕፈትን ካብ ቤት ፍርዲን ኣጋጣሚታት።" },
    om: { title: "Gaallarii — Waajjira Seeraa Ambeli Jeylan", description: "Waajjira fi mana murtii keessaa yeroowwan — Waajjira Seeraa Ambeli Jeylan keessa ilaali." },
    so: { title: "Sawirro — Xafiiska Sharciga Ambeli Jeylan", description: "Xiliyo xafiiska iyo maxkamadda laga qaaday — gudaha Xafiiska Ambeli Jeylan." },
    aa: { title: "Sawira — Ambeli Jeylan Higge Biiro", description: "Biiroo kee mana murtiik yeroowwan — Ambeli Jeylan Higge Biiro geerihi." },
    sid: { title: "Misileta — Ambeli Jeylan Higge Biiro", description: "Biirore nna huucuulle mine yannuwa — Ambeli Jeylan Higge Biirore giddo." },
    wal: { title: "Misileta — Ambeli Jeylan Higgiyaa Biiruwaa", description: "Biiruwaappenne pirdda keettappe waanata — Ambeli Jeylan Higgiyaa Biiruwaa giddo." },
    ar: { title: "معرض الصور — مكتب أمبيلي جيلان للمحاماة", description: "لقطات من المكتب وقاعة المحكمة — نظرة داخل مكتب أمبيلي جيلان للمحاماة." },
  },

  "/faqs": {
    en: { title: "FAQs — Ambeli Jeylan Law Office", description: "Answers to common questions about consultations, fees and the services of Ambeli Jeylan Law Office." },
    am: { title: "ተደጋጋሚ ጥያቄዎች — አምበሊ ጀይላን የሕግ ቢሮ", description: "ስለ ቀጠሮ፣ ክፍያ እና የአምበሊ ጀይላን የሕግ ቢሮ አገልግሎቶች ተደጋጋሚ ጥያቄዎች መልሶች።" },
    ti: { title: "ተደጋገምቲ ሕቶታት — ኣምበሊ ጀይላን ናይ ሕጊ ቤት-ጽሕፈት", description: "ብዛዕባ ቆጸራ፣ ክፍሊትን ኣገልግሎትን መልስታት ንተደጋገምቲ ሕቶታት።" },
    om: { title: "Gaaffiiwwan Yeroo Baay'ee — Waajjira Seeraa Ambeli Jeylan", description: "Gaaffiiwwan mari'annoo, kaffaltii fi tajaajila Waajjira Seeraa Ambeli Jeylan ilaalchisee deebiiwwan." },
    so: { title: "Su'aalaha Caadiga — Xafiiska Sharciga Ambeli Jeylan", description: "Jawaabaha su'aalaha ku saabsan la tashiga, kharashka iyo adeegyada xafiiska Ambeli Jeylan." },
    aa: { title: "Yeroo Ummaan Xa'muwwa — Ambeli Jeylan Higge Biiro", description: "Yannate qixxeessa, kaffaltinna Ambeli Jeylan Higge Biiroh tajaajila xa'muwwaha reesa." },
    sid: { title: "Yannunte Xa'muwwa — Ambeli Jeylan Higge Biiro", description: "Yannate qixxeessi, kaffaltinna Ambeli Jeylan Higge Biirore tajaajila xa'muwwaha dawaro." },
    wal: { title: "Zaari Zaari Oychcheta — Ambeli Jeylan Higgiyaa Biiruwaa", description: "Wodiyaa gigissuwaa, waagaanne oosuwaabaa zaari zaari oychchatussi zaaruwaa." },
    ar: { title: "الأسئلة الشائعة — مكتب أمبيلي جيلان للمحاماة", description: "إجابات عن الأسئلة الشائعة حول الاستشارات والرسوم وخدمات مكتب أمبيلي جيلان للمحاماة." },
  },

  "/careers": {
    en: { title: "Careers — Ambeli Jeylan Law Office", description: "Join Ambeli Jeylan Law Office. Current opportunities for lawyers and support professionals in Addis Ababa." },
    am: { title: "የሥራ ዕድል — አምበሊ ጀይላን የሕግ ቢሮ", description: "አምበሊ ጀይላን የሕግ ቢሮ ይቀላቀሉ። በአዲስ አበባ ላሉ ጠበቆች እና ድጋፍ ሰጪ ባለሙያዎች የሥራ ዕድሎች።" },
    ti: { title: "ናይ ስራሕ ዕድላት — ኣምበሊ ጀይላን ናይ ሕጊ ቤት-ጽሕፈት", description: "ኣብ ኣዲስ ኣበባ ንጠበቓታትን ተሓባበርትን ናይ ስራሕ ዕድላት።" },
    om: { title: "Carraa Hojii — Waajjira Seeraa Ambeli Jeylan", description: "Ambeli Jeylan Waajjira Seeraa waliin makami. Abukaattota fi ogeeyyii deeggarsaatiif Finfinnee keessatti carraa hojii." },
    so: { title: "Fursado Shaqo — Xafiiska Sharciga Ambeli Jeylan", description: "Ku biir Xafiiska Sharciga Ambeli Jeylan. Fursado shaqo oo Addis Ababa loogu talagalay qareenada iyo taageerayaasha." },
    aa: { title: "Hojjah Carra — Ambeli Jeylan Higge Biiro", description: "Ambeli Jeylan Higge Biirooh dabaltamit. Addis Ababa keessatti abukaattota kee deeggarsii ogeeyyoo hojjah carra." },
    sid: { title: "Loosu Injjeta — Ambeli Jeylan Higge Biiro", description: "Ambeli Jeylan Higge Biirora dabaltami. Addis Ababira higate mannanna kaa'lote ogeeyye loosu injje." },
    wal: { title: "Oosuwaa Injjeta — Ambeli Jeylan Higgiyaa Biiruwaa", description: "Ambeli Jeylan Higgiyaa Biiruwaara gayya. Addis Ababan higgiyaa eranchatussinne maaduwaa oosanchatussi oosuwaa injjeta." },
    ar: { title: "الوظائف — مكتب أمبيلي جيلان للمحاماة", description: "انضم إلى مكتب أمبيلي جيلان. فرص عمل حالية للمحامين والكادر المساند في أديس أبابا." },
  },

  "/contact": {
    en: { title: "Contact — Ambeli Jeylan Law Office", description: "Reach the Addis Ababa offices of Ambeli Jeylan Law Office. Address, phones, email and emergency line." },
    am: { title: "አግኙን — አምበሊ ጀይላን የሕግ ቢሮ", description: "የአምበሊ ጀይላን የሕግ ቢሮ አዲስ አበባ ቢሮዎችን ያግኙ። አድራሻ፣ ስልኮች፣ ኢሜይል እና የአስቸኳይ መስመር።" },
    ti: { title: "ርኸቡና — ኣምበሊ ጀይላን ናይ ሕጊ ቤት-ጽሕፈት", description: "ናይ ኣምበሊ ጀይላን ናይ ሕጊ ቤት-ጽሕፈት ኣብ ኣዲስ ኣበባ ርኸቡ። ኣድራሻ፣ ስልኪ፣ ኢመይልን ናይ ህጹጽ መስመርን።" },
    om: { title: "Nu Qunnamaa — Waajjira Seeraa Ambeli Jeylan", description: "Waajjira Seeraa Ambeli Jeylan Finfinnee qunnami. Teessoo, bilbila, imeelii fi sarara ariifachiisaa." },
    so: { title: "Nala Soo Xiriir — Xafiiska Sharciga Ambeli Jeylan", description: "La xiriir xafiiska Ambeli Jeylan ee Addis Ababa. Cinwaan, taleefan, iimayl iyo khadka degdegga." },
    aa: { title: "Nu Xaadisi — Ambeli Jeylan Higge Biiro", description: "Ambeli Jeylan Higge Biiroh Addis Ababa xaadisi. Adrase, bilbila, imeele kee rakkate doogo." },
    sid: { title: "Xaadisine — Ambeli Jeylan Higge Biiro", description: "Ambeli Jeylan Higge Biirore Addis Ababa xaadisine. Adrase, bilbila, imeelenna rakkate doogo." },
    wal: { title: "Nuura Gayetta — Ambeli Jeylan Higgiyaa Biiruwaa", description: "Ambeli Jeylan Higgiyaa Biiruwaa Addis Ababan gayetta. Sohuwaa, bilbilaa, iimeelenne eesuwaa ogiyaa." },
    ar: { title: "اتصل بنا — مكتب أمبيلي جيلان للمحاماة", description: "تواصل مع مكتب أمبيلي جيلان في أديس أبابا. العنوان والهواتف والبريد وخط الطوارئ." },
  },

  "/book": {
    en: { title: "Book a Consultation — Ambeli Jeylan Law Office", description: "Request a confidential consultation with one of our lawyers. We reply within one business day." },
    am: { title: "ቀጠሮ ይያዙ — አምበሊ ጀይላን የሕግ ቢሮ", description: "ከጠበቆቻችን አንዱ ጋር ሚስጥራዊ ቀጠሮ ይጠይቁ። በአንድ የሥራ ቀን ውስጥ እንመልስልዎታለን።" },
    ti: { title: "ቆጸራ ውሰዱ — ኣምበሊ ጀይላን ናይ ሕጊ ቤት-ጽሕፈት", description: "ምስ ሓደ ካብ ጠበቓታትና ብምስጢር ቆጸራ ሕተቱ። ኣብ ውሽጢ ሓደ ናይ ስራሕ መዓልቲ ንምልስ።" },
    om: { title: "Beellama Qabadhaa — Waajjira Seeraa Ambeli Jeylan", description: "Abukaattota keenya keessaa tokko waliin mari'annoo iccitii gaafadhaa. Guyyaa hojii tokko keessatti deebii keessan ni argattu." },
    so: { title: "Ballan Qabo — Xafiiska Sharciga Ambeli Jeylan", description: "Codso ballan qarsoodi ah oo aad la yeelanayso mid ka mid ah qareenadeena. Waxaan ku jawaabaynaa hal maalin gudaheed." },
    aa: { title: "Yannate Qixxeessi — Ambeli Jeylan Higge Biiro", description: "Abukaattotanke keessaa tokko wolqu iccitii yannate xa'mi. Loosu barrira reessa." },
    sid: { title: "Yannate Qixxeessi — Ambeli Jeylan Higge Biiro", description: "Higate mannanke widoonni mittu ledo maaxamu yannate xa'mi. Mitte loosu barrira dawaro qixxeessineemmo." },
    wal: { title: "Wodiyaa Gigissa — Ambeli Jeylan Higgiyaa Biiruwaa", description: "Nu higgiyaa eranchatuppe issuwaara geemasa wodiyaa oychcha. Issi oosuwaa gallassa gidduwan zaaroos." },
    ar: { title: "احجز موعداً — مكتب أمبيلي جيلان للمحاماة", description: "اطلب استشارة سرية مع أحد محامينا. نرد خلال يوم عمل واحد." },
  },
};

const FALLBACK: SeoEntry = {
  title: "Ambeli Jeylan Law Office",
  description: "Full-service Ethiopian law office in Addis Ababa.",
};

function pickEntry(path: string, lang?: LangCode): SeoEntry {
  const bucket = SEO_META[path];
  if (!bucket) return FALLBACK;
  const l = lang ?? "en";
  return bucket[l] ?? bucket.en ?? FALLBACK;
}

/** Meta tags (title, description, og:*, og:url) for a route in a given language. */
export function metaForRoute(path: string, lang?: LangCode) {
  const entry = pickEntry(path, lang);
  const url = lang && lang !== "en" ? `${path}?lang=${lang}` : path;
  return [
    { title: entry.title },
    { name: "description", content: entry.description },
    { property: "og:title", content: entry.title },
    { property: "og:description", content: entry.description },
    { property: "og:url", content: url },
  ];
}

/**
 * hreflang alternates for a page. Emits one link per supported language
 * (using `?lang=<code>`) plus an x-default that points at the bare path.
 */
export function hreflangLinks(path: string) {
  const links = LANGUAGES.map((l) => ({
    rel: "alternate",
    hrefLang: l.code === "en" ? "en" : hreflangCode(l.code),
    href: l.code === "en" ? path : `${path}?lang=${l.code}`,
  }));
  links.push({ rel: "alternate", hrefLang: "x-default", href: path });
  return links;
}

// Map internal LangCode → BCP-47 for hreflang.
function hreflangCode(code: LangCode): string {
  switch (code) {
    case "am": return "am";
    case "ti": return "ti";
    case "om": return "om";
    case "so": return "so";
    case "aa": return "aa";
    case "sid": return "sid";
    case "wal": return "wal";
    case "ar": return "ar";
    default: return code;
  }
}

/** Read `?lang=xx` from a route match's search params safely. */
export function langFromSearch(search: unknown): LangCode | undefined {
  if (!search || typeof search !== "object") return undefined;
  const v = (search as Record<string, unknown>).lang;
  if (typeof v !== "string") return undefined;
  return LANGUAGES.some((l) => l.code === v) ? (v as LangCode) : undefined;
}
