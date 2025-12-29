const MostBoughtCard = ({item, index}) => {
    return (
        <div
            key={item.product}
            className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div className="text-sm text-gray-500">#{index + 1} Most Bought</div>
            <div className="mt-1 text-lg font-semibold">{item.product}</div>
            <div className="mt-1 text-sm text-gray-600">
                {item.count} {item.count === 1 ? "purchase" : "purchases"}
            </div>
        </div>
    )
}

export default MostBoughtCard