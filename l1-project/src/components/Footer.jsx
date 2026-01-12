import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <div className="px-4 md:px-8 lg:px-30 pb-6 md:pb-10 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-60">
                <div className="mb-4 md:mb-10">
                    <img width={120} className="w-24 md:w-32 lg:w-[120px]" src="https://lirp.cdn-website.com/76b3fe57/dms3rep/multi/opt/ccube_red-1920w.png" alt="Logo" />
                    <span className="block mt-3 md:mt-5 text-theme-primary text-sm md:text-base">Aaditya Paliwal</span>
                    <span className="text-theme-secondary text-sm md:text-base">Indore, MP - India</span>
                    
                </div>
                <div>
                    <span className="font-bold text-lg md:text-xl text-theme-primary">Quick Links</span>
                    <ul className="pl-1 mt-3 md:mt-5">
                        <Link className="cursor-pointer" to="/"><li className="pb-3 md:pb-5 text-link text-sm md:text-base">Home</li></Link>
                        <Link className="cursor-pointer" to="/"><li className="pb-3 md:pb-5 text-link text-sm md:text-base">Store</li></Link>
                        <Link className="cursor-pointer" to="/"><li className="pb-3 md:pb-5 text-link text-sm md:text-base">About Us</li></Link>
                        <Link className="cursor-pointer" to="/"><li className="pb-3 md:pb-5 text-link text-sm md:text-base">Contact Us</li></Link>                                
                    </ul>
                </div>
                <div>
                    <span className="font-bold text-lg md:text-xl text-theme-primary">Contact Information</span>
                    <span className="block mt-3 md:mt-5 text-sm md:text-base" style={{ color: 'var(--color-accent-amber)' }}>USA</span>
                    <span className="block mt-2 md:mt-5 leading-relaxed text-theme-secondary text-sm md:text-base">10080 N Wolfe Rd SW3 200 <br/> Cupertino, CA 95014</span>                            

                    <span className="block mt-3 md:mt-5 text-sm md:text-base" style={{ color: 'var(--color-accent-amber)' }}>INDIA</span>
                    <span className="block mt-2 md:mt-5 leading-relaxed text-theme-secondary text-sm md:text-base">Next Coworks: <br/> AB Rd, Slice 6, Aranya Nagar, Scheme 78,<br/> Vijay Nagar, Indore, Madhya Pradesh 452010</span>                            
                </div>                        
            </div>
            <div className="border-t pt-4 md:pt-5 flex justify-center border-theme mx-4 md:mx-8 lg:mx-30">
                <span className="text-theme-secondary text-xs md:text-sm text-center px-4">© 2025 All Rights Reserved | Aaditya Paliwal</span>
            </div>
        </>
    )
}

export default Footer