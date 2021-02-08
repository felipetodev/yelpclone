import { useState, useEffect } from 'react'

const SCHEMES = {
    SYSTEM: '',
    DARK: 'dark-mode',
    LIGHT: 'light-mode'
}

export default function SchemeColorSwitcher() {
    const [scheme, setScheme] = useState()

    useEffect(() => {
        const html = document.querySelector('html')
        scheme === SCHEMES.SYSTEM
            ? html.removeAttribute('scheme')
            : html.setAttribute('scheme', scheme)
    }, [scheme])

    const handleClick = () => {
        setScheme(prevScheme =>
            prevScheme === SCHEMES.DARK
                ? SCHEMES.LIGHT
                : SCHEMES.DARK
        )
    }

    return (
        <span onClick={handleClick}>
            {
                scheme === SCHEMES.DARK
                    ? '🌞'
                    : '🌚'
            }
        </span>
    )
}