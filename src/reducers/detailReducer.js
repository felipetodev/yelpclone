const initState = {
    detail: [],
    reviews: [],
    hourSchedule: [],
    errorMsg: '',
    loading: false
}

const detailReducer = (state=initState, action) => {
    switch(action.type) {
        case "LOADING_DETAIL":
            return { ...state, loading: true, errorMsg: '' }
        case "FETCH_BUSINESS_DETAIL": {
            let detailData = action.payload.detail
            const date = new Date()
            const indexDay = date.getDay()

            const getActualOpenHours = detailData.hours[0].open.filter(item => item.day === indexDay)
            return { ...state, 
                detail: action.payload.detail, 
                hourSchedule: getActualOpenHours,
                reviews: action.payload.reviews,
                loading: false,
                errorMsg: ''
            }
        }
        case "LOADING_DETAIL_ERROR":
            return { ...state, loading: false, errorMsg: 'unable to get detail data' }
        case "CLEAR_DETAIL_FETCH":
            return { ...state, detail: [], reviews: [] }
        default:
            return { ...state }
    }
}

export default detailReducer