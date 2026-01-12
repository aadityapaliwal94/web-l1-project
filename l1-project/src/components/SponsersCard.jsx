export default function SponsersCard({product, onBuySponser}) {
    return (
        <div className="relative hover:scale-102 flex flex-col justify-center items-center transition-transform duration-300 h-80 md:h-96 lg:h-120 w-64 md:w-72 lg:w-80 overflow-hidden bg-theme-surface rounded-2xl md:rounded-3xl text-theme-primary shrink-0">                                                                
            <img className="h-48 md:h-56 lg:h-70 w-full object-contain" src={product.url} alt={product.title}/>                                        
            <div className="absolute bottom-3 md:bottom-4 left-4 md:left-6 lg:left-10">
                <h2 className="text-sm md:text-base font-medium">{product.title}</h2>                
                <h4 className="text-xs md:text-sm mt-1 md:mt-2 font-thin">From ${product.price}</h4>
            </div>
            <div className="absolute bottom-3 md:bottom-4 lg:bottom-5 right-3 md:right-4">
                <button className="btn-primary rounded-full p-2 md:p-3 lg:p-4 text-sm md:text-base lg:text-lg" onClick={() => onBuySponser(product)}>Buy</button>
            </div>
        </div>
    )
}