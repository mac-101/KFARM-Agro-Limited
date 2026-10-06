import React, { useEffect, useRef, useState } from "react";
import { MessageCircle, MapPin, Fish, GraduationCap, Package } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  KFARM AGRO LIMITED — Contact page                                  */
/*  Same visual language as Home/Fish/Learn: full-bleed photo Hero,    */
/*  light card-based sections, Plus Jakarta Sans, white / #13231B ink  */
/*  / #A6D83B lime. WhatsApp is the one real contact channel.          */
/* ------------------------------------------------------------------ */

const WHATSAPP_NUMBER = "2349115380670"; // 09115380670
const WHATSAPP_LINK = (message) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const IMG = {
    hero: "https://images.pexels.com/photos/15059730/pexels-photo-15059730.jpeg?auto=compress&cs=tinysrgb&w=1600",
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

/* --------------------------- 1. Hero — same pattern as other pages --------------------------- */
function Hero() {
    const [ref, shown] = useReveal();
    const base = "transition-all duration-[900ms]";
    return (
        <section className="relative h-[62vh] min-h-[440px] overflow-hidden">
            <img src={IMG.hero} alt="KFARM fish farm" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#13231B]/70" />

            <div ref={ref} className="relative h-full max-w-6xl mx-auto px-6 md:px-10 flex flex-col items-center justify-center text-center">
                <p
                    className={`${base} text-white/85 text-sm font-semibold tracking-[0.15em] uppercase mb-4`}
                    style={{ opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(14px)" }}
                >
                    Contact Us
                </p>
                <h1
                    className={`${base} text-white text-[32px] leading-[1.14] sm:text-4xl md:text-5xl font-bold max-w-xl`}
                    style={{ opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(22px)", transitionDelay: "100ms" }}
                >
                    Talk to us on WhatsApp.
                </h1>
                <p
                    className={`${base} text-white/80 text-base md:text-lg mt-5 max-w-md leading-relaxed`}
                    style={{ opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(18px)", transitionDelay: "180ms" }}
                >
                    Orders, wholesale enquiries, or questions about our fishery
                    training, the fastest way to reach us is a message.
                </p>
                <div
                    className={`${base} mt-9`}
                    style={{ opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(18px)", transitionDelay: "260ms" }}
                >
                    <a
                        href={WHATSAPP_LINK("Hi, I'd like to talk to KFARM.")}
                        className="inline-flex items-center gap-3 rounded-full bg-[#A6D83B] text-[#13231B] px-8 py-4 text-[16px] font-semibold hover:brightness-95 transition-all"
                    >
                        <MessageCircle size={20} strokeWidth={2} />
                        Message us on WhatsApp
                    </a>
                    <p className="text-white/60 text-sm mt-4">0911 538 0670</p>
                </div>
            </div>
        </section>
    );
}

/* --------------------------- 2. Quick links --------------------------- */
function QuickLinks() {
    const links = [
        { icon: Fish, title: "Browse our fish", copy: "Fresh or dried catfish and tilapia, ready to order.", href: "/fish" },
        { icon: Package, title: "Talk wholesale", copy: "Supplying restaurants, retailers, and bulk buyers.", href: "/fish#wholesale" },
        { icon: GraduationCap, title: "Learn fishery", copy: "Practical training, from beginner to existing farmer.", href: "/learn" },
    ];
    return (
        <section className="py-20 md:py-24 bg-[#FAFAF7]">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                <Reveal>
                    <h2 className="text-[#13231B] text-2xl md:text-3xl font-bold">Not ready to chat yet?</h2>
                </Reveal>
                <div className="grid sm:grid-cols-3 gap-5 mt-10">
                    {links.map((l, i) => (
                        <Reveal key={l.title} delay={i * 100}>
                            <a href={l.href} className="group block rounded-2xl bg-white border border-[#13231B]/8 p-7 h-full hover:border-[#13231B]/20 transition-colors">
                                <div className="w-11 h-11 rounded-full bg-[#A6D83B]/20 flex items-center justify-center">
                                    <l.icon size={18} className="text-[#13231B]" strokeWidth={1.8} />
                                </div>
                                <h3 className="text-[#13231B] text-base font-semibold mt-5 mb-1.5">{l.title}</h3>
                                <p className="text-[#5C6760] text-sm leading-relaxed">{l.copy}</p>
                            </a>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* --------------------------- 3. Location --------------------------- */
function Location() {
    return (
        <section className="py-24 md:py-28 bg-white">
            <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
                <Reveal>
                    <p className="text-[#5C6760] text-sm font-semibold tracking-[0.15em] uppercase mb-3">Where we are</p>
                    <h2 className="text-[#13231B] text-3xl md:text-4xl font-bold">Find us at Market Square.</h2>
                    <div className="flex items-start gap-3 mt-6 text-[#5C6760]">
                        <MapPin size={20} className="text-[#13231B] mt-0.5 shrink-0" strokeWidth={1.8} />
                        <p className="leading-relaxed">
                            Marketsquare, Ezendioma, Asa Ukwa West LGA, Abia State.
                            <br />
                            Prefer to talk first? Message us on WhatsApp and we'll
                            sort out pickup or delivery.
                        </p>
                    </div>
                    <a
                        href={WHATSAPP_LINK("Hi, I'd like to talk to KFARM.")}
                        className="inline-flex items-center gap-2 mt-7 rounded-full border border-[#13231B]/20 text-[#13231B] px-6 py-3 text-sm font-medium hover:border-[#13231B]/50 transition-colors"
                    >
                        <MessageCircle size={16} strokeWidth={2} />
                        0911 538 0670
                    </a>
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

/* ----------------------------------- Page ------------------------------------ */
export default function ContactPage() {
    return (
        <div className="bg-white min-h-screen">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
                * { font-family: 'Plus Jakarta Sans', sans-serif; }
            `}</style>
            <Hero />
            <QuickLinks />
            <Location />
        </div>
    );
}