export default function SearchResultDetail() {
    return (
        <div className='search__result-detail'>
            <img src='http://unsplash.it/1200' alt='banner' />
            <div className='search__detail'>
                <div className='store__logo'>
                    <img src='http://unsplash.it/50' alt='store-logo' />
                </div>
                <div className='store__description'>
                    <h1>Pollo Caballo</h1>
                    <div className='store__detail'>
                        <div className='rating'>
                            <span>⭐⭐⭐</span>
                        </div>
                        <span>200 Reviews</span>
                        <button>Details</button>
                    </div>
                    <div className='store__status'>
                        <span>Open</span>
                        <span>11:00AM - 9:00PM</span>
                        <p>Hours updated 2 days ago</p>
                    </div>
                </div>
            </div>
        </div>
    )
}