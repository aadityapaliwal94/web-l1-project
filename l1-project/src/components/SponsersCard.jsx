export default function SponsersCard({product}) {
    return (
        <div className="relative hover:scale-102 flex flex-col justify-center items-center transition-transform duration-300 h-120 w-80 overflow-hidden bg-white rounded-3xl text-black shrink-0">                                                                
            <img className="h-70 w-full object-contain" src={product.url} alt={product.title}/>                                        
            <div className="absolute bottom-4 left-10">
                <h2 className="text-base font-medium">{product.title}</h2>                
                <h4 className="text-sm mt-2 font-thin">From ${product.price}</h4>
            </div>
            <div className="absolute bottom-5 right-4 text-white">
                <button className="rounded-full bg-gray-300 p-4 text-black active:scale-95 text-lg">Buy</button>
            </div>
        </div>
    )
}