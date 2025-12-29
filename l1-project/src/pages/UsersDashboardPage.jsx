import { useLocalStorageArray } from "../hooks/useLocalStorageArray"
import { useMemo, useState } from "react"
import { showInfoToast } from "../utils/helper"
import { ToastContainer } from "react-toastify"
import TableView from "../components/TableView"
import PaginationView from "../components/PaginationView"

const UsersDashboardPage = () => {
    const col_data = [
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "items", label: "Items Purchased" }
    ]
    
    const { getItems } = useLocalStorageArray("buyers", [])
    const [pageNumber, setPageNumber] = useState(0)
    const [isPrevButtonEnabled, setIsPrevButtonEnabled] = useState(false)
    const [isNextButtonEnabled, setIsNextButtonEnabled] = useState(true)
    
    const usersList = useMemo(() => {
        const list = getItems(pageNumber)
        console.log("Buyers " + JSON.stringify(list))
        return list
    }, [pageNumber, getItems])

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
            <h1 className="text-4xl font-bold pt-5">
                Manage
            </h1>
            <div className="flex-1 overflow-auto">                
                <TableView colData={col_data} listData={usersList} />
            </div>
            <PaginationView pageNumber={pageNumber} _onPrevButtonTap={_onPrevButtonTap} _onNextButtonTap={_onNextButtonTap} isPrevButtonEnabled={isPrevButtonEnabled} isNextButtonEnabled={isNextButtonEnabled} />
            <ToastContainer />            
        </div>
    )
}

export default UsersDashboardPage