import { useI18n, type LangCode } from "@/lib/i18n";
import { PRACTICE_AREAS } from "@/lib/site-data";

type Entry = { title: string; desc: string };

// Order MUST match PRACTICE_AREAS in src/lib/site-data.ts
const en: Entry[] = [
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
];

const am: Entry[] = [
  { title: "የፍትሐ ብሔር ሕግ", desc: "ውሎች፣ ግዴታዎች፣ ጉዳት ካሳ እና የፍትሐ ብሔር ክርክሮች።" },
  { title: "የንግድ ሕግ", desc: "ንግድ፣ ውሎች፣ ወኪልነት፣ ስርጭት እና የንግድ ክርክሮች።" },
  { title: "የኮርፖሬት ሕግ", desc: "ማቋቋም፣ አስተዳደር፣ ውህደት እና ግዥ እንዲሁም ማዋቀር።" },
  { title: "የኢንቨስትመንት ሕግ", desc: "የውጭ ኢንቨስትመንት አወቃቀር፣ ማበረታቻዎች እና ከኢትዮጵያ ኢንቨስትመንት ኮሚሽን ጋር የተያያዙ ጉዳዮች።" },
  { title: "ባንክ እና ኢንሹራንስ", desc: "የብድር ሰነዶች፣ ተቆጣጣሪ ተገዢነት እና የካሳ ጥያቄዎች።" },
  { title: "የግብር ሕግ", desc: "አማካሪነት፣ የግብር ኦዲት፣ ይግባኝ እና ዓለም አቀፍ ግብር።" },
  { title: "የሠራተኛ ሕግ", desc: "ውሎች፣ ክርክሮች፣ የሥራ ቦታ ፖሊሲ እና የጋራ ስምምነት ድርድር።" },
  { title: "የቤተሰብ ሕግ", desc: "ፍቺ፣ የልጅ ሞግዚትነት፣ ውርስ እና የጋብቻ ንብረት።" },
  { title: "ንብረት እና መሬት", desc: "ሪል እስቴት፣ ግንባታ እና የመሬት አስተዳደር ጉዳዮች።" },
  { title: "ኢሚግሬሽን", desc: "ቪዛ፣ የመኖሪያ ፍቃድ፣ የስራ ፍቃድ እና የዜግነት አማካሪነት።" },
  { title: "የአእምሮ ንብረት", desc: "የንግድ ምልክት፣ የቅጂ መብት እና የፓተንት ምዝገባ እና ተግባራዊነት።" },
  { title: "የወንጀል መከላከያ", desc: "በሁሉም ደረጃዎች የመጀመሪያና የይግባኝ ወንጀል መከላከል።" },
  { title: "የሰብዓዊ መብቶች", desc: "ሕገ መንግሥታዊ መብቶች፣ የሕዝብ ጥቅም እና ዓለም አቀፍ አካላት።" },
  { title: "ግልግል እና ማስማማት", desc: "የአገር ውስጥ እና ዓለም አቀፍ አማራጭ የክርክር መፍቻ ውክልና።" },
  { title: "ዓለም አቀፍ ንግድ", desc: "ድንበር ተሻጋሪ ውሎች፣ የጋራ ኢንተርፕራይዞች እና ተገዢነት።" },
  { title: "NGO እና ኩባንያ ምዝገባ", desc: "ከመጀመሪያ እስከ መጨረሻ ማቋቋም፣ ፍቃድ እና ጽሕፈት ቤት አገልግሎት።" },
  { title: "ውል ማዘጋጀት", desc: "ልዩ ውል ማዘጋጀት፣ መገምገም እና የድርድር ድጋፍ።" },
  { title: "ዕዳ መሰብሰብ እና ጨረታዎች", desc: "ማገገሚያ፣ ተግባራዊነት እና የመንግሥት ግዥ።" },
];

const ti: Entry[] = [
  { title: "ሲቪላዊ ሕጊ", desc: "ውዕላት፣ ግዴታታት፣ ኪሳራታትን ሲቪላዊ ክሲታትን።" },
  { title: "ናይ ንግዲ ሕጊ", desc: "ንግዲ፣ ውዕላት፣ ወኪልነት፣ ስርጭትን ናይ ንግዲ ክርክራትን።" },
  { title: "ናይ ኮርፖሬት ሕጊ", desc: "ምምስራት፣ ምምሕዳር፣ ውህደትን ግዝኣትን ከምኡውን ምስራሕ።" },
  { title: "ናይ ወፍሪ ሕጊ", desc: "ናይ ወጻኢ ወፍሪ ስርዓት፣ ምትብባዕን ናይ ኢትዮጵያ ኮሚሽን ወፍሪ ጉዳያትን።" },
  { title: "ባንክን ኢንሹራንስን", desc: "ናይ ልቓሕ ሰነዳት፣ ተቖጻጻሪ ተኣዛዝነትን ናይ ካሳ ጥርዓናትን።" },
  { title: "ናይ ግብሪ ሕጊ", desc: "ምኽሪ፣ ኦዲት ግብሪ፣ ይግባይን ኣህጉራዊ ግብርን።" },
  { title: "ናይ ስራሕ ሕጊ", desc: "ውዕላት፣ ክርክራት፣ ናይ ስራሕ ቦታ ፖሊሲን ናይ ሓባር ስምምዕ ድርድርን።" },
  { title: "ናይ ስድራቤት ሕጊ", desc: "ፍትሕ፣ ናይ ውሉድ ሓላፍነት፣ ውርስን ናይ ሓዳር ንብረትን።" },
  { title: "ንብረትን መሬትን", desc: "ሪል እስቴት፣ ህንጻን ናይ መሬት ምምሕዳር ጉዳያትን።" },
  { title: "ኢሚግሬሽን", desc: "ቪዛ፣ ፍቓድ መንበሪ፣ ናይ ስራሕ ፍቓድን ናይ ዜግነት ምኽርን።" },
  { title: "ናይ ኣእምሮ ንብረት", desc: "ናይ ንግዲ ምልክት፣ ናይ ቅዳሕ መሰልን ናይ ፓተንት ምዝገባን ትግባረን።" },
  { title: "ናይ ገበን ምክልኻል", desc: "ኣብ ኩሉ ደረጃታት ፈለማዊን ናይ ይግባይን ናይ ገበን ምክልኻል።" },
  { title: "ናይ ሰብኣዊ መሰላት", desc: "ሕገ መንግስታዊ መሰላት፣ ናይ ህዝቢ ጥቕምን ኣህጉራዊ ኣካላትን።" },
  { title: "ዕርቕን ማእከልነትን", desc: "ናይ ውሽጢ ሃገርን ኣህጉራውን ኣማራጺ ናይ ጎንጺ ፍታሕ ወኪልነት።" },
  { title: "ኣህጉራዊ ንግዲ", desc: "ንዶብ ሓላፍ ውዕላት፣ ሓባራዊ ትካላትን ተኣዛዝነትን።" },
  { title: "ናይ NGO ን ኩባንያን ምዝገባ", desc: "ካብ መጀመርታ ክሳብ መወዳእታ ምምስራት፣ ፍቓድን ጽሕፈት ቤት።" },
  { title: "ውዕል ምድላው", desc: "ፍሉይ ውዕል ምድላው፣ ምግምጋምን ናይ ድርድር ደገፍን።" },
  { title: "ዕዳ ምእካብን ጨረታታትን", desc: "ምምላስ፣ ትግባረን ናይ መንግስቲ ግዝኣትን።" },
];

const om: Entry[] = [
  { title: "Seera Siiviilii", desc: "Waliigaltee, dirqama, miidhaa fi falmii siiviilii." },
  { title: "Seera Daldalaa", desc: "Daldala, waliigaltee, bakka bu'ummaa, raabsaa fi falmii daldalaa." },
  { title: "Seera Koorporeetii", desc: "Hundeessuu, bulchiinsa, walitti makamuu fi bittaa akkasumas gurmaa'insa haaraa." },
  { title: "Seera Invastimantii", desc: "Caasaa invastimantii alaa, jajjabeessituu fi dhimmoota Komishinii Invastimantii Itoophiyaa." },
  { title: "Baankii fi Inshuraansii", desc: "Sanadoota liqii, seera-qabeessummaa fi iyyata beenyaa." },
  { title: "Seera Gibiraa", desc: "Gorsa, odiitii gibiraa, ol iyyannoo fi gibira idil-addunyaa." },
  { title: "Seera Hojjattootaa", desc: "Waliigaltee, falmii, imaammata iddoo hojii fi mari'annoo waliigaltee waloo." },
  { title: "Seera Maatii", desc: "Hiikkaa gaa'elaa, kunuunsa daa'immanii, dhaala fi qabeenya gaa'elaa." },
  { title: "Qabeenya fi Lafa", desc: "Riil isteetii, ijaarsa fi dhimmoota bulchiinsa lafaa." },
  { title: "Godaansa", desc: "Viizaa, hayyama jireenyaa, hayyama hojii fi gorsa lammummaa." },
  { title: "Qabeenya Sammuu", desc: "Mallattoo daldalaa, mirga garagalchuu fi galmee paatentii fi hojiirra oolchuu." },
  { title: "Falmii Yakkaa", desc: "Falmii yakkaa jalqabaa fi ol iyyannoo sadarkaa hundatti." },
  { title: "Mirgoota Namoomaa", desc: "Mirgoota heerawaa, fayidaa hawaasaa fi dhaabbilee idil-addunyaa." },
  { title: "Araaraa fi Giddu-galeessummaa", desc: "Bakka bu'ummaa ADR biyya keessaa fi idil-addunyaa." },
  { title: "Daldala Idil-addunyaa", desc: "Waliigaltee daangaa-ce'aa, waldaa hojii walii fi seera-qabeessummaa." },
  { title: "Galmee NGO fi Kampaanii", desc: "Hundeessuu, heeyyama fi tajaajila sekreetariyaa guutuu." },
  { title: "Waliigaltee Qopheessuu", desc: "Waliigaltee addaa qopheessuu, sakatta'uu fi deeggarsa mari'annoo." },
  { title: "Idaa Sassaabuu fi Tenderii", desc: "Deebisiisuu, hojiirra oolchuu fi bittaa mootummaa." },
];

const so: Entry[] = [
  { title: "Sharciga Madaniga", desc: "Heshiisyo, waajibaad, dhaawac iyo dacwadaha madaniga." },
  { title: "Sharciga Ganacsiga", desc: "Ganacsi, heshiisyo, wakiillo, qaybin iyo khilaafaadka ganacsiga." },
  { title: "Sharciga Shirkadaha", desc: "Aasaas, maamul, isku darka & iibsiga iyo dib u habaynta shirkadaha." },
  { title: "Sharciga Maalgashiga", desc: "Qaabaynta maalgashi shisheeye, dhiirigelin iyo arrimaha Komishanka Maalgashiga Itoobiya." },
  { title: "Baanki iyo Caymis", desc: "Dukumintiga amaahda, u hoggaansanaanta sharciga iyo dacwadaha caymiska." },
  { title: "Sharciga Canshuurta", desc: "Talo, hubinta canshuurta, racfaan iyo canshuur caalami." },
  { title: "Sharciga Shaqada", desc: "Heshiisyo, khilaafaad, siyaasadda goobta shaqada iyo wada xaajoodka heshiiska wadareed." },
  { title: "Sharciga Qoyska", desc: "Furitaan, ilmo dhaqaale, dhaxal iyo hantida guurka." },
  { title: "Hanti iyo Dhul", desc: "Guryo, dhismo iyo arrimaha maaraynta dhulka." },
  { title: "Socdaalka", desc: "Fiise, deggenaansho, ogolaansho shaqo iyo talo jinsiyadda." },
  { title: "Hantida Maskaxda", desc: "Calaamadda ganacsi, xuquuqda daabacaadda iyo diiwaan-gelinta patent iyo dhaqan gelinta." },
  { title: "Difaaca Dembi", desc: "Difaaca dembi maxkamadaha hoose iyo sare heerar oo dhan." },
  { title: "Xuquuqda Aadanaha", desc: "Xuquuqda dastuuriga ah, danaha guud iyo hay'adaha caalamiga." },
  { title: "Garsoor iyo Dhexdhexaadin", desc: "Wakiilnimo ADR gudaha iyo caalamiga ah." },
  { title: "Ganacsiga Caalamiga", desc: "Heshiisyada xudduud-gudbinta, iskaashiyada wadajir iyo u hoggaansanaanta." },
  { title: "Diiwaangelinta NGO iyo Shirkadaha", desc: "Aasaas, shatiyo iyo adeegga xafiiska oo dhamaystiran." },
  { title: "Qorista Heshiisyada", desc: "Qorista gaarka ah, dib u eegis iyo taageero wada xaajood." },
  { title: "Ururinta Deynta iyo Tanaadhareedka", desc: "Soo celin, dhaqangelin iyo iibsiga dawladda." },
];

const aa: Entry[] = [
  { title: "Siiwiilih Qaanuun", desc: "Heemenna, dirqi, umaane kee siiwiilih qangara." },
  { title: "Daldalih Qaanuun", desc: "Daldal, heemenna, wakiili, qaybin kee daldalih qangara." },
  { title: "Koorporeetih Qaanuun", desc: "Anxaxu, bulchi, walsittin kee koorporeet dib-uxagsis." },
  { title: "Investimantih Qaanuun", desc: "Alsi investimant caasa, jajjabbis kee Itoophiyaa Investimant Komishinih caagiida." },
  { title: "Baankii kee Inshuransi", desc: "Amaacih dokumentaay, qaanuunaraadda kee beynyaa gaaddaa." },
  { title: "Gibirih Qaanuun", desc: "Gorsa, gibir odiit, iyyannoo kee addunyah gibir." },
  { title: "Hojjah Qaanuun", desc: "Heemenna, qangara, hojjah bahha imaammat kee heemena mari'annoo." },
  { title: "Buxa Qaanuun", desc: "Hiikkaa, urrii kunuunsa, dhaala kee gaa'elaa qabeenya." },
  { title: "Qabeenya kee Laf", desc: "Riil isteet, ijaarsa kee lafah bulchii caagiida." },
  { title: "Godaansi", desc: "Viizaa, jireenyah heyyama, hojjah heyyama kee lammii gorsa." },
  { title: "Sammuh Qabeenya", desc: "Daldalih mallatt, garagalch mirga kee paatent galmee kee hojiirra oolchii." },
  { title: "Yakkah Falmii", desc: "Yakkah falmii jalqab kee iyyannoo sadarkaa hunda." },
  { title: "Namoomaah Mirgoota", desc: "Heerawaa mirgoot, hawaasah fayidaa kee addunyah dhaabbatta." },
  { title: "Araarii kee Giddu-galeess", desc: "Biyya keessaa kee addunyah ADR bakka bu'ummaa." },
  { title: "Addunyah Daldal", desc: "Daangaa ce'ah heemennaa, wadajir hojjaa kee qaanuunaraaddaa." },
  { title: "NGO kee Kampaanii Galmee", desc: "Anxaxu, heeyyama kee sekreetariyaa tajaajila." },
  { title: "Heemena Qophii", desc: "Add heemena qophii, sakatta'uu kee mari'annoo deeggarsa." },
  { title: "Idaa Sassaab kee Tenderii", desc: "Deebisii, hojiirra oolchii kee mootummaa bittaa." },
];

const sid: Entry[] = [
  { title: "Siwiile Higge", desc: "Semmuwa, waajibbo, gawajjonna siwiile qooso." },
  { title: "Daddalu Higge", desc: "Daddala, semmuwa, wakiilluma, tuqissonna daddalu qooso." },
  { title: "Koorporeetu Higge", desc: "Kalaqama, gashshoote, mittimma dawaronna koorporeete haaru asaawe." },
  { title: "Wolqu Higge", desc: "Godoonni wolqu caasa, kaa'lachonna Toophiya Wolqu Komishine coyibba." },
  { title: "Baankinna Inshuransi", desc: "Amaachu borroffuwa, higge amantenna beeneyye xa'muwa." },
  { title: "Gibiru Higge", desc: "Amaale, gibiru odiiti, iyyannoonna gobbate gibire." },
  { title: "Loosaanchi Higge", desc: "Semmuwa, qooso, loosu bayicho amaachonna sotto semmute mari'anni." },
  { title: "Maate Higge", desc: "Hiikkaa, oosote agarooshshe, dhaalonna maate qeecho." },
  { title: "Qeeconna Uulla", desc: "Riil isteete, minu ijaarshonna uulla gashshoote coyibba." },
  { title: "Godaansa", desc: "Viizaa, keeshshu heyyama, loosu heyyamanna gaddage amaale." },
  { title: "Xagge Qeecho", desc: "Daddalu mallatte, borronshi mirganna paatente galmenna hojiira soote." },
  { title: "Cubbe Agare", desc: "Baala widoonni umi cubbenna iyyannoo cubbe agare." },
  { title: "Mannu Mirgo", desc: "Heere gashshoote mirgo, doogimma noowaa uduunnenna gobbate dhaabbatte." },
  { title: "Araarinna Giddu-gale", desc: "Gobba giddonna gobbate ADR wakiilluma." },
  { title: "Gobbate Daddala", desc: "Qacce sagalte semmuwa, mittimma looso hojjaannana higge amanti." },
  { title: "NGOnna Kampaanii Galme", desc: "Umi kalaqama, heyyaamonna sekretariyaa tajaajila." },
  { title: "Semmute Qixxeessi", desc: "Baxxi semmute qixxeessi, laa'onna mari'anni kaa'la." },
  { title: "Idaa Gambisonna Tenderi", desc: "Higo gargaddi, hojiira sooto nna gashshotu bitti." },
];

const wal: Entry[] = [
  { title: "Siwiile Higgiyaa", desc: "Maachchuwaa, aqo woga, qohettaanne siwiile mootuwaa." },
  { title: "Zal'iyaa Higgiyaa", desc: "Zal'iyaa, maachchuwaa, aginootaa, gishettaanne zal'iyaa mootuwaa." },
  { title: "Koomppaanaa Higgiyaa", desc: "Merettaa, ayssuwaa, issippetettaanne shammiya qassi koomppaanaa oosuwaa gigissiya." },
  { title: "Miishshaa Wottiyoogaa Higgiyaa", desc: "Kare biittaappe miishshaa qaaxxiyoogaa, minttettuwaanne Itoophiyaa Miishshaa Komishoona yohuwaa." },
  { title: "Baankeenne Inshuraansiyaa", desc: "Tal'iyaa maxaafata, higgiyaa kaalliyoogaanne shaakkidi qanxxiyo oyshaa." },
  { title: "Qaraxaa Higgiyaa", desc: "Zoretta, qaraxaa qorata, mooti oychchaanne alagaa qaraxaa." },
  { title: "Oosanchati Higgiyaa", desc: "Maachchuwaa, mootuwaa, oosuwaa bessaa wogaanne issippe haasayida maachchaa." },
  { title: "So Asaa Higgiyaa", desc: "Paraphetta, na'aa dichchuwaa, laattaanne aqo qofaa dukkiyaa." },
  { title: "Aquwaanne Biittaa", desc: "Riil isteete, keettaa keexonne biittaa ayssuwaa yohuwaa." },
  { title: "Godaansa", desc: "Wiizaa, deˈuwaa hayyuwaa, oosuwaa hayyuwaanne biittaa asatettaa zoretta." },
  { title: "Wozanaa Aquwaa", desc: "Zal'iyaa malaataa, xaafuwaa maataanne paatente xaafettaa oosuwaanne poluwaa." },
  { title: "Naaquwaa Teqquwaa", desc: "Sinttana pirddaanne oychchidi zaari zaari pirddaa naaquwaa teqquwaa." },
  { title: "Asaa Maatata", desc: "Sunttaa higgiyaa maatata, deriyaa go'aanne alagaa dirijjitiyaa." },
  { title: "Sigetaanne Giddu Uraa", desc: "Biittaa gaathaninne alagan ADR wakiilatettaa." },
  { title: "Alagaa Zal'iyaa", desc: "Zawaappe pinniya maachchuwaa, issippe oosuwaanne higgiyaa kaalliyoogaa." },
  { title: "NGOnne Koomppaanaa Xaafettaa", desc: "Doomettappe wurssettaa gakkanaassi merettaa, hayyuwaanne biirootiyaa oosuwaa." },
  { title: "Maachchuwaa Xaafuwaa", desc: "Dumma maachchuwaa xaafuwaa, xeelluwaanne haasayaa maaduwaa." },
  { title: "Tal'iyaa Shiishshuwaanne Tenderiyaa", desc: "Zaarettuwaa, poluwaanne kawotettaa shammiya." },
];

const ar: Entry[] = [
  { title: "القانون المدني", desc: "العقود والالتزامات والمسؤولية التقصيرية والتقاضي المدني." },
  { title: "القانون التجاري", desc: "التجارة والعقود والوكالات والتوزيع والنزاعات التجارية." },
  { title: "قانون الشركات", desc: "التأسيس والحوكمة والاندماج والاستحواذ وإعادة الهيكلة." },
  { title: "قانون الاستثمار", desc: "هيكلة الاستثمار الأجنبي والحوافز وشؤون هيئة الاستثمار الإثيوبية." },
  { title: "المصارف والتأمين", desc: "توثيق التسهيلات والامتثال التنظيمي والمطالبات." },
  { title: "القانون الضريبي", desc: "الاستشارات والتدقيق الضريبي والطعون والضرائب الدولية." },
  { title: "قانون العمل", desc: "العقود والنزاعات وسياسات مكان العمل والتفاوض الجماعي." },
  { title: "قانون الأسرة", desc: "الطلاق وحضانة الأطفال والميراث وأموال الزوجية." },
  { title: "العقارات والأراضي", desc: "شؤون العقارات والبناء وإدارة الأراضي." },
  { title: "الهجرة", desc: "التأشيرات والإقامة وتصاريح العمل واستشارات الجنسية." },
  { title: "الملكية الفكرية", desc: "تسجيل وحماية العلامات التجارية وحقوق النشر وبراءات الاختراع." },
  { title: "الدفاع الجنائي", desc: "الدفاع الجنائي في الابتدائي والاستئناف بجميع الدرجات." },
  { title: "حقوق الإنسان", desc: "الحقوق الدستورية والمصلحة العامة والهيئات الدولية." },
  { title: "التحكيم والوساطة", desc: "التمثيل في التحكيم المحلي والدولي." },
  { title: "الأعمال الدولية", desc: "التعاقد العابر للحدود والمشاريع المشتركة والامتثال." },
  { title: "تسجيل المنظمات والشركات", desc: "خدمات تأسيس وترخيص وسكرتارية متكاملة." },
  { title: "صياغة العقود", desc: "صياغة ومراجعة العقود ودعم التفاوض." },
  { title: "تحصيل الديون والمناقصات", desc: "الاسترداد والتنفيذ والمشتريات الحكومية." },
];

const DICTS: Record<LangCode, Entry[]> = { en, am, ti, om, so, aa, sid, wal, ar };

export function usePracticeAreas(): ReadonlyArray<Entry> {
  const { lang } = useI18n();
  const list = DICTS[lang] ?? en;
  // Fall back per-item to English if array length ever mismatches source.
  return PRACTICE_AREAS.map((_, i) => list[i] ?? en[i]);
}
