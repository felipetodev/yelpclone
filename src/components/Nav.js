import Logo from './Logo'
import SearchBar from './SearchBar'
import NavOptions from './NavOptions'

export default function Nav() {
    return (
        <nav className='nav__container'>
            <Logo />
            <SearchBar />
            <NavOptions />
        </nav>
        
    )
}