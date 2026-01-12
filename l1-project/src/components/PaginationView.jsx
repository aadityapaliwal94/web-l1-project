import { ChevronLeft, ChevronRight } from "lucide-react"

const PaginationView = ({pageNumber, isPrevButtonEnabled, isNextButtonEnabled, _onPrevButtonTap, _onNextButtonTap}) => {
    return (
        <div className="flex justify-center gap-10 py-6 border-t border-theme-light">
            <button 
                disabled={!isPrevButtonEnabled}                    
                className="h-12 px-4 py-3 rounded border-none flex justify-center items-center gap-2 transition-opacity hover:opacity-80"
                style={{ 
                    backgroundColor: isPrevButtonEnabled ? 'var(--color-primary)' : 'var(--color-background-secondary)',
                    color: isPrevButtonEnabled ? '#ffffff' : 'var(--color-text-primary)'
                }}
                onClick={_onPrevButtonTap}>
                <ChevronLeft className="w-6 h-6" /> 
                Previous
            </button>
            <span className="self-center text-theme-primary">Page {pageNumber + 1}</span>
            <button 
                disabled={!isNextButtonEnabled}
                className="h-12 px-4 py-3 rounded border-none flex justify-center items-center gap-2 transition-opacity hover:opacity-80"
                style={{ 
                    backgroundColor: isNextButtonEnabled ? 'var(--color-primary)' : 'var(--color-background-secondary)',
                    color: isNextButtonEnabled ? '#ffffff' : 'var(--color-text-primary)'
                }}
                onClick={_onNextButtonTap}>
                Next
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>
    )
}

export default PaginationView