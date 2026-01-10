
import { useLocalStorageArray } from "../hooks/useLocalStorageArray"
import { useMemo, useState, useEffect } from "react"
import { showInfoToast } from "../utils/helper"
import { ToastContainer } from "react-toastify"
import PaginationView from "../components/PaginationView"
import MostBoughtCard from "../components/MostBoughtCard"
import InvoiceList from "../components/InvoiceList"
import { PAGE_SIZE } from "../utils/constants"

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
        const list = getItems(pageNumber, PAGE_SIZE, true)
        console.log("Invoices " + JSON.stringify(list))
        
        return list
    }, [pageNumber, getItems])

    useEffect(() => {
        if (invoiceList.length < PAGE_SIZE) {
            setIsNextButtonEnabled(false)
        } else {
            setIsNextButtonEnabled(true)
        }
    }, [invoiceList])

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
            if (pageNumber - 1 === 0) {
                setIsPrevButtonEnabled(false)
            }
        }
    }

    const _onNextButtonTap = () => {    
        setIsPrevButtonEnabled(true)
        setPageNumber(prev => prev + 1)        
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
            <div className="flex-1 overflow-auto mt-10">                                
                <InvoiceList list={invoiceList} col_data={col_data} />                
            </div>
            {(invoiceList.length != 0 || pageNumber != 0) &&
                <PaginationView pageNumber={pageNumber} _onPrevButtonTap={_onPrevButtonTap} _onNextButtonTap={_onNextButtonTap} isPrevButtonEnabled={isPrevButtonEnabled} isNextButtonEnabled={isNextButtonEnabled} />
            }            
            <ToastContainer />            
        </div>
    )
}

export default BillingDashboardPage