"use client";

import { useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";

/* ─── Data ──────────────────────────────────────────────────────── */
interface Card {
  title: string;       // e.g. "CHARTERED\nACCOUNTANTS"
  
  image: string;
}

const cards: Card[] = [
  {
    title: "CHARTERED\nACCOUNTANTS",
    image: "/categories/CA.svg",
  },
  {
    title: "FREELANCERS\n& CREATORS",
    image: "/categories/freelancer.svg",
  },
  {
    title: "CREATIVE\nAGENCIES",
    image: "/categories/creative.svg",
  },
  {
    title: "CAFÉS &\nRESTAURANTS",
    image: "/categories/cafe_.svg",
  },
  {
    title: "FASHION\nBOUTIQUES",
    image: "/categories/boutique_.svg",
  },
  {
    title: "TECH\nSTARTUPS",
    image: "/categories/startup_.svg",
  },
  {
    title: "DOCTORS\n& CLINICS",
    image: "/categories/clinic.svg",
  },
  {
    title: "E-COMMERCE\nSELLERS",
    image: "/categories/ecom.svg",
  },
  {
    title: "RETAIL\nSHOPS",
    image: "/categories/retail.svg",
  },
  {
    title: "LAW\nFIRMS",
    image: "/categories/law.svg",
  },
  {
    title: "LARGE\nENTERPRISES",
    image: "/categories/enterpraise.svg",
  },
];

/* Triple-duplicate for infinite loop */
const infiniteCards = [...cards, ...cards, ...cards];

const CARD_W  = 300;
const GAP     = 20;
const ITEM_W  = CARD_W + GAP;
const ONE_SET = cards.length * ITEM_W;

/* ─── Component ─────────────────────────────────────────────────── */
export default function UsedAcrossIndia() {
  const scrollRef   = useRef<HTMLDivElement>(null);
  const isDragging  = useRef(false);
  const startX      = useRef(0);
  const scrollStart = useRef(0);
  const velocity    = useRef(0);
  const lastX       = useRef(0);
  const rafId       = useRef<number | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = ONE_SET;
    }
  }, []);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    if (el.scrollLeft < ONE_SET * 0.25) el.scrollLeft += ONE_SET;
    if (el.scrollLeft > ONE_SET * 2 - ONE_SET * 0.25) el.scrollLeft -= ONE_SET;
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current  = true;
    startX.current      = e.clientX;
    lastX.current       = e.clientX;
    scrollStart.current = el.scrollLeft;
    velocity.current    = 0;
    if (rafId.current) cancelAnimationFrame(rafId.current);
    el.setPointerCapture(e.pointerId);
    el.style.cursor = "grabbing";
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const dx = e.clientX - startX.current;
    velocity.current = e.clientX - lastX.current;
    lastX.current    = e.clientX;
    scrollRef.current.scrollLeft = scrollStart.current - dx;
  }, []);

  const onPointerUp = useCallback(() => {
    const el = scrollRef.current;
    if (!isDragging.current || !el) return;
    isDragging.current = false;
    el.style.cursor    = "grab";
    const glide = () => {
      if (!scrollRef.current) return;
      velocity.current *= 0.92;
      scrollRef.current.scrollLeft -= velocity.current;
      if (Math.abs(velocity.current) > 0.5) rafId.current = requestAnimationFrame(glide);
    };
    rafId.current = requestAnimationFrame(glide);
  }, []);

  return (
    <section
      id="used-across-india"
      className="py-[90px] bg-white overflow-hidden"
      aria-label="Used Across India"
    >
      {/* ── Heading ── */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12">
          <h2 className="text-5xl sm:text-6xl lg:text-[80px] xl:text-[96px] font-black tracking-[0.12em] leading-tight flex flex-wrap gap-x-[0.3em] py-2">
            <motion.span
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#222] inline-block"
            >
              Used
            </motion.span>
            <motion.span
              initial={{ y: -80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="bg-gradient-to-r from-[#FF7A00] to-[#FF9A3D] bg-clip-text text-transparent inline-block"
            >
              Across
            </motion.span>
            <motion.span
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="bg-gradient-to-r from-[#FF7A00] to-[#FF9A3D] bg-clip-text text-transparent inline-block"
            >
              India
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.4 }}
            className="mt-4 text-xl sm:text-2xl lg:text-3xl text-slate-500 font-medium max-w-2xl leading-relaxed"
          >
            From solo freelancers to large enterprises — Invogen works for everyone.
          </motion.p>
        </div>
      </div>

      {/* ── Infinite Drag Track ── */}
      <div className="relative">
        {/* Left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-white to-transparent z-10" />
        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-white to-transparent z-10" />

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          className="no-scrollbar overflow-x-auto px-6 sm:px-8 lg:px-12 pb-4"
          style={{ cursor: "grab", userSelect: "none", WebkitUserSelect: "none" }}
        >
          <div className="flex" style={{ gap: GAP, width: "max-content" }}>
            {infiniteCards.map((card, idx) => (
              <SlideCard key={`${card.title}-${idx}`} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Individual Card ────────────────────────────────────────────── */
function SlideCard({ card }: { card: Card }) {
  /* Split title into up-to-2 lines */
  const lines = card.title.split("\n");
  const isSvg = card.image.endsWith(".svg");
  
  let svgStyle = {
    width: "100%",
    left: "0%",
    top: "0%"
  };

  if (isSvg) {
    if (card.image.includes("CA.svg")) {
      svgStyle = {
        width: "295.1%",
        left: "-97.5%",
        top: "-17.6%",
      };
    } else if (card.image.includes("freelancer.svg")) {
      svgStyle = {
        width: "324.0%",
        left: "-111.9%",
        top: "-43.5%",
      };
    } else if (card.image.includes("cafe_.svg")) {
      svgStyle = {
        width: "246.2%",
        left: "-73.0%",
        top: "-6.4%",
      };
    } else if (card.image.includes("startup_.svg")) {
      svgStyle = {
        width: "271.2%",
        left: "-85.5%",
        top: "-12.1%",
      };
    } else if (card.image.includes("boutique_.svg")) {
      svgStyle = {
        width: "241.6%",
        left: "-70.8%",
        top: "-5.3%",
      };
    } else if (card.image.includes("clinic.svg")) {
      svgStyle = {
        width: "242.1%",
        left: "-71.0%",
        top: "-5.5%",
      };
    } else if (card.image.includes("creative.svg")) {
      svgStyle = {
        width: "321.4%",
        left: "-110.5%",
        top: "-24.0%",
      };
    } else if (card.image.includes("law.svg")) {
      svgStyle = {
        width: "335.7%",
        left: "-118.0%",
        top: "-26.9%",
      };
    } else if (card.image.includes("retail.svg")) {
      svgStyle = {
        width: "231.5%",
        left: "-65.6%",
        top: "-3.0%",
      };
    } else if (card.image.includes("enterpraise.svg")) {
      svgStyle = {
        width: "322.5%",
        left: "-111.2%",
        top: "-23.8%",
      };
    } else if (card.image.includes("ecom.svg")) {
      svgStyle = {
        width: "272.2%",
        left: "-86.0%",
        top: "-12.4%",
      };
    }
  }

  return (
    <motion.div
      className="flex-shrink-0 overflow-hidden relative select-none"
      style={{ width: CARD_W, height: 460, background: "#0d0d0d", borderRadius: 0 }}
      whileHover={{ scale: 1.03, y: -8, transition: { duration: 0.28 } }}
    >
      {/* ── Photo: bottom ~80% of card ── */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center bg-[#0d0d0d] overflow-hidden" style={{ height: "80%" }}>
        {isSvg ? (
          <div className="w-full h-full relative overflow-hidden">
            <img
              src={card.image}
              alt={card.title.replace("\n", " ")}
              className="absolute select-none pointer-events-none"
              style={{
                width: svgStyle.width,
                maxWidth: "none",
                height: "auto",
                left: svgStyle.left,
                top: svgStyle.top,
              }}
              draggable={false}
            />
            {/* Smooth transition blur/fade overlay at the top edge */}
            <div
              className="absolute top-0 left-0 right-0 z-20 pointer-events-none"
              style={{
                height: "60px",
                background: "linear-gradient(to bottom, #0d0d0d 0%, rgba(13, 13, 13, 0.8) 30%, rgba(13, 13, 13, 0) 100%)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                maskImage: "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.8) 30%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.8) 30%, transparent 100%)",
              }}
            />
          </div>
        ) : (
          <>
            <img
              src={card.image}
              alt={card.title.replace("\n", " ")}
              className="w-full h-full object-cover"
              draggable={false}
              style={{ pointerEvents: "none" }}
            />
            {/* top-to-transparent overlay so photo blends into dark bg */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to bottom, #0d0d0d 0%, rgba(13,13,13,0.15) 40%, rgba(0,0,0,0.55) 100%)",
                pointerEvents: "none",
              }}
            />
          </>
        )}
      </div>

      {/* ── Text block: top area ── */}
      <div className="absolute top-0 left-0 right-0 px-6 pt-7 pb-4" style={{ pointerEvents: "none" }}>
        {/* Large bold title — first line gold, second line white */}
        <h3 className="font-black leading-none tracking-tight mb-3" style={{ fontSize: "clamp(26px, 5vw, 34px)" }}>
          {lines.map((line, i) => (
            <span
              key={i}
              className="block"
              style={
                i === 0
                  ? {
                      background:"#FF9900",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }
                  : { color: "#ffffff" }
              }
            >
              {line}
            </span>
          ))}
        </h3>

        {/* Gold divider
        <div
          style={{
            width: 48,
            height: 3,
            background: "#FF9900",
            marginBottom: 14,
          }} */}
        

        
      </div>
    </motion.div>
  );
}
