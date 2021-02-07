import { combineReducers } from 'redux'
import searchReducer from './searchReducer'
import detailReducer from './detailReducer'
import geolocationReducer from './geolocationReducer'

const rootReducer = combineReducers({
    businesses: searchReducer,
    detail: detailReducer,
    geolocation: geolocationReducer
})

export default rootReducer