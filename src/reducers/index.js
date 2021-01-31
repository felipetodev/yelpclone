import { combineReducers } from 'redux'
import searchReducer from './searchReducer'

const rootReducer = combineReducers({
    businesses: searchReducer,
})

export default rootReducer