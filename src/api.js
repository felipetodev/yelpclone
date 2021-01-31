const base_url = 'https://api.yelp.com/v3'

// Solucion a bloqueo CORS
const cors_url = 'https://cors-anywhere.herokuapp.com/'

export const yelpSearchBusinessesURL = () => `${cors_url}${base_url}/businesses/search?term=burgers&location=berlin`

// https://api.yelp.com/v3/businesses/search