const initState = {
    detail: [],
    reviews: [],
    hourSchedule: [],
}

const detailReducer = (state=initState, action) => {
    switch(action.type) {
        case "FETCH_BUSINESS_DETAIL": {
            let detailData = action.payload.detail
            const date = new Date()
            const indexDay = date.getDay()

            const getActualOpenHours = detailData.hours[0].open.filter(item => item.day === indexDay)
            return { ...state, detail: action.payload.detail, hourSchedule: getActualOpenHours }
        }
        case "FETCH_BUSINESS_REVIEWS": 
            return { ...state, reviews: action.payload.detail.reviews }
        case "CLEAR_DETAIL_FETCH":
            return { ...state, detail: [], reviews: [], hourSchedule: [] }
        default:
            return { ...state }
    }
}

export default detailReducer