import { yelpSearchByGeolocation } from '../api'

export const loadGeoBusinesses = (lat, lon) => async (dispatch) => {
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

    await fetch(yelpSearchByGeolocation(lat, lon), options)
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

export const getGeolocation = () => async (dispatch) => {
    navigator.geolocation.getCurrentPosition(
        (position) => {

            dispatch({
                type: "FETCH_GEOLOCATION_DATA",
                payload: {
                    geolocation: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    }
                }
            })
        },
        (err) => {
            console.log(err)
            dispatch({
                type: "FETCH_GEODATA_ERROR"
            })
        })
}


/*
GEOLOCATION WITHOUT ASK USER PERMISSIONS
(available for free just in local environments - for production it must be paid)

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
*/

/*
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
        .catch(err =>
            console.warn('not available in production environments 😔')
        )
}
*/