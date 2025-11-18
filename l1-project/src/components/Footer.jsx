import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <div className="px-30 pb-10 flex gap-60">
                <div className="mb-10">
                    <img width={120} src="https://lirp.cdn-website.com/76b3fe57/dms3rep/multi/opt/ccube_red-1920w.png" />
                    <span className="block mt-5">Aaditya Paliwal</span>
                    <span>Indore, MP - India</span>
                    
                </div>
                <div>
                    <span className="font-bold text-xl">Quick Links</span>
                    <ul className="pl-1 mt-5">
                        <Link className="cursor-pointer" to="/"><li className="pb-5 hover:text-red-400 hover:underline underline-offset-8">Home</li></Link>
                        <Link className="cursor-pointer" to="/"><li className="pb-5 hover:text-red-400 hover:underline underline-offset-8">Store</li></Link>
                        <Link className="cursor-pointer" to="/"><li className="pb-5 hover:text-red-400 hover:underline underline-offset-8">About Us</li></Link>
                        <Link className="cursor-pointer" to="/"><li className="pb-5 hover:text-red-400 hover:underline underline-offset-8">Contact Us</li></Link>                                
                    </ul>
                </div>
                <div>
                    <span className="font-bold text-xl">Contact Information</span>
                    <span className="block mt-5 text-amber-600">USA</span>
                    <span className="block mt-5 leading-relaxed">10080 N Wolfe Rd SW3 200 <br/> Cupertino, CA 95014</span>                            

                    <span className="block mt-5 text-amber-600">INDIA</span>
                    <span className="block mt-5 leading-relaxed">Next Coworks: <br/> AB Rd, Slice 6, Aranya Nagar, Scheme 78,<br/> Vijay Nagar, Indore, Madhya Pradesh 452010</span>                            
                </div>                        
            </div>
            <div className="border-t pt-5 flex justify-center border-gray-300 mx-30 ">
                <span>© 2025 All Rights Reserved | Aaditya Paliwal</span>
            </div>
        </>
    )
}

export default Footer