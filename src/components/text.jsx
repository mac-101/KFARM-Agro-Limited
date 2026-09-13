import React, { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  KFARM  Agro Limited — fish business landing page                          */
/*  Built from a hand-sketched wireframe: hero, ordering steps,        */
/*  catfish/tilapia varieties, wholesale, fishery-learning carousel,   */
/*  closing banner.                                                    */
/*                                                                      */
/*  Palette: deep teal + warm Agro Limited gold, on a soft paper cream       */
/*  Type: Fraunces (headlines) + Inter (body/UI)                       */
/* ------------------------------------------------------------------ */

const WHATSAPP_NUMBER = "2349115380670"; // 09115380670, with Nigeria country code, no leading 0
const DEFAULT_ORDER_MESSAGE =
  import.meta.env.VITE_WHOLESALE_ORDER_MESSAGE ||
  "KFARM Agro Limited, I'd like to place an order.";
const WHATSAPP_LINK = (message = DEFAULT_ORDER_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


const IMG = {
  hero: "https://images.pexels.com/photos/15059730/pexels-photo-15059730.jpeg?auto=compress&cs=tinysrgb&w=1200",
  heroSmall1:
    "https://images.pexels.com/photos/32243187/pexels-photo-32243187.jpeg?auto=compress&cs=tinysrgb&w=800",
  heroSmall2:
    "https://images.pexels.com/photos/8352786/pexels-photo-8352786.jpeg?auto=compress&cs=tinysrgb&w=800",
  catfish:
    "https://images.pexels.com/photos/32243187/pexels-photo-32243187.jpeg?auto=compress&cs=tinysrgb&w=1000",
  tilapia:
    "https://images.pexels.com/photos/8352786/pexels-photo-8352786.jpeg?auto=compress&cs=tinysrgb&w=1000",
  wholesale:
    "https://images.pexels.com/photos/14993421/pexels-photo-14993421.jpeg?auto=compress&cs=tinysrgb&w=1200",
  feeding:
    "https://images.pexels.com/photos/7509423/pexels-photo-7509423.jpeg?auto=compress&cs=tinysrgb&w=900",
  growing:
    "https://images.pexels.com/photos/7509424/pexels-photo-7509424.jpeg?auto=compress&cs=tinysrgb&w=900",
  harvesting:
    "https://images.pexels.com/photos/32243195/pexels-photo-32243195.jpeg?auto=compress&cs=tinysrgb&w=900",
  closing:
    "https://images.pexels.com/photos/18640095/pexels-photo-18640095.jpeg?auto=compress&cs=tinysrgb&w=1600",
};

/* ---------------------------- scroll reveal --------------------------- */
function useReveal() {
    const ref = useRef(null);
    const [shown, setShown] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShown(true);
                    obs.disconnect();
                }
            },
            { threshold: 0.18 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return [ref, shown];
}

function Reveal({ children, delay = 0, className = "" }) {
    const [ref, shown] = useReveal();
    return (
        <div
            ref={ref}
            className={className}
            style={{
                transition: `opacity 700ms cubic-bezier(.2,.7,.2,1) ${delay}ms, transform 700ms cubic-bezier(.2,.7,.2,1) ${delay}ms`,
                opacity: shown ? 1 : 0,
                transform: shown ? "translateY(0)" : "translateY(24px)",
            }}
        >
            {children}
        </div>
    );
}

/* -------------------------------- Navbar ------------------------------- */


/* --------------------------------- Hero -------------------------------- */
function Hero() {
    const [ref, shown] = useReveal();
    const base = "transition-all duration-[900ms]";
    return (
        <section id="top" className="max-w-6xl mx-auto px-6 md:px-10 pt-14 md:pt-24 pb-20">
            <div className="grid md:grid-cols-2 gap-14 items-center" ref={ref}>
                <div>
                    <p
                        className={`${base} text-[#B98A2B] text-sm mb-4`}
                        style={{
                            opacity: shown ? 1 : 0,
                            transform: shown ? "translateY(0)" : "translateY(14px)",
                        }}
                    >
                        Farm-raised catfish &amp; tilapia
                    </p>
                    <h1
                        className={`${base} text-[#0E2B27] text-[42px] leading-[1.08] sm:text-5xl md:text-6xl`}
                        style={{
                            fontFamily: "Fraunces, serif",
                            fontWeight: 560,
                            opacity: shown ? 1 : 0,
                            transform: shown ? "translateY(0)" : "translateY(22px)",
                            transitionDelay: "80ms",
                        }}
                    >
                        Don&apos;t just buy fish, build with it.
                    </h1>
                    <p
                        className={`${base} text-[#31463F] text-lg mt-6 max-w-md leading-relaxed`}
                        style={{
                            opacity: shown ? 1 : 0,
                            transform: shown ? "translateY(0)" : "translateY(18px)",
                            transitionDelay: "180ms",
                        }}
                    >
                        Get quality fish, sourced fresh — or learn the skills to start
                        and grow your own fishery.
                    </p>
                    <div
                        className={`${base} flex flex-wrap gap-4 mt-9`}
                        style={{
                            opacity: shown ? 1 : 0,
                            transform: shown ? "translateY(0)" : "translateY(18px)",
                            transitionDelay: "280ms",
                        }}
                    >
                        <a
                            id="order"
                            href={WHATSAPP_LINK("I'd like to place an order.")}
                            className="rounded-full bg-[#0E3B36] text-[#F6F2E9] px-7 py-3.5 text-[15px] hover:bg-[#134943] transition-colors"
                        >
                            Place an order
                        </a>
                        <a
                            href="#varieties"
                            className="rounded-full border border-[#0E3B36]/25 text-[#0E3B36] px-7 py-3.5 text-[15px] hover:border-[#0E3B36]/60 transition-colors"
                        >
                            Our varieties
                        </a>
                    </div>
                </div>

                {/* overlapping-circle "fish eye" image collage, echoing the sketch */}
                <div
                    className={`${base} relative h-[380px] sm:h-[440px]`}
                    style={{
                        opacity: shown ? 1 : 0,
                        transform: shown ? "scale(1)" : "scale(0.94)",
                        transitionDelay: "160ms",
                    }}
                >
                    <div className="absolute inset-0 rounded-[999px_/_50%] overflow-hidden shadow-xl">
                        <img
                            src={IMG.hero}
                            alt="Vibrant fish farm pond"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -top-6 -right-4 w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-[#F6F2E9] shadow-lg">
                        <img
                            src={IMG.heroSmall1}
                            alt="Fresh catfish on a tray"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-8 -left-4 w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-[#F6F2E9] shadow-lg">
                        <img
                            src={IMG.heroSmall2}
                            alt="Fresh tilapia on ice"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ----------------------------- How it works ----------------------------- */
function HowItWorks() {
    const steps = [
        { n: "01", title: "Choose your fish", copy: "Pick catfish, tilapia, or both, by weight or by crate." },
        { n: "02", title: "Place your order", copy: "Tell us where and when — we fit around your schedule." },
        { n: "03", title: "Confirm details", copy: "We confirm quantity, price, and delivery in minutes." },
        { n: "04", title: "Get your fish", copy: "Fresh fish arrives at your door, still cold from the farm." },
    ];
    return (
        <section id="how-it-works" className="relative bg-[#0E2B27] text-[#F6F2E9] py-24 overflow-hidden">

            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
                <Reveal>
                    <h2
                        className="text-3xl md:text-4xl max-w-lg"
                        style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}
                    >
                        Getting fresh fish is simple.
                    </h2>
                </Reveal>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mt-16">
                    {steps.map((s, i) => (
                        <Reveal key={s.n} delay={i * 90}>
                            <div className="border-t border-[#F6F2E9]/20 pt-5">
                                <span className="text-[#D9A441] text-sm">{s.n}</span>
                                <h3 className="text-lg mt-3 mb-2">{s.title}</h3>
                                <p className="text-[#F6F2E9]/65 text-sm leading-relaxed">{s.copy}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={360}>
                    <a
                        href="#varieties"
                        className="inline-flex mt-16 rounded-full bg-[#D9A441] text-[#0E2B27] px-7 py-3.5 text-[15px] hover:bg-[#e5b559] transition-colors"
                    >
                        Start an order
                    </a>
                </Reveal>
            </div>
        </section>
    );
}

function Varieties() {
  const cards = [
    { img: IMG.catfish, name: "Catfish", copy: "Firm, mild, and versatile — sold live or freshly dressed.", cta: "Order catfish" },
    { img: IMG.tilapia, name: "Tilapia", copy: "Sweet, delicate flesh, farmed in clean, well-fed ponds.", cta: "Order tilapia" },
  ];
  return (
    <section id="varieties" className="py-24 bg-[#F6F2E9]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="text-[#B98A2B] text-sm mb-3">Our varieties</p>
          <h2
            className="text-3xl md:text-4xl text-[#0E2B27] max-w-lg"
            style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}
          >
            Fresh from our farm to your table.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 md:gap-5 mt-14">
          {cards.map((c, i) => (
            <Reveal key={c.name} delay={i * 120}>
              <div className="group">
                <div className="h-[420px] md:h-[500px] rounded-2xl overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3
                  className="text-2xl text-[#0E2B27] mt-6"
                  style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}
                >
                  {c.name}
                </h3>
                <p className="text-[#31463F]/80 mt-2 mb-5 text-[15px] max-w-sm">{c.copy}</p>
                <a
                  href={WHATSAPP_LINK(`I'd like to order ${c.name}.`)}
                  className="inline-flex items-center rounded-full border border-[#0E3B36]/25 text-[#0E3B36] px-5 py-2.5 text-sm hover:border-[#0E3B36]/60 transition-colors"
                >
                  {c.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}



/* -------------------------------- Wholesale ------------------------------- */
function Wholesale() {
    const groups = ["For restaurants", "For retailers", "For businesses"];
    return (
        <section id="wholesale" className="py-24">
            <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
                <Reveal>
                    <div className="rounded-3xl overflow-hidden h-72 md:h-96">
                        <img
                            src={IMG.wholesale}
                            alt="Aerial view of a large-scale fish farm"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </Reveal>
                <Reveal delay={120}>
                    <h2
                        className="text-3xl md:text-4xl text-[#0E2B27]"
                        style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}
                    >
                        Need fish in larger quantity?
                    </h2>
                    <p className="text-[#31463F]/80 mt-4 max-w-md">
                        Whether you're a restaurant, a retailer, or a business that
                        moves volume, we supply in bulk on a schedule that works for
                        you.
                    </p>
                    <ul className="mt-7 space-y-3">
                        {groups.map((g) => (
                            <li key={g} className="flex items-center gap-3 text-[#0E2B27]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#D9A441]" />
                                {g}
                            </li>
                        ))}
                    </ul>
                    <a
                        href="contact"
                        className="inline-flex mt-8 rounded-full bg-[#0E3B36] text-[#F6F2E9] px-7 py-3.5 text-[15px] hover:bg-[#134943] transition-colors"
                    >
                        Talk to us about wholesale
                    </a>
                </Reveal>
            </div>
        </section>
    );
}

/* ---------------------------- Fishery journey / learn --------------------- */
function FisheryJourney() {
  const stages = [
    { title: "Feeding", img: IMG.feeding, copy: "Learn how to formulate and time feed for healthy, fast-growing stock." },
    { title: "Growing", img: IMG.growing, copy: "Manage water quality, density, and health from fingerling to full size." },
    { title: "Harvesting", img: IMG.harvesting, copy: "Time your harvest and handle fish right, from pond to market." },
  ];
  const scrollerRef = useRef(null);
  const scrollBy = (dir) => {
    scrollerRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };
  return (
    <section id="learn-fishery" className="py-24 bg-[#0E2B27] text-[#F6F2E9]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <p className="text-[#D9A441] text-sm mb-3">Want to learn fishery?</p>
              <h2
                className="text-3xl md:text-4xl max-w-lg"
                style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}
              >
                Go beyond buying — explore our fishery courses.
              </h2>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => scrollBy(-1)}
                aria-label="Scroll left"
                className="w-11 h-11 rounded-full border border-[#F6F2E9]/25 flex items-center justify-center hover:border-[#F6F2E9]/60 transition-colors"
              >
                ←
              </button>
              <button
                onClick={() => scrollBy(1)}
                aria-label="Scroll right"
                className="w-11 h-11 rounded-full border border-[#F6F2E9]/25 flex items-center justify-center hover:border-[#F6F2E9]/60 transition-colors"
              >
                →
              </button>
            </div>
          </div>
        </Reveal>
 
        <div
          ref={scrollerRef}
          className="flex gap-6 mt-12 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none]"
          style={{ scrollbarWidth: "none" }}
        >
          {stages.map((s, i) => (
            <Reveal key={s.title} delay={i * 100} className="snap-start shrink-0 w-[280px] sm:w-[320px]">
              <div className="rounded-3xl overflow-hidden bg-[#123832]">
                <div className="h-44 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2">{s.title}</h3>
                  <p className="text-[#F6F2E9]/65 text-sm leading-relaxed">{s.copy}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
 
        <Reveal delay={320}>
          <a
            href="learn-fishery"
            className="inline-flex mt-10 rounded-full border border-[#F6F2E9]/30 px-7 py-3.5 text-[15px] hover:border-[#F6F2E9]/70 transition-colors"
          >
            Explore fishery courses
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- Closing banner --------------------------- */
function ClosingBanner() {
    return (
        <section className="relative h-[420px] md:h-[480px] overflow-hidden">
            <img
                src={IMG.closing}
                alt="Full-size aerial view of a fish farm"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0E2B27]/55" />
            <div className="relative h-full max-w-6xl mx-auto px-6 md:px-10 flex items-center">
                <Reveal>
                    <h2
                        className="text-[#F6F2E9] text-4xl md:text-5xl max-w-xl leading-tight"
                        style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}
                    >
                        Good fish shouldn&apos;t be complicated.
                    </h2>
                </Reveal>
            </div>
        </section>
    );
}

/* ---------------------------------- Footer ---------------------------------- */


/* ----------------------------------- App ------------------------------------ */
export default function Home() {
    return (
        <div className="bg-[#F6F2E9] min-h-screen">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@400;560;600&family=Inter:wght@400;500&display=swap');
        * { font-family: 'Inter', sans-serif; }
      `}</style>
            <Hero />
            <HowItWorks />
            <Varieties />
            <Wholesale />
            <FisheryJourney />
            <ClosingBanner />
        </div>
    );
}