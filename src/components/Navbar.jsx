import { useEffect, useRef, useState } from "react";
import Logo from "../assets/logo.png";
const ANNOUNCEMENT_MESSAGES = [
    "Fresh catfish and tilapia available now",
    "Welcome to KFARM Agro Limited",
    "Wholesale supply for restaurants, retailers, and businesses",
    "Learn practical fishery skills with our courses",
];

function Navbar() {
    const [open, setOpen] = useState(false);
    const [showRibbon, setShowRibbon] = useState(true);
    const navbarRef = useRef(null);

    

    useEffect(() => {
        if (!open) return undefined;

        const closeOnScroll = () => setOpen(false);
        const closeOnOutsideTouch = (event) => {
            if (!navbarRef.current?.contains(event.target)) {
                setOpen(false);
            }
        };

        window.addEventListener("scroll", closeOnScroll, { passive: true });
        document.addEventListener("touchstart", closeOnOutsideTouch, { passive: true });

        return () => {
            window.removeEventListener("scroll", closeOnScroll);
            document.removeEventListener("touchstart", closeOnOutsideTouch);
        };
    }, [open]);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setShowRibbon(window.scrollY < window.innerHeight);
    //     };

    //     handleScroll();
    //     window.addEventListener("scroll", handleScroll, { passive: true });
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);
    
    const links = [
        {
            text: "Home",
            link: "/"
        },
        {
            text: "Buy Fish",
            link: "/varieties-wholesale"
        },
        {
            text: "Learn Fishery",
            link: "/learn-fishery"
        },
        {
            text: "Contact",
            link: "/contact"
        }
    ];

    return (
        <header ref={navbarRef} className="sticky top-0 z-50 bg-[#FEFCFF]/90 backdrop-blur border-b border-[#1B4332]/10">
            <div
                aria-hidden={!showRibbon}
                className={`overflow-hidden bg-[#1B4332] text-white transition-[max-height,opacity] duration-500 ease-out ${
                    showRibbon ? "max-h-12 opacity-100" : "pointer-events-none max-h-0 opacity-0"
                }`}
            >
                <div className="flex min-w-max animate-[ribbon-scroll_28s_linear_infinite] items-center gap-8 py-2 text-xs tracking-wide">
                    {[...ANNOUNCEMENT_MESSAGES, ...ANNOUNCEMENT_MESSAGES].map((message, index) => (
                        <span key={`${message}-${index}`} className="flex items-center gap-8">
                            <span>{message}</span>
                            {/* <span className="text-[#F6F2E9]" aria-hidden="true">✦</span> */}
                        </span>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
                {/* Brand Logo & Name */}
                <a href="/" className="flex items-center gap-2 shrink-0">
                    {/* <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path
                            d="M2 15c5-9 15-9 20-4l6-4-2 8 2 8-6-4c-5 5-15 5-20-4Z"
                            fill="#1B4332"
                        />
                        <circle cx="9" cy="14" r="1.4" fill="#F6F2E9" />
                    </svg>
                    <span
                        className="text-xl tracking-tight text-[#1B4332]"
                        style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}
                    >
                        KFARM Agro Limited
                    </span> */}

                    <img src={Logo} 
                    className="h-12"/>
                </a>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex items-center gap-9">
                    {links.map((l) => (
                        <a
                            key={l.link}
                            href={l.link}
                            className="text-[15px] text-[#1B4332]/80 hover:text-[#1B4332] transition-colors"
                        >
                            {l.text}
                        </a>
                    ))}
                </nav>

                {/* Desktop CTA Button */}
                <a
                    href="/contact"
                    className="hidden md:inline-flex items-center rounded-full bg-[#1B4332] text-[#F6F2E9] px-5 py-2.5 text-[15px] hover:bg-[#12281F] transition-colors"
                >
                    Order now
                </a>

                {/* Mobile Menu Toggle Button */}
                <button
                    onClick={() => setOpen((v) => !v)}
                    className="md:hidden text-[#1B4332] p-2 -mr-2 focus:outline-none"
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    aria-controls="mobile-navigation"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"}
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div
                id="mobile-navigation"
                aria-hidden={!open}
                className={`absolute left-0 right-0 top-full md:hidden overflow-hidden border-t border-[#1B4332]/10 bg-[#FEFCFF] px-6 shadow-lg transition-[max-height,opacity,padding] duration-300 ease-out ${
                    open
                        ? "max-h-96 py-6 opacity-100"
                        : "pointer-events-none max-h-0 py-0 opacity-0"
                }`}
            >
                <div className="flex flex-col gap-4">
                    {links.map((l) => (
                        <a
                            key={l.link}
                            href={l.link}
                            onClick={() => setOpen(false)}
                            tabIndex={open ? 0 : -1}
                            className={`text-[#1B4332]/80 hover:text-[#1B4332] text-[16px] py-1 font-medium transition-[opacity,transform,color] duration-300 ${
                                open ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                            }`}
                        >
                            {l.text}
                        </a>
                    ))}
                    <a
                        href="/contact"
                        onClick={() => setOpen(false)}
                        tabIndex={open ? 0 : -1}
                        className={`inline-flex justify-center items-center rounded-full bg-[#1B4332] text-[#F6F2E9] px-5 py-3 text-[15px] mt-2 font-medium hover:bg-[#12281F] transition-[opacity,transform,background-color] duration-300 ${
                            open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                        }`}
                    >
                        Contact us
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Navbar;