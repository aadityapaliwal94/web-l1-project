import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Arrow({ onLeftCheveronClick, onRightCheveronClick }) {
    return (
        <>
            <button
                onClick={onLeftCheveronClick}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 md:p-2 rounded-full shadow-lg transition-all"
                aria-label="Previous image">
                <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" style={{ color: 'var(--color-text-primary)' }} />
            </button>

            <button
                onClick={onRightCheveronClick}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 md:p-2 rounded-full shadow-lg transition-all"
                aria-label="Next image">
                <ChevronRight className="w-4 h-4 md:w-6 md:h-6" style={{ color: 'var(--color-text-primary)' }} />
            </button>
        </>
    )
}