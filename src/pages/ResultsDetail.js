import { useEffect } from 'react'
import Nav from "components/Nav";
import NavOptions from "components/NavOptions";
import SearchResultDetail from 'components/SearchResultDetail'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadDetailBusiness } from 'actions/BusinessDetailAction'
import Reviews from 'components/Reviews';
import Spinner from 'components/Spinner';

export default function ResultsDetail() {
    const location = useLocation()
    const dispatch = useDispatch()
    const pathId = location.pathname.split('/')[2]

    useEffect(() => {
        dispatch(loadDetailBusiness(pathId))
        localStorage.setItem('viewed', pathId)
    }, [pathId, dispatch])

    const { reviews, loading } = useSelector((state) => state.detail)

    return (
        <div>
            <Nav />
            <NavOptions />
            <SearchResultDetail />
            <Spinner loading={loading} />
            <h4 className='review__detail'>Review Highlights</h4>
            {reviews.length ?
                (reviews.map((review) => (
                    <Reviews
                        key={review.id}
                        id={review.id}
                        text={review.text}
                        user={review.user}
                        rating={review.rating}
                    />
                )))
                : <span className='review__container'>No reviews 😢</span>}
        </div>
    )
}

