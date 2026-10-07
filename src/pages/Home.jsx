import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { ChevronRight, ChevronDown, ArrowUpRight, Menu, X } from "lucide-react";
import {
  Fish,
  Waves,
  Sprout,
  Users,
  GraduationCap,
} from "lucide-react";
import Button from "../components/button";
import heroImage from "../assets/IMG-20260928-WA0192(1).jpg";
import aboutImage from "../assets/IMG-20260928-WA0186.jpg";
import catfishImage from "../assets/IMG-20260928-WA0189.jpg";
import tilapiaImage from "../assets/IMG-20260928-WA0184.jpg";
import dryFishImage from "../assets/IMG-20260928-WA0193.jpg";
import packagedFishImage from "../assets/IMG-20260928-WA0183.jpg";
import ownerImage from "../assets/owner.jpg";
import pondImage from "../assets/IMG-20260928-WA0190.jpg"; 
import fishTraining from "../assets/IMG-20260928-WA0195.jpg";
import harvestedFishImage from "../assets/IMG-20260928-WA0194.jpg";

/* ------------------------------------------------------------------ */
/*  KFARM AGRO LIMITED — Home page, v2                                 */
/*  Layout patterns borrowed deliberately from the Ecoyard reference:  */
/*  - About: image+text row, THEN a row of bordered icon-cards         */
/*    (no fake stats — her own rule — but the card treatment matches)  */
/*  - Offerings: heading+subcopy+View-all row, photo cards with the    */
/*    title/desc BELOW the image (not overlaid), overlapping circular  */
/*    arrow button, and a scroll-dot indicator under the row           */
/*  - Brand Story: image+text row with a NUMBERED stacked list         */
/*    (not a 3-column grid)                                            */
/*  - Visual Showcase: even gallery grid, not an asymmetric bento      */
/*  - Testimonials: a row of compact cards shown at once, not a        */
/*    single swipeable card                                            */
/*                                                                      */
/*  Palette: white / near-black-green ink / lime accent, Plus Jakarta  */
/*  Sans throughout (per the earlier locked palette change).           */
/*                                                                      */
/*  Images use local KFARM assets.                                      */
/* ------------------------------------------------------------------ */

const WHATSAPP_NUMBER = "2349115380670"; // 09115380670
const WHATSAPP_LINK = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const IMG = {
  hero: heroImage,
  about: aboutImage,
  catfish: catfishImage,
  tilapia: tilapiaImage,
  fishTraining: fishTraining,
  dryFish: dryFishImage,
  pond: heroImage,
  dryCatfish: pondImage,
  growing: heroImage,
  feeding: packagedFishImage,
  harvesting: harvestedFishImage,
  closing: pondImage,
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
    { label: "Fish", href: "/varieties-wholesale" },
    { label: "Learn Fishery", href: "/learn-fishery" },
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


function HeroCircleStack() {
  const circles = [
    {
      className: "bg-[#D9A441]",
      icon: Fish,
      rotate: "-rotate-12",
    },
    {
      className: "bg-[#6F8F72]",
      icon: Waves,
      rotate: "rotate-6",
    },
    {
      className: "bg-[#13231B]",
      icon: Sprout,
      rotate: "-rotate-6",
    },
    {
      className: "bg-[#C9D2C2]",
      icon: GraduationCap,
      rotate: "rotate-12",
    },
  ];

  return (
    <div className="relative items-center w-30 h-14">
      {circles.map((circle, i) => {
        const Icon = circle.icon;

        return (
          <div
            key={i}
            className={`
                            absolute
                            w-10 h-10
                            rounded-full
                            border border-[#FAFAF7]
                            flex items-center justify-center
                            ${circle.className}
                            ${circle.rotate}
                            shadow-sm
                        `}
            style={{
              left: `${i * 22}px`,
              zIndex: circles.length - i,
            }}
          >
            <Icon
              size={19}
              strokeWidth={1.5}
              className={
                i === 1 || i === 3
                  ? "text-[#13231B]"
                  : "text-[#FAFAF7]"
              }
            />
          </div>
        );
      })}
    </div>
  );
}

/* --------------------------- 1. Hero --------------------------- */
function Hero() {
  const [ref, shown] = useReveal();
  const base = "transition-all duration-[900ms]";
  return (
    <section className="relative h-[88vh] min-h-[580px] overflow-hidden">
      <img src={IMG.hero} alt="Fresh catfish gathered after harvest at KFARM Agro Limited" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#13231B]/80 via-[#13231B]/35 to-transparent" />

      <div ref={ref} className="relative h-full max-w-6xl mx-auto px-6 md:px-10 flex flex-col justify-center">
        <div className="flex items-center mb-7">
          <HeroCircleStack />

          <p className="text-[#A6D83B] text-xs md:text-sm tracking-[0.2em] uppercase">
            KFARM AGRO LIMITED
          </p>
        </div>

        <h1
          className={`${base} text-white text-[34px] leading-[1.14] sm:text-5xl md:text-[54px] lg:text-[60px] font-bold max-w-3xl`}
          style={{ opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(22px)", transitionDelay: "100ms" }}
        >
          Fish for the table. <br />Knowledge for the farm.
        </h1>

        <p
          className={`${base} text-white/80 text-base md:text-lg mt-5 max-w-xl leading-relaxed`}
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
          <Button text="Explore Our Fish" color="light" href="/varieties-wholesale" />
          <Button text="Learn Fishery" color="outline" href="/learn-fishery" />
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
        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          <Reveal>
            <p className="text-[#5C6760] text-sm font-semibold tracking-[0.15em] flex uppercase items-center gap-1 mb-3"> <div className="h-2 w-2 rounded-full bg-[#A6D83B]"></div> About KFARM</p>
            <div className="rounded-2xl overflow-hidden h-64 md:h-40">
              <img src={IMG.about} alt="Fresh fish prepared for KFARM customers" className="w-full h-full object-cover" />
            </div>
          </Reveal>

          <Reveal className="col-span-2" delay={100}>
            {/* <h2 className="text-[#13231B] text-3xl md:text-4xl font-bold leading-tight">
              Fish is our business. Knowing fish is part of it.
            </h2> */}
            <p className="text-[#5C6760] text-xl mt-5 leading-relaxed">
              <span className="font-bold text-black "> KFARM Agro Limited is a fish business focused on making
                quality fish available while helping people understand
                fishery better.</span> From the fish we supply to the knowledge
              we share, we believe customers should have a clear
              understanding of what they're getting and what they're
              getting into.
            </p>
          </Reveal>
        </div>

        <Reveal delay={180}>
          <div className="grid sm:grid-cols-3 gap-5 mt-14">
            {points.map((p) => (
              <div key={p.title} className="rounded-2xl bg-[#FAFAF7] border border-[#13231B]/8 p-7">
                <div className="w-11 h-11 rounded-full bg-[#A6D83B]/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#A6D83B]" />
                </div>
                <h3 className="text-[#13231B] text-base font-semibold mt-5 mb-1.5">{p.title}</h3>
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
    { img: IMG.catfish, title: "Fresh Fish", copy: "Looking for fish for your home, business, or other needs? Explore what's available at KFARM.", href: "/varieties-wholesale" },
    { img: IMG.dryFish, title: "Dry Fish", copy: "Prefer your fish dried? We also make dry fish available for customers who need it.", href: "/varieties-wholesale" },
    { img: IMG.growing, title: "Fishery Training", copy: "Want to learn how fish farming works? Our training focuses on the practical side of fishery.", href: "/learn-fishery" },
  ];

  const scrollerRef = useRef(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / offers.length;
    setActive(Math.round(el.scrollLeft / cardWidth));
  };

  const goTo = (i) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / offers.length;
    el.scrollTo({ left: cardWidth * i, behavior: "smooth" });
  };

  return (
    <section className="py-24 md:py-28 bg-[#FAFAF7]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="max-w-md">
              <p className="text-[#5C6760] text-sm font-semibold tracking-[0.15em] flex uppercase items-center gap-1 mb-3"> <div className="h-2 w-2 rounded-full bg-[#A6D83B]"></div> Our services</p>

              <h2 className="text-[#13231B] text-3xl md:text-4xl font-bold">
                What can we help you with?
              </h2>
            </div>
            <div className="max-w-md text-end">

              <p className="text-[#5C6760] mt-3 leading-relaxed">
                From a single order to understanding the work behind
                every fish, here's where to start.
              </p>
            <Button className="mt-6" text="Talk to us" color="dark" href={WHATSAPP_LINK("Hi, I'd like to know more about KFARM.")} />
            </div>
          </div>
        </Reveal>

        <div
          ref={scrollerRef}
          onScroll={onScroll}
          className="flex md:grid md:grid-cols-3 gap-6 mt-12 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none]"
          style={{ scrollbarWidth: "none" }}
        >
          {offers.map((o, i) => (
            <Reveal key={o.title} delay={i * 110} className="snap-start shrink-0 w-[82vw] sm:w-[340px] md:w-auto">
              <a href={o.href} className="group block">
                <div className="rounded-2xl overflow-hidden h-56">
                  <img src={o.img} alt={`${o.title} from KFARM Agro Limited`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="relative bg-white rounded-2xl -mt-8 mx-4 p-6 shadow-[0_8px_30px_rgba(19,35,27,0.08)]">
                  <h3 className="text-[#13231B] text-lg font-semibold">{o.title}</h3>
                  <p className="text-[#5C6760] text-sm mt-2 leading-relaxed pr-8">{o.copy}</p>
                  <span className="absolute -top-5 right-5 inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#A6D83B] shadow-md group-hover:scale-105 transition-transform">
                    <ChevronRight size={18} className="text-[#13231B]" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="flex md:hidden justify-center gap-2 mt-6">
          {offers.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to offer ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{ width: active === i ? "20px" : "6px", height: "6px", backgroundColor: active === i ? "#13231B" : "rgba(19,35,27,0.2)" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- 4. Brand Story --------------------------- */
function BrandStory() {
  const points = [
    { title: "Quality", copy: "We pay attention to what we supply. From the fish we provide to the way we work, we care about giving customers something they can trust." },
    { title: "Knowledge", copy: "We believe good fishery starts with good knowledge. We share practical knowledge that helps people understand fish farming beyond simply buying and selling fish." },
    { title: "Practicality", copy: "We focus on knowledge that works beyond the classroom. Our approach to fishery learning is practical, clear, and connected to the realities of running a fish farm." },
    { title: "People", copy: "We build around the people we serve. Whether you're buying fish or learning fishery, we pay attention to what our customers and learners actually need." }
  ];
  return (
    <section className="py-24 md:py-28 bg-white">
      <div className="max-w-6xl flex flex-col gap-5 mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <Reveal>
            <div className="rounded-2xl h-80 md:h-[480px] overflow-hidden ">
              <img src={ownerImage} alt="KFARM founder Miss Nwogu Kamsirochi Anastesia holding a catfish" loading="lazy" className="w-full h-full object-cover object-top" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-[#5C6760] text-sm font-semibold tracking-[0.15em] flex uppercase items-center gap-1 mb-3"> <div className="h-2 w-2 rounded-full bg-[#A6D83B]"></div> MEET THE FOUNDER</p>
            <h2 className="text-[#13231B] text-3xl md:text-4xl font-bold leading-tight">
              Meet the founder of KFARM Agro Limited
            </h2>
            <blockquote className="text-[#5C6760] mt-5 leading-relaxed">
              “Whether you're here to buy fish or learn fishery, we want you to leave with quality, knowledge, and confidence.”
            </blockquote>
            <p className="text-[#13231B] mt-4 font-semibold">
              Miss Nwogu Kamsirochi Anastesia
            </p>

            <Button className="mt-9" text="Get in Touch" color="dark" href={WHATSAPP_LINK("Hi, I'd like to know more about KFARM.")} />


          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <Reveal>
            <div className="mt-8 space-y-6">
              {points.map((p, i) => (
                <div key={p.title} className="flex gap-4">
                  <span className="text-[#A6D83B] text-sm font-bold shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-[#13231B] text-base font-semibold">{p.title}</h3>
                    <p className="text-[#5C6760] text-sm mt-1 leading-relaxed">{p.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl overflow-hidden h-80 md:h-[480px]">
              <img src={IMG.dryCatfish} alt="Live catfish gathered in water during harvest" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- 5. Visual Showcase --------------------------- */

function VisualShowcase() {
  const gallery = [
    {
      img: IMG.catfish,
      label: "Catfish",
      description: "Quality catfish for homes, businesses, and different customer needs.",
      descPosition: "top",
    },
    {
      img: IMG.tilapia,
      label: "Tilapia",
      description: "Fresh tilapia supplied with attention to quality and customer needs.",
      descPosition: "bottom",
    },
    {
      img: IMG.dryFish,
      label: "Dry Fish",
      description: "Dried fish for customers looking for a practical, longer-lasting option.",
      descPosition: "top",
    },
    {
      img: IMG.pond,
      label: "Fish Pond",
      description: "A glimpse into the environment and work behind fish farming.",
      descPosition: "top",
    },
    {
      img: IMG.feeding,
      label: "At Work",
      description: "See the people and everyday work that keep KFARM moving.",
      descPosition: "bottom",
    },
    {
      img: IMG.fishTraining,
      label: "Fishery Training",
      description: "Practical fishery knowledge for people ready to learn and grow.",
      descPosition: "top",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#FAFAF7]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Section intro */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[#5C6760] text-sm justify-self-center font-semibold tracking-[0.15em] flex uppercase items-center gap-1 mb-3"> <div className="h-2 w-2 rounded-full bg-[#A6D83B]"></div> INSIDE KFARM</p>


            <h2
              className="text-[#13231B] text-4xl md:text-5xl font-bold leading-tight"
            // style={{
            //     fontFamily: "Fraunces, serif",
            //     fontWeight: 560,
            // }}
            >
              A look at the fish,
              <br />
              the work, and the people.
            </h2>

            <p className="text-[#5C6760] text-base md:text-lg leading-relaxed mt-6 max-w-xl mx-auto">
              A glimpse of what makes KFARM more than just a place
              to get fish and a place to learn.
            </p>
          </div>
        </Reveal>

        {/* Gallery */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 md:gap-x-8 gap-y-12 md:gap-y-16 mt-16 md:mt-20">
          {gallery.map((item, i) => {
            const description = (
              <div className="max-w-[280px]">
                <p className="text-[#13231B] text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            );

            const image = (
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-[#E8E8E2] group">
                <img
                  src={item.img}
                  alt={`${item.label} at KFARM Agro Limited. ${item.description}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#13231B]/40 via-transparent to-transparent opacity-60" />

                <span className="absolute bottom-4 left-4 text-white text-xs md:text-sm font-medium tracking-wide">
                  {item.label}
                </span>
              </div>
            );

            return (
              <Reveal key={item.label} delay={i * 70}>
                <div className="flex flex-col">
                  {item.descPosition === "top" && (
                    <div className="mb-5">
                      {description}
                    </div>
                  )}

                  {image}

                  {item.descPosition === "bottom" && (
                    <div className="mt-5">
                      {description}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA */}
        <Reveal className="flex mt-20 justify-center">
          <Button text="Get in Touch" color="light" href={WHATSAPP_LINK("Hi, I'd like to know more about KFARM.")} />

        </Reveal>

      </div>
    </section>
  );
}
/* --------------------------- 6. Visitor reviews --------------------------- */
// These are sample display cards. Replace them with approved quotes when available.
const SAMPLE_TESTIMONIALS = [
  {
    quote: "KFARM made it easy for us to get the fish we needed. The process was straightforward and the quality was good.",
    name: "Customer Name",
    role: "KFARM Customer",
  },
  {
    quote: "The training helped me understand fish farming in a much more practical way. I could actually relate what I learned to the work.",
    name: "Learner Name",
    role: "Fishery Learner",
  },
  {
    quote: "What I like about KFARM is that they actually listen to what you need instead of making the process complicated.",
    name: "Customer Name",
    role: "KFARM Customer",
  },
  {
    quote: "The practical knowledge I got from KFARM gave me a clearer understanding of what fish farming involves.",
    name: "Learner Name",
    role: "Fishery Learner",
  },
];
const sampleTestimonials =
  typeof SAMPLE_TESTIMONIALS === "undefined" ? [] : SAMPLE_TESTIMONIALS;

const REVIEWS_STORAGE_KEY = "kfarm-reviews";

function getSavedReviews() {
  try {
    const savedReviews = window.localStorage.getItem(REVIEWS_STORAGE_KEY);
    if (!savedReviews) return { reviews: [], error: "" };

    const parsedReviews = JSON.parse(savedReviews);
    if (
      !Array.isArray(parsedReviews) ||
      !parsedReviews.every(
        (review) =>
          typeof review?.quote === "string" &&
          typeof review?.name === "string" &&
          typeof review?.role === "string"
      )
    ) {
      return {
        reviews: [],
        error: "Saved reviews could not be read because their data is invalid.",
      };
    }

    return { reviews: parsedReviews, error: "" };
  } catch (error) {
    return {
      reviews: [],
      error:
        error instanceof SyntaxError
          ? "Saved reviews could not be read because their data is invalid."
          : "Saved reviews could not be loaded from this browser.",
    };
  }
}

function Testimonials() {
  const [initialReviewData] = useState(getSavedReviews);
  const [reviews, setReviews] = useState(initialReviewData.reviews);
  const [current, setCurrent] = useState(0);
  const [reviewFormOpen, setReviewFormOpen] = useState(false);
  const [reviewName, setReviewName] = useState("");
  const [reviewRole, setReviewRole] = useState("KFARM Customer");
  const [reviewText, setReviewText] = useState("");
  const [reviewMessage, setReviewMessage] = useState("");
  const [reviewError, setReviewError] = useState(initialReviewData.error);
  const testimonials = [...reviews, ...sampleTestimonials];

  const submitReview = (event) => {
    event.preventDefault();
    const name = reviewName.trim();
    const quote = reviewText.trim();
    if (!name || !quote) {
      setReviewError("Please enter your name and review.");
      return;
    }

    const review = { quote, name, role: reviewRole };
    const updatedReviews = [review, ...reviews];
    try {
      window.localStorage.setItem(
        REVIEWS_STORAGE_KEY,
        JSON.stringify(updatedReviews)
      );
    } catch {
      setReviewError("Your review could not be saved in this browser.");
      return;
    }

    setReviews(updatedReviews);
    setCurrent(0);
    setReviewFormOpen(false);
    setReviewName("");
    setReviewText("");
    setReviewError("");
    setReviewMessage(
      "Thanks! Your review is saved on this device. WhatsApp will open so you can send it to KFARM."
    );

    const whatsappMessage = [
      "Hello KFARM Agro Limited, I'd like to leave a review.",
      `Name: ${name}`,
      `Review type: ${reviewRole}`,
      `Review: ${quote}`,
    ].join("\n");
    try {
      const whatsappWindow = window.open(WHATSAPP_LINK(whatsappMessage), "_blank");
      if (whatsappWindow) whatsappWindow.opener = null;
      else throw new Error("The browser blocked the WhatsApp window.");
    } catch {
      setReviewMessage(
        "Your review is saved on this device, but WhatsApp could not be opened. Please allow popups and try again."
      );
    }
  };

  const next = () => {
    const lastStart = Math.max(testimonials.length - 2, 0);
    setCurrent((prev) => (prev >= lastStart ? 0 : prev + 1));
  };

  const previous = () => {
    const lastStart = Math.max(testimonials.length - 2, 0);
    setCurrent((prev) => (prev === 0 ? lastStart : prev - 1));
  };

  return (
    <section className="py-24 md:py-32 bg-[#FAFAF7] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">

          {/* LEFT — SECTION TEXT */}
          <Reveal>
            <div className="h-full flex flex-col max-w-xl py-5">
              <p className="text-[#5C6760] text-sm font-semibold tracking-[0.15em] flex uppercase items-center gap-1 mb-3"> <div className="h-2 w-2 rounded-full bg-[#A6D83B]"></div> what people say</p>


              <h2 className="text-[#13231B] font-bold text-4xl md:text-5xl leading-tight">
                What our customers
                <br />
                say about KFARM.
              </h2>

              <p className="text-[#5C6760] text-base md:text-lg leading-relaxed mt-6 max-w-md">
                Read reviews shared by KFARM customers and learners, or tell us about your experience.
              </p>
            </div>
          </Reveal>

          {/* RIGHT — IMAGE + CONTROLS */}
          <Reveal delay={100}>
            <div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src={IMG.harvesting}
                  alt="Freshly harvested fish from KFARM Agro Limited"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* IMAGE CONTROLS */}
            </div>
          </Reveal>
        </div>

        {/* TESTIMONIAL CAROUSEL */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 -mt-6 md:-mt-10 lg:-mt-20">

          {reviewFormOpen ? (
            <form
              onSubmit={submitReview}
              className="col-span-1 rounded-2xl bg-[#F1F0EA] p-6 md:col-span-2 md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-[#13231B] text-xl font-semibold">Share your experience</h3>
                  <p className="mt-1 text-sm text-[#5C6760]">Your review will be saved on this device and sent to KFARM through WhatsApp.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setReviewFormOpen(false)}
                  className="shrink-0 text-sm font-semibold text-[#5C6760] underline underline-offset-4 hover:text-[#13231B]"
                >
                  Back to reviews
                </button>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5 text-sm font-medium text-[#13231B]">
                  Your name
                  <input
                    required
                    maxLength={80}
                    value={reviewName}
                    onChange={(event) => setReviewName(event.target.value)}
                    className="rounded-xl border border-[#13231B]/15 bg-white px-4 py-3 font-normal outline-none focus:border-[#13231B]/50"
                    placeholder="Name"
                  />
                </label>
                <label className="grid gap-1.5 text-sm font-medium text-[#13231B]">
                  I am a
                  <select
                    value={reviewRole}
                    onChange={(event) => setReviewRole(event.target.value)}
                    className="rounded-xl border border-[#13231B]/15 bg-white px-4 py-3 font-normal outline-none focus:border-[#13231B]/50"
                  >
                    <option>KFARM Customer</option>
                    <option>Fishery Learner</option>
                  </select>
                </label>
                <label className="grid gap-1.5 text-sm font-medium text-[#13231B] sm:col-span-2">
                  Your review
                  <textarea
                    required
                    maxLength={500}
                    rows={4}
                    value={reviewText}
                    onChange={(event) => setReviewText(event.target.value)}
                    className="resize-y rounded-xl border border-[#13231B]/15 bg-white px-4 py-3 font-normal outline-none focus:border-[#13231B]/50"
                    placeholder="Tell us about your experience with KFARM..."
                  />
                </label>
              </div>
              {reviewError && (
                <p role="alert" className="mt-3 text-sm text-red-700">{reviewError}</p>
              )}
              <button
                type="submit"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-[#13231B] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1E3A2C]"
              >
                Save and send review
              </button>
            </form>
          ) : (
            <>
              <div className="col-span-1 grid grid-cols-1 gap-4 md:col-span-2 md:grid-cols-2 md:gap-5">
                {testimonials.length === 0 ? (
                  <article className="col-span-full flex min-h-[220px] flex-col justify-center rounded-2xl bg-[#F1F0EA] p-7 md:min-h-[280px] md:p-9">
                    <h3 className="text-[#13231B] text-xl font-semibold">No reviews yet</h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-[#5C6760]">
                      Be the first to share your experience with KFARM.
                    </p>
                  </article>
                ) : (
                  testimonials.slice(current, current + 2).map((testimonial, index) => (
                    <article
                      key={`${testimonial.name}-${testimonial.quote}-${index}`}
                      className={`bg-[#F1F0EA] min-h-[250px] p-7 md:min-h-[280px] md:p-9 flex flex-col justify-between ${testimonials.length === 1 ? "md:col-span-2" : ""}`}
                    >
                      <div>
                        <Quote
                          size={28}
                          strokeWidth={1.3}
                          className="text-[#D9A441] mb-6"
                        />
                        <p className="text-[#13231B] text-lg md:text-xl leading-relaxed max-w-lg">
                          “{testimonial.quote}”
                        </p>
                      </div>
                      <div className="mt-8">
                        <p className="text-[#13231B] text-sm font-semibold">
                          {testimonial.name}
                        </p>
                        <p className="text-[#7A817B] text-xs mt-1">
                          {testimonial.role}
                        </p>
                      </div>
                    </article>
                  ))
                )}
              </div>
              <div className="col-span-1 mt-5 flex flex-col items-center gap-3 md:mt-5">
                <button
                  type="button"
                  onClick={() => {
                    setReviewFormOpen(true);
                    setReviewMessage("");
                    setReviewError("");
                  }}
                  className="inline-flex items-center justify-center rounded-full bg-[#A6D83B] px-6 py-3 text-sm font-semibold text-[#13231B] transition-colors hover:brightness-95"
                >
                  Leave a review
                </button>
                {testimonials.length > 2 && (
                  <div className="flex flex-col items-center gap-2 md:flex-row">
                  <button
                    type="button"
                    onClick={previous}
                    aria-label="Previous testimonial"
                    className="w-11 h-11 rotate-90 md:rotate-0 rounded-full border bg-[#A6D83B] border-[#D5D7D0] flex items-center justify-center text-[#13231B] hover:bg-[#13231B] hover:text-white transition-colors duration-300"
                  >
                    <ArrowLeft size={17} strokeWidth={1.6} />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next testimonial"
                    className="w-11 h-11 rotate-90 md:rotate-0 rounded-full border border-[#D5D7D0] flex items-center justify-center text-[#13231B] hover:bg-[#13231B] hover:text-white transition-colors duration-300"
                  >
                    <ArrowRight size={17} strokeWidth={1.6} />
                  </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
        {reviewMessage && (
          <p role="status" className="mt-4 text-sm text-[#5C6760]">{reviewMessage}</p>
        )}
        {reviewError && !reviewFormOpen && (
          <p role="alert" className="mt-4 text-sm text-red-700">{reviewError}</p>
        )}

      </div>
    </section>
  );
}

/* --------------------------- 7. Final Image CTA --------------------------- */
function FinalCTA() {
  return (
    <section className="relative h-[420px] md:h-[480px] overflow-hidden">
      <img src={IMG.closing} alt="Live catfish swimming at KFARM Agro Limited" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-[#13231B]/70" />
      <div className="relative h-full max-w-3xl mx-auto px-6 md:px-10 flex flex-col items-center justify-center text-center">
        <Reveal>
              <p className="text-white/70 justify-self-center text-sm font-semibold tracking-[0.15em] flex uppercase items-center gap-1 mb-3"> <div className="h-2 w-2 rounded-full bg-[#A6D83B]"></div> kfarm agro limited</p>
          <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight">
            Looking for good fish, or ready to learn more?
          </h2>
          <p className="text-white/75 my-5 max-w-md mx-auto leading-relaxed">
            Tell us what you're looking for and let's see how KFARM can help.
          </p>
          <Button text="Talk to us" color="light" href={WHATSAPP_LINK("Hi, I'd like to know more about KFARM.")} />

        </Reveal>
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
                    <h2 className="text-3xl md:text-4xl text-[#1B4332] font-black leading-tight">
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

/* --------------------------- 8. Footer --------------------------- */
// function Footer() {
//   return (
//     <footer className="bg-[#13231B] text-white/70 py-16">
//       <div className="max-w-6xl mx-auto px-6 md:px-10">
//         <div className="grid md:grid-cols-3 gap-10">
//           <div>
//             <span className="text-white text-lg font-bold">KFARM</span>
//             <span className="block text-white/60 text-sm">Agro Limited</span>
//             <p className="text-white/50 text-sm mt-3">Fish · Fishery · Learning</p>
//           </div>
//           <div className="flex flex-col gap-2 text-sm">
//             <a href="/" className="hover:text-white transition-colors">Home</a>
//             <a href="/varieties-wholesale" className="hover:text-white transition-colors">Fish</a>
//             <a href="/learn-fishery" className="hover:text-white transition-colors">Learn Fishery</a>
//           </div>
//           <div className="flex flex-col gap-2 text-sm">
//             <a href={WHATSAPP_LINK("Hi, I'd like to talk to KFARM.")} className="hover:text-white transition-colors">WhatsApp: 0911 538 0670</a>
//             <p className="text-white/50">Marketsquare, Ezendioma, Asa Ukwa West LGA, Abia State.</p>
//           </div>
//         </div>
//         <p className="text-white/40 text-xs mt-12 pt-8 border-t border-white/10">
//           © 2026 KFARM Agro Limited. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }

/* ----------------------------------- Home ------------------------------------ */
export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
                * { font-family: 'Plus Jakarta Sans', sans-serif; }
            `}</style>
      {/* <Navbar /> */}
      <Hero />
      <AboutKfarm />
      <Offerings />
      <BrandStory />
      <VisualShowcase />
      <Testimonials />
      <FinalCTA />
      <FAQ />
      
    </div>
  );
}