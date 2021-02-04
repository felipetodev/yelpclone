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

    try {
        const businessesData = await axios.get(yelpSearchBusinessesURL(term_key, location_key), options)

        dispatch({
            type: "FETCH_BUSINESSES",
            payload: {
                businesses: businessesData.data,
            }
        })

        dispatch({
            type: "TOTAL_BUSINESSES",
            payload: {
                businesses: businessesData.data,
            }
        })
    } catch (err) {
        let message = `Ops! an error has ocurred :(`
        alert(message)
    }
}