export default function SearchSummary({ term, location }) {

    return (
        <>
            <div className='search__summary'>
                <h1><strong>{term}</strong> in <strong>{location}</strong></h1>
                <p>Showing 1-20 out of 543 results</p>
            </div>
            <div className='search__filters'>
                <div className='price__filter'>
                    <button>$</button>
                    <button>$$</button>
                    <button>$$$</button>
                    <button>$$$$</button>
                </div>
                <button>Open Now</button>
            </div>
        </>
    )
}