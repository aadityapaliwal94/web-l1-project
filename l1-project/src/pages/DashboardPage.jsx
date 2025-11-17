import { Outlet } from "react-router-dom"

const DashboardPage = () => {
    return (
        <div>
            This is DashboardPage

            <Outlet/>
        </div>

    )
}

export default DashboardPage