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
                        Get quality fish, sourced fresh, or learn the skills to start
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
        <section id="about" className="py-24 bg-[#F6F2E9]">
            <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 items-center">
                <Reveal>
                    <div className="rounded-2xl overflow-hidden h-80 md:h-[420px]">
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
                    </div>
                </Reveal>

                <Reveal delay={120}>
                    <p className="text-[#B98A2B] text-sm mb-3">About us</p>
                    <h2
                        className="text-3xl md:text-4xl text-[#0E2B27] max-w-md"
                        style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}
                    >
                        We don't just sell fish, we build fisheries.
                    </h2>
                    <p className="text-[#31463F]/80 mt-5 max-w-md leading-relaxed">
                        KFARM Agro Limited raises catfish and tilapia the way we'd want to
                        buy them: fresh, well-fed, and handled with care from pond to
                        delivery. And because good fish starts with good practice, we
                        also teach the fishery skills behind it, so anyone can learn
                        to farm as well as we do.
                    </p>

                    <div className="grid sm:grid-cols-1 gap-6 mt-9">
                        {values.map((v) => (
                            <div key={v.title} className="flex items-start gap-4">
                                <v.icon size={22} className="text-[#0E3B36] mt-0.5 shrink-0" strokeWidth={1.6} />
                                <div>
                                    <h3 className="text-[#0E2B27] font-medium">{v.title}</h3>
                                    <p className="text-[#31463F]/70 text-sm mt-1 leading-relaxed">{v.copy}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

function FarmGallery() {
    const images = [
        { src: IMG.about, alt: "Fish pond at KFARM Agro Limited" },
        { src: IMG.feeding, alt: "Feeding fish at the farm" },
        { src: IMG.growing, alt: "Fish growing in a managed farm pond" },
        { src: IMG.harvesting, alt: "Harvesting fresh fish for customers" },
    ];

    return (
        <section id="gallery" className="py-24 bg-[#F6F2E9]">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                <Reveal>
                    <p className="text-[#B98A2B] text-sm mb-3">Life at the farm</p>
                    <h2
                        className="text-3xl md:text-4xl text-[#0E2B27] max-w-lg"
                        style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}
                    >
                        From pond to harvest.
                    </h2>
                </Reveal>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mt-12">
                    {images.map((image, index) => (
                        <Reveal key={image.alt} delay={index * 80}>
                            <figure className={`overflow-hidden rounded-2xl ${index === 0 ? "col-span-2 row-span-2" : ""}`}>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full min-h-44 md:min-h-52 object-cover transition-transform duration-700 hover:scale-105"
                                />
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
        { img: IMG.catfish, name: "Catfish", copy: "Firm, mild, and versatile, sold live or freshly dressed.", cta: "Order catfish" },
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

function OrderForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const message = [
            "KFARM Agro Limited, I'd like to place an order.",
            `Fish: ${formData.get("fish")}`,
            `Quantity: ${formData.get("quantity")}`,
            `Order type: ${formData.get("orderType")}`,
            `Pickup or delivery: ${formData.get("fulfilment")}`,
            `Notes: ${formData.get("notes") || "None"}`,
        ].join("\n");
        window.open(WHATSAPP_LINK(message), "_blank", "noopener,noreferrer");
    };

    return (
        <section id="order-form" className="py-24 bg-[#0E2B27] text-[#F6F2E9]">
            <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
                <Reveal>
                    <p className="text-[#D9A441] text-sm mb-3">Ready to order?</p>
                    <h2
                        className="text-3xl md:text-4xl max-w-md"
                        style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}
                    >
                        Send us the details and we&apos;ll take it from there.
                    </h2>
                    <p className="text-[#F6F2E9]/70 mt-5 max-w-md leading-relaxed">
                        Complete the short form and it will open WhatsApp with your order already written out.
                    </p>
                </Reveal>

                <Reveal delay={120}>
                    <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
                        <label className="text-sm">
                            Fish
                            <select name="fish" required className="mt-2 w-full rounded-lg border border-[#F6F2E9]/20 bg-[#123832] px-4 py-3 text-[#F6F2E9]">
                                <option>Catfish</option>
                                <option>Tilapia</option>
                                <option>Catfish and tilapia</option>
                            </select>
                        </label>
                        <label className="text-sm">
                            Quantity
                            <input name="quantity" required placeholder="e.g. 10 kg or 1 crate" className="mt-2 w-full rounded-lg border border-[#F6F2E9]/20 bg-[#123832] px-4 py-3 text-[#F6F2E9] placeholder:text-[#F6F2E9]/45" />
                        </label>
                        <label className="text-sm">
                            Order type
                            <select name="orderType" className="mt-2 w-full rounded-lg border border-[#F6F2E9]/20 bg-[#123832] px-4 py-3 text-[#F6F2E9]">
                                <option>One-time order</option>
                                <option>Regular supply</option>
                                <option>Wholesale order</option>
                            </select>
                        </label>
                        <label className="text-sm">
                            Pickup or delivery
                            <select name="fulfilment" className="mt-2 w-full rounded-lg border border-[#F6F2E9]/20 bg-[#123832] px-4 py-3 text-[#F6F2E9]">
                                <option>Pickup</option>
                                <option>Delivery</option>
                                <option>Not sure yet</option>
                            </select>
                        </label>
                        <label className="text-sm sm:col-span-2">
                            Extra details
                            <textarea name="notes" rows="3" placeholder="Preferred date, location, or anything else we should know" className="mt-2 w-full resize-y rounded-lg border border-[#F6F2E9]/20 bg-[#123832] px-4 py-3 text-[#F6F2E9] placeholder:text-[#F6F2E9]/45" />
                        </label>
                        <button type="submit" className="sm:col-span-2 inline-flex w-fit items-center gap-2 rounded-full bg-[#D9A441] px-7 py-3.5 text-[15px] text-[#0E2B27] hover:bg-[#e5b559] transition-colors">
                            <MessageCircle size={18} />
                            Continue on WhatsApp
                        </button>
                    </form>
                </Reveal>
            </div>
        </section>
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
                                Go beyond buying, explore our fishery courses.
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
            <About />
            <FarmGallery />
            <HowItWorks />
            <Varieties />
            <Wholesale />
            <OrderForm />
            <FrequentlyAskedQuestions />
            <FisheryJourney />
            <ClosingBanner />
        </div>
    );
}