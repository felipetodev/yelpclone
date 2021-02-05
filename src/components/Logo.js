import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export default function Logo() {
    const dispatch = useDispatch()

    const clearSearch = () => {
        dispatch({ type: 'CLEAR_BUSINESS_FETCH' })
        dispatch({ type: 'CLEAR_DETAIL_FETCH' })
    }

    return (
        <div className='logo'>
            <Link to='/' onClick={clearSearch}>
                GURU<span>EAT</span>
            </Link>
        </div>
    )
}