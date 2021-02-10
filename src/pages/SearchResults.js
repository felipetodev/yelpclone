import { useEffect } from "react";
import { loadSearchBusinesses } from "actions/BusinessesSearchAction";
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Nav from "components/Nav";
import NavOptions from "components/NavOptions";
import SearchSummary from "components/SearchSummary";
import SearchResult from "components/SearchResult";
import Spinner from 'components/Spinner'
import Pagination from "components/Pagination";

const INITIAL_PAGE = 0
const LIMIT_LIST = 10

export default function SearchResults() {
    const dispatch = useDispatch()
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const termPath = params.get('find_desc')
    const locationPath = params.get('find_loc')
    const pagePath = params.get('start')

    useEffect(() => {
        dispatch(loadSearchBusinesses({
            termKeyword: termPath,
            locationKeyword: locationPath,
            page: pagePath || INITIAL_PAGE
        }))
    }, [dispatch, termPath, locationPath, pagePath])

    const { businesses, loading, errorMsg, totalBusinesses } = useSelector((state) => state.businesses)

    const totalPagination = Math.ceil(totalBusinesses/LIMIT_LIST) >= 5 
        ? 5 
        : Math.ceil(totalBusinesses/LIMIT_LIST)

    return (
        <div>
            <Nav term={termPath} location={locationPath}/>
            <NavOptions />
            <SearchSummary term={termPath} location={locationPath} error={errorMsg}/>
            <Spinner loading={loading} />
            {errorMsg.length ? (
                <h3 className='search__result'>{errorMsg} "{locationPath || termPath}"</h3>
            ) : ''}
            {
                !errorMsg ? businesses.map((business) => (
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
            <Pagination 
                totalPags={totalPagination} 
                term={termPath} 
                location={locationPath}
            />
        </div>
    )
}