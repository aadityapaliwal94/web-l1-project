
import { useLocalStorageArray } from "../hooks/useLocalStorageArray"
import { useMemo, useState } from "react"
import { showInfoToast } from "../utils/helper"
import { ToastContainer } from "react-toastify"
import TableView from "../components/TableView"
import PaginationView from "../components/PaginationView"
import MostBoughtCard from "../components/MostBoughtCard"

const BillingDashboardPage = () => {
    const col_data = [
        { key: "id", label: "Invoice ID" },
        { key: "product", label: "Product" },
        { key: "email", label: "User Email" },
        { key: "date", label: "Date" },
        { key: "status", label: "Status" },
    ]
    
    const { getItems, items } = useLocalStorageArray("invoices", [])
    const [pageNumber, setPageNumber] = useState(0)
    const [isPrevButtonEnabled, setIsPrevButtonEnabled] = useState(false)
    const [isNextButtonEnabled, setIsNextButtonEnabled] = useState(true)
    
    const invoiceList = useMemo(() => {
        const list = getItems(pageNumber, 5, true)
        console.log("Invoices " + JSON.stringify(list))
        return list
    }, [pageNumber, getItems])

    const topProducts = useMemo(() => {
        if (!items || items.length === 0) return []

        const productCountMap = items.reduce((acc, invoice) => {
            const productName = invoice.product
            if (!productName) return acc
            acc[productName] = (acc[productName] || 0) + 1
            return acc
        }, {})

        return Object.entries(productCountMap)
            .map(([product, count]) => ({ product, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 3)
    }, [items])

    const _onPrevButtonTap = () => {
        if (pageNumber > 0) {
            setPageNumber(prev => prev - 1)
        } else {
            showInfoToast("No more data available")
            setIsPrevButtonEnabled(false)
        }
        setIsNextButtonEnabled(true)
    }

    const _onNextButtonTap = () => {
        const nextPageItems = getItems(pageNumber + 1)
        if (nextPageItems.length > 0) {
            setIsPrevButtonEnabled(true)
            setPageNumber(prev => prev + 1)
        } else {
            showInfoToast("No more data available")            
            setIsNextButtonEnabled(false)
        }
    }

    return (
        <div className="h-screen px-10 flex flex-col">
            <h1 className="text-4xl font-bold pt-5">Billing</h1>
            {topProducts.length > 0 && (
                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                    {topProducts.map((item, index) => (
                        <MostBoughtCard item={item} index={index} />
                    ))}
                </div>
            )}
            <div className="flex-1 overflow-auto">                
                <TableView colData={col_data} listData={invoiceList} />
            </div>
            <PaginationView pageNumber={pageNumber} _onPrevButtonTap={_onPrevButtonTap} _onNextButtonTap={_onNextButtonTap} isPrevButtonEnabled={isPrevButtonEnabled} isNextButtonEnabled={isNextButtonEnabled} />
            <ToastContainer />            
        </div>
    )
}

export default BillingDashboardPage