import { MapPin } from "lucide-react";

function Footer() {
    return (
        <footer id="contact" className="bg-[#F6F2E9] py-14 border-t border-[#0E3B36]/10">
            <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between gap-8">
                <div>
                    <span
                        className="text-xl text-[#0E3B36]"
                        style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}
                    >
                        KFARM  Agro Limited
                    </span>
                    <p className="text-[#31463F]/70 text-sm mt-2 max-w-xs">
                        Fresh catfish and tilapia, sold directly and by the crate, plus
                        the know-how to grow your own.
                    </p>
                    <a href="tel:+2349115380670" className="inline-flex items-center gap-2 mt-4 text-sm text-[#0E3B36] hover:text-[#B98A2B] transition-colors">
                        Call us: 0911 538 0670
                    </a>
                </div>
                <div className="flex flex-wrap gap-12 md:gap-16 text-sm">
                    <div className="max-w-[220px] text-[#0E3B36]/80">
                        <span className="text-[#0E3B36]">Visit us</span>
                        <div className="flex items-start gap-2 mt-2 leading-relaxed">
                            <MapPin size={17} className="mt-0.5 shrink-0 text-[#0E3B36]" strokeWidth={1.8} />
                            <p>Market Square, Ezendioma, Asa Ukwa West LGA, Abia State.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 text-[#0E3B36]/80">
                        <span className="text-[#0E3B36] mb-1">Shop</span>
                        <a href="#varieties" className="hover:text-[#0E3B36]">Catfish</a>
                        <a href="#varieties" className="hover:text-[#0E3B36]">Tilapia</a>
                        <a href="#wholesale" className="hover:text-[#0E3B36]">Wholesale</a>
                    </div>
                    <div className="flex flex-col gap-2 text-[#0E3B36]/80">
                        <span className="text-[#0E3B36] mb-1">Learn</span>
                        <a href="#learn-fishery" className="hover:text-[#0E3B36]">Fishery courses</a>
                        <a href="#how-it-works" className="hover:text-[#0E3B36]">How it works</a>
                    </div>
                </div>
            </div>
            <p className="text-center text-[#31463F]/50 text-xs mt-12">
                © {new Date().getFullYear()} KFARM  Agro Limited. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;