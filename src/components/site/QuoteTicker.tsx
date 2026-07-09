import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const QUOTES = [
  {
    text: "Stand by the side of the oppressed! Even if the oppressors are your own mother and father.",
    lang: "English",
    dir: "ltr",
  },
  {
    text: "قفوا إلى جانب المظلومين! حتى لو كان الظالمون هم والداك.",
    lang: "العربية",
    dir: "rtl",
  },
  {
    text: "ከተበዳይ ጎን ቁም! በዳይ እናትና አባትህ ቢሆኑ እንኳን",
    lang: "አማርኛ",
    dir: "ltr",
  },
  {
    text: "Warra cunqurfamoo cinaa dhaabbadhu! Cunqursitoonni haadha fi abbaa ofii yoo ta'anillee.",
    lang: "Afaan Oromoo",
    dir: "ltr",
  },
  {
    text: "ኣብ ጎኒ ውጹዓት ደው በል! ዋላ እቶም ጨቆንቲ ናይ ገዛእ ርእስኻ ኣዴኻን ኣቦኻን ይኹኑ።",
    lang: "ትግርኛ",
    dir: "ltr",
  },
  {
    text: "Dadka la dulman garab istaaga, xataa hadday daalimiintu yihiin hooyadaa iyo aabbahaaga.",
    lang: "Af-Soomaali",
    dir: "ltr",
  },
  {
    text: "Zulum le numih xaqut soola! Zulume num isi ina kee isi abba takkay immay.",
    lang: "Harari",
    dir: "ltr",
  },
];

export function QuoteTicker() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % QUOTES.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + QUOTES.length) % QUOTES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [paused, next]);

  const current = QUOTES[index];

  return (
    <div
      className="relative bg-navy-deep text-primary-foreground border-b border-white/10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-page flex items-center justify-between gap-4 py-2.5">
        <button
          onClick={prev}
          aria-label="Previous quote"
          className="shrink-0 p-1 text-primary-foreground/50 hover:text-accent transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex min-w-0 flex-1 items-center justify-center gap-3 text-center">
          <Quote className="hidden sm:block h-4 w-4 shrink-0 text-accent/80" />
          <p
            dir={current.dir}
            className="truncate text-sm font-medium leading-snug"
            title={current.text}
          >
            {current.text}
          </p>
          <span className="hidden sm:inline-block shrink-0 text-[10px] uppercase tracking-[0.18em] text-accent">
            {current.lang}
          </span>
        </div>

        <button
          onClick={next}
          aria-label="Next quote"
          className="shrink-0 p-1 text-primary-foreground/50 hover:text-accent transition-colors"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1 pb-1">
        {QUOTES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to quote ${i + 1}`}
            className={`h-1 rounded-full transition-all ${
              i === index ? "w-4 bg-accent" : "w-1.5 bg-white/25 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
