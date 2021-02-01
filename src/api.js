const base_url = 'https://api.yelp.com/v3'

// Solucion a bloqueo CORS
const cors_url = 'https://cors-anywhere.herokuapp.com/'

export const yelpSearchBusinessesURL = (term_key, location_key) => `${cors_url}${base_url}/businesses/search?term=${term_key}&location=${location_key}`
export const yelpSearchBusinessURL = (id) => `${cors_url}${base_url}/businesses/${id}`

// https://api.yelp.com/v3/businesses/search