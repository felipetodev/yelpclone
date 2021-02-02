import { yelpSearchBusinessURL } from '../api'
import axios from 'axios'

export const loadDetailBusiness = (id) => async (dispatch) => {
    const options = {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            withCredentials: true,
            'Content-Type': 'application/json',
        }
    }

    try {
        const detailData = await axios.get(yelpSearchBusinessURL(id), options)

        dispatch({
            type: "FETCH_BUSINESS_DETAIL",
            payload: {
                detail: detailData.data,
            }
        })
    } catch (err) {
        let message = `Ops! an error has ocurred :(`
        alert(message)
    }
    
}