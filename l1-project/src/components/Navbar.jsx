import { NavLink } from "react-router-dom"
import appleIcon from "../assets/apple_icon.png"

const Navbar = () => {
    return (
        <div className="px-30 h-15 bg-gray-100 flex justify-between items-center">
            <div>
                <img src={appleIcon} className="h-8" />
            </div>
            <div>
                <ul className="flex gap-20">
                    <li><NavLink>Home</NavLink></li>
                    <li><NavLink>Store</NavLink></li>
                    <li><NavLink>About Us</NavLink></li>
                    <li><NavLink>Contact Us</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar