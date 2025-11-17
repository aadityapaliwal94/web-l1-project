import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Arrow({ onLeftCheveronClick, onRightCheveronClick }) {
    return (
        <>
            <button
                onClick={onLeftCheveronClick}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                aria-label="Previous image">
                <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>

            <button
                onClick={onRightCheveronClick}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                aria-label="Next image">
                <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
        </>
    )
}