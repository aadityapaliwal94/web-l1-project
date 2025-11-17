export default function SliderImage({ caresoul_images, currentIndex }) {
  return (
    <>
      {caresoul_images.map((item, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={item.url}
            alt={item.altDesc}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </>
  )
}