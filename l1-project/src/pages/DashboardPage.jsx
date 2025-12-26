import { NavLink, Outlet } from "react-router-dom"
import appleIcon from "../assets/apple_icon.png"

const DashboardPage = () => {
    return (
        <div className="flex">
            <div className="w-1/6 h-screen bg-gray-100">
                <div className="flex h-20 items-center justify-center bg-gray-200">
                    <NavLink to={"/"}><img src={appleIcon} className="h-8" /></NavLink>
                </div>
                <div className="flex flex-col">
                    <span className="text-2xl pl-6 py-3 bg-white border-t-1 border-r-1 border-b-1 border-gray-200">Dashboard</span>
                    <NavLink to="/dashboard/users" className={({ isActive }) => isActive ? "text-blue-500 bg-blue-200 text-2xl pl-6 py-3" : "text-black text-2xl pl-6 py-3"}>Users</NavLink>                    
                    <NavLink to="/dashboard/billing" className={({ isActive }) => isActive ? "text-blue-500 bg-blue-200 text-2xl pl-6 py-3" : "text-black text-2xl pl-6 py-3"}>Billing</NavLink>
                </div>
            </div>                        
            <div className="w-5/6">
                <Outlet/>
            </div>            
        </div>

    )
}

export default DashboardPage