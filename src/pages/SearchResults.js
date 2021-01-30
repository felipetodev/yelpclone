import Nav from "../components/Nav";
import NavOptions from "../components/NavOptions";
// import SearchResultDetail from "../components/SearchResultDetail";
import SearchSummary from "../components/SearchSummary";
import SearchResult from "../components/SearchResult";
import { useLocation } from 'react-router-dom'


export default function SearchResults() {
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const term = params.get('find_desc')
    const locationParam = params.get('find_loc')

    return (
        <div>
            <Nav term={term} location={locationParam}/>
            <NavOptions />
            <SearchSummary term={term} location={locationParam}/>
            <SearchResult />
            <SearchResult />
        </div>
    )
}