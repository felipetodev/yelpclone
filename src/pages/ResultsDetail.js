import { useEffect } from 'react'
import Nav from "../components/Nav";
import NavOptions from "../components/NavOptions";
import SearchResultDetail from '../components/SearchResultDetail'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadDetailBusiness } from '../actions/BusinessDetailAction'
import Reviews from '../components/Reviews';

export default function ResultsDetail() {
    const location = useLocation()
    const dispatch = useDispatch()
    const pathId = location.pathname.split('/')[2]

    useEffect(() => {
        dispatch(loadDetailBusiness(pathId))
        dispatch({ type: 'CLEAR_BUSINESS_FETCH' })
        localStorage.setItem('viewed', pathId)
    }, [pathId, dispatch])

    const { reviews } = useSelector((state) => state.detail)

    return(
        <div>
            <Nav />
            <NavOptions />
            <SearchResultDetail />
            <h4 className='review__detail'>Review Highlights</h4>
            {reviews ? 
                (reviews.map((review) => (
                    <Reviews 
                        key={review.id} 
                        id={review.id}
                        text={review.text}
                        timeCreated={review.time_created}
                        user={review.user}
                    />
                ))) 
            : <span className='review__container'>No reviews 😢</span>}
        </div>
    )
}

