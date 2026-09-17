import { useEffect, useState } from "react";
import Home from "./pages/Home";
import LearnFisheryPage from "./pages/Course";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import WholesalePage from "./pages/WholesalePage";
import { MessageCircle, Phone, X } from "lucide-react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [orderAssistantOpen, setOrderAssistantOpen] = useState(false);
  const [courseAssistantOpen, setCourseAssistantOpen] = useState(false);
  const [selectedFish, setSelectedFish] = useState("Catfish");

  useEffect(() => {
    const sections = [
      {
        id: "wholesale",
        seenKey: "kfarm-order-assistant-seen",
        onEnter: () => {
          setCourseAssistantOpen(false);
          setOrderAssistantOpen(true);
        },
      },
      {
        id: "closing",
        seenKey: "kfarm-course-assistant-seen",
        onEnter: () => {
          setOrderAssistantOpen(false);
          setCourseAssistantOpen(true);
        },
      },
    ];

    const observers = sections.map(({ id, seenKey, onEnter }) => {
      const section = document.getElementById(id);
      if (!section || sessionStorage.getItem(seenKey)) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          onEnter();
          observer.disconnect();
        },
        { threshold: 0.35 }
      );

      observer.observe(section);
      return observer;
    });

    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  const closeOrderAssistant = () => {
    setOrderAssistantOpen(false);
    sessionStorage.setItem("kfarm-order-assistant-seen", "true");
  };

  const closeCourseAssistant = () => {
    setCourseAssistantOpen(false);
    sessionStorage.setItem("kfarm-course-assistant-seen", "true");
  };

  const orderAssistantLink = `https://wa.me/2349115380670?text=${encodeURIComponent(
    `Hello KFARM Agro Limited, I'd like to order ${selectedFish.toLowerCase()}. Please share availability, price, and delivery options.`
  )}`;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="learn-fishery" element={<LearnFisheryPage/>} />
        <Route path="varieties-wholesale" element={<WholesalePage/>} />
        <Route path="contact" element={<ContactPage/>} />
      </Routes>
      <Footer/>
      {orderAssistantOpen && (
        <div
          className="fixed inset-0 z-[90] flex items-end justify-center bg-[#071D1A]/30 p-4 backdrop-blur-[2px] md:items-center"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeOrderAssistant();
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="order-assistant-title"
            className="w-full max-w-md rounded-3xl bg-[#F6F2E9] p-6 text-[#0E2B27] shadow-2xl md:p-8"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#B98A2B]">Fresh from KFARM</p>
                <h2
                  id="order-assistant-title"
                  className="mt-3 text-3xl leading-none"
                  style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}
                >
                  Need fresh fish?
                </h2>
              </div>
              <button
                type="button"
                onClick={closeOrderAssistant}
                aria-label="Close order assistant"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0E3B36]/15 text-[#0E3B36] transition-colors hover:bg-[#0E3B36] hover:text-[#F6F2E9]"
              >
                <X size={17} />
              </button>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#31463F]/75">
              Tell us what you need and we&apos;ll confirm availability, price, and delivery on WhatsApp.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-2">
              {["Catfish", "Tilapia", "Both"].map((fish) => (
                <button
                  key={fish}
                  type="button"
                  onClick={() => setSelectedFish(fish)}
                  className={`rounded-xl border px-3 py-3 text-sm transition-colors ${
                    selectedFish === fish
                      ? "border-[#0E3B36] bg-[#0E3B36] text-[#F6F2E9]"
                      : "border-[#0E3B36]/15 text-[#0E3B36] hover:border-[#0E3B36]/50"
                  }`}
                >
                  {fish}
                </button>
              ))}
            </div>

            <a
              href={orderAssistantLink}
              target="_blank"
              rel="noreferrer"
              onClick={closeOrderAssistant}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-[#1fba59]"
            >
              <MessageCircle size={18} />
              Continue on WhatsApp
            </a>
          </section>
        </div>
      )}
      {courseAssistantOpen && (
        <div
          className="fixed inset-0 z-[90] flex items-end justify-center bg-[#071D1A]/30 p-4 backdrop-blur-[2px] md:items-center"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeCourseAssistant();
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="course-assistant-title"
            className="w-full max-w-md rounded-3xl bg-[#F6F2E9] p-6 text-[#0E2B27] shadow-2xl md:p-8"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#B98A2B]">Learn with KFARM</p>
                <h2
                  id="course-assistant-title"
                  className="mt-3 text-3xl leading-none"
                  style={{ fontFamily: "Fraunces, serif", fontWeight: 560 }}
                >
                  Want to learn fishery?
                </h2>
              </div>
              <button
                type="button"
                onClick={closeCourseAssistant}
                aria-label="Close fishery course assistant"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0E3B36]/15 text-[#0E3B36] transition-colors hover:bg-[#0E3B36] hover:text-[#F6F2E9]"
              >
                <X size={17} />
              </button>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#31463F]/75">
              We offer practical fishery courses covering feeding, growing, water management, and harvesting.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                ["01", "Feeding"],
                ["02", "Growing"],
                ["03", "Harvesting"],
              ].map(([number, title]) => (
                <div key={title} className="border-t border-[#0E3B36]/15 pt-3">
                  <span className="text-xs text-[#B98A2B]">{number}</span>
                  <p className="mt-1 text-sm text-[#0E2B27]">{title}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="/learn-fishery"
                onClick={closeCourseAssistant}
                className="inline-flex flex-1 items-center justify-center rounded-full bg-[#0E3B36] px-5 py-3.5 text-[15px] text-[#F6F2E9] transition-colors hover:bg-[#134943]"
              >
                Explore courses
              </a>
              <a
                href="https://wa.me/2349115380670?text=Hello%20KFARM%20Agro%20Limited%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20fishery%20courses."
                target="_blank"
                rel="noreferrer"
                onClick={closeCourseAssistant}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#0E3B36]/20 px-5 py-3.5 text-[15px] text-[#0E3B36] transition-colors hover:border-[#0E3B36]/60"
              >
                <MessageCircle size={18} />
                Ask on WhatsApp
              </a>
            </div>
          </section>
        </div>
      )}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <a
          href="tel:+2349115380670"
          aria-label="Call KFARM Agro Limited"
          className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#0E3B36] text-[#F6F2E9] shadow-lg transition-transform hover:scale-105"
        >
          <Phone size={24} strokeWidth={2} />
        </a>
        <a
          href="https://wa.me/2349115380670?text=Hello%20KFARM%20Agro%20Limited%2C%20I%27d%20like%20to%20make%20an%20enquiry."
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with KFARM Agro Limited on WhatsApp"
          className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
        >
          <MessageCircle size={26} strokeWidth={2} />
        </a>
      </div>
    </Router>
  )
}

export default App
