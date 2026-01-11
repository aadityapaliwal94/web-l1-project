import { NavLink } from "react-router-dom"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import appleIcon from "../assets/apple_icon.png"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="px-4 md:px-8 lg:px-30 h-15 bg-theme-background flex justify-between items-center relative">
            <div>
                <img src={appleIcon} className="h-6 md:h-8" alt="Logo" />
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
                <ul className="flex gap-8 lg:gap-20">
                    <li><NavLink className="text-theme-primary hover:opacity-70 transition-opacity text-sm lg:text-base">Home</NavLink></li>
                    <li><NavLink className="text-theme-primary hover:opacity-70 transition-opacity text-sm lg:text-base">Store</NavLink></li>
                    <li><NavLink className="text-theme-primary hover:opacity-70 transition-opacity text-sm lg:text-base">About Us</NavLink></li>
                    <li><NavLink className="text-theme-primary hover:opacity-70 transition-opacity text-sm lg:text-base">Contact Us</NavLink></li>
                </ul>
            </nav>
            {/* Mobile Menu Button */}
            <button 
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? (
                    <X className="w-6 h-6 text-theme-primary" />
                ) : (
                    <Menu className="w-6 h-6 text-theme-primary" />
                )}
            </button>
            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-theme-background border-t border-theme-light md:hidden z-50">
                    <ul className="flex flex-col py-4">
                        <li className="px-4 py-2"><NavLink className="text-theme-primary hover:opacity-70 transition-opacity block" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
                        <li className="px-4 py-2"><NavLink className="text-theme-primary hover:opacity-70 transition-opacity block" onClick={() => setIsMenuOpen(false)}>Store</NavLink></li>
                        <li className="px-4 py-2"><NavLink className="text-theme-primary hover:opacity-70 transition-opacity block" onClick={() => setIsMenuOpen(false)}>About Us</NavLink></li>
                        <li className="px-4 py-2"><NavLink className="text-theme-primary hover:opacity-70 transition-opacity block" onClick={() => setIsMenuOpen(false)}>Contact Us</NavLink></li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Navbar