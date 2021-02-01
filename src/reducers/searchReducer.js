const initState = {
    businesses: [],
    isLoading: true,
}

const searchReducer = (state=initState, action) => {
    switch(action.type) {
        case "FETCH_BUSINESSES":
            return { ...state, businesses: action.payload.businesses }
        case "LOADING":
            return { ...state, isLoading: false}
        case "CLEAR_FETCH":
            return { ...state, businesses: [] }
        default:
            return { ...state }
    }
}

export default searchReducer