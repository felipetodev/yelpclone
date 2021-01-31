import { yelpSearchBusinessesURL } from '../api'
import axios from 'axios'

export const loadSearchBusinesses = () => async (dispatch) => {
    const options = {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            withCredentials: true,
            'Content-Type': 'application/json',
        }
    }

    const businessesData = await axios.get(yelpSearchBusinessesURL(), options)

    dispatch({
        type: "FETCH_BUSINESSES",
        payload: {
            businesses: businessesData.data.businesses,
        }
    })
}