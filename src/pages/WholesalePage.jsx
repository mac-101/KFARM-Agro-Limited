import React, { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import heroImage from "../assets/IMG-20260928-WA0192(1).jpg";
import catfishImage from "../assets/IMG-20260928-WA0195.jpg";
import tilapiaImage from "../assets/IMG-20260928-WA0184.jpg";
import dryFishImage from "../assets/IMG-20260928-WA0193.jpg";
import pondImage from "../assets/IMG-20260928-WA0190.jpg";
import dryTilapiaImage from "../assets/IMG-20260928-WA0185.jpg";
import closingImage from "../assets/IMG-20260928-WA0186.jpg";
import Button from "../components/button";

/* ------------------------------------------------------------------ */
/*  KFARM AGRO LIMITED — Fish / Buy page, v2                           */
/*  Reworked to actually match Home's visual language instead of       */
/*  introducing its own: full-bleed photo Hero (same pattern as Home's */
/*  Hero), light card-based Varieties (same photo-top/white-content    */
/*  pattern as Home's Offerings), and a light, card-based Wholesale    */
/*  section instead of the old dark full-bleed banner. Dropped the     */
/*  standalone photo marquee — it read as a second, competing "wow"    */
/*  moment instead of reinforcing Home's look.                        */
/*                                                                      */
/*  Fresh/Dry toggle + hover-zoom on the variety cards kept, since      */
/*  those weren't flagged — only the hero and wholesale vibe were.     */
/*                                                                      */
/*  Same palette as Home: white / #13231B ink / #A6D83B lime,          */
/*  Plus Jakarta Sans throughout.                                      */
/* ------------------------------------------------------------------ */

const WHATSAPP_NUMBER = "2349115380670";
const WHATSAPP_LINK = (message) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const IMG = {
    hero: heroImage,
    catfish: catfishImage,
    tilapia: tilapiaImage,
    dryFish: dryFishImage,
    dryTilapia: dryTilapiaImage,
    pond: pondImage,
    closing: closingImage,
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

/* --------------------------- 1. Hero — same pattern as Home's Hero --------------------------- */
function Hero() {
    const [ref, shown] = useReveal();
    const base = "transition-all duration-[900ms]";
    return (
        <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
            <img src={IMG.hero} alt="Fresh catfish gathered after harvest at KFARM Agro Limited" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#13231B]/80 via-[#13231B]/35 to-transparent" />

            <div ref={ref} className="relative h-full max-w-6xl mx-auto px-6 md:px-10 flex flex-col justify-center">
                <p
                    className={`${base} text-white/85 text-sm font-semibold tracking-[0.15em] uppercase mb-4`}
                    style={{ opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(14px)" }}
                >
                    Our Fish
                </p>
                <h1
                    className={`${base} text-white text-[32px] leading-[1.14] sm:text-4xl md:text-5xl font-bold max-w-xl`}
                    style={{ opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(22px)", transitionDelay: "100ms" }}
                >
                    Fresh or dried. Catfish or tilapia. Order directly, no middleman.
                </h1>
            </div>
        </section>
    );
}

/* --------------------------- 2. Varieties — same card pattern as Home's Offerings --------------------------- */
function Varieties() {
    const varieties = {
        fresh: [
            { name: "Fresh Catfish", img: IMG.catfish, copy: "Firm, meaty, and versatile — sold live or freshly dressed." },
            { name: "Fresh Tilapia", img: IMG.tilapia, copy: "Tender and mild-tasting, straight from clean, well-fed ponds." },
        ],
        dry: [
            { name: "Dry Catfish", img: IMG.dryFish, copy: "Smoked and dried for a longer-lasting option, same firm texture." },
            { name: "Dry Tilapia", img: IMG.dryTilapia, copy: "Smoked and dried, ready for soups and stews whenever you need it." },
        ],
    };

    const [tab, setTab] = useState("fresh");

    return (
        <section id="varieties" className="py-24 md:py-28 bg-[#FAFAF7]">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                <Reveal>
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                        <h2 className="text-[#13231B] text-3xl md:text-4xl font-bold">Pick what you need.</h2>
                        <div className="inline-flex bg-white border border-[#13231B]/10 rounded-full p-1 w-fit">
                            {["fresh", "dry"].map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setTab(t)}
                                    className="relative px-6 py-2.5 text-sm font-semibold rounded-full transition-colors duration-300"
                                    style={{ color: tab === t ? "#13231B" : "#5C6760" }}
                                >
                                    {tab === t && <span className="absolute inset-0 rounded-full bg-[#A6D83B]" />}
                                    <span className="relative capitalize">{t}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </Reveal>

                <div key={tab} className="grid sm:grid-cols-2 gap-6 mt-12" style={{ animation: "fadeSlideIn 450ms ease-out" }}>
                    {varieties[tab].map((v) => (
                        <div key={v.name} className="group">
                            <div className="rounded-2xl overflow-hidden h-64 md:h-72">
                                <img src={v.img} alt={`${v.name} supplied by KFARM Agro Limited`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="relative bg-white rounded-2xl -mt-8 mx-4 p-6 shadow-[0_8px_30px_rgba(19,35,27,0.08)]">
                                <h3 className="text-[#13231B] text-lg font-semibold">{v.name}</h3>
                                <p className="text-[#5C6760] text-sm mt-2 leading-relaxed pr-8">{v.copy}</p>
                                <Button
                                    text={`Order ${v.name}`}
                                    ariaLabel={`Order ${v.name}`}
                                    iconOnly
                                    color="light"
                                    href={WHATSAPP_LINK(`I'd like to order ${v.name}.`)}
                                    className="absolute -top-5 right-5 shadow-md group-hover:scale-105"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                @keyframes fadeSlideIn {
                    from { opacity: 0; transform: translateY(14px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
}

/* --------------------------- 3. Wholesale — light, card-based, matching Home's About/BrandStory --------------------------- */
function BulkSupply() {
    const wholesaleTags = ["For restaurants", "For retailers", "For hotels & caterers"];
    return (
        <section id="wholesale" className="py-24 md:py-28 bg-white">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    <Reveal>
                        <div className="rounded-2xl overflow-hidden h-72 md:h-96">
                            <img src={IMG.pond} alt="Live catfish swimming together at KFARM" loading="lazy" className="w-full h-full object-cover" />
                        </div>
                    </Reveal>
                    <Reveal delay={100}>
                        <p className="text-[#5C6760] text-sm font-semibold tracking-[0.15em] uppercase mb-3">Wholesale</p>
                        <h2 className="text-[#13231B] text-3xl md:text-4xl font-bold leading-tight">
                            Need fish in larger quantity?
                        </h2>
                        <p className="text-[#5C6760] mt-5 leading-relaxed max-w-md">
                            Whether you're running a restaurant, managing a retail
                            shop, or catering events, we supply fresh stock on a
                            reliable schedule tailored to your volume.
                        </p>
                        <div className="flex flex-wrap gap-2.5 mt-6">
                            {wholesaleTags.map((t) => (
                                <span key={t} className="rounded-full border border-[#13231B]/15 text-[#13231B]/75 px-4 py-1.5 text-xs font-medium">
                                    {t}
                                </span>
                            ))}
                        </div>
                        <Button
                            text="Talk to us about wholesale"
                            color="dark"
                            href={WHATSAPP_LINK("I'd like to talk about a wholesale order.")}
                            className="mt-8"
                        />
                    </Reveal>
                </div>

                {/* partner/commission — same bordered-card treatment as Home's About points row */}
                <Reveal delay={180}>
                    <div className="rounded-2xl bg-[#FAFAF7] border border-[#13231B]/8 p-7 md:p-10 mt-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div>
                            <h3 className="text-[#13231B] text-xl font-semibold">Bring us buyers, earn commission.</h3>
                            <p className="text-[#5C6760] text-sm mt-2 leading-relaxed max-w-md">
                                Know a restaurant, hotel, or bulk buyer? Connect them
                                to KFARM and earn commission on what they order.
                            </p>
                        </div>
                        <Button
                            text="Become a partner"
                            color="dark"
                            href={WHATSAPP_LINK("Hello, I'd like to become a partner and refer a buyer.")}
                            className="w-fit shrink-0"
                        />
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

/* --------------------------- 4. How ordering works — bordered icon-cards like Home's About --------------------------- */
function HowItWorks() {
    const steps = [
        { title: "Message us", copy: "Tell us what fish, fresh or dry, and how much." },
        { title: "We confirm", copy: "We confirm price and the earliest we can supply it." },
        { title: "You receive it", copy: "Pick up at Market Square, or ask about delivery." },
    ];
    return (
        <section className="py-24 md:py-28 bg-[#FAFAF7]">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                <Reveal>
                    <h2 className="text-[#13231B] text-3xl md:text-4xl font-bold">How ordering works.</h2>
                </Reveal>
                <div className="grid sm:grid-cols-3 gap-5 mt-12">
                    {steps.map((s, i) => (
                        <Reveal key={s.title} delay={i * 90}>
                            <div className="rounded-2xl bg-white border border-[#13231B]/8 p-7">
                                <div className="w-11 h-11 rounded-full bg-[#A6D83B]/20 flex items-center justify-center">
                                    <span className="text-[#13231B] text-sm font-bold">{i + 1}</span>
                                </div>
                                <h3 className="text-[#13231B] text-base font-semibold mt-5 mb-1.5">{s.title}</h3>
                                <p className="text-[#5C6760] text-sm leading-relaxed">{s.copy}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* --------------------------- 5. Pickup / Location --------------------------- */
function Location() {
    return (
        <section className="py-24 md:py-28 bg-white">
            <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
                <Reveal>
                    <p className="text-[#5C6760] text-sm font-semibold tracking-[0.15em] uppercase mb-3">Where to find us</p>
                    <h2 className="text-[#13231B] text-3xl md:text-4xl font-bold">Pickup at Market Square.</h2>
                    <div className="flex items-start gap-3 mt-6 text-[#5C6760]">
                        <MapPin size={20} className="text-[#13231B] mt-0.5 shrink-0" strokeWidth={1.8} />
                        <p className="leading-relaxed">
                            Marketsquare, Ezendioma, Asa Ukwa West LGA, Abia State.
                            <br />
                            Ask us on WhatsApp about delivery to your location.
                        </p>
                    </div>
                </Reveal>
                <Reveal delay={120}>
                    <div className="rounded-2xl overflow-hidden h-64 md:h-80">
                        <iframe
                            title="KFARM location map"
                            className="w-full h-full border-0"
                            loading="lazy"
                            src="https://www.google.com/maps?q=Market+Square+Ezendioma+Asa+Ukwa+West+Abia+State&output=embed"
                        />
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

/* --------------------------- 6. Final CTA — same pattern as Home's FinalCTA --------------------------- */
function FinalCTA() {
    return (
        <section className="relative h-[380px] md:h-[440px] overflow-hidden">
            <img src={IMG.closing} alt="Fresh fish available to order from KFARM Agro Limited" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#13231B]/70" />
            <div className="relative h-full max-w-2xl mx-auto px-6 md:px-10 flex flex-col items-center justify-center text-center">
                <Reveal>
                    <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">Ready to order?</h2>
                    <Button
                        text="Order on WhatsApp"
                        color="light"
                        href={WHATSAPP_LINK("Hi, I'd like to place an order.")}
                        className="mt-7"
                    />
                </Reveal>
            </div>
        </section>
    );
}

/* ----------------------------------- Page ------------------------------------ */
export default function WholesalePage() {
    return (
        <div className="bg-white min-h-screen">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
                * { font-family: 'Plus Jakarta Sans', sans-serif; }
            `}</style>
            <Hero />
            <Varieties />
            <BulkSupply />
            <HowItWorks />
            <Location />
            <FinalCTA />
        </div>
    );
}