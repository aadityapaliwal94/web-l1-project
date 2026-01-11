const InvoiceList = ({list, col_data}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {list.length > 0 ? (
            list.map((invoice, index) => (
                <div 
                    key={index}
                    className="card"
                >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-4">
                                <div>
                                    <span className="text-sm text-theme-secondary">{col_data[0].label}:</span>
                                    <span className="ml-2 font-medium text-theme-primary">{invoice[col_data[0].key]}</span>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4 text-sm">
                                <div>
                                    <span className="text-theme-secondary">{col_data[1].label}:</span>
                                    <span className="ml-2 font-medium text-theme-primary">{invoice[col_data[1].key]}</span>
                                </div>
                                <div>
                                    <span className="text-theme-secondary">{col_data[2].label}:</span>
                                    <span className="ml-2 font-medium text-theme-primary">{invoice[col_data[2].key]}</span>
                                </div>
                                <div>
                                    <span className="text-theme-secondary">{col_data[3].label}:</span>
                                    <span className="ml-2 font-medium text-theme-primary">{invoice[col_data[3].key]}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <span 
                                className={`px-4 py-2 rounded-full text-sm font-medium ${
                                    invoice[col_data[4].key] === 'purchased' 
                                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                                        : invoice[col_data[4].key] === 'Pending'
                                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                }`}
                            >
                                {invoice[col_data[4].key]}
                            </span>
                        </div>
                    </div>
                </div>
            ))
        ) : (
            <div className="h-full col-span-full text-center py-12 text-theme-muted">
                No invoices found
            </div>
        )}
        </div>
    )
}

export default InvoiceList