import React, { useEffect, useRef, useState } from "react";
import referImg from "../assets/slazzer-preview-74wu0.png"

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
    wholesale: "https://images.pexels.com/photos/7509417/pexels-photo-7509417.jpeg?auto=compress&cs=tinysrgb&w=1400",
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
        <section id="top" className="relative h-[92vh] min-h-[640px] overflow-hidden">
            <img
                src={IMG.hero}
                alt="Fish farm at KFARM"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B22] via-[#0B2B22]/55 to-[#0B2B22]/15" />

            <div ref={ref} className="relative h-full max-w-6xl mx-auto px-6 md:px-10 flex flex-col justify-end pb-16 md:pb-20">
                <p
                    className={`${base} text-[#F6F2E9]/80 text-sm md:text-base font-medium tracking-wide uppercase mb-4`}
                    style={{ opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(14px)" }}
                >
                    Beyond Farming
                </p>

                <h1
                    className={`${base} text-[#F6F2E9] text-[40px] leading-[1.1] sm:text-5xl md:text-6xl max-w-2xl`}
                    style={{
                        fontFamily: "Fraunces, serif",
                        fontWeight: 560,
                        opacity: shown ? 1 : 0,
                        transform: shown ? "translateY(0)" : "translateY(22px)",
                        transitionDelay: "100ms",
                    }}
                >
                    Get your well-bred fish, straight from the farm.
                </h1>

                <p
                    className={`${base} text-[#F6F2E9]/75 text-base md:text-lg mt-5 max-w-md leading-relaxed`}
                    style={{
                        opacity: shown ? 1 : 0,
                        transform: shown ? "translateY(0)" : "translateY(18px)",
                        transitionDelay: "180ms",
                    }}
                >
                    Fresh or dried catfish and tilapia, delivered from our farm
                    in Abia State, retail or wholesale.
                </p>

                <div
                    className={`${base} flex flex-wrap gap-4 mt-9`}
                    style={{
                        opacity: shown ? 1 : 0,
                        transform: shown ? "translateY(0)" : "translateY(18px)",
                        transitionDelay: "260ms",
                    }}
                >
                    
                     <a   id="order"
                        href={WHATSAPP_LINK("I'd like to place an order.")}
                        className="rounded-full bg-[#F6F2E9] text-[#1B4332] px-8 py-3.5 text-[15px] font-medium hover:bg-[#E9E4D5] transition-all"
                    >
                        Order fresh fish
                    </a>
                    
                    <a    href="#varieties"
                        className="rounded-full border border-[#F6F2E9]/35 text-[#F6F2E9] px-8 py-3.5 text-[15px] font-medium hover:border-[#F6F2E9]/70 transition-all"
                    >
                        Our varieties
                    </a>
                </div>
            </div>

            {/* two supporting images, quiet corner accent, no motion loop */}
            <div className="hidden md:flex absolute bottom-10 right-8 lg:right-12 gap-3">
                <div
                    className="w-28 h-36 lg:w-32 lg:h-40 rounded-2xl overflow-hidden shadow-lg transition-all duration-700"
                    style={{
                        opacity: shown ? 1 : 0,
                        transform: shown ? "translateY(0)" : "translateY(24px)",
                        transitionDelay: "420ms",
                    }}
                >
                    <img src={IMG.heroSmall1} alt="Fresh catfish" className="w-full h-full object-cover" />
                </div>
                <div
                    className="w-28 h-36 lg:w-32 lg:h-40 rounded-2xl overflow-hidden shadow-lg mt-8 transition-all duration-700"
                    style={{
                        opacity: shown ? 1 : 0,
                        transform: shown ? "translateY(0)" : "translateY(24px)",
                        transitionDelay: "520ms",
                    }}
                >
                    <img src={IMG.heroSmall2} alt="Fresh tilapia" className="w-full h-full object-cover" />
                </div>
            </div>
        </section>
    );
 }

// add to your existing IMG object:

import { Fish, ChevronRight, ChevronDown, Droplets, TrendingUp, GraduationCap, Handshake, MessageCircle } from "lucide-react";
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
                                <p className="text-[10px] uppercase tracking-[0.2em] text-[#F6F2E9]">
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
                <div className="sticky top-15 lg:top-20 h-screen flex flex-col items-center justify-center pt-8 pb-12 overflow-hidden">

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
                    <div className="relative h-[65vh] w-[88vw] md:w-[80vw] max-w-7xl overflow-hidden rounded-2xl md:rounded-3xl bg-[#1B4332] shadow-2xl">

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
                <div className="max-w-7xl mx-auto px-6 md:px-10">
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
                            className="h-full bg-[#F6F2E9] rounded-full"
                            style={{
                                width: `${progressPercentage}%`,
                                transition: "width 1.2s ease-out"
                            }}
                        />
                    </div>

                    <Reveal delay={200}>
                        <a
                            href={WHATSAPP_LINK("I'd like to place an order.")}
                            className="inline-flex mt-16 rounded-full bg-[#F6F2E9] text-[#1B4332] px-7 py-3.5 text-[15px] hover:bg-[#E9E4D5] transition-colors"
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
export function BulkSupply() {
    const wholesaleTags = ["For restaurants", "For retailers", "For hotels & caterers"];

    return (
        <section id="wholesale" className="relative overflow-hidden bg-[#0B2B22]">
            <div className="absolute inset-0">
                <img
                    src={IMG.wholesale}
                    alt="Fish in a working pond"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B22] via-[#0B2B22]/70 to-[#0B2B22]/40" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* LEFT COLUMN: Direct bulk buyers */}
                    <div className="lg:col-span-7">
                        <h2
                            className="text-[#F6F2E9] text-3xl sm:text-4xl md:text-5xl leading-tight"
                            style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}
                        >
                            Need fish in larger quantity?
                        </h2>

                        <p className="text-[#F6F2E9]/80 mt-5 max-w-lg text-base sm:text-lg leading-relaxed">
                            Whether you're running a restaurant, managing a retail
                            shop, or catering events, we supply fresh stock on a
                            reliable schedule tailored to your volume.
                        </p>

                        <div className="flex flex-wrap gap-2.5 mt-6">
                            {wholesaleTags.map((t) => (
                                <span
                                    key={t}
                                    className="rounded-full border border-[#F6F2E9]/20 text-[#F6F2E9]/90 px-4 py-1.5 text-xs font-medium"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>


                        <a href={WHATSAPP_LINK("I'd like to talk about a wholesale order.")}
                            className="inline-flex items-center justify-center rounded-full bg-[#F6F2E9] text-[#1B4332] px-7 py-3.5 text-[15px] font-semibold hover:bg-white transition-all mt-8"
                        >
                            Talk to us about wholesale
                        </a>
                    </div>

                    {/* RIGHT COLUMN: Partner / commission */}
                    <div className="lg:col-span-5 lg:border-l border-[#F6F2E9]/15 lg:pl-10">
                        <h3
                            className="text-2xl sm:text-3xl text-[#F6F2E9]"
                            style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}
                        >
                            Bring us buyers, earn commission.
                        </h3>

                        <p className="text-[#F6F2E9]/75 mt-4 text-sm leading-relaxed max-w-sm">
                            Know a restaurant, hotel, or bulk buyer? Connect them
                            to KFARM and earn commission on what they order.
                        </p>


                        <a href={WHATSAPP_LINK("Hello, I'd like to become a partner and refer a buyer.")}
                            className="inline-flex items-center justify-center rounded-full border border-[#F6F2E9]/30 text-[#F6F2E9] px-6 py-3 text-sm font-medium hover:border-[#F6F2E9]/70 transition-colors mt-7"
                        >
                            Become a partner
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}

function FAQ() {
    const faqs = [
        {
            q: "Do you sell fresh, dried, or both?",
            a: "Both. We sell fresh live-harvest fish and smoked/dried fish, in any quantity you need.",
        },
        {
            q: "Is there a minimum order?",
            a: "No fixed minimum for retail orders. For wholesale, tell us your volume and we'll work out a quote.",
        },
        {
            q: "How do I place an order?",
            a: "Message us directly on WhatsApp with what you need, and we'll confirm quantity, price, and delivery.",
        },
        {
            q: "Do you deliver, or is it pickup only?",
            a: "Pickup is available at Market Square, Ezendioma, Asa Ukwa West LGA, Abia State. Ask us on WhatsApp about delivery to your location.",
        },
        {
            q: "How does the fishery training discount work?",
            a: "Place any order with us, then enroll in our fishery training afterward, your course fee is automatically halved.",
        },
        {
            q: "How does the referral offer work?",
            a: "Refer 10 people to KFARM. Once they order, we send you 2 fish, free.",
        },
    ];

    const [open, setOpen] = useState(0);

    return (
        <section id="faq" className="bg-[#FEFCFF] py-24">
            <div className="max-w-3xl mx-auto px-6 md:px-10">
                <Reveal>
                    <h2 className="text-3xl md:text-4xl text-[#1B4332]" style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}>
                        Questions, answered.
                    </h2>
                </Reveal>

                <div className="mt-10">
                    {faqs.map((f, i) => {
                        const isOpen = open === i;
                        return (
                            <Reveal key={f.q} delay={i * 60}>
                                <div className="border-t border-[#1B4332]/12 last:border-b">
                                    <button
                                        onClick={() => setOpen(isOpen ? -1 : i)}
                                        className="w-full flex items-center justify-between gap-4 py-5 text-left"
                                    >
                                        <span className="text-[#1B4332] text-base md:text-lg">{f.q}</span>
                                        <ChevronDown
                                            size={18}
                                            className="text-[#1B4332]/50 shrink-0 transition-transform duration-300"
                                            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                                        />
                                    </button>
                                    <div
                                        className="grid transition-all duration-300 ease-out"
                                        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="text-[#31463F]/75 text-sm md:text-base leading-relaxed pb-5 max-w-xl">
                                                {f.a}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

/* ---------------------------- Fishery journey / learn --------------------- */
function DiscountTag({ compact = false, dark = false }) {
    const [ref, shown] = useReveal();
    const size = compact ? "w-16 h-16" : "w-32 h-32 md:w-36 md:h-36";
    const textSize = compact ? "text-lg" : "text-3xl md:text-4xl";
    const tagFill = dark ? "#1B4332" : "#F6F2E9";
    const detailColor = dark ? "#F6F2E9" : "#1B4332";

    return (
        <div
            ref={ref}
            className={`shrink-0 relative ${size}`}
            style={{
                opacity: shown ? 1 : 0,
                transform: shown ? "scale(1)" : "scale(0.5)",
                transition: "opacity 550ms cubic-bezier(.2,.8,.2,1), transform 550ms cubic-bezier(.2,.8,.2,1)",
                transformOrigin: "top center",
            }}
        >
            <div className="w-full h-full" style={{ animation: "tagSwing 5s ease-in-out infinite", transformOrigin: "20% 15%" }}>
                <svg viewBox="0 0 140 140" className="w-full h-full drop-shadow-md">
                    <g transform="rotate(-18 70 70)">
                        <path d="M20 30 Q20 20 30 20 L85 20 Q95 20 100 28 L120 66 Q124 73 120 80 L100 118 Q95 126 85 126 L30 126 Q20 126 20 116 Z" fill={tagFill} />
                        <circle cx="38" cy="73" r="8" fill={detailColor} />
                        <path d="M38 65 C 26 42, 12 34, 6 14" stroke={detailColor} strokeWidth="4" fill="none" strokeLinecap="round" />
                    </g>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                    <span className={`leading-none ${textSize}`} style={{ fontFamily: "Fraunces, serif", fontWeight: 700, color: detailColor }}>50%</span>
                    {!compact && (
                        <span className="text-[10px] uppercase tracking-wide mt-1 max-w-[70px] leading-tight" style={{ color: detailColor, opacity: 0.8 }}>
                            off fishery training
                        </span>
                    )}
                </div>
            </div>
            <style>{`@keyframes tagSwing { 0%, 100% { transform: rotate(-4deg); } 50% { transform: rotate(4deg); } }`}</style>
        </div>
    );
}

function FisheryJourney() {
    const pillars = [
        { icon: Fish, title: "Farm Production", copy: "Catfish and tilapia rearing, from stocking to grow-out." },
        { icon: Droplets, title: "Care & Environment", copy: "Feeding, water quality, and fish health." },
        { icon: TrendingUp, title: "Business & Growth", copy: "Pricing, marketing, and running it as real income." },
    ];
    const mechanic = [
        { step: "Order fish", copy: "Place any order with us, big or small." },
        { step: "Enroll in training", copy: "Sign up for our fishery course afterward." },
        { step: "Save 50%", copy: "Your training fee is automatically halved.", tag: true },
    ];

    return (
        <section id="learn-fishery" className="py-24 md:py-28 bg-[#F6F2E9] text-[#1B4332]">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <Reveal>
                    <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}>
                                There's more to fish than buying it.
                            </h2>
                            <p className="text-[#31463F]/80 mt-4 max-w-md leading-relaxed">
                                Behind every order is a full fishery training program
                                covering production, pond management, fish health, and
                                the business side of running a farm, taught by people
                                who do it daily.
                            </p>
                        </div>
                        <div className="rounded-2xl overflow-hidden h-72 md:h-96">
                            <img src={IMG.growing} alt="Fishery training in progress" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={100}>
                    <div className="grid sm:grid-cols-3 gap-10 sm:gap-8 mt-16 border-t border-[#1B4332]/12 pt-10">
                        {pillars.map((p) => (
                            <div key={p.title}>
                                <div className="w-11 h-11 rounded-full border border-[#1B4332]/25 flex items-center justify-center">
                                    <p.icon size={18} className="text-[#1B4332]" strokeWidth={1.6} />
                                </div>
                                <h3 className="text-base md:text-lg mt-4 mb-1.5">{p.title}</h3>
                                <p className="text-[#31463F]/75 text-sm leading-relaxed">{p.copy}</p>
                            </div>
                        ))}
                    </div>
                    <a href="/learn" className="inline-flex items-center gap-1.5 mt-8 text-[#1B4332] text-sm font-medium hover:gap-2.5 transition-all">
                        See the full curriculum →
                    </a>
                </Reveal>

                <Reveal delay={200}>
                    <div className="mt-16 md:mt-20 border-t border-[#1B4332]/12 pt-10">
                        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-4">
                            {mechanic.map((m, i) => (
                                <React.Fragment key={m.step}>
                                    <div className="flex items-start gap-4 md:flex-1">
                                        {m.tag ? <DiscountTag compact dark /> : <span className="w-2 h-2 rounded-full bg-[#1B4332] mt-2 shrink-0" />}
                                        <div>
                                            <h3 className="text-base md:text-lg">{m.step}</h3>
                                            <p className="text-[#31463F]/70 text-sm mt-1 leading-relaxed max-w-[220px]">{m.copy}</p>
                                        </div>
                                    </div>
                                    {i < mechanic.length - 1 && (
                                        <div className="hidden md:flex items-center justify-center pt-3">
                                            <ChevronRight size={18} className="text-[#1B4332]/40" style={{ animation: "flowNudge 1.6s ease-in-out infinite" }} />
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                    <style>{`@keyframes flowNudge { 0%, 100% { transform: translateX(0); opacity: 0.5; } 50% { transform: translateX(4px); opacity: 1; } }`}</style>
                </Reveal>

                <Reveal delay={320}>
                    <a href="/learn" className="inline-flex mt-12 rounded-full bg-[#1B4332] text-[#F6F2E9] px-7 py-3.5 text-[15px] hover:bg-[#12281F] transition-colors">
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
            <img src={IMG.closing} alt="Full-size aerial view of a fish farm" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#0B2B22]/55" />
            <div className="relative h-full max-w-7xl mx-auto px-6 md:px-10 flex items-center">
                <Reveal>
                    <h2 className="text-[#F6F2E9] text-4xl md:text-5xl max-w-xl leading-tight" style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}>
                        Good fish shouldn't be complicated.
                    </h2>
                </Reveal>
            </div>
        </section>
    );
}


function ReferAndEarn() {
    return (
        <section className="bg-[#FEFCFF] py-20 md:py-24">
            <h1 className="text-center text-[#1B4332] text-4xl pb-20 md:pb-0 md:text-5xl " style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}> More offer for you</h1>
            <div className="grid grid-cols-3 md:grid-cols-2">

                <div className=" mx-auto px-6 md:px-10 col-span-2 md:col-span-1 grid md:grid-cols-[auto,1fr] gap-8 md:gap-14 items-center">
                    <Reveal>
                        <div className="flex items-baseline gap-3">
                            <span className="text-[#F6F2E9] text-7xl md:text-8xl leading-none" style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}>
                                2
                            </span>
                            <span className="text-[#1B4332] text-lg md:text-xl">free fish</span>
                        </div>
                    </Reveal>
                    <Reveal delay={100}>
                        <h2 className="text-[#1B4332] text-3xl md:text-4xl" style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}>
                            Refer 10 people, get 2 fish free.
                        </h2>
                        <p className="text-[#1B4332]/70 mt-3 max-w-md leading-relaxed">
                            Know people who'd love fresh fish? Send them our way,
                            once 10 of them place an order, we deliver 2 fish to
                            you, on us.
                        </p>

                        <a href={WHATSAPP_LINK("Hi, I'd like to refer people to KFARM.")}
                            className="inline-flex mt-6 rounded-full bg-[#F6F2E9] text-[#1B4332] px-7 py-3.5 text-[15px] font-medium hover:bg-[#E9E4D5] transition-colors"
                        >
                            Start referring
                        </a>
                    </Reveal>
                </div>
                <div className="items-center flex" >
                    <img src={referImg} />
                </div>
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
            <FisheryJourney />
            <ReferAndEarn />
            <ClosingBanner />
            <FAQ />
        </div>
    );
}
