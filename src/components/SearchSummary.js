import { useSelector } from 'react-redux'

export default function SearchSummary({ term, location }) {

    const { businesses, totalBusinesses } = useSelector((state) => state.businesses)
    console.log(totalBusinesses)
    
    return (
        <>
            <div className='search__summary'>
                <h1><strong>{term}</strong> in <strong>{location}</strong></h1>
                <p>Showing 1-{businesses.length} out of <span>{totalBusinesses}</span> results</p>
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