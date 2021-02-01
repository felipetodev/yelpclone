import { yelpSearchBusinessesURL } from '../api'
import axios from 'axios'

export const loadSearchBusinesses = (term_key, location_key) => async (dispatch) => {
    const options = {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            withCredentials: true,
            'Content-Type': 'application/json',
        }
    }

    dispatch({
        type: 'LOADING',
    })

    const businessesData = await axios.get(yelpSearchBusinessesURL(term_key, location_key), options)

    dispatch({
        type: "FETCH_BUSINESSES",
        payload: {
            businesses: businessesData.data.businesses,
        }
    })
}