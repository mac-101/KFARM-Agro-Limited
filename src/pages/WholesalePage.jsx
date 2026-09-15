import React, { useEffect, useRef, useState } from "react";
import { UtensilsCrossed, Store, Building2, MapPin, MessageCircle } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  KFARM Agro Limited, Order + Wholesale page                              */
/*  Covers both: (1) retail ordering of catfish & tilapia, and         */
/*  (2) wholesale for restaurants/retailers/businesses.                */
/*  Same design system as the rest of the site: deep teal + harvest    */
/*  gold on soft paper cream, Fraunces headlines + Inter body.         */
/* ------------------------------------------------------------------ */
const WHATSAPP_NUMBER = "2349115380670"; // 09115380670, with Nigeria country code, no leading 0
const DEFAULT_ORDER_MESSAGE =
  import.meta.env.VITE_WHOLESALE_ORDER_MESSAGE ||
  "KFARM Agro Limited, I'd like to place an order.";
const WHATSAPP_LINK = (message = DEFAULT_ORDER_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const IMG = {
  hero:
    "https://images.pexels.com/photos/14993421/pexels-photo-14993421.jpeg?auto=compress&cs=tinysrgb&w=1400",
  catfish:
    "https://images.pexels.com/photos/32243187/pexels-photo-32243187.jpeg?auto=compress&cs=tinysrgb&w=1000",
  tilapia:
    "https://images.pexels.com/photos/8352786/pexels-photo-8352786.jpeg?auto=compress&cs=tinysrgb&w=1000",
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

/* --------------------------------- Hero -------------------------------- */
function OrderHero() {
  const [ref, shown] = useReveal();
  const base = "transition-all duration-[900ms]";
  return (
    <section className="relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <img
          src={IMG.hero}
          alt="Large-scale fish farm, aerial view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0E2B27]/70" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 pt-28 pb-24 md:pt-36 md:pb-32">
        <p
          className={`${base} text-[#D9A441] text-sm mb-4`}
          style={{ opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(14px)" }}
        >
          Order &amp; wholesale
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
          Fresh fish, from a single order to full-scale supply.
        </h1>
        <p
          className={`${base} text-[#F6F2E9]/75 text-lg mt-6 max-w-lg leading-relaxed`}
          style={{
            opacity: shown ? 1 : 0,
            transform: shown ? "translateY(0)" : "translateY(18px)",
            transitionDelay: "180ms",
          }}
        >
          Order catfish or tilapia for your kitchen or your table, or set
          up a standing supply for your restaurant, shop, or business.
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
            href={WHATSAPP_LINK("I'd like to order fish for my kitchen or table.")}
            className="rounded-full bg-[#D9A441] text-[#0E2B27] px-7 py-3.5 text-[15px] hover:bg-[#e5b559] transition-colors"
          >
            Order fish
          </a>
          <a
            href="#quote"
            className="rounded-full border border-[#F6F2E9]/30 text-[#F6F2E9] px-7 py-3.5 text-[15px] hover:border-[#F6F2E9]/70 transition-colors"
          >
            Request a wholesale quote
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Order / varieties ------------------------------ */
function Order() {
  const cards = [
    { img: IMG.catfish, name: "Catfish", copy: "Firm, mild, and versatile, sold live or freshly dressed, priced by weight.", cta: "Order catfish" },
    { img: IMG.tilapia, name: "Tilapia", copy: "Sweet, delicate flesh, farmed in clean, well-fed ponds, priced by weight.", cta: "Order tilapia" },
  ];
  return (
    <section id="order" className="py-24 bg-[#F6F2E9]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="text-[#B98A2B] text-sm mb-3">Order for yourself</p>
          <h2
            className="text-3xl md:text-4xl text-[#0E2B27] max-w-lg"
            style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}
          >
            Two fish, always fresh.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 mt-14">
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
                  target="_blank"
                  rel="noreferrer"
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
          <h2 className="text-3xl md:text-4xl max-w-md" style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}>
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

/* -------------------------------- Segments -------------------------------- */
function Segments() {
  const segments = [
    {
      icon: UtensilsCrossed,
      title: "For restaurants",
      copy: "A steady supply of fresh catfish and tilapia, sized and timed to your menu.",
    },
    {
      icon: Store,
      title: "For retailers",
      copy: "Stock your counter with fish you can vouch for, delivered on a schedule you can plan around.",
    },
    {
      icon: Building2,
      title: "For businesses",
      copy: "Catering, processing, or anything in between, tell us your volume and we'll work it out.",
    },
  ];
  return (
    <section id="segments" className="py-24 bg-[#0E2B27] text-[#F6F2E9]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="text-[#D9A441] text-sm mb-3">Need it in larger quantity?</p>
          <h2
            className="text-3xl md:text-4xl max-w-lg"
            style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}
          >
            Built for buyers who need more than a single order.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8 mt-16">
          {segments.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div className="border-t border-[#F6F2E9]/20 pt-6">
                <s.icon size={24} className="text-[#D9A441]" strokeWidth={1.6} />
                <h3 className="text-xl mt-4 mb-2">{s.title}</h3>
                <p className="text-[#F6F2E9]/70 leading-relaxed">{s.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- How wholesale works ------------------------------ */
function HowWholesaleWorks() {
  const steps = [
    { n: "01", title: "Tell us what you need", copy: "Fish type, rough quantity, and how often, no minimum, no set tiers." },
    { n: "02", title: "Get a quote", copy: "We come back with pricing and the earliest we can supply it." },
    { n: "03", title: "Schedule delivery", copy: "Agree on a pickup or delivery time that fits your operation." },
    { n: "04", title: "Reorder with ease", copy: "Once we know your pattern, repeat orders take minutes to confirm." },
  ];
  return (
    <section className="py-24 bg-[#F6F2E9]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <h2
            className="text-3xl md:text-4xl text-[#0E2B27] max-w-lg"
            style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}
          >
            How wholesale works.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mt-16">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <div className="border-t border-[#0E3B36]/15 pt-5">
                <span className="text-[#B98A2B] text-sm">{s.n}</span>
                <h3 className="text-lg text-[#0E2B27] mt-3 mb-2">{s.title}</h3>
                <p className="text-[#31463F]/75 text-sm leading-relaxed">{s.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Location -------------------------------- */
function Location() {
  return (
    <section className="py-24 bg-[#0E2B27] text-[#F6F2E9]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <p className="text-[#D9A441] text-sm mb-3">Where we are</p>
          <h2
            className="text-3xl md:text-4xl"
            style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}
          >
            Find us at Market Square.
          </h2>
          <div className="flex items-start gap-3 mt-6 text-[#F6F2E9]/75">
            <MapPin size={20} className="text-[#D9A441] mt-0.5 shrink-0" strokeWidth={1.8} />
            <p className="leading-relaxed">
              Market Square, Ezendioma, Asa Ukwa West LGA, Abia State.
              <br />
              Pickup available on-site, or ask us about delivery to your
              location.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="rounded-2xl overflow-hidden h-64 md:h-80">
            <iframe
              title="KFARM Agro Limited location map"
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

/* ----------------------------------- CTA ------------------------------------ */
function QuoteCTA() {
  return (
    <section id="quote" className="py-24 bg-[#F6F2E9]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
        <Reveal>
          <h2
            className="text-3xl md:text-4xl text-[#0E2B27] max-w-xl mx-auto"
            style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}
          >
            Tell us what you need, we'll work out the rest.
          </h2>
          <p className="text-[#31463F]/80 mt-4 max-w-md mx-auto">
            No fixed minimum, no rigid tiers. Reach out with your fish type
            and rough quantity and we'll send a quote.
          </p>
          <a
            href="mailto:hello@blueharvest.example"
            className="inline-flex mt-8 rounded-full bg-[#0E3B36] text-[#F6F2E9] px-7 py-3.5 text-[15px] hover:bg-[#134943] transition-colors"
          >
            Request a quote
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------- Page ------------------------------------ */
export default function WholesalePage() {
  return (
    <div className="bg-[#F6F2E9] min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@400;560;600&family=Inter:wght@400;500&display=swap');
        * { font-family: 'Inter', sans-serif; }
      `}</style>
      <OrderHero />
      <Order />
      <OrderForm />
      <Segments />
      <HowWholesaleWorks />
      <Location />
      <QuoteCTA />
    </div>
  );
}