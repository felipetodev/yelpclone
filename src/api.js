const base_url = 'https://api.yelp.com/v3'

// Solucion a bloqueo CORS
const cors_url = 'https://cors-anywhere.herokuapp.com/'

export const yelpSearchBusinessesURL = ({ termKeyword, locationKeyword, page, limit = 10 }) => `${cors_url}${base_url}/businesses/search?term=${termKeyword}&location=${locationKeyword}&offset=${page * limit}&limit=${limit}`
export const yelpSearchBusinessURL = (id) => `${cors_url}${base_url}/businesses/${id}`
export const yelpSearchBusinessReviewURL = (id) => `${cors_url}${base_url}/businesses/${id}/reviews`
export const yelpSearchByGeolocation = (lat, lon) => `${cors_url}${base_url}/businesses/search?latitude=${lat}&longitude=${lon}`