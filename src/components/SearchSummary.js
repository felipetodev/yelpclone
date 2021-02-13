import { useSelector } from 'react-redux'

export default function SearchSummary({ term, location, actualPage }) {

    const { businesses, totalBusinesses, errorMsg } = useSelector((state) => state.businesses)

    if (errorMsg) return ''

    return (
        <>
            <div className='search__summary'>
                {term
                    ? <h1><strong>{term}</strong> in <strong>{location}</strong></h1>
                    : <h1>Top {businesses.length} Best Places near {location}</h1>
                }
                <p>Showing {parseInt(actualPage + 1)}-{actualPage === 0 ? businesses.length : actualPage * businesses.length + 10} out of <span>{totalBusinesses}</span> results</p>
            </div>
            <div className='search__filters'>
                <div className='price__filter'>
                    <button>$</button>
                    <button>$$</button>
                    <button>$$$</button>
                    <button>$$$$</button>
                </div>
                <div className='method__filter'>
                    <button>Delivery</button>
                    <button>Takeout</button>
                </div>
            </div>
        </>
    )
}