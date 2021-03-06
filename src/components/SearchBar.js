import { useState } from 'react'

export default function SearchBar(props) {
    const [ term, setTerm ] = useState(props.term || '')
    const [ location, setLocation ] = useState(props.location || '')

    const onChangeTermHandler = (e) => {
        setTerm(e.target.value)
    }

    const onChangeLocationHandler = (e) => {
        setLocation(e.target.value)
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        if(typeof props.search === 'function') {
            props.search(term, location)
            localStorage.setItem('lastTerm', term)
            localStorage.setItem('lastLocation', location)
        }
    }

    return (
        <form onSubmit={onSubmitForm}>
            <input 
                onChange={onChangeTermHandler} 
                value={term} type='text' 
                placeholder='tacos, cheap dinner, etc...'
            />
            <input 
                onChange={onChangeLocationHandler} 
                value={location} 
                type='text' 
                placeholder='Los Angeles, CA'
            />
            <button onClick={onSubmitForm} type='submit'>🔎</button>
        </form>
    )
}