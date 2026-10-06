import React, { useEffect, useRef, useState } from "react";
import { ChevronRight, ChevronDown, Menu, X } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  KFARM AGRO LIMITED — Home page                                     */
/*  Palette: white / near-black-green ink / lime accent (per Ecoyard   */
/*  reference, locked in place of the earlier forest-green/gold/cream  */
/*  system). Font: Plus Jakarta Sans throughout (headline + body).     */
/*                                                                      */
/*  NOTE: real KFARM photography should replace every IMG value below  */
/*  as soon as it's available — these are stock placeholders only.     */
/* ------------------------------------------------------------------ */

const WHATSAPP_NUMBER = "2349115380670"; // 09115380670
const WHATSAPP_LINK = (message) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const IMG = {
    hero: "https://images.pexels.com/photos/15059730/pexels-photo-15059730.jpeg?auto=compress&cs=tinysrgb&w=1600",
    catfish: "https://images.pexels.com/photos/32243187/pexels-photo-32243187.jpeg?auto=compress&cs=tinysrgb&w=1000",
    tilapia: "https://images.pexels.com/photos/8352786/pexels-photo-8352786.jpeg?auto=compress&cs=tinysrgb&w=1000",
    dryFish: "https://images.pexels.com/photos/11229839/pexels-photo-11229839.jpeg?auto=compress&cs=tinysrgb&w=1000",
    pond: "https://images.pexels.com/photos/7509417/pexels-photo-7509417.jpeg?auto=compress&cs=tinysrgb&w=1200",
    growing: "https://images.pexels.com/photos/7509424/pexels-photo-7509424.jpeg?auto=compress&cs=tinysrgb&w=1200",
    feeding: "https://images.pexels.com/photos/7509423/pexels-photo-7509423.jpeg?auto=compress&cs=tinysrgb&w=1000",
    harvesting: "https://images.pexels.com/photos/32243195/pexels-photo-32243195.jpeg?auto=compress&cs=tinysrgb&w=1000",
    closing: "https://images.pexels.com/photos/18640095/pexels-photo-18640095.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
function Navbar() {
    const [open, setOpen] = useState(false);
    const links = [
        { label: "Fish", href: "/fish" },
        { label: "Learn Fishery", href: "/learn" },
    ];
    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[#13231B]/8">
            <div className="max-w-6xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
                <a href="/" className="flex flex-col leading-tight">
                    <span className="text-lg font-bold text-[#13231B] tracking-tight">KFARM</span>
                    <span className="text-[10px] text-[#5C6760] tracking-wide uppercase -mt-0.5">Agro Limited</span>
                </a>

                <nav className="hidden md:flex items-center gap-9">
                    {links.map((l) => (
                        <a key={l.label} href={l.href} className="text-[15px] text-[#13231B]/75 hover:text-[#13231B] transition-colors">
                            {l.label}
                        </a>
                    ))}
                </nav>

                <a
                    href={WHATSAPP_LINK("Hi, I'd like to talk to KFARM.")}
                    className="hidden md:inline-flex items-center rounded-full bg-[#13231B] text-white px-5 py-2.5 text-[15px] hover:bg-[#1E3A2C] transition-colors"
                >
                    Talk to KFARM
                </a>

                <button onClick={() => setOpen((v) => !v)} className="md:hidden text-[#13231B] p-2 -mr-2" aria-label="Toggle menu">
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {open && (
                <div className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-white">
                    {links.map((l) => (
                        <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-[#13231B] text-[15px]">
                            {l.label}
                        </a>
                    ))}
                    <a
                        href={WHATSAPP_LINK("Hi, I'd like to talk to KFARM.")}
                        onClick={() => setOpen(false)}
                        className="inline-flex justify-center rounded-full bg-[#13231B] text-white px-5 py-2.5 text-[15px]"
                    >
                        Talk to KFARM
                    </a>
                </div>
            )}
        </header>
    );
}

/* --------------------------- 1. Hero --------------------------- */
function Hero() {
    const [ref, shown] = useReveal();
    const base = "transition-all duration-[900ms]";
    return (
        <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
            <img src={IMG.hero} alt="KFARM fish farm" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#13231B]/85 via-[#13231B]/35 to-[#13231B]/10" />

            <div ref={ref} className="relative h-full max-w-6xl mx-auto px-6 md:px-10 flex flex-col justify-end pb-16 md:pb-20">
                <p
                    className={`${base} text-white/75 text-sm font-semibold tracking-[0.15em] uppercase mb-4`}
                    style={{ opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(14px)" }}
                >
                    KFARM Agro Limited
                </p>

                <h1
                    className={`${base} text-white text-[36px] leading-[1.12] sm:text-5xl md:text-[58px] font-bold max-w-2xl`}
                    style={{ opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(22px)", transitionDelay: "100ms" }}
                >
                    Fish for the table. Knowledge for the farm.
                </h1>

                <p
                    className={`${base} text-white/80 text-base md:text-lg mt-5 max-w-md leading-relaxed`}
                    style={{ opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(18px)", transitionDelay: "180ms" }}
                >
                    We provide quality fish and practical fishery knowledge for
                    people who want good fish, and for those who want to
                    understand the work behind it.
                </p>

                <div
                    className={`${base} flex flex-wrap gap-4 mt-9`}
                    style={{ opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(18px)", transitionDelay: "260ms" }}
                >
                    <a href="/fish" className="inline-flex items-center gap-2 rounded-full bg-[#A6D83B] text-[#13231B] px-7 py-3.5 text-[15px] font-semibold hover:brightness-95 transition-all">
                        Explore Our Fish <ChevronRight size={16} />
                    </a>
                    <a href="/learn" className="inline-flex items-center gap-2 rounded-full border border-white/35 text-white px-7 py-3.5 text-[15px] font-semibold hover:border-white/70 transition-all">
                        Learn Fishery <ChevronRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}

/* --------------------------- 2. Intro / About --------------------------- */
function AboutKfarm() {
    const points = [
        { title: "Fresh Fish", copy: "Fish for everyday meals and different customer needs." },
        { title: "Dry Fish", copy: "Fish prepared for customers who prefer a longer-lasting option." },
        { title: "Fishery", copy: "Practical knowledge for people interested in learning fish farming." },
    ];
    return (
        <section className="py-24 md:py-28 bg-white">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    <Reveal>
                        <div className="rounded-2xl overflow-hidden h-72 md:h-[420px]">
                            <img src={IMG.pond} alt="KFARM fish pond" className="w-full h-full object-cover" />
                        </div>
                    </Reveal>

                    <Reveal delay={100}>
                        <p className="text-[#5C6760] text-sm font-semibold tracking-[0.15em] uppercase mb-3">About KFARM</p>
                        <h2 className="text-[#13231B] text-3xl md:text-4xl font-bold leading-tight">
                            Fish is our business. Knowing fish is part of it.
                        </h2>
                        <p className="text-[#5C6760] mt-5 leading-relaxed max-w-md">
                            KFARM Agro Limited is a fish business focused on making
                            quality fish available while helping people understand
                            fishery better. From the fish we supply to the knowledge
                            we share, we believe customers should have a clear
                            understanding of what they're getting and what they're
                            getting into.
                        </p>
                    </Reveal>
                </div>

                <Reveal delay={180}>
                    <div className="grid sm:grid-cols-3 gap-10 sm:gap-8 mt-16 border-t border-[#13231B]/10 pt-10">
                        {points.map((p) => (
                            <div key={p.title}>
                                <div className="w-10 h-10 rounded-lg bg-[#A6D83B]/20 flex items-center justify-center">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#A6D83B]" />
                                </div>
                                <h3 className="text-[#13231B] text-base font-semibold mt-4 mb-1.5">{p.title}</h3>
                                <p className="text-[#5C6760] text-sm leading-relaxed">{p.copy}</p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

/* --------------------------- 3. What KFARM Offers --------------------------- */
function Offerings() {
    const offers = [
        { img: IMG.catfish, title: "Fresh Fish", copy: "Looking for fish for your home, business, or other needs? Explore what's available at KFARM.", href: "/fish" },
        { img: IMG.dryFish, title: "Dry Fish", copy: "Prefer your fish dried? We also make dry fish available for customers who need it.", href: "/fish" },
        { img: IMG.growing, title: "Fishery Training", copy: "Want to learn how fish farming works? Our training focuses on the practical side of fishery.", href: "/learn" },
    ];
    return (
        <section className="py-24 md:py-28 bg-[#FAFAF7]">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                <Reveal>
                    <h2 className="text-[#13231B] text-3xl md:text-4xl font-bold max-w-lg">
                        What can we help you with?
                    </h2>
                </Reveal>

                <div className="grid md:grid-cols-3 gap-8 mt-14">
                    {offers.map((o, i) => (
                        <Reveal key={o.title} delay={i * 110}>
                            <a href={o.href} className="group block">
                                <div className="relative rounded-2xl overflow-hidden h-80">
                                    <img src={o.img} alt={o.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#13231B]/80 via-[#13231B]/10 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="text-white text-xl font-semibold">{o.title}</h3>
                                        <p className="text-white/75 text-sm mt-2 leading-relaxed">{o.copy}</p>
                                        <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#A6D83B] mt-4">
                                            <ChevronRight size={16} className="text-[#13231B]" />
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* --------------------------- 4. Brand Story --------------------------- */
function BrandStory() {
    const points = [
        { title: "Quality", copy: "We pay attention to what we supply." },
        { title: "Knowledge", copy: "We share practical fishery knowledge." },
        { title: "People", copy: "We build around the needs of our customers and learners." },
    ];
    return (
        <section className="py-24 md:py-28 bg-white">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    <Reveal>
                        <p className="text-[#5C6760] text-sm font-semibold tracking-[0.15em] uppercase mb-3">The KFARM Approach</p>
                        <h2 className="text-[#13231B] text-3xl md:text-4xl font-bold leading-tight">
                            We believe you should know what you're getting.
                        </h2>
                        <p className="text-[#5C6760] mt-5 leading-relaxed max-w-md">
                            Fish is more than something we sell. There is work
                            behind every fish that gets to the table, and there is
                            knowledge behind every successful fish farm. That's why
                            KFARM combines the business of supplying fish with
                            practical fishery knowledge, giving people a place to
                            get fish and a place to learn.
                        </p>

                        <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-[#13231B]/10">
                            {points.map((p) => (
                                <div key={p.title}>
                                    <h3 className="text-[#13231B] text-sm font-semibold">{p.title}</h3>
                                    <p className="text-[#5C6760] text-xs mt-1 leading-relaxed">{p.copy}</p>
                                </div>
                            ))}
                        </div>
                    </Reveal>

                    <Reveal delay={120}>
                        <div className="rounded-2xl overflow-hidden h-80 md:h-[460px]">
                            <img src={IMG.feeding} alt="KFARM at work" className="w-full h-full object-cover" />
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

/* --------------------------- 5. Visual Showcase --------------------------- */
function VisualShowcase() {
    const gallery = [IMG.catfish, IMG.tilapia, IMG.dryFish, IMG.pond, IMG.feeding, IMG.harvesting];
    return (
        <section className="py-24 md:py-28 bg-[#FAFAF7]">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                <Reveal>
                    <h2 className="text-[#13231B] text-3xl md:text-4xl font-bold">A look at KFARM</h2>
                    <p className="text-[#5C6760] mt-3 max-w-md">
                        A glimpse of the fish, the work, and the people behind KFARM.
                    </p>
                </Reveal>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
                    <Reveal className="col-span-2 row-span-2">
                        <div className="rounded-2xl overflow-hidden h-full min-h-[280px] md:min-h-[400px]">
                            <img src={gallery[0]} alt="KFARM" className="w-full h-full object-cover" />
                        </div>
                    </Reveal>
                    {gallery.slice(1).map((img, i) => (
                        <Reveal key={i} delay={i * 80}>
                            <div className="rounded-2xl overflow-hidden h-32 md:h-48">
                                <img src={img} alt="KFARM" className="w-full h-full object-cover" />
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* --------------------------- 6. Testimonials (CONDITIONAL) --------------------------- */
/* Only include this section if there are REAL customer quotes. If KFARM
   has no real testimonials yet, delete this entire function and its call
   in Home() below — do not ship placeholder/fake quotes. */
function Testimonials() {
    const quotes = [
        { text: "PLACEHOLDER — replace with a real customer quote, or delete this whole section if none exist yet.", name: "Customer name", detail: "Where they're from / what they ordered" },
        { text: "PLACEHOLDER — replace with a real customer quote.", name: "Customer name", detail: "Where they're from / what they ordered" },
        { text: "PLACEHOLDER — replace with a real customer quote.", name: "Customer name", detail: "Where they're from / what they ordered" },
    ];

    const [active, setActive] = useState(0);
    const touchStartX = useRef(null);
    const goTo = (i) => setActive((i + quotes.length) % quotes.length);
    const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
    const onTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(delta) > 50) goTo(active + (delta < 0 ? 1 : -1));
        touchStartX.current = null;
    };

    return (
        <section className="bg-white py-24 md:py-28">
            <div className="max-w-2xl mx-auto px-6 md:px-10">
                <Reveal>
                    <h2 className="text-[#13231B] text-3xl md:text-4xl font-bold text-center">
                        What our customers have to say
                    </h2>
                </Reveal>

                <div className="mt-12 relative" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                    <div className="rounded-3xl bg-[#FAFAF7] p-10 md:p-14 text-center min-h-[280px] flex flex-col items-center justify-center">
                        <span className="text-[#13231B]/15 text-6xl leading-none font-bold">"</span>
                        <p key={active} className="text-[#13231B] text-lg md:text-xl leading-relaxed mt-2 max-w-md transition-opacity duration-500">
                            {quotes[active].text}
                        </p>
                        <div className="mt-7">
                            <p className="text-[#13231B] text-sm font-semibold">{quotes[active].name}</p>
                            <p className="text-[#5C6760] text-xs mt-0.5">{quotes[active].detail}</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center gap-2.5 mt-7">
                    {quotes.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            aria-label={`Show testimonial ${i + 1}`}
                            className="rounded-full transition-all duration-300"
                            style={{ width: active === i ? "22px" : "8px", height: "8px", backgroundColor: active === i ? "#13231B" : "rgba(19,35,27,0.2)" }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

/* --------------------------- 7. Final Image CTA --------------------------- */
function FinalCTA() {
    return (
        <section className="relative h-[420px] md:h-[480px] overflow-hidden">
            <img src={IMG.closing} alt="KFARM fish farm" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#13231B]/70" />
            <div className="relative h-full max-w-3xl mx-auto px-6 md:px-10 flex flex-col items-center justify-center text-center">
                <Reveal>
                    <p className="text-white/70 text-sm font-semibold tracking-[0.15em] uppercase mb-4">KFARM Agro Limited</p>
                    <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight">
                        Looking for good fish, or ready to learn more?
                    </h2>
                    <p className="text-white/75 mt-5 max-w-md mx-auto leading-relaxed">
                        Tell us what you're looking for and let's see how KFARM can help.
                    </p>
                    <a
                        href={WHATSAPP_LINK("Hi, I'd like to talk to KFARM.")}
                        className="inline-flex items-center gap-2 mt-8 rounded-full bg-[#A6D83B] text-[#13231B] px-8 py-3.5 text-[15px] font-semibold hover:brightness-95 transition-all"
                    >
                        Talk to KFARM <ChevronRight size={16} />
                    </a>
                </Reveal>
            </div>
        </section>
    );
}

/* --------------------------- 8. Footer --------------------------- */
function Footer() {
    return (
        <footer className="bg-[#13231B] text-white/70 py-16">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                <div className="grid md:grid-cols-3 gap-10">
                    <div>
                        <span className="text-white text-lg font-bold">KFARM</span>
                        <span className="block text-white/60 text-sm">Agro Limited</span>
                        <p className="text-white/50 text-sm mt-3">Fish · Fishery · Learning</p>
                    </div>
                    <div className="flex flex-col gap-2 text-sm">
                        <a href="/" className="hover:text-white transition-colors">Home</a>
                        <a href="/fish" className="hover:text-white transition-colors">Fish</a>
                        <a href="/learn" className="hover:text-white transition-colors">Learn Fishery</a>
                    </div>
                    <div className="flex flex-col gap-2 text-sm">
                        <a href={WHATSAPP_LINK("Hi, I'd like to talk to KFARM.")} className="hover:text-white transition-colors">WhatsApp: 0911 538 0670</a>
                        <p className="text-white/50">Marketsquare, Ezendioma, Asa Ukwa West LGA, Abia State.</p>
                    </div>
                </div>
                <p className="text-white/40 text-xs mt-12 pt-8 border-t border-white/10">
                    © 2026 KFARM Agro Limited. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

/* ----------------------------------- Home ------------------------------------ */
export default function Home() {
    return (
        <div className="bg-white min-h-screen">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
                * { font-family: 'Plus Jakarta Sans', sans-serif; }
            `}</style>
            <Navbar />
            <Hero />
            <AboutKfarm />
            <Offerings />
            <BrandStory />
            <VisualShowcase />
            <Testimonials />
            <FinalCTA />
            <Footer />
        </div>
    );
}