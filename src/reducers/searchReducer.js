const initState = {
    businesses: [],
}

const searchReducer = (state=initState, action) => {
    switch(action.type) {
        case "FETCH_BUSINESSES":
            return { ...state, businesses: action.payload.businesses }
        default:
            return { ...state }
    }
}

export default searchReducer