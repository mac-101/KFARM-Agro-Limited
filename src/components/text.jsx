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
                        Buy and sell fresh fish
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
                        Buy fresh fish. Sell fish with confidence.
                    </h1>
                    <p
                        className={`${base} text-[#31463F] text-lg mt-6 max-w-md leading-relaxed`}
                        style={{
                            opacity: shown ? 1 : 0,
                            transform: shown ? "translateY(0)" : "translateY(18px)",
                            transitionDelay: "180ms",
                        }}
                    >
                        Quality catfish and tilapia, sourced fresh for homes,
                        retailers, and businesses that need dependable supply.
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
                            Order fresh fish
                        </a>
                        <a
                            href="#varieties"
                            className="rounded-full border border-[#0E3B36]/25 text-[#0E3B36] px-7 py-3.5 text-[15px] hover:border-[#0E3B36]/60 transition-colors"
                        >
                            Our varieties
                        </a>
                    </div>
                    <div
                        className={`${base} grid grid-cols-2 gap-x-6 gap-y-4 mt-10 pt-6 border-t border-[#0E3B36]/15 max-w-lg`}
                        style={{
                            opacity: shown ? 1 : 0,
                            transform: shown ? "translateY(0)" : "translateY(18px)",
                            transitionDelay: "360ms",
                        }}
                    >
                        <div>
                            <p className="text-[#0E2B27] text-sm font-medium">Fresh from the farm</p>
                            <p className="text-[#31463F]/65 text-xs mt-1">Catfish and tilapia</p>
                        </div>
                        <div>
                            <p className="text-[#0E2B27] text-sm font-medium">Pickup &amp; delivery</p>
                            <p className="text-[#31463F]/65 text-xs mt-1">Serving From Abia State</p>
                        </div>
                        <div>
                            <p className="text-[#0E2B27] text-sm font-medium">Retail to wholesale</p>
                            <p className="text-[#31463F]/65 text-xs mt-1">One order or regular supply</p>
                        </div>
                        <div>
                            <p className="text-[#0E2B27] text-sm font-medium">Learn fishery</p>
                            <p className="text-[#31463F]/65 text-xs mt-1">Practical farm courses</p>
                        </div>
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

// add to your existing IMG object:

import { Fish, GraduationCap, Handshake, MessageCircle } from "lucide-react";
import video3 from "../assets/video 3.mp4";

function About() {
    const [videoError, setVideoError] = useState(false);

    const values = [
        {
            icon: Fish,
            title: "Fresh, not frozen",
            copy: "Fish comes straight from the pond to your order, no long cold storage in between.",
        },
        {
            icon: GraduationCap,
            title: "We teach, too",
            copy: "Beyond selling fish, we train people to start and grow their own fishery.",
        },
        {
            icon: Handshake,
            title: "No middlemen",
            copy: "You're buying directly from the farm, whether it's one crate or a standing order.",
        },
    ];

    return (
        <section id="about" className="relative min-h-[min(760px,88vh)] overflow-hidden bg-[#0E2B27] text-[#F6F2E9]">
            <div className="absolute inset-0">
                {!videoError ? (
                    <video
                        src={video3}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        poster={IMG.about}
                        onError={() => setVideoError(true)}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <img
                        src={IMG.about}
                        alt="Fish farm pond at KFARM Agro Limited"
                        className="w-full h-full object-cover"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-[#071D1A]/90 via-[#0E2B27]/65 to-[#0E2B27]/15" />
            </div>

            <div className="relative z-10 flex min-h-[min(760px,88vh)] items-center">
                <div className="max-w-6xl w-full mx-auto px-6 md:px-10 py-20">
                    <Reveal>
                        <div className="max-w-xl">
                            <p className="text-[#D9A441] text-sm mb-4">About us</p>
                            <h2
                                className="text-4xl md:text-6xl leading-[1.05] text-[#F6F2E9]"
                                style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}
                            >
                                We don&apos;t just sell fish, we build fisheries.
                            </h2>
                            <p className="text-[#F6F2E9]/80 mt-6 max-w-lg leading-relaxed">
                                KFARM Agro Limited raises catfish and tilapia the way we&apos;d want to
                                buy them: fresh, well-fed, and handled with care from pond to
                                delivery. We also teach the practical skills behind good fishery,
                                so anyone can learn to farm as well as we do.
                            </p>

                            <div className="grid sm:grid-cols-3 gap-5 mt-10 pt-6 border-t border-[#F6F2E9]/25">
                                {values.map((v) => (
                                    <div key={v.title}>
                                        <v.icon size={22} className="text-[#D9A441] mb-3" strokeWidth={1.6} />
                                        <h3 className="text-[#F6F2E9] font-medium">{v.title}</h3>
                                        <p className="text-[#F6F2E9]/65 text-sm mt-1 leading-relaxed">{v.copy}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

// import React, { useState, useEffect, useRef } from 'react';

function FarmGallery() {
    const baseImages = [
        { src: IMG.about, alt: "Fish pond at KFARM Agro Limited", title: "Pond view" },
        { src: IMG.feeding, alt: "Feeding fish at the farm", title: "Feeding time" },
        { src: IMG.growing, alt: "Fish growing in a managed farm pond", title: "Healthy stock" },
        { src: IMG.harvesting, alt: "Harvesting fresh fish for customers", title: "Harvest ready" },
        { src: IMG.wholesale, alt: "Aerial view of a large fish farm", title: "Farm scale" },
        { src: IMG.hero, alt: "Vibrant fish pond in a farm setting", title: "Fresh water" },
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
        <section id="gallery" className="py-24 bg-[#F6F2E9]">
            <div className="mx-auto px-6 md:px-10">
                <Reveal>
                    <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="text-[#B98A2B] text-sm mb-3">Life at the farm</p>
                            <h2
                                className="text-3xl md:text-4xl text-[#0E2B27] max-w-lg"
                                style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}
                            >
                                From pond to harvest.
                            </h2>
                        </div>
                    </div>
                </Reveal>

                {/* 4. NOTE: Removed 'snap-x snap-mandatory' because snapping breaks linear auto-scrolling */}
                <div
                    ref={scrollerRef}
                    className="mt-12 flex gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none]"
                    style={{ scrollbarWidth: "none" }}
                >
                    {images.map((image, index) => (
                        <Reveal
                            key={`${image.alt}-${index}`}
                            delay={(index % baseImages.length) * 80}
                            className="shrink-0 w-[82%] sm:w-[58%] lg:w-[38%]"
                        >
                            <figure className="group relative h-[360px] md:h-[420px] overflow-hidden rounded-[28px] bg-[#0E2B27]">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#071D1A]/75 via-[#071D1A]/10 to-transparent" />
                                <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-[#F6F2E9]">
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#D9A441]">Farm view</p>
                                    <h3 className="mt-2 text-xl" style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}>
                                        {image.title}
                                    </h3>
                                </figcaption>
                            </figure>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}



/* ----------------------------- How it works ----------------------------- */
function HowItWorks() {
    const steps = [
        { n: "01", title: "Choose your fish", copy: "Pick catfish, tilapia, or both, by weight or by crate." },
        { n: "02", title: "Place your order", copy: "Tell us where and when, we fit around your schedule." },
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
                const scrollable = Math.max(
                    section.offsetHeight - window.innerHeight,
                    1
                );

                const value = Math.min(
                    Math.max(-rect.top / scrollable, 0),
                    1
                );

                setProgress(value);
                ticking = false;
            });
        };

        updateProgress();

        window.addEventListener("scroll", updateProgress, {
            passive: true,
        });

        window.addEventListener("resize", updateProgress);

        return () => {
            window.removeEventListener("scroll", updateProgress);
            window.removeEventListener("resize", updateProgress);
        };
    }, []);

    // Give each fish a dedicated portion of the scroll.
    const catfishProgress = Math.min(progress / 0.5, 1);
    const tilapiaProgress = Math.max((progress - 0.5) / 0.5, 0);

    const catfishOpacity =
        progress <= 0.5
            ? 1
            : Math.max(1 - tilapiaProgress * 1.15, 0);

    const tilapiaOpacity =
        progress < 0.5
            ? 0
            : Math.min(tilapiaProgress * 1.15, 1);

    const catfishImageStyle = {
        opacity: catfishOpacity,
        transform: `scale(${1 + tilapiaProgress * 0.06})`,
    };

    const tilapiaImageStyle = {
        opacity: tilapiaOpacity,
        transform: `scale(${1.06 - tilapiaProgress * 0.06})`,
    };

    const catfishTextStyle = {
        opacity: catfishOpacity,
        transform: `translateY(${tilapiaProgress * -28}px)`,
    };

    const tilapiaTextStyle = {
        opacity: tilapiaOpacity,
        transform: `translateY(${28 - tilapiaProgress * 28}px)`,
    };

    return (
        <section
            ref={sectionRef}
            id="varieties"
            className="relative h-[200vh] bg-[#F6F2E9]"
        >
            <div className="sticky top-0 h-screen overflow-hidden">

                {/* IMAGE */}
                <div className="absolute inset-0">
                    <img
                        src={cards[0].img}
                        alt={cards[0].name}
                        className="absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-300"
                        style={catfishImageStyle}
                    />

                    <img
                        src={cards[1].img}
                        alt={cards[1].name}
                        className="absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-300"
                        style={tilapiaImageStyle}
                    />

                    {/* readable text area */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071D1A]/85 via-[#071D1A]/25 to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="relative z-10 flex h-full items-end">
                    <div className="mx-auto w-full max-w-6xl px-6 pb-10 md:px-10 md:pb-14">

                        <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[#D9A441]">
                            Our varieties
                        </p>

                        {/* CATFISH */}
                        <div
                            className="absolute bottom-10 left-6 right-6 md:bottom-14 md:left-10 md:right-10"
                            style={catfishTextStyle}
                        >
                            <h2
                                className="text-6xl leading-none text-[#F6F2E9] md:text-8xl"
                                style={{
                                    fontFamily: "Fraunces, serif",
                                    fontWeight: 560,
                                }}
                            >
                                Catfish
                            </h2>

                            <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#F6F2E9]/85 md:text-base">
                                {cards[0].copy}
                            </p>

                            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center">
                                <p className="max-w-md text-sm text-[#F6F2E9]/70">
                                    {cards[0].supporting}
                                </p>

                                <a
                                    href={WHATSAPP_LINK(
                                        `I'd like to order ${cards[0].name}.`
                                    )}
                                    className="w-fit rounded-full bg-[#F6F2E9] px-6 py-3.5 text-sm text-[#0E3B36] transition-transform duration-300 hover:scale-[1.03]"
                                >
                                    {cards[0].cta}
                                </a>
                            </div>
                        </div>

                        {/* TILAPIA */}
                        <div
                            className="absolute bottom-10 left-6 right-6 md:bottom-14 md:left-10 md:right-10"
                            style={tilapiaTextStyle}
                        >
                            <h2
                                className="text-6xl leading-none text-[#F6F2E9] md:text-8xl"
                                style={{
                                    fontFamily: "Fraunces, serif",
                                    fontWeight: 560,
                                }}
                            >
                                Tilapia
                            </h2>

                            <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#F6F2E9]/85 md:text-base">
                                {cards[1].copy}
                            </p>

                            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center">
                                <p className="max-w-md text-sm text-[#F6F2E9]/70">
                                    {cards[1].supporting}
                                </p>

                                <a
                                    href={WHATSAPP_LINK(
                                        `I'd like to order ${cards[1].name}.`
                                    )}
                                    className="w-fit rounded-full bg-[#F6F2E9] px-6 py-3.5 text-sm text-[#0E3B36] transition-transform duration-300 hover:scale-[1.03]"
                                >
                                    {cards[1].cta}
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                {/* SCROLL INDICATOR */}
                <div className="absolute bottom-5 right-6 z-20 md:right-10">
                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#F6F2E9]/60">
                        <span>01</span>

                        <div className="h-px w-12 bg-[#F6F2E9]/30">
                            <div
                                className="h-full origin-left bg-[#F6F2E9]"
                                style={{
                                    transform: `scaleX(${progress})`,
                                }}
                            />
                        </div>

                        <span>02</span>
                    </div>
                </div>

            </div>
        </section>
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
                className="relative overflow-hidden bg-[#0E2B27] text-[#F6F2E9]"
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
                            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#F6F2E9] px-6 py-3.5 text-[15px] text-[#0E2B27] transition-all duration-300 hover:gap-4"
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

                            <div className="absolute inset-0 bg-gradient-to-t from-[#071D1A]/45 via-transparent to-transparent" />

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
                        className="h-full w-full max-w-xl overflow-y-auto bg-[#F6F2E9] text-[#0E2B27] shadow-2xl"
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
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#0E3B36]/10 text-xl transition-colors hover:bg-[#0E3B36] hover:text-[#F6F2E9]"
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
                                            className="mt-2 w-full border-0 border-b border-[#0E3B36]/20 bg-transparent px-0 py-3 text-base text-[#0E2B27] outline-none focus:border-[#0E3B36]"
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
                                            className="mt-2 w-full border-0 border-b border-[#0E3B36]/20 bg-transparent px-0 py-3 text-base text-[#0E2B27] outline-none placeholder:text-[#31463F]/35 focus:border-[#0E3B36]"
                                        />
                                    </label>

                                    {/* ORDER TYPE */}
                                    <label className="block">
                                        <span className="text-xs uppercase tracking-[0.18em] text-[#31463F]/60">
                                            Order type
                                        </span>

                                        <select
                                            name="orderType"
                                            className="mt-2 w-full border-0 border-b border-[#0E3B36]/20 bg-transparent px-0 py-3 text-base text-[#0E2B27] outline-none focus:border-[#0E3B36]"
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
                                            className="mt-2 w-full border-0 border-b border-[#0E3B36]/20 bg-transparent px-0 py-3 text-base text-[#0E2B27] outline-none focus:border-[#0E3B36]"
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
                                            className="mt-2 w-full resize-none border-0 border-b border-[#0E3B36]/20 bg-transparent px-0 py-3 text-base text-[#0E2B27] outline-none placeholder:text-[#31463F]/35 focus:border-[#0E3B36]"
                                        />
                                    </label>
                                </div>

                                {/* CTA */}
                                <button
                                    type="submit"
                                    className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0E3B36] px-7 py-4 text-[15px] text-[#F6F2E9] transition-all duration-300 hover:bg-[#134943]"
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
                        className="text-3xl md:text-4xl text-[#0E2B27] max-w-lg"
                        style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}
                    >
                        Questions? We have answers.
                    </h2>
                </Reveal>

                <div className="mt-10 border-t border-[#0E3B36]/15">
                    {questions.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={item.question} className="border-b border-[#0E3B36]/15">
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                    aria-expanded={isOpen}
                                    className="flex w-full items-center justify-between gap-6 py-5 text-left text-[#0E2B27]"
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
                        className="inline-flex mt-10 rounded-full bg-[#0E3B36] text-[#F6F2E9] px-7 py-3.5 text-[15px] hover:bg-[#134943] transition-colors"
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
            className="bg-[#0E2B27] text-[#F6F2E9] py-24 md:py-32 overflow-hidden"
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
                            <article className="group">

                                {/* Image */}
                                <div className="relative h-[300px] md:h-[360px] overflow-hidden rounded-2xl">
                                    <img
                                        src={stage.img}
                                        alt={stage.title}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E2B27]/50 to-transparent" />

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

                            </article>
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
            <div className="absolute inset-0 bg-[#0E2B27]/55" />

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
        <div className="bg-[#F6F2E9] min-h-screen">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@400;560;600&family=Inter:wght@400;500&display=swap');
        * { font-family: 'Inter', sans-serif; }
      `}</style>
            <Hero />
            <About />
            <FarmGallery />
            <HowItWorks />
            <Varieties />
            <BulkSupply />
            <FrequentlyAskedQuestions />
            <FisheryJourney />
            <ClosingBanner />
        </div>
    );
}