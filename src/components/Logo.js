import { Link } from 'react-router-dom'

export default function Logo() {
    return (
        <div className='logo'>
            <Link to='/'>
                <img src='' alt='logo' />
            </Link>
        </div>
    )
}