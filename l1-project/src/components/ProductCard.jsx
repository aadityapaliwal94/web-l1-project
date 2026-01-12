export default function ProductCard({product, onBuyProduct}) {
    return (
        <div className="relative hover:scale-102 transition-transform duration-300 h-80 md:h-96 lg:h-125 w-72 md:w-80 lg:w-100 overflow-hidden bg-black rounded-2xl md:rounded-3xl text-white shrink-0">                                                                
            <img className="h-full w-full object-cover" src={product.url} alt={product.title}/>                            
            <div className="absolute top-4 md:top-6 lg:top-10 left-4 md:left-6 lg:left-8">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-medium">{product.title}</h2>
                <h3 className="text-base md:text-lg lg:text-xl mt-1 md:mt-2">{product.desc}</h3>
                <h4 className="text-xs md:text-sm font-thin mt-1 md:mt-2">From ${product.price}</h4>
            </div>
            <div className="absolute bottom-3 md:bottom-4 lg:bottom-5 right-3 md:right-4 lg:right-8">
                <button className="btn-primary rounded-full p-2 md:p-3 lg:p-4 text-sm md:text-base lg:text-lg" onClick={() => onBuyProduct(product)}>Buy</button>
            </div>
        </div>
    )
}