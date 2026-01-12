import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import DashboardPage from "./pages/DashboardPage"
import UsersDashboardPage from "./pages/UsersDashboardPage"
import BillingDashboardPage from "./pages/BillingDashboardPage"
import { PurchaseProvider } from "./contexts/PurchaseContext"

function App() {  

  return (
    <PurchaseProvider>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/dashboard" Component={DashboardPage}>
          <Route path="users" Component={UsersDashboardPage} />
          <Route path="billing" Component={BillingDashboardPage} />
        </Route>
      </Routes>
    </PurchaseProvider>
  )
}

export default App
