import { useEffect, useState } from "react";
import Home from "./pages/Home";
import LearnFisheryPage from "./pages/Course";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import WholesalePage from "./pages/WholesalePage";
import { MessageCircle, Phone, X } from "lucide-react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

const assistantSeenKey = "kfarm-assistant-seen";

function AppContent() {
  const location = useLocation();
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [selectedFish, setSelectedFish] = useState("Catfish");

  useEffect(() => {
    if (location.pathname !== "/" || sessionStorage.getItem(assistantSeenKey)) return undefined;

    const footer = document.querySelector("footer");
    if (!footer) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setAssistantOpen(true);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, [location.pathname]);

  const closeAssistant = () => {
    setAssistantOpen(false);
    sessionStorage.setItem(assistantSeenKey, "true");
  };

  const orderAssistantLink = `https://wa.me/2349115380670?text=${encodeURIComponent(
    `Hello KFARM Agro Limited, I'd like to order ${selectedFish.toLowerCase()}. Please share availability, price, and delivery options.`
  )}`;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="learn-fishery" element={<LearnFisheryPage />} />
        <Route path="varieties-wholesale" element={<WholesalePage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
      <Footer />

      {assistantOpen && (
        <div className="fixed bottom-4 right-4 z-[90] w-[calc(100%-2rem)] max-w-md">
          <section
            role="dialog"
            aria-modal="false"
            aria-labelledby="assistant-title"
            className="max-h-[78dvh] overflow-y-auto rounded-3xl border border-[#13231B]/10 bg-white p-5 text-[#13231B] shadow-[0_12px_50px_rgba(19,35,27,0.2)] sm:max-h-[42rem] sm:p-6"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#5C6760]">KFARM Agro Limited</p>
                <h2
                  id="assistant-title"
                  className="mt-3 text-2xl font-bold leading-tight sm:text-3xl"
                >
                  Fresh fish or fishery training?
                </h2>
              </div>
              <button
                type="button"
                onClick={closeAssistant}
                aria-label="Close KFARM assistant"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#13231B]/15 text-[#13231B] transition-colors hover:bg-[#13231B] hover:text-white"
              >
                <X size={17} />
              </button>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#5C6760]">
              Order fresh fish directly from us or learn the practical skills to grow your own.
            </p>

            <div className="mt-6 border-t border-[#13231B]/10 pt-4">
              <p className="text-sm font-semibold text-[#13231B]">Order fresh fish</p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {["Catfish", "Tilapia", "Both"].map((fish) => (
                  <button
                    key={fish}
                    type="button"
                    onClick={() => setSelectedFish(fish)}
                    className={`rounded-xl border px-3 py-3 text-sm transition-colors ${
                      selectedFish === fish
                        ? "border-[#13231B] bg-[#13231B] text-white"
                        : "border-[#13231B]/15 text-[#13231B] hover:border-[#13231B]/50"
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
                onClick={closeAssistant}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#1fba59]"
              >
                <MessageCircle size={18} />
                Order on WhatsApp
              </a>
            </div>

            <div className="mt-6 border-t border-[#13231B]/10 pt-4">
              <p className="text-sm font-semibold text-[#13231B]">Learn fishery</p>
              <p className="mt-2 text-sm leading-relaxed text-[#5C6760]">
                Explore practical courses covering feeding, growing, water management, and harvesting.
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/learn-fishery-fishery"
                  onClick={closeAssistant}
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-[#13231B] px-5 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#1E3A2C]"
                >
                  Explore courses
                </a>
                <a
                  href="https://wa.me/2349115380670?text=Hello%20KFARM%20Agro%20Limited%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20fishery%20courses."
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeAssistant}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#13231B]/20 px-5 py-3.5 text-[15px] font-semibold text-[#13231B] transition-colors hover:border-[#13231B]/50"
                >
                  <MessageCircle size={18} />
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          </section>
        </div>
      )}

      {!assistantOpen && (
        <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
          <a
            href="tel:+2349115380670"
            aria-label="Call KFARM Agro Limited"
            className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1B4332] text-[#F6F2E9] shadow-lg transition-transform hover:scale-105"
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
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
