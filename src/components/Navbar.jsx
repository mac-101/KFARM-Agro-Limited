import { useState } from "react";

function Navbar() {
    const [open, setOpen] = useState(false);
    
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
        <header className="sticky top-0 z-50 bg-[#F6F2E9]/90 backdrop-blur border-b border-[#0E3B36]/10">
            <div className="max-w-6xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
                {/* Brand Logo & Name */}
                <a href="/" className="flex items-center gap-2 shrink-0">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path
                            d="M2 15c5-9 15-9 20-4l6-4-2 8 2 8-6-4c-5 5-15 5-20-4Z"
                            fill="#0E3B36"
                        />
                        <circle cx="9" cy="14" r="1.4" fill="#F6F2E9" />
                    </svg>
                    <span
                        className="text-xl tracking-tight text-[#0E3B36]"
                        style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}
                    >
                        KFARM Agro Limited
                    </span>
                </a>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex items-center gap-9">
                    {links.map((l) => (
                        <a
                            key={l.link}
                            href={l.link}
                            className="text-[15px] text-[#0E3B36]/80 hover:text-[#0E3B36] transition-colors"
                        >
                            {l.text}
                        </a>
                    ))}
                </nav>

                {/* Desktop CTA Button */}
                <a
                    href="/contact"
                    className="hidden md:inline-flex items-center rounded-full bg-[#0E3B36] text-[#F6F2E9] px-5 py-2.5 text-[15px] hover:bg-[#134943] transition-colors"
                >
                    Order now
                </a>

                {/* Mobile Menu Toggle Button */}
                <button
                    onClick={() => setOpen((v) => !v)}
                    className="md:hidden text-[#0E3B36] p-2 -mr-2 focus:outline-none"
                    aria-label="Toggle menu"
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
            {open && (
                <div className="md:hidden border-t border-[#0E3B36]/10 bg-[#F6F2E9] px-6 py-6 flex flex-col gap-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
                    {links.map((l) => (
                        <a
                            key={l.link}
                            href={l.link}
                            onClick={() => setOpen(false)}
                            className="text-[#0E3B36]/80 hover:text-[#0E3B36] text-[16px] py-1 font-medium transition-colors"
                        >
                            {l.text}
                        </a>
                    ))}
                    <a
                        href="/contact"
                        onClick={() => setOpen(false)}
                        className="inline-flex justify-center items-center rounded-full bg-[#0E3B36] text-[#F6F2E9] px-5 py-3 text-[15px] mt-2 font-medium hover:bg-[#134943] transition-colors"
                    >
                        Contact us
                    </a>
                </div>
            )}
        </header>
    );
}

export default Navbar;