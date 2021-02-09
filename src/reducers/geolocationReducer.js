const initState = {
    geolocation: [],
    geoBusinesses: [],
    mostValuesGeoBusinesses: [],
    errorMsg: '',
    loading: false
}

const geolocationReducer = (state=initState, action) => {
    switch(action.type) {
        case "LOADING_GEOLOCATION":
            return { ...state, loading: true, errorMsg: '' }
        case "FETCH_GEOLOCATION":
            let geoBusinessesData = action.payload.geoBusinesses
            const getGeoBusinessesFiltered = geoBusinessesData.filter((item, index) => index < 5)
            return { ...state, 
                geoBusinesses: geoBusinessesData,
                mostValuesGeoBusinesses: getGeoBusinessesFiltered,
                loading: false,
                errorMsg: ''
            }
            case "FETCH_GEOLOCATION_ERROR":
                return { ...state, loading: false, errorMsg: 'Unable to get data :(' }
            case "FETCH_GEOLOCATION_DATA":
                return { ...state, 
                    geolocation: action.payload.geolocation
                }
            case "FETCH_GEODATA_ERROR":
                return { ...state, loading: false, errorMsg: 'User denied geolocation'}
            default:
                return { ...state }
    }
}

export default geolocationReducer