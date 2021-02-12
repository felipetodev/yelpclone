import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'
import NavRight from './NavRight'
import { useHistory } from 'react-router-dom'

function Nav({ term, location }) {

    const history = useHistory()

    const search = (term, location) => {
        const urlEncodedTerm = encodeURI(term)
        const urlEncodedLocation = encodeURI(location)
        history.push(`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`)
    }

    return (
        <nav className='nav__container'>
            <Logo />
            <SearchBar search={search} term={term} location={location} />
            <NavRight />
        </nav>
    )
}

export default React.memo(Nav)