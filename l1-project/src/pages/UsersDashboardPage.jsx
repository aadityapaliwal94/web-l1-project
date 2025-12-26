import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLocalStorageArray } from "../hooks/useLocalStorageArray"
import { useMemo, useState } from "react"
import { showInfoToast } from "../utils/helper"
import { ToastContainer } from "react-toastify"

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
                <table className="mt-10 w-full table-fixed border border-solid border-gray-100 text-center">
                    <thead className="bg-gray-100 h-10">
                        <tr>
                            {col_data.map((col) => {
                                return (
                                    <th key={col.key} className="px-6 py-3 font-medium">
                                        {col.label}
                                    </th>
                                )
                            })}                            
                        </tr>
                    </thead>
                    <tbody className="h-10">
                        {usersList.map((row, index) => {
                            return (
                                <tr key={index} className="border-b border-gray-100">
                                    {col_data.map((col, index) => {
                                        return (
                                            <td key={index} className="px-6 py-4 font-light">
                                                {row[col.key]}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}                                             
                    </tbody>
                </table>                                
            </div>
            <div className="flex justify-center gap-10 py-6 border-t border-gray-200">
                <button 
                    disabled={!isPrevButtonEnabled}                    
                    className={isPrevButtonEnabled ? "h-12 bg-blue-400 px-4 py-3 rounded border-none flex justify-center items-center gap-2 hover:bg-blue-300 transition-colors" : "h-12 bg-gray-100 px-4 py-3 rounded border-none flex justify-center items-center gap-2" } 
                    onClick={_onPrevButtonTap}>
                    <ChevronLeft className="w-6 h-6 text-gray-800"/> 
                    Previous
                </button>
                <span className="self-center">Page {pageNumber + 1}</span>
                <button 
                    disabled={!isNextButtonEnabled}
                    className={isNextButtonEnabled ? "h-12 bg-blue-400 px-4 py-3 rounded border-none flex justify-center items-center gap-2 hover:bg-blue-300 transition-colors" : "h-12 bg-gray-100 px-4 py-3 rounded border-none flex justify-center items-center gap-2"}
                    onClick={_onNextButtonTap}>
                    Next 
                    <ChevronRight className="w-6 h-6 text-gray-800"/>
                </button>
            </div>
            <ToastContainer />            
        </div>
    )
}

export default UsersDashboardPage