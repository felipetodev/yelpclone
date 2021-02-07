import Nav from "../components/Nav";
import NavOptions from "../components/NavOptions";
import SearchSummary from "../components/SearchSummary";
import SearchResult from "../components/SearchResult";
import Spinner from '../components/Spinner'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import { loadSearchBusinesses } from "../actions/BusinessesSearchAction";


export default function SearchResults() {
    const dispatch = useDispatch()
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const termPath = params.get('find_desc')
    const locationPath = params.get('find_loc')

    useEffect(() => {
        dispatch(loadSearchBusinesses(termPath, locationPath))
    }, [dispatch, termPath, locationPath])

    const { businesses, loading } = useSelector((state) => state.businesses)

    return (
        <div>
            <Nav term={termPath} location={locationPath}/>
            <NavOptions />
            <SearchSummary term={termPath} location={locationPath} />
            <Spinner loading={loading} />
            {
                businesses.length ? businesses.map((business) => (
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