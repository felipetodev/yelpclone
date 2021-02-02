import { useState, useEffect } from 'react'

export default function useGeolocation() {
    const [ location, setLocation ] = useState('')

    const onSuccess = (location) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude
            }
        })
    }
    
    const onError = (error) => {
        setLocation({
            loaded: true,
            error,
        })
    }

    useEffect(() => {
        if(!('geolocation' in navigator)) {
            onError({
                code: 0,
                message: 'Geolocation not supported'
            })
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }, [])

    return location
}