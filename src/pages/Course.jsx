import React, { useEffect, useRef, useState } from "react";
import {
  Fish,
  Sprout,
  UtensilsCrossed,
  Waves,
  Droplets,
  HeartPulse,
  TrendingUp,
  GraduationCap,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  KFARM Agro Limited, Learn / Education page                              */
/*  Same design system as the main site: deep teal + harvest gold on   */
/*  soft paper cream, Fraunces headlines + Inter body.                 */
/* ------------------------------------------------------------------ */

const WHATSAPP_NUMBER = "2349115380670"; // 09115380670, with Nigeria country code, no leading 0
const DEFAULT_ORDER_MESSAGE =
  import.meta.env.VITE_WHOLESALE_ORDER_MESSAGE ||
  "KFARM Agro Limited, I'd like to place an order.";
const WHATSAPP_LINK = (message = DEFAULT_ORDER_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const IMG = {
  eduHero:
    "https://images.pexels.com/photos/7509423/pexels-photo-7509423.jpeg?auto=compress&cs=tinysrgb&w=1400",
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

/* ------------------------------ Education hero ----------------------------- */
function EducationHero() {
  const [ref, shown] = useReveal();
  const base = "transition-all duration-[900ms]";
  return (
    <section className="relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <img
          src={IMG.eduHero}
          alt="Hands-on fishery training at a pond"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0E2B27]/70" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 pt-28 pb-24 md:pt-36 md:pb-32">
        <p
          className={`${base} text-[#D9A441] text-sm mb-4`}
          style={{ opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(14px)" }}
        >
          Fishery education
        </p>
        <h1
          className={`${base} text-[#F6F2E9] text-[38px] leading-[1.12] sm:text-5xl md:text-[56px] max-w-2xl`}
          style={{
            fontFamily: "Fraunces, serif",
            fontWeight: 560,
            opacity: shown ? 1 : 0,
            transform: shown ? "translateY(0)" : "translateY(22px)",
            transitionDelay: "80ms",
          }}
        >
          Learn fishery. Build knowledge. Grow with confidence.
        </h1>
        <p
          className={`${base} text-[#F6F2E9]/75 text-lg mt-6 max-w-lg leading-relaxed`}
          style={{
            opacity: shown ? 1 : 0,
            transform: shown ? "translateY(0)" : "translateY(18px)",
            transitionDelay: "180ms",
          }}
        >
          Practical, hands-on fishery training, from your first pond to
          running a farm that pays for itself. No guesswork, just what
          works.
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
            href="#contact"
            className="rounded-full bg-[#D9A441] text-[#0E2B27] px-7 py-3.5 text-[15px] hover:bg-[#e5b559] transition-colors"
          >
            Interested in learning? Contact us
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- What you'll learn --------------------------- */
function WhatYoullLearn() {
  const topics = [
    { icon: GraduationCap, title: "Fish farming fundamentals", copy: "The basics of setting up and running a fishery, from siting a pond to your first stocking." },
    { icon: Fish, title: "Catfish production", copy: "Stocking, growth cycles, and handling practices specific to catfish." },
    { icon: Waves, title: "Tilapia production", copy: "What tilapia need to thrive, and how their production differs from catfish." },
    { icon: UtensilsCrossed, title: "Feeding & nutrition", copy: "Choosing and timing feed for healthy growth without wasting money." },
    { icon: Sprout, title: "Pond management", copy: "Keeping ponds productive, stocking density, cycles, and upkeep." },
    { icon: Droplets, title: "Water management", copy: "Monitoring and maintaining the water quality your fish depend on." },
    { icon: HeartPulse, title: "Fish health", copy: "Spotting disease early and keeping stock healthy through every stage." },
    { icon: TrendingUp, title: "Business & marketing", copy: "Pricing, finding buyers, and turning a fishery into a steady income." },
  ];
  return (
    <section id="what-youll-learn" className="py-24 bg-[#F6F2E9]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="text-[#B98A2B] text-sm mb-3">What you'll learn</p>
          <h2
            className="text-3xl md:text-4xl text-[#0E2B27] max-w-lg"
            style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}
          >
            Everything covered in our fishery training.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mt-16">
          {topics.map((t, i) => (
            <Reveal key={t.title} delay={(i % 4) * 90}>
              <div className="border-t border-[#0E3B36]/15 pt-5">
                <t.icon size={22} className="text-[#0E3B36]" strokeWidth={1.6} />
                <h3 className="text-lg text-[#0E2B27] mt-4 mb-2">{t.title}</h3>
                <p className="text-[#31463F]/75 text-sm leading-relaxed">{t.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Who it's for ------------------------------ */
function WhoIsItFor() {
  const groups = [
    {
      title: "Beginners",
      copy: "You're curious about fish farming and want to understand it from scratch, no prior experience needed.",
    },
    {
      title: "Aspiring fish farmers",
      copy: "You're preparing to start or expand a fish farm and want a solid foundation before you commit money.",
    },
    {
      title: "Existing farmers",
      copy: "You already farm fish and want to sharpen your practices, cut losses, and grow your output.",
    },
  ];
  return (
    <section id="who-its-for" className="py-24 bg-[#0E2B27] text-[#F6F2E9]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="text-[#D9A441] text-sm mb-3">Who it's for</p>
          <h2
            className="text-3xl md:text-4xl max-w-lg"
            style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}
          >
            Wherever you're starting from, there's a place for you here.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8 mt-16">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 120}>
              <div className="border-t border-[#F6F2E9]/20 pt-6">
                <h3
                  className="text-2xl"
                  style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}
                >
                  {g.title}
                </h3>
                <p className="text-[#F6F2E9]/70 mt-3 leading-relaxed">{g.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- CTA ------------------------------------ */
function LearnCTA() {
  return (
    <section id="contact" className="py-24 bg-[#F6F2E9]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
        <Reveal>
          <h2
            className="text-3xl md:text-4xl text-[#0E2B27] max-w-xl mx-auto"
            style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}
          >
            Interested in learning?
          </h2>
          <p className="text-[#31463F]/80 mt-4 max-w-md mx-auto">
            Tell us where you're starting from and we'll point you to the
            right training.
          </p>
          <a
            href={WHATSAPP_LINK("I'd like to learn more about the fishery courses.")}
            className="inline-flex mt-8 rounded-full bg-[#0E3B36] text-[#F6F2E9] px-7 py-3.5 text-[15px] hover:bg-[#134943] transition-colors"
          >
            Contact us
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------- Page ------------------------------------ */
export default function LearnFisheryPage() {
  return (
    <div className="bg-[#F6F2E9] min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@400;560;600&family=Inter:wght@400;500&display=swap');
        * { font-family: 'Inter', sans-serif; }
      `}</style>
      <EducationHero />
      <WhatYoullLearn />
      <WhoIsItFor />
      <LearnCTA />
    </div>
  );
}