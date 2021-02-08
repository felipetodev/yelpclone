import { yelpSearchBusinessesURL } from '../api'

export const loadSearchBusinesses = (term_key, location_key) => async (dispatch) => {
    const options = {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            withCredentials: true,
            'Content-Type': 'application/json',
        }
    }

    dispatch({
        type: "LOADING_BUSINESSES"
    })

    await fetch(yelpSearchBusinessesURL(term_key, location_key), options)
        .then(res => res.json())
        .then(businessesData => {
            dispatch({
                type: "FETCH_BUSINESSES",
                payload: {
                    businesses: businessesData
                }
            })
        })
        .catch(err => {
            dispatch({
                type: "FETCH_BUSINESSES_ERROR"
            })
        })
}