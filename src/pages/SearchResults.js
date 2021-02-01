import Nav from "../components/Nav";
import NavOptions from "../components/NavOptions";
import SearchSummary from "../components/SearchSummary";
import SearchResult from "../components/SearchResult";
import Spinner from '../components/Spinner'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function SearchResults() {
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const termPath = params.get('find_desc')
    const locationPath = params.get('find_loc')

    
    const { businesses, isLoading } = useSelector((state) => state.businesses)

    return (
        <div>
            <Nav term={termPath} location={locationPath}/>
            <NavOptions />
            <SearchSummary term={termPath} location={locationPath} />
            {
                !isLoading ? businesses.map((business) => (
                    <div key={business.id}>
                        <SearchResult 
                            id={business.id}
                            name={business.name}
                            alias={business.alias}
                            image={business.image_url}
                            status={business.is_closed}
                            // categories={business.categories[0].alias}
                            rating={business.rating}
                            review={business.review_count}
                            coordinates={business.coordinates}
                            phone={business.display_phone}
                            location={business.location.address1}
                            price={business.price}
                        />
                    </div>
                )) : <Spinner />
            }
        </div>
    )
}