import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadSearchBusinesses } from 'actions/BusinessesSearchAction'
import SearchResult from 'components/SearchResult'
import Spinner from './Spinner'

const INITIAL_PAGE = 0

export default function BusinessResults() {
    const dispatch = useDispatch()
    const lastTerm = localStorage.getItem('lastTerm') || ''
    const lastLocation = localStorage.getItem('lastLocation') || ''

    useEffect(() => {
        if (lastLocation && lastLocation !== '') {
            dispatch(loadSearchBusinesses({
                termKeyword: lastTerm,
                locationKeyword: lastLocation,
                page: INITIAL_PAGE
            }))
        }
    }, [dispatch, lastTerm, lastLocation])

    const { mostValuesBusinesses, loading } = useSelector((state) => state.businesses)

    return (
        <div className='businesses__container'>
            <Spinner loading={loading} />
            {mostValuesBusinesses.length ? (
                <div className='recent__activity'>
                    <h2>Recent Activity</h2>
                    <span>{lastTerm} in {lastLocation}</span>
                </div>
            ) : ''}
            {
                !loading ? mostValuesBusinesses.map((business) => (
                    <div key={business.id}>
                        <SearchResult
                            id={business.id}
                            name={business.name}
                            alias={business.alias}
                            image={business.image_url}
                            categories={business.categories}
                            rating={business.rating}
                            review={business.review_count}
                            phone={business.display_phone}
                            location={business.location.display_address}
                            price={business.price}
                            transactions={business.transactions}
                        />
                    </div>
                )) : ''
            }
        </div>
    )
}