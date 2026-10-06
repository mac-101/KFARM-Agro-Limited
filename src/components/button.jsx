import { ChevronRight } from "lucide-react";

const BUTTON_VARIANTS = {
    dark: {
        base: "bg-[#13231B] text-white hover:bg-[#1E3A2C]",
        badge: "bg-white text-[#13231B]",
    },
    light: {
        base: "bg-[#A6D83B] text-[#13231B] hover:brightness-95",
        badge: "bg-[#13231B] text-white",
    },
    outline: {
        base: "bg-transparent text-white border border-white/70 hover:border-white",
        badge: "bg-white text-[#13231B]",
    },
};

export default function Button({
    text,
    color = "dark",
    href = "#",
    width,
    className = "",
    ariaLabel = text,
    iconOnly = false,
}) {
    const variant = BUTTON_VARIANTS[color] || BUTTON_VARIANTS.dark;

    return (
        <a
            href={href}
            aria-label={ariaLabel}
            style={width ? { width } : undefined}
            className={`inline-flex items-center ${iconOnly ? "justify-center w-11 h-11 p-0" : "justify-between gap-4 rounded-full pl-6 pr-1.5 py-1.5"} text-[15px] font-semibold transition-all ${variant.base} ${className}`}
        >
            {iconOnly ? (
                <ChevronRight size={18} className={color === "light" ? "text-[#13231B]" : "text-white"} />
            ) : (
                <>
                    <span>{text}</span>
                    <span className={`inline-flex items-center justify-center w-9 h-9 rounded-full shrink-0 ${variant.badge}`}>
                        <ChevronRight size={16} />
                    </span>
                </>
            )}
        </a>
    );
}