import { combineReducers } from 'redux'
import searchReducer from './searchReducer'
import detailReducer from './detailReducer'

const rootReducer = combineReducers({
    businesses: searchReducer,
    detail: detailReducer
})

export default rootReducer