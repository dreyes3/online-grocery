

function SearchBar(props) {
    const filterText = props.filterText
    const isStockOnly = props.inStockOnly

    return (
        <form>
            <input
                type="text"
                placeholder="Search..."
                value={filterText}
                onChange={e => props.onFilterTextChange(e.target.value)}
            />
            <p>
                <input
                    type="checkbox"
                    checked={isStockOnly}
                    onChange={e => props.onInStockChange(e.target.value)}
                />
                {' '}
                Only show products in stock
            </p>

        </form>
    )
}

export default SearchBar