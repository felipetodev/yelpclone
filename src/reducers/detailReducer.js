const initState = {
    detail: [],
}

const detailReducer = (state=initState, action) => {
    switch(action.type) {
        case "FETCH_BUSINESS_DETAIL":
            return { ...state, detail: action.payload.detail }
        case "CLEAR_FETCH":
            return { ...state, detail: [] }
        default:
            return { ...state }
    }
}

export default detailReducer