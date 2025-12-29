const TableView = ({colData, listData}) => {
    return (
        <table className="mt-10 w-full table-fixed border border-solid border-gray-100 text-center">
            <thead className="bg-gray-100 h-10">
                <tr>
                    {colData.map((col) => {
                        return (
                            <th key={col.key} className="px-6 py-3 font-medium">
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
    )
}

export default TableView