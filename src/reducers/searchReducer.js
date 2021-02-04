const initState = {
    businesses: [],
    totalBusinesses: [],
    isLoading: true,
}

const searchReducer = (state=initState, action) => {
    switch(action.type) {
        case "FETCH_BUSINESSES":
            return { ...state, businesses: action.payload.businesses.businesses }
        case "TOTAL_BUSINESSES":
            return { ...state, totalBusinesses: action.payload.businesses.total }
        case "LOADING":
            return { ...state, isLoading: false}
        case "CLEAR_BUSINESS_FETCH":
            return { ...state, businesses: [] }
        case "CLEAR_ALL":
            return { ...state, businesses: [], detail: [], reviews: [], hourSchedule: [] }
        default:
            return { ...state }
    }
}

export default searchReducer