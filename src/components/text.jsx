import React, { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  KFARM  Agro Limited, fish business landing page                          */
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
    about: "https://images.pexels.com/photos/7509424/pexels-photo-7509424.jpeg?auto=compress&cs=tinysrgb&w=1200",
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

const galleryImage = {

}

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
        <section id="top" className="relative max-w-6xl mx-auto px-6 md:px-10 pt-16 md:pt-28 pb-24 overflow-hidden">
            {/* Floating Keyframe Animation */}
            <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(var(--rot, 0deg)); }
          50% { transform: translateY(-12px) rotate(var(--rot, 0deg)); }
        }
        .animate-float {
          animation: float-slow 4.5s ease-in-out infinite;
        }
      `}</style>

            {/* Borderless Floating Pop-up Images with Clean Google Shadows */}
            <div className="absolute inset-0 pointer-events-none hidden md:block z-0">

                {/* Top Left Floating Image */}
                <div
                    className="absolute top-6 left-2 lg:left-6 w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.12)] bg-white transition-all duration-700 cubic-bezier(0.34,1.56,0.64,1) animate-float"
                    style={{
                        "--rot": "-6deg",
                        opacity: shown ? 1 : 0,
                        transform: shown ? "scale(1) translateY(0) rotate(-6deg)" : "scale(0) translateY(40px) rotate(-20deg)",
                        transitionDelay: "350ms",
                    }}
                >
                    <img
                        src={IMG.heroSmall1}
                        alt="Fresh catfish"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Top Right Floating Image */}
                <div
                    className="absolute top-10 right-4 lg:right-8 w-36 h-36 lg:w-85 lg:h-85 rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.12)] bg-white transition-all duration-700 cubic-bezier(0.34,1.56,0.64,1) "
                    style={{
                        "--rot": "8deg",
                        opacity: shown ? 1 : 0,
                        transform: shown ? "scale(1) translateY(0) rotate(8deg)" : "scale(0) translateY(40px) rotate(20deg)",
                        transitionDelay: "500ms",
                    }}
                >
                    <img
                        src={IMG.heroSmall2}
                        alt="Fresh tilapia"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Bottom Left Floating Image */}
                <div
                    className="absolute bottom-8 left-6 lg:left-12 w-36 h-36 lg:w-44 lg:h-44 rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.12)] bg-white transition-all duration-700 cubic-bezier(0.34,1.56,0.64,1) animate-float"
                    style={{
                        "--rot": "5deg",
                        opacity: shown ? 1 : 0,
                        transform: shown ? "scale(1) translateY(0) rotate(5deg)" : "scale(0) translateY(40px) rotate(-15deg)",
                        transitionDelay: "650ms",
                    }}
                >
                    <img
                        src={IMG.hero}
                        alt="Fish farm"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Bottom Right Floating Image */}
                <div
                    className="absolute bottom-10 right-6 lg:right-12 w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.12)] bg-white transition-all duration-700 cubic-bezier(0.34,1.56,0.64,1) animate-float"
                    style={{
                        "--rot": "-8deg",
                        opacity: shown ? 1 : 0,
                        transform: shown ? "scale(1) translateY(0) rotate(-8deg)" : "scale(0) translateY(40px) rotate(15deg)",
                        transitionDelay: "800ms",
                    }}
                >
                    <img
                        src={IMG.heroSmall1}
                        alt="Fresh harvest"
                        className="w-full h-full object-cover"
                    />
                </div>

            </div>

            {/* Centered Main Content Container */}
            <div ref={ref} className="relative z-10 text-center max-w-3xl mx-auto">
                <p
                    className={`${base} text-[#1B4332] text-left text-sm md:text-base font-semibold tracking-wide uppercase mb-4`}
                    style={{
                        opacity: shown ? 1 : 0,
                        transform: shown ? "translateY(0)" : "translateY(14px)",
                    }}
                >
                    Beyond Farming
                </p>

                <h1
                    className={`${base} text-[#1B4332] text-[40px] leading-[1.1] sm:text-5xl md:text-6xl`}
                    style={{
                        fontFamily: "Fraunces, serif",
                        fontWeight: 560,
                        opacity: shown ? 1 : 0,
                        transform: shown ? "translateY(0)" : "translateY(22px)",
                        transitionDelay: "100ms",
                    }}
                >
                    Get your well bred fish, straight from the farm here now
                </h1>

                {/* Centered CTA Buttons */}
                <div
                    className={`${base} flex flex-wrap justify-center gap-4 mt-9`}
                    style={{
                        opacity: shown ? 1 : 0,
                        transform: shown ? "translateY(0)" : "translateY(18px)",
                        transitionDelay: "220ms",
                    }}
                >
                    <a
                        id="order"
                        href={WHATSAPP_LINK("I'd like to place an order.")}
                        className="rounded-full bg-[#1B4332] text-[#F6F2E9] px-8 py-3.5 text-[15px] font-medium hover:bg-[#12281F] transition-all shadow-md hover:shadow-lg"
                    >
                        Order fresh fish
                    </a>
                    <a
                        href="#varieties"
                        className="rounded-full border border-[#1B4332]/25 text-[#1B4332] px-8 py-3.5 text-[15px] font-medium hover:border-[#1B4332]/60 transition-all"
                    >
                        Our varieties
                    </a>
                </div>

                {/* Features Row */}
                <div
                    className={`${base} grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 pt-8 border-t border-[#1B4332]/15 max-w-2xl mx-auto text-center`}
                    style={{
                        opacity: shown ? 1 : 0,
                        transform: shown ? "translateY(0)" : "translateY(18px)",
                        transitionDelay: "320ms",
                    }}
                >
                    <div>
                        <p className="text-[#1B4332] text-sm font-medium">Fresh from farm</p>
                        <p className="text-[#31463F]/65 text-xs mt-1">Catfish & tilapia</p>
                    </div>
                    <div>
                        <p className="text-[#1B4332] text-sm font-medium">Pickup & delivery</p>
                        <p className="text-[#31463F]/65 text-xs mt-1">From Abia State</p>
                    </div>
                    <div>
                        <p className="text-[#1B4332] text-sm font-medium">Retail & wholesale</p>
                        <p className="text-[#31463F]/65 text-xs mt-1">Single or bulk</p>
                    </div>
                    <div>
                        <p className="text-[#1B4332] text-sm font-medium">Learn fishery</p>
                        <p className="text-[#31463F]/65 text-xs mt-1">Practical courses</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// add to your existing IMG object:

import { Fish, GraduationCap, Handshake, MessageCircle } from "lucide-react";
import video3 from "../assets/video 3.mp4";

function About() {
    return (
        <section id="about" className="py-16 md:py-24  text-[#1B4332]">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <Reveal>
                    {/* Subtle Label */}
                    {/* <p className="text-[#1B4332] text-xs font-bold tracking-widest uppercase mb-3">
            Welcome to KFARM
          </p> */}

                    {/* Simple, Warm Headline */}
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl leading-tight text-[#1B4332]"
                        style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}
                    >
                        The home of healthy fish. Fresh or dried, in any quantity you need.
                    </h2>

                    <p className="text-[#31463F]/80 text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
                        Straight from clean farm waters to your kitchen. We handle single home orders and bulk wholesale with the exact same care.
                    </p>

                    {/* Single Simple Image Showcase */}
                    <div className="mt-10 rounded-2xl overflow-hidden shadow-lg max-w-2xl mx-auto aspect-[16/9]">
                        <img
                            src={IMG.about}
                            alt="Healthy farm fresh fish"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* 2 Quick Simple Highlights */}
                    <div className="flex flex-wrap justify-center gap-8 mt-8 text-sm font-medium text-[#31463F]">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#1B4332]" />
                            Fresh live harvest or smoked dried
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#1B4332]" />
                            No order is too small or too large
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}


// Assumed Reveal component exists in your workspace

export function FarmGallery() {
    const baseImages = [
        {
            src: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQiE7diwDoU3KcvRPtM_KF695Djh_03Dtg-7KZ6NXdTuLLbxZHEMGNqKtP0gCjSJTOHJO_J4SWUGTd85qQ",
            alt: "Harvested African Catfish cluster",
            title: "Catfish Harvest",
            category: "Catfish"
        },
        {
            src: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRwD1x6-YZ-z_SfdZfjQ4ZGbSQ65uxHoGjB55TWYlsFxDnXmkIfTw37Nc0WbLhWXhrs43-Ngxbwtg-N6qA",
            alt: "Farmer holding fresh tilapia",
            title: "Fresh Tilapia Catch",
            category: "Tilapia"
        },
        {
            src: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTqVAcqLb6znzlgLu115LtZvfMph2X8o-nBALknUnUjA0BVoIU_rMaEsPkO6HGF914yXQGBgDgxL2sE7ds",
            alt: "Large catfish underwater in farm tank",
            title: "Healthy Stock",
            category: "Catfish"
        },
        {
            src: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQzLqe71uaqjZ2jiOIIOacPdRS6eElO92qxoPw_tpWgRCc74XE3sBfbhnPk2jkEB5YvKPbv8XvDY4vodw8",
            alt: "Live tilapia fish in harvest net",
            title: "Harvest Net",
            category: "Tilapia"
        },
        {
            src: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQrT_hz-BSRjl2ptC3SA2IarX2bzOHo6PeCx_xKP2YA3ikEfNAjKswcbdbjtPCCPAzhWA1VKdC502scqx8",
            alt: "Catfish feeding splash on water surface",
            title: "Feeding Activity",
            category: "Pond Activity"
        },
        {
            src: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRdVZASPU1WuLbzj4QXrK6MKIBAZ4vJm7TaklSUOBsCOoDCvnlnR-JZrTM6thr1moPD1kJ78rfTXVt8Lac",
            alt: "Freshly harvested catfish packed in crates",
            title: "Ready for Delivery",
            category: "Wholesale"
        },
        {
            src: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRPlSfcFoCO8ejE74lMh46L54OeCe5hVca-1WhK4b9VZwYbxAJSOnCge6bWSL27tZerjZOVpNUQG1U2-tU",
            alt: "Tilapia school swimming underwater",
            title: "Active Tilapia Pond",
            category: "Tilapia"
        },
        {
            src: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQFHrJDhgR18Y_glCQGB5zwRpEj6sWBzVOm-zVvy4VehV0woTW61FALYVH4rOzaS7dNUMSi5GZY2wm9_5U",
            alt: "Concrete holding tanks for fish cultivation",
            title: "Culturing Tanks",
            category: "Farm Setup"
        },
        {
            src: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQiE7diwDoU3KcvRPtM_KF695Djh_03Dtg-7KZ6NXdTuLLbxZHEMGNqKtP0gCjSJTOHJO_J4SWUGTd85qQ",
            alt: "Cluster of live adult catfish",
            title: "Prime Adult Stock",
            category: "Catfish"
        },
        {
            src: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQzLqe71uaqjZ2jiOIIOacPdRS6eElO92qxoPw_tpWgRCc74XE3sBfbhnPk2jkEB5YvKPbv8XvDY4vodw8",
            alt: "Sorted fresh tilapia catch",
            title: "Market Ready Tilapia",
            category: "Tilapia"
        }
    ];

    const images = [...baseImages, ...baseImages];
    const scrollerRef = useRef(null);

    useEffect(() => {
        const el = scrollerRef.current;
        if (!el) return;

        let animationFrameId;
        const speed = 1;

        const scroll = () => {
            const halfScrollWidth = el.scrollWidth / 2;

            if (el.scrollLeft >= halfScrollWidth) {
                el.scrollLeft = 0;
            } else {
                el.scrollLeft += speed;
            }

            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <section id="gallery" className="py-24 bg-[#1B4332] overflow-hidden">
            <div className="mx-auto px-6 md:px-10">
                <Reveal>
                    <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                        <div>
                            <h2
                                className="text-3xl md:text-4xl text-[#FEFCFF] max-w-lg"
                                style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}
                            >
                                Life at the farm.
                            </h2>
                        </div>
                    </div>
                </Reveal>
            </div>

            <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-12">
                <div
                    ref={scrollerRef}
                    className="flex gap-0 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]"
                    style={{ scrollbarWidth: "none" }}
                >
                    {images.map((image, index) => (
                        <div
                            key={`${image.alt}-${index}`}
                            className="shrink-0 w-[75vw] sm:w-[45vw] lg:w-[28vw] relative h-[360px] group overflow-hidden bg-[#1B4332]"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B22]/85 via-[#0B2B22]/20 to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-6 text-[#F6F2E9]">
                                <p className="text-[10px] uppercase tracking-[0.2em] text-[#D9A441]">
                                    {image.category}
                                </p>
                                <h3 className="mt-2 text-xl" style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}>
                                    {image.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function Varieties() {
    const cards = [
        {
            img: IMG.catfish,
            name: "Catfish",
            copy: "Firm, meaty, and endlessly versatile, catfish is a dependable choice for home meals, bulk orders, and restaurant supply.",
            supporting: "Best for soups, pepper soup, frying, grilling, and dependable daily cooking.",
            cta: "Order catfish",
        },
        {
            img: IMG.tilapia,
            name: "Tilapia",
            copy: "Tilapia offers a tender texture and clean taste that works beautifully for quick meals, family dishes, and repeat customer orders.",
            supporting: "Loved for its mild flavour, easy prep, and strong appeal across retail and home use.",
            cta: "Order tilapia",
        },
    ];

    const sectionRef = useRef(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;
        let ticking = false;
        const updateProgress = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                const rect = section.getBoundingClientRect();
                const scrollable = Math.max(section.offsetHeight - window.innerHeight, 1);
                const value = Math.min(Math.max(-rect.top / scrollable, 0), 1);
                setProgress(value);
                ticking = false;
            });
        };
        updateProgress();
        window.addEventListener("scroll", updateProgress, { passive: true });
        window.addEventListener("resize", updateProgress);
        return () => {
            window.removeEventListener("scroll", updateProgress);
            window.removeEventListener("resize", updateProgress);
        };
    }, []);

    const tilapiaProgress = Math.max((progress - 0.5) / 0.5, 0);
    const catfishOpacity = progress <= 0.5 ? 1 : Math.max(1 - tilapiaProgress * 1.15, 0);
    const tilapiaOpacity = progress < 0.5 ? 0 : Math.min(tilapiaProgress * 1.15, 1);

    const catfishCardStyle = {
        opacity: catfishOpacity,
        transform: `scale(${1 - tilapiaProgress * 0.04})`,
    };
    const tilapiaCardStyle = {
        opacity: tilapiaOpacity,
        transform: `translateY(${(1 - tilapiaProgress) * 40}px) scale(${0.96 + tilapiaProgress * 0.04})`,
    };

    // --- blended-in "how it works" steps ---
    const steps = [
        { title: "Choose your fish", copy: "Pick catfish, tilapia, or both, by weight or by crate." },
        { title: "Place your order", copy: "Tell us where and when, we fit around your schedule." },
        { title: "Confirm details", copy: "We confirm quantity, price, and delivery in minutes." },
        { title: "Get your fish", copy: "Fresh fish arrives at your door, still cold from the farm." },
    ];

    const [progressStep, setProgressStep] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const howItWorksRef = useRef(null);

    // 1. Observe when section comes into viewport
    useEffect(() => {
        const target = howItWorksRef.current;
        if (!target) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect(); // Trigger once
                }
            },
            { threshold: 0.25 } // Triggers when 25% of section is visible
        );

        observer.observe(target);
        return () => observer.disconnect();
    }, []);

    // 2. Start progress animation ONLY when in view
    useEffect(() => {
        if (!isInView) return;

        const STEP_DURATION = 1200; // Faster transition speed (1.2s per step)

        const id = setInterval(() => {
            setProgressStep((prev) => {
                if (prev < steps.length) {
                    return prev + 1;
                }
                clearInterval(id);
                return prev;
            });
        }, STEP_DURATION);

        return () => clearInterval(id);
    }, [isInView, steps.length]);

    const progressPercentage = (progressStep / steps.length) * 100;

    return (
        <>
            {/* Removed lg:flex from section container to fix sticky break */}
            <section ref={sectionRef} id="varieties" className="relative h-[200vh] bg-[#FEFCFF]">
                {/* Single sticky wrapper wrapping heading and card stack */}
                <div className="sticky lg:top-20 h-screen flex flex-col items-center justify-center pt-8 pb-12 overflow-hidden">
                    
                    {/* Header */}
                    <div className="mb-6 text-center">
                        <h2
                            className="text-3xl md:text-4xl max-w-lg text-[#1B4332]"
                            style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}
                        >
                            What we sell
                        </h2>
                    </div>

                    {/* Cards Stack */}
                    <div className="relative h-[65vh] w-[88vw] md:w-[80vw] max-w-6xl overflow-hidden rounded-2xl md:rounded-3xl bg-[#1B4332] shadow-2xl">

                        {/* --- CARD 1: CATFISH --- */}
                        <div
                            className="absolute inset-0 flex flex-col justify-end p-5 xs:p-6 md:p-12 transition-all duration-300 ease-out"
                            style={catfishCardStyle}
                        >
                            <img
                                src={cards[0].img}
                                alt={cards[0].name}
                                className="absolute inset-0 h-full w-full object-cover mix-blend-luminosity opacity-60"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B22] via-[#0B2B22]/20 to-transparent" />
                            <div className="relative z-10 w-full">
                                <h2 className="text-4xl xs:text-5xl leading-none text-[#F6F2E9] md:text-7xl" style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}>
                                    {cards[0].name}
                                </h2>
                                <p className="mt-3 max-w-xl text-xs xs:text-sm leading-relaxed text-[#F6F2E9]/85 md:text-base">
                                    {cards[0].copy}
                                </p>
                                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-[#F6F2E9]/10 pt-4 md:pt-6">
                                    <p className="max-w-md text-[11px] xs:text-xs leading-normal text-[#F6F2E9]/70">
                                        {cards[0].supporting}
                                    </p>
                                    <a href={WHATSAPP_LINK(`I'd like to order ${cards[0].name}.`)} className="w-full text-center sm:w-fit shrink-0 rounded-full bg-[#F6F2E9] px-5 py-3 text-xs xs:text-sm font-medium text-[#1B4332] transition-transform duration-300 hover:scale-[1.03]">
                                        {cards[0].cta}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* --- CARD 2: TILAPIA --- */}
                        <div
                            className="absolute inset-0 flex flex-col justify-end p-5 xs:p-6 md:p-12 transition-all duration-300 ease-out bg-[#0B2B22]"
                            style={tilapiaCardStyle}
                        >
                            <img
                                src={cards[1].img}
                                alt={cards[1].name}
                                className="absolute inset-0 h-full w-full object-cover mix-blend-luminosity opacity-60"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B22] via-[#0B2B22]/5 to-transparent" />
                            <div className="relative z-10 w-full">
                                <h2 className="text-4xl xs:text-5xl leading-none text-[#F6F2E9] md:text-7xl" style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}>
                                    {cards[1].name}
                                </h2>
                                <p className="mt-3 max-w-xl text-xs xs:text-sm leading-relaxed text-[#F6F2E9]/85 md:text-base">
                                    {cards[1].copy}
                                </p>
                                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-[#F6F2E9]/10 pt-4 md:pt-6">
                                    <p className="max-w-md text-[11px] xs:text-xs leading-normal text-[#F6F2E9]/70">
                                        {cards[1].supporting}
                                    </p>
                                    <a href={WHATSAPP_LINK(`I'd like to order ${cards[1].name}.`)} className="w-full text-center sm:w-fit shrink-0 rounded-full bg-[#F6F2E9] px-5 py-3 text-xs xs:text-sm font-medium text-[#1B4332] transition-transform duration-300 hover:scale-[1.03]">
                                        {cards[1].cta}
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- How It Works Section --- */}
            <section ref={howItWorksRef} className="bg-[#1B4332] text-[#F6F2E9] py-24 md:py-28">
                <div className="max-w-6xl mx-auto px-6 md:px-10">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl max-w-lg mb-16" style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}>
                            Getting fresh fish is simple.
                        </h2>
                    </Reveal>

                    {/* 1. 4-Column Text Steps Above */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                        {steps.map((s, i) => {
                            const isRevealed = progressStep >= i + 1;

                            return (
                                <div
                                    key={s.title}
                                    className={`flex flex-col transition-all duration-500 ease-out ${isRevealed
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-4 pointer-events-none"
                                        }`}
                                >
                                    <h3 className="text-xl font-medium mb-2">{s.title}</h3>
                                    <p className="text-[#F6F2E9]/65 text-sm leading-relaxed">{s.copy}</p>
                                </div>
                            );
                        })}
                    </div>

                    {/* 2. Single Continuous Progress Line Sitting Below */}
                    <div className="relative h-[2px] w-full bg-[#F6F2E9]/15 overflow-hidden rounded-full">
                        <div
                            className="h-full bg-[#D9A441] rounded-full"
                            style={{
                                width: `${progressPercentage}%`,
                                transition: "width 1.2s ease-out"
                            }}
                        />
                    </div>

                    <Reveal delay={200}>
                        <a
                            href={WHATSAPP_LINK("I'd like to place an order.")}
                            className="inline-flex mt-16 rounded-full bg-[#D9A441] text-[#1B4332] px-7 py-3.5 text-[15px] hover:bg-[#e5b559] transition-colors"
                        >
                            Start an order
                        </a>
                    </Reveal>
                </div>
            </section>
        </>
    );
}




/* -------------------------------- Wholesale ------------------------------- */
function BulkSupply() {
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const message = [
            "KFARM Agro Limited, I'd like to place a bulk order.",
            `Fish: ${formData.get("fish")}`,
            `Quantity: ${formData.get("quantity")}`,
            `Order type: ${formData.get("orderType")}`,
            `Pickup or delivery: ${formData.get("fulfilment")}`,
            `Notes: ${formData.get("notes") || "None"}`,
        ].join("\n");

        window.open(
            WHATSAPP_LINK(message),
            "_blank",
            "noopener,noreferrer"
        );
    };

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") setIsOpen(false);
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <>
            {/* PROMOTIONAL SECTION */}
            <section
                id="wholesale"
                className="relative overflow-hidden bg-[#1B4332] text-[#F6F2E9]"
            >
                <div className="mx-auto grid min-h-[720px] max-w-7xl items-center px-6 py-20 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">

                    {/* TEXT */}
                    <Reveal className="relative z-10 py-10 lg:pr-12">
                        <p className="text-xs uppercase tracking-[0.25em] text-[#D9A441]">
                            Bulk supply
                        </p>

                        <h2
                            className="mt-5 max-w-xl text-5xl leading-[0.95] md:text-7xl"
                            style={{
                                fontFamily: "Fraunces, serif",
                                fontWeight: 560,
                            }}
                        >
                            For those
                            <br />
                            who need more.
                        </h2>

                        <p className="mt-7 max-w-md text-[15px] leading-relaxed text-[#F6F2E9]/70 md:text-base">
                            Catfish and tilapia supply for restaurants,
                            retailers, and businesses that need larger
                            quantities.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#F6F2E9]/55">
                            <span>Restaurants</span>
                            <span>Retailers</span>
                            <span>Businesses</span>
                        </div>

                        <button
                            type="button"
                            onClick={() => setIsOpen(true)}
                            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#F6F2E9] px-6 py-3.5 text-[15px] text-[#1B4332] transition-all duration-300 hover:gap-4"
                        >
                            Start a bulk order
                            <span
                                aria-hidden="true"
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            >
                                →
                            </span>
                        </button>
                    </Reveal>

                    {/* IMAGE */}
                    <Reveal delay={120} className="relative mt-10 lg:mt-0">
                        <div className="relative h-[430px] overflow-hidden rounded-[2rem] md:h-[560px] lg:h-[620px]">
                            <img
                                src={IMG.wholesale}
                                alt="Large-scale fish farming"
                                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B22]/45 via-transparent to-transparent" />

                            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                                <span className="text-xs uppercase tracking-[0.2em] text-[#F6F2E9]/70">
                                    KFARM Agro Limited
                                </span>


                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ORDER PANEL */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-[100] flex justify-end bg-black/40 backdrop-blur-[2px]"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            setIsOpen(false);
                        }
                    }}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="bulk-order-title"
                        className="h-full w-full max-w-xl overflow-y-auto bg-[#F6F2E9] text-[#1B4332] shadow-2xl"
                    >
                        <div className="flex min-h-full flex-col px-6 py-8 md:px-10 md:py-10">

                            {/* HEADER */}
                            <div className="flex items-start justify-between gap-6">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.22em] text-[#B98A2B]">
                                        Bulk supply
                                    </p>

                                    <h3
                                        id="bulk-order-title"
                                        className="mt-3 text-4xl leading-none md:text-5xl"
                                        style={{
                                            fontFamily: "Fraunces, serif",
                                            fontWeight: 560,
                                        }}
                                    >
                                        Let&apos;s talk
                                        <br />
                                        supply.
                                    </h3>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    aria-label="Close order form"
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#1B4332]/10 text-xl transition-colors hover:bg-[#1B4332] hover:text-[#F6F2E9]"
                                >
                                    ×
                                </button>
                            </div>

                            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#31463F]/75">
                                Tell us what you need. Your details will be
                                prepared for WhatsApp so we can continue from
                                there.
                            </p>

                            {/* FORM */}
                            <form
                                onSubmit={handleSubmit}
                                className="mt-12 flex flex-1 flex-col"
                            >
                                <div className="space-y-7">

                                    {/* FISH */}
                                    <label className="block">
                                        <span className="text-xs uppercase tracking-[0.18em] text-[#31463F]/60">
                                            Fish
                                        </span>

                                        <select
                                            name="fish"
                                            required
                                            className="mt-2 w-full border-0 border-b border-[#1B4332]/20 bg-transparent px-0 py-3 text-base text-[#1B4332] outline-none focus:border-[#1B4332]"
                                        >
                                            <option>Catfish</option>
                                            <option>Tilapia</option>
                                            <option>Catfish and tilapia</option>
                                        </select>
                                    </label>

                                    {/* QUANTITY */}
                                    <label className="block">
                                        <span className="text-xs uppercase tracking-[0.18em] text-[#31463F]/60">
                                            Quantity
                                        </span>

                                        <input
                                            name="quantity"
                                            required
                                            placeholder="e.g. 10 kg or 1 crate"
                                            className="mt-2 w-full border-0 border-b border-[#1B4332]/20 bg-transparent px-0 py-3 text-base text-[#1B4332] outline-none placeholder:text-[#31463F]/35 focus:border-[#1B4332]"
                                        />
                                    </label>

                                    {/* ORDER TYPE */}
                                    <label className="block">
                                        <span className="text-xs uppercase tracking-[0.18em] text-[#31463F]/60">
                                            Order type
                                        </span>

                                        <select
                                            name="orderType"
                                            className="mt-2 w-full border-0 border-b border-[#1B4332]/20 bg-transparent px-0 py-3 text-base text-[#1B4332] outline-none focus:border-[#1B4332]"
                                        >
                                            <option>One-time order</option>
                                            <option>Regular supply</option>
                                            <option>Wholesale order</option>
                                        </select>
                                    </label>

                                    {/* FULFILMENT */}
                                    <label className="block">
                                        <span className="text-xs uppercase tracking-[0.18em] text-[#31463F]/60">
                                            Pickup or delivery
                                        </span>

                                        <select
                                            name="fulfilment"
                                            className="mt-2 w-full border-0 border-b border-[#1B4332]/20 bg-transparent px-0 py-3 text-base text-[#1B4332] outline-none focus:border-[#1B4332]"
                                        >
                                            <option>Pickup</option>
                                            <option>Delivery</option>
                                            <option>Not sure yet</option>
                                        </select>
                                    </label>

                                    {/* NOTES */}
                                    <label className="block">
                                        <span className="text-xs uppercase tracking-[0.18em] text-[#31463F]/60">
                                            Extra details
                                        </span>

                                        <textarea
                                            name="notes"
                                            rows="3"
                                            placeholder="Preferred date, location, or anything else we should know"
                                            className="mt-2 w-full resize-none border-0 border-b border-[#1B4332]/20 bg-transparent px-0 py-3 text-base text-[#1B4332] outline-none placeholder:text-[#31463F]/35 focus:border-[#1B4332]"
                                        />
                                    </label>
                                </div>

                                {/* CTA */}
                                <button
                                    type="submit"
                                    className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1B4332] px-7 py-4 text-[15px] text-[#F6F2E9] transition-all duration-300 hover:bg-[#12281F]"
                                >
                                    <MessageCircle size={18} />
                                    Continue on WhatsApp
                                </button>

                                <p className="mt-4 text-center text-xs text-[#31463F]/50">
                                    We&apos;ll open WhatsApp with your order
                                    details ready to send.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

function FrequentlyAskedQuestions() {
    const questions = [
        {
            question: "What fish can I order?",
            answer: "We currently raise catfish and tilapia, available fresh from the farm.",
        },
        {
            question: "Can I order for a small quantity?",
            answer: "Yes. Whether you need one crate or a regular standing order, message us with what you need and when you need it.",
        },
        {
            question: "Do you deliver?",
            answer: "Tell us where and when you need your fish. We will confirm the available delivery option, quantity, and price with you on WhatsApp.",
        },
        {
            question: "Where can I pick up my order?",
            answer: "Our pickup location is Market Square, Ezendioma, Asa Ukwa West LGA, Abia State.",
        },
        {
            question: "Do you teach fishery?",
            answer: "Yes. Our courses cover practical fishery skills, from feeding and growing to harvesting.",
        },
    ];
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="py-24 bg-[#F6F2E9]">
            <div className="max-w-4xl mx-auto px-6 md:px-10">
                <Reveal>
                    <p className="text-[#B98A2B] text-sm mb-3">Before you order</p>
                    <h2
                        className="text-3xl md:text-4xl text-[#1B4332] max-w-lg"
                        style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}
                    >
                        Questions? We have answers.
                    </h2>
                </Reveal>

                <div className="mt-10 border-t border-[#1B4332]/15">
                    {questions.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={item.question} className="border-b border-[#1B4332]/15">
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                    aria-expanded={isOpen}
                                    className="flex w-full items-center justify-between gap-6 py-5 text-left text-[#1B4332]"
                                >
                                    <span className="text-base md:text-lg font-medium">{item.question}</span>
                                    <span className="text-2xl font-light" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                                </button>
                                {isOpen && (
                                    <p className="max-w-2xl pb-5 pr-10 text-[#31463F]/75 leading-relaxed">
                                        {item.answer}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>

                <Reveal delay={160}>
                    <a
                        href={WHATSAPP_LINK("I'd like to ask a question about ordering.")}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex mt-10 rounded-full bg-[#1B4332] text-[#F6F2E9] px-7 py-3.5 text-[15px] hover:bg-[#12281F] transition-colors"
                    >
                        Ask us on WhatsApp
                    </a>
                </Reveal>
            </div>
        </section>
    );
}

/* ---------------------------- Fishery journey / learn --------------------- */
function FisheryJourney() {
    const stages = [
        {
            number: "01",
            title: "Feeding",
            img: IMG.feeding,
            copy: "Learn the right feeding practices, timing, and routines for healthy fish growth.",
        },
        {
            number: "02",
            title: "Growing",
            img: IMG.growing,
            copy: "Understand water quality, stocking, and everyday management from fingerling to full size.",
        },
        {
            number: "03",
            title: "Harvesting",
            img: IMG.harvesting,
            copy: "Learn when to harvest and how to handle your fish from pond to market.",
        },
    ];

    const scrollerRef = useRef(null);

    const scrollBy = (dir) => {
        scrollerRef.current?.scrollBy({
            left: dir * 360,
            behavior: "smooth",
        });
    };

    return (
        <section
            id="learn-fishery"
            className="bg-[#1B4332] text-[#F6F2E9] py-24 md:py-32 overflow-hidden"
        >
            <div className="max-w-6xl mx-auto px-6 md:px-10">

                {/* Intro */}
                <Reveal>
                    <div className="max-w-2xl">
                        <p className="text-[#D9A441] text-sm tracking-wide mb-4">
                            WANT TO LEARN FISHERY?
                        </p>

                        <h2
                            className="text-4xl md:text-6xl leading-[1.05]"
                            style={{
                                fontFamily: "Fraunces, serif",
                                fontWeight: 560,
                            }}
                        >
                            There&apos;s more to fish than buying it.
                        </h2>

                        <p className="mt-6 text-[#F6F2E9]/60 text-base md:text-lg max-w-xl leading-relaxed">
                            Learn the practical side of fish farming, from
                            feeding and growth to harvest.
                        </p>
                    </div>
                </Reveal>

                {/* Controls */}
                <Reveal delay={100}>
                    <div className="flex justify-between items-center mt-14">
                        <p className="text-xs tracking-[0.2em] text-[#F6F2E9]/40">
                            WHAT YOU CAN LEARN
                        </p>

                        <div className="flex gap-3">
                            <button
                                onClick={() => scrollBy(-1)}
                                aria-label="Previous lesson"
                                className="w-11 h-11 rounded-full border border-[#F6F2E9]/20 flex items-center justify-center hover:border-[#F6F2E9]/60 transition-colors"
                            >
                                ←
                            </button>

                            <button
                                onClick={() => scrollBy(1)}
                                aria-label="Next lesson"
                                className="w-11 h-11 rounded-full border border-[#F6F2E9]/20 flex items-center justify-center hover:border-[#F6F2E9]/60 transition-colors"
                            >
                                →
                            </button>
                        </div>
                    </div>
                </Reveal>

                {/* Lessons */}
                <div
                    ref={scrollerRef}
                    className="flex gap-6 mt-8 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none]"
                >
                    {stages.map((stage, i) => (
                        <Reveal
                            key={stage.title}
                            delay={i * 100}
                            className="snap-start shrink-0 w-[82vw] sm:w-[420px] md:w-[460px]"
                        >
                            <a
                                href="/learn-fishery"
                                className="group block"
                                aria-label={`Learn about ${stage.title}`}
                            >

                                {/* Image */}
                                <div className="relative h-[300px] md:h-[360px] overflow-hidden rounded-2xl">
                                    <img
                                        src={stage.img}
                                        alt={stage.title}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/50 to-transparent" />

                                    <span className="absolute top-5 left-5 text-sm text-[#F6F2E9]/70">
                                        {stage.number}
                                    </span>
                                </div>

                                {/* Lesson information */}
                                <div className="pt-6">
                                    <h3
                                        className="text-3xl md:text-4xl"
                                        style={{
                                            fontFamily: "Fraunces, serif",
                                            fontWeight: 520,
                                        }}
                                    >
                                        {stage.title}
                                    </h3>

                                    <p className="mt-3 text-[#F6F2E9]/55 text-sm md:text-base leading-relaxed max-w-md">
                                        {stage.copy}
                                    </p>
                                </div>

                            </a>
                        </Reveal>
                    ))}
                </div>

                {/* CTA */}
                <Reveal delay={300}>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-3 mt-12 border-b border-[#D9A441] pb-2 text-[15px] text-[#F6F2E9] hover:text-[#D9A441] transition-colors"
                    >
                        Explore fishery courses
                        <span>→</span>
                    </a>
                </Reveal>

            </div>
        </section>
    );
}

/* -------------------------------- Closing banner --------------------------- */
function ClosingBanner() {
    return (
        <section id="closing" className="relative min-h-[75vh] md:min-h-screen overflow-hidden">
            {/* Background image */}
            <img
                src={IMG.closing}
                alt="Fish farm"
                className="absolute inset-0 w-full h-full object-cover scale-[1.03]"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#1B4332]/55" />

            {/* Content */}
            <div className="relative min-h-[75vh] md:min-h-screen max-w-7xl mx-auto px-6 md:px-10 flex items-end">
                <Reveal>
                    <div className="pb-16 md:pb-20 max-w-3xl">

                        <p className="text-[#D9A441] text-xs md:text-sm tracking-[0.2em] mb-5">
                            FISH · FISHERY · GROWTH
                        </p>

                        <h2
                            className="text-[#F6F2E9] text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95]"
                            style={{
                                fontFamily: "Fraunces, serif",
                                fontWeight: 560,
                            }}
                        >
                            Good fish shouldn&apos;t
                            <br />
                            be complicated.
                        </h2>

                    </div>
                </Reveal>
            </div>
        </section>
    );
}

/* ---------------------------------- Footer ---------------------------------- */


/* ----------------------------------- App ------------------------------------ */
export default function Home() {
    return (
        <div className="bg-[#FEFCFF] min-h-screen">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@400;560;600&family=Inter:wght@400;500&display=swap');
        * { font-family: 'Inter', sans-serif; }
      `}</style>
            <Hero />
            <About />
            <FarmGallery />
            <Varieties />
            {/* <HowItWorks /> */}
            <BulkSupply />
            <FrequentlyAskedQuestions />
            <FisheryJourney />
            <ClosingBanner />
        </div>
    );
}