const TableView = ({colData, listData}) => {
    return (
        <div className="mt-10 w-full overflow-x-auto">
            {listData.length > 0 ? (
            <table className="w-full min-w-[600px] border border-solid border-gray-100 text-center">
                <thead className="bg-gray-100 h-10">
                    <tr>
                        {colData.map((col) => {
                            return (
                                <th key={col.key} className="px-3 md:px-6 py-3 font-medium text-sm md:text-base">
                                    {col.label}
                                </th>
                            )
                        })}                            
                    </tr>
                </thead>
                <tbody className="h-10">
                    {listData.map((row, index) => {
                        return (
                            <tr key={index} className="border-b border-gray-100">
                                {colData.map((col, index) => {
                                    return (
                                        <td key={index} className="px-3 md:px-6 py-4 font-light text-sm md:text-base">
                                            {row[col.key]}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}                                             
                </tbody>
            </table>
            ) : (
                <div className="h-full col-span-full text-center py-12 text-gray-500">
                    <span className="text-gray-500">No data found</span>
                </div>
            )}
        </div>
    )
}

export default TableView