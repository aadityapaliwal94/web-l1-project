const MostBoughtCard = ({item, index}) => {
    return (
        <div
            key={item.product}
            className="card">
            <div className="text-sm text-theme-secondary">#{index + 1} Most Bought</div>
            <div className="mt-1 text-lg font-semibold text-theme-primary">{item.product}</div>
            <div className="mt-1 text-sm text-theme-secondary">
                {item.count} {item.count === 1 ? "purchase" : "purchases"}
            </div>
        </div>
    )
}

export default MostBoughtCard