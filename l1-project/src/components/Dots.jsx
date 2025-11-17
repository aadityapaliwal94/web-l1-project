export default function Dots({ caresoul_images, goToSlide, currentIndex }) {
    return (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-5">
            {caresoul_images.map((_, index) => (
            <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                    ? 'bg-white w-8'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
            />
            ))}
        </div> 
    )
}