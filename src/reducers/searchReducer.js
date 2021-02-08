const initState = {
    businesses: [],
    mostValuesBusinesses: [],
    totalBusinesses: [],
    errorMsg: '',
    loading: false
}

const searchReducer = (state=initState, action) => {
    switch(action.type) {
        case "LOADING_BUSINESSES":
            return { ...state, loading: true, errorMsg: '' }
        case "FETCH_BUSINESSES":
            let businessesData = action.payload.businesses.businesses
            const getBusinessesFiltered = businessesData.filter((item, index) => index < 5)

            return { ...state, 
                businesses: businessesData,
                totalBusinesses: action.payload.businesses.total,
                mostValuesBusinesses: getBusinessesFiltered,
                loading: false,
                errorMsg: ''
            }
        case "FETCH_BUSINESSES_ERROR":
            return { ...state, 
                loading: false, 
                errorMsg: "Sorry, but we didn't understand the location you entered."
            }
        case "CLEAR_BUSINESS_FETCH":
            return { ...state, businesses: [] }
        default:
            return { ...state }
    }
}

export default searchReducer