export default function SearchResult() {
    return (
        <div className='search__result'>
            <div className='business__info'>
                <div className='img__container'>
                    <img src='http://unsplash.it/150' alt='img'/>
                </div>
                <div className='search__result-details'>
                    <h2>Burgermeister</h2>
                    <span>⭐⭐⭐⭐</span>
                    <span>34</span>
                    <p>$$$ <span className='tags'>Burgers</span> <span className='tags'>Dinner</span></p>
                </div>
            </div>
            <div className='business__detail'>
                <p>(415) 651-5597</p>
                <p>460 Larkin St</p>
                <p>Civic Center</p>
            </div>
        </div>
    )
}