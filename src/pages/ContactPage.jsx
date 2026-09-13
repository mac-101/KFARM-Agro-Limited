import React, { useEffect, useRef, useState } from "react";
import { MessageCircle, MapPin } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Blue Harvest — Contact page                                        */
/*  WhatsApp is the primary contact channel.                           */
/*  Same design system as the rest of the site.                        */
/* ------------------------------------------------------------------ */

const WHATSAPP_NUMBER = "2349115380670"; // 09115380670, with Nigeria country code, no leading 0
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "KFARM Agro Limited, I'd like to place an order."
)}`;

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

/* --------------------------------- Hero + WhatsApp CTA -------------------------------- */
function ContactHero() {
  const [ref, shown] = useReveal();
  const base = "transition-all duration-[900ms]";
  return (
    <section className="bg-[#0E2B27] text-[#F6F2E9]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-28 pb-24 md:pt-36 md:pb-28 text-center">
        <p
          className={`${base} text-[#D9A441] text-sm mb-4`}
          style={{ opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(14px)" }}
        >
          Contact us
        </p>
        <h1
          className={`${base} text-[38px] leading-[1.12] sm:text-5xl md:text-[56px] max-w-2xl mx-auto`}
          style={{
            fontFamily: "Fraunces, serif",
            fontWeight: 560,
            opacity: shown ? 1 : 0,
            transform: shown ? "translateY(0)" : "translateY(22px)",
            transitionDelay: "80ms",
          }}
        >
          Talk to us on WhatsApp.
        </h1>
        <p
          className={`${base} text-[#F6F2E9]/75 text-lg mt-6 max-w-md mx-auto leading-relaxed`}
          style={{
            opacity: shown ? 1 : 0,
            transform: shown ? "translateY(0)" : "translateY(18px)",
            transitionDelay: "180ms",
          }}
        >
          Orders, wholesale enquiries, or questions about our fishery
          courses — the fastest way to reach us is a WhatsApp message.
        </p>
        <div
          className={`${base} mt-10`}
          style={{
            opacity: shown ? 1 : 0,
            transform: shown ? "translateY(0)" : "translateY(18px)",
            transitionDelay: "280ms",
          }}
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-[#25D366] text-[#0E2B27] px-8 py-4 text-[16px] font-medium hover:brightness-95 transition-all"
          >
            <MessageCircle size={20} strokeWidth={2} />
            Message us on WhatsApp
          </a>
          <p className="text-[#F6F2E9]/50 text-sm mt-4">0911 538 0670</p>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Location -------------------------------- */
function Location() {
  return (
    <section className="py-24 bg-[#F6F2E9]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <p className="text-[#B98A2B] text-sm mb-3">Where we are</p>
          <h2
            className="text-3xl md:text-4xl text-[#0E2B27]"
            style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}
          >
            Find us at Market Square.
          </h2>
          <div className="flex items-start gap-3 mt-6 text-[#31463F]">
            <MapPin size={20} className="text-[#0E3B36] mt-0.5 shrink-0" strokeWidth={1.8} />
            <p className="leading-relaxed">
              Market Square, Ezendioma, Asa Ukwa West LGA, Abia State.
              <br />
              Prefer to talk first? Message us on WhatsApp and we'll sort
              out pickup or delivery.
            </p>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-7 rounded-full border border-[#0E3B36]/25 text-[#0E3B36] px-6 py-3 text-[15px] hover:border-[#0E3B36]/60 transition-colors"
          >
            <MessageCircle size={18} strokeWidth={2} />
            0911 538 0670
          </a>
        </Reveal>
        <Reveal delay={120}>
          <div className="rounded-2xl overflow-hidden h-64 md:h-80">
            <iframe
              title="Blue Harvest location map"
              className="w-full h-full border-0"
              loading="lazy"
              src="https://www.google.com/maps?q=Market+Square+at+Ezendioma+Asa+Ukwa+West+Abia+State&output=embed"
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
    <div className="bg-[#F6F2E9] min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@400;560;600&family=Inter:wght@400;500&display=swap');
        * { font-family: 'Inter', sans-serif; }
      `}</style>
      <ContactHero />
      <Location />
    </div>
  );
}
