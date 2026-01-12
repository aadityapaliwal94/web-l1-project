import { NavLink, Outlet } from "react-router-dom"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import appleIcon from "../assets/apple_icon.png"

const DashboardPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    return (
        <div className="flex relative">
            {/* Overlay for mobile */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 z-40 md:hidden"
                    style={{ backgroundColor: 'var(--color-overlay)' }}
                    onClick={closeSidebar}
                />
            )}

            {/* Sidebar */}
            <div 
                className={`fixed md:static inset-y-0 left-0 z-50 w-64 h-screen bg-theme-background transform transition-transform duration-300 ease-in-out ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
                }`}
            >
                <div className="flex h-20 items-center justify-between bg-theme-background-secondary px-4">
                    <NavLink to={"/"} onClick={closeSidebar}>
                        <img src={appleIcon} className="h-8" alt="Logo" />
                    </NavLink>
                    <button 
                        onClick={toggleSidebar}
                        className="text-theme-primary hover:opacity-70 transition-opacity md:hidden"
                        aria-label="Close sidebar"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <div className="flex flex-col">
                    <span className="text-2xl pl-6 py-3 bg-theme-surface border-t border-r border-b border-theme-light text-theme-primary">Dashboard</span>
                    <NavLink 
                        to="/dashboard/users" 
                        onClick={closeSidebar}
                        className={({ isActive }) => isActive ? "text-2xl pl-6 py-3" : "text-2xl pl-6 py-3 hover:bg-theme-background-secondary transition-colors"}
                        style={({ isActive }) => ({
                            color: isActive ? 'var(--color-primary)' : 'var(--color-text-primary)',
                            backgroundColor: isActive ? 'var(--color-primary-light)' : 'transparent'
                        })}
                    >
                        Users
                    </NavLink>                    
                    <NavLink 
                        to="/dashboard/billing" 
                        onClick={closeSidebar}
                        className={({ isActive }) => isActive ? "text-2xl pl-6 py-3" : "text-2xl pl-6 py-3 hover:bg-theme-background-secondary transition-colors"}
                        style={({ isActive }) => ({
                            color: isActive ? 'var(--color-primary)' : 'var(--color-text-primary)',
                            backgroundColor: isActive ? 'var(--color-primary-light)' : 'transparent'
                        })}
                    >
                        Billing
                    </NavLink>
                </div>
            </div>                        
            
            {/* Main content */}
            <div className="flex-1 w-full md:w-5/6">
                {/* Toggle button for mobile */}
                <button 
                    onClick={toggleSidebar}
                    className="fixed top-4 left-4 z-30 md:hidden bg-theme-background-secondary p-2 rounded-md hover:opacity-80 transition-opacity"
                    aria-label="Open sidebar"
                >
                    <Menu className="w-6 h-6" style={{ color: 'var(--color-text-primary)' }} />
                </button>
                <div className="pt-16 md:pt-0">
                    <Outlet/>
                </div>
            </div>            
        </div>

    )
}

export default DashboardPage