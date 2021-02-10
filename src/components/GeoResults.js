import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadGeoBusinesses } from 'actions/GeolocationAction'
import SearchResult from './SearchResult'
import Spinner from './Spinner'

export default function GeoResults() {
    const dispatch = useDispatch()
    const { geolocation, mostValuesGeoBusinesses, loading, errorMsg } = useSelector((state) => state.geolocation)
    const latitudePath = geolocation.latitude
    const longitudePath = geolocation.longitude

    useEffect(() => {
        if (latitudePath && latitudePath !== '') {
            dispatch(loadGeoBusinesses(latitudePath, longitudePath))
        }
    }, [dispatch, latitudePath, longitudePath])

    return (
        <div className='geolocation__container'>
            <div className='recent__activity'>
                {errorMsg ? errorMsg :
                    <h2>Most Values Near {
                        mostValuesGeoBusinesses.length
                            ? mostValuesGeoBusinesses[0].location.city
                            : 'You'}
                    </h2>
                }
            </div>
            <Spinner loading={loading} />
            {
                mostValuesGeoBusinesses.length ? mostValuesGeoBusinesses.map((business) => (
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