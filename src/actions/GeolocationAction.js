import { yelpSearchBusinessesURL } from '../api'

export const loadGeoBusinesses = (term_key, location_key) => async (dispatch) => {
    const options = {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            withCredentials: true,
            'Content-Type': 'application/json',
        }
    }

    dispatch({
        type: "LOADING_GEOLOCATION"
    })

    await fetch(yelpSearchBusinessesURL(term_key, location_key), options)
        .then(res => res.json())
        .then(businessesGeoData => {
            dispatch({
                type: "FETCH_GEOLOCATION",
                payload: {
                    geoBusinesses: businessesGeoData.businesses
                }
            })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: "FETCH_GEOLOCATION_ERROR"
            })
        })
}

export const loadGeolocation = () => async (dispatch) => {
    await fetch(process.env.REACT_APP_GEOLOCATION)
        .then(res => res.json())
        .then(geolocationData => {
            dispatch({
                type: "FETCH_GEOLOCATION_DATA",
                payload: {
                    geolocation: geolocationData
                }
            })
        })
        .catch(err => console.log(err))
}