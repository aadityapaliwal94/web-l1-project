import { useLocalStorageArray } from "../hooks/useLocalStorageArray"
import { useEffect, useMemo, useState } from "react"
import { showInfoToast } from "../utils/helper"
import { ToastContainer } from "react-toastify"
import TableView from "../components/TableView"
import PaginationView from "../components/PaginationView"
import { PAGE_SIZE } from "../utils/constants"

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
        const list = getItems(pageNumber, PAGE_SIZE)
        console.log("Buyers " + JSON.stringify(list))
        return list
    }, [pageNumber, getItems])

    useEffect(() => {
        if (usersList.length < PAGE_SIZE) {
            setIsNextButtonEnabled(false)
        } else {
            setIsNextButtonEnabled(true)
        }
    }, [usersList])

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
            <h1 className="text-4xl font-bold pt-5">
                Manage
            </h1>
            <div className="flex-1 overflow-auto">                
                <TableView colData={col_data} listData={usersList} />
            </div>
            {(usersList.length != 0 || pageNumber != 0) &&
                <PaginationView pageNumber={pageNumber} _onPrevButtonTap={_onPrevButtonTap} _onNextButtonTap={_onNextButtonTap} isPrevButtonEnabled={isPrevButtonEnabled} isNextButtonEnabled={isNextButtonEnabled} />
            }
            
            <ToastContainer />            
        </div>
    )
}

export default UsersDashboardPage