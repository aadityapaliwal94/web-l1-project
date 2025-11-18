export default function ProductCard({product}) {
    return (
        <div className="relative hover:scale-102 transition-transform duration-300 h-125 w-100 overflow-hidden bg-black rounded-3xl text-white shrink-0">                                                                
            <img className=" h-full w-full" src={product.url} alt={product.title}/>                            
            <div className="absolute top-10 left-8">
                <h2 className="text-3xl font-medium">{product.title}</h2>
                <h3 className="text-xl mt-2">{product.desc}</h3>
                <h4 className="text-sm font-thin mt-2">From ${product.price}</h4>
            </div>
            <div className="absolute bottom-5 right-8">
                <button className="rounded-full bg-gray-300 p-4 text-black active:scale-95 text-lg">Buy</button>
            </div>
        </div>
    )
}