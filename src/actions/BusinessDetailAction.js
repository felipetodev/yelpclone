import { yelpSearchBusinessURL, yelpSearchBusinessReviewURL } from '../api'

export const loadDetailBusiness = (id) => async (dispatch) => {
    const options = {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            withCredentials: true,
            'Content-Type': 'application/json',
        }
    }

    dispatch({
        type: "LOADING_DETAIL"
    })

    Promise.all([
        await fetch(yelpSearchBusinessURL(id), options),
        await fetch(yelpSearchBusinessReviewURL(id), options)
    ])
        .then(responses => Promise.all(responses.map(res => res.json())))
        .then(json => {
            const detailData = json[0]
            const searchReviews = json[1]
            dispatch({
                type: "FETCH_BUSINESS_DETAIL",
                payload: {
                    detail: detailData,
                    reviews: searchReviews.reviews,
                }
            })
        })
        .catch(err => {
            console.error(err)
            dispatch({
                type: "LOADING_DETAIL_ERROR"
            })
        })
}