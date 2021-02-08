import SchemeColorSwitcher from './SchemeColorSwitcher'

export default function NavRight() {
    return (
        <div className='nav__right-container'>
            <span>Write a Review</span>
            <SchemeColorSwitcher />
            <span>🔔</span>
            {/* <img src='' alt='user' /> */}
        </div>
    )
}