import { useState } from 'react'
import Rating from '../components/Rating'
import Tags from '../components/Tags'
import { Link } from 'react-router-dom'
import imageError from '../assets/images/no-image.png'

export default function SearchResult({ id, name, alias, image, categories, rating, review, phone, location, price, transactions }) {
    const [ fav, setFav ] = useState('')
    const favStoreToUse = localStorage.getItem(alias)

    const saveToFavourite = (e) => {
        e.preventDefault()

        if(favStoreToUse === id) {
            localStorage.removeItem(alias, id)
            setFav(!fav)
        } else {
            localStorage.setItem(alias, id)
            setFav(!fav)
        }
    }

    return (
        <Link to={`/biz/${alias}`} className='search__result'>
            <div className='business__info'>
                <div className='img__container'>
                    <img src={image ? image : imageError} alt={alias} />
                    <span className={favStoreToUse === id ? 'tags fav' : 'tags'} onClick={saveToFavourite}>❤️</span>
                </div>
                <div className='search__result-details'>
                    <h2>{name}</h2>
                    <Rating rating={rating}/>
                    <span> {review} reviews</span>
                    <p>
                        {price} •
                        <Tags categories={categories} id={id}/>
                    </p>
                    <div className='business__method'>
                        {transactions ? transactions.map(transaction => {
                            return (
                                <span key={transaction}><strong>✔</strong> {transaction}</span>
                            )
                        }) : ''}
                    </div>
                </div>
            </div>
            <div className='business__detail'>
                <p>{phone ? phone : '📵 No Phone'}</p>
                {location.map(address => (
                    <p key={id + address}>{address}</p>
                ))}
            </div>
            {/* <span className='viewed'>👁️</span> */}
        </Link>
    )
}