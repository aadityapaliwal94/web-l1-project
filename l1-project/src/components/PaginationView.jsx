import { ChevronLeft, ChevronRight } from "lucide-react"

const PaginationView = ({pageNumber, isPrevButtonEnabled, isNextButtonEnabled, _onPrevButtonTap, _onNextButtonTap}) => {
    return (
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
    )
}

export default PaginationView