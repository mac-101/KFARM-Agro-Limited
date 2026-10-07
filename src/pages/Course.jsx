import React, { useEffect, useRef, useState } from "react";
import { Fish, Droplets, Waves, UtensilsCrossed, Sprout, HeartPulse, TrendingUp, GraduationCap } from "lucide-react";
import heroImage from "../assets/IMG-20260928-WA0190.jpg";
import anouncementImage from "../assets/slazzer-preview-74wu0.png";
import Button from "../components/button";

/* ------------------------------------------------------------------ */
/*  KFARM AGRO LIMITED — Learn Fishery page                            */
/*  Same visual language as Home and Fish: full-bleed photo Hero,      */
/*  light card-based sections (bordered FAFAF7/white icon-cards),      */
/*  Plus Jakarta Sans, white / #13231B ink / #A6D83B lime.             */
/*                                                                      */
/*  The 50%-training-discount mechanic lives here (moved off Home),    */
/*  built as a plain stat-style highlight card rather than the old     */
/*  illustrated coupon-tag graphic, to match this theme's simpler,     */
/*  flatter visual style.                                              */
/* ------------------------------------------------------------------ */

const WHATSAPP_NUMBER = "2349115380670";
const WHATSAPP_LINK = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const IMG = {
  hero: heroImage,
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

/* --------------------------- 1. Hero — same pattern as Home/varieties-wholesale --------------------------- */
function Hero() {
  const [ref, shown] = useReveal();
  const base = "transition-all duration-[900ms]";
  return (
    <section className="relative h-[70vh] min-h-[460px] overflow-hidden">
      <img src={IMG.hero} alt="Live catfish swimming together at KFARM" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#13231B]/85 via-[#13231B]/40 to-transparent" />

      <div ref={ref} className="relative h-full max-w-6xl mx-auto px-6 md:px-10 flex flex-col justify-center">
        <p
          className={`${base} text-white/85 text-sm font-semibold tracking-[0.15em] uppercase mb-4`}
          style={{ opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(14px)" }}
        >
          Fishery Education
        </p>
        <h1
          className={`${base} text-white text-[34px] leading-[1.14] sm:text-5xl md:text-[52px] font-bold max-w-xl`}
          style={{ opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(22px)", transitionDelay: "100ms" }}
        >
          Learn fishery. Build knowledge. Grow with confidence.
        </h1>
        <p
          className={`${base} text-white/80 text-base md:text-lg mt-5 max-w-md leading-relaxed`}
          style={{ opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(18px)", transitionDelay: "180ms" }}
        >
          Practical, hands-on fishery training, from your first pond
          to running a farm that pays for itself.
        </p>
        <div
          className={`${base} mt-8`}
          style={{ opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(18px)", transitionDelay: "260ms" }}
        >
          <Button
            text="Interested in learning?"
            color="light"
            href={WHATSAPP_LINK("Hi, I'd like to learn more about fishery training.")}
          />
        </div>
      </div>
    </section>
  );
}

/* --------------------------- 2. What You'll Learn --------------------------- */
function WhatYoullLearn() {
  const topics = [
    { icon: GraduationCap, title: "Fish farming fundamentals", copy: "The basics of setting up and running a fishery, from siting a pond to your first stocking." },
    { icon: Fish, title: "Catfish production", copy: "Stocking, growth cycles, and handling practices specific to catfish." },
    { icon: Waves, title: "Tilapia production", copy: "What tilapia need to thrive, and how their production differs from catfish." },
    { icon: UtensilsCrossed, title: "Feeding & nutrition", copy: "Choosing and timing feed for healthy growth without wasting money." },
    { icon: Sprout, title: "Pond management", copy: "Keeping ponds productive — stocking density, cycles, and upkeep." },
    { icon: Droplets, title: "Water management", copy: "Monitoring and maintaining the water quality your fish depend on." },
    { icon: HeartPulse, title: "Fish health", copy: "Spotting disease early and keeping stock healthy through every stage." },
    { icon: TrendingUp, title: "Business & marketing", copy: "Pricing, finding buyers, and turning a fishery into a steady income." },
  ];
  return (
    <section className="py-24 md:py-28 bg-[#FAFAF7]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="text-[#5C6760] text-sm font-semibold tracking-[0.15em] uppercase mb-3">What you'll learn</p>
          <h2 className="text-[#13231B] text-3xl md:text-4xl font-bold max-w-lg">
            Everything covered in our fishery training.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 mt-14">
          {topics.map((t, i) => (
            <Reveal key={t.title} delay={(i % 4) * 90}>
              <div className="rounded-2xl bg-white border border-[#13231B]/8 p-6 h-full">
                <div className="w-11 h-11 rounded-full bg-[#A6D83B]/20 flex items-center justify-center">
                  <t.icon size={18} className="text-[#13231B]" strokeWidth={1.8} />
                </div>
                <h3 className="text-[#13231B] text-base font-semibold mt-5 mb-1.5">{t.title}</h3>
                <p className="text-[#5C6760] text-sm leading-relaxed">{t.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div
          className={`mt-8 justify-self-center`}
          style={{ opacity: 1, transform: "translateY(0)" }}
        >
          <Button
            text="Interested in learning?"
            color="light"
            href={WHATSAPP_LINK("Hi, I'd like to learn more about fishery training.")}
          />
        </div>
      </div>
    </section>
  );
}

/* --------------------------- 3. Save 50% — plain stat highlight --------------------------- */
function DiscountHighlight() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="rounded-2xl bg-[#13231B] p-8 md:p-12 grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="space-y-5">
              <div className="flex items-baseline gap-3">
                <span className="text-[#A6D83B] text-6xl md:text-7xl font-extrabold leading-none">50%</span>
                <span className="text-white/70 text-base">off training</span>
              </div>
              <div>
                <h3 className="text-white text-xl md:text-2xl font-bold">
                  Already ordered fish from us?
                </h3>
                <p className="text-white/70 mt-2 leading-relaxed max-w-md">
                  Place any order with KFARM, then enroll in our
                  fishery training afterward — your course fee is
                  automatically halved.
                </p>
                <Button
                  text="Claim my discount"
                  color="light"
                  href={WHATSAPP_LINK("Hi, I've ordered from KFARM and want to enroll in training.")}
                  className="mt-5"
                />
              </div>
            </div>

            <div>
              <img src={anouncementImage} alt="KFARM fishery training announcement" />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="text-[#5C6760] text-sm mt-6 max-w-md leading-relaxed">
            Not yet ordered? No problem — you can still enroll at the full price.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- 4. Who Is It For --------------------------- */
function WhoIsItFor() {
  const groups = [
    { title: "Beginners", copy: "You're curious about fish farming and want to understand it from scratch — no prior experience needed." },
    { title: "Aspiring fish farmers", copy: "You're preparing to start or expand a fish farm and want a solid foundation before you commit money." },
    { title: "Existing farmers", copy: "You already farm fish and want to sharpen your practices, cut losses, and grow your output." },
  ];
  return (
    <section className="py-24 md:py-28 bg-[#FAFAF7]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="text-[#5C6760] text-sm font-semibold tracking-[0.15em] uppercase mb-3">Who it's for</p>
          <h2 className="text-[#13231B] text-3xl md:text-4xl font-bold max-w-lg">
            Wherever you're starting from, there's a place for you here.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5 mt-14">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 110}>
              <div className="rounded-2xl bg-white border border-[#13231B]/8 p-7 h-full">
                <span className="text-[#A6D83B] text-sm font-bold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-[#13231B] text-lg font-semibold mt-3 mb-2">{g.title}</h3>
                <p className="text-[#5C6760] text-sm leading-relaxed">{g.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- 5. Final CTA --------------------------- */
function FinalCTA() {
  return (
    <section className="py-24 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
        <Reveal>
          <h2 className="text-[#13231B] text-3xl md:text-4xl font-bold max-w-xl mx-auto">
            Interested in learning?
          </h2>
          <p className="text-[#5C6760] mt-4 max-w-md mx-auto leading-relaxed">
            Tell us where you're starting from and we'll point you
            to the right training.
          </p>
          <Button
            text="Contact us"
            color="dark"
            href={WHATSAPP_LINK("Hi, I'd like to learn more about fishery training.")}
            className="mt-8"
          />
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------- Page ------------------------------------ */
export default function LearnFisheryPage() {
  return (
    <div className="bg-white min-h-screen">
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
                * { font-family: 'Plus Jakarta Sans', sans-serif; }
            `}</style>
      <Hero />
      <WhatYoullLearn />
      <DiscountHighlight />
      <WhoIsItFor />
      <FinalCTA />
    </div>
  );
}