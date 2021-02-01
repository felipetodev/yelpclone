import Categories from '../components/Categories'
import { Link } from 'react-router-dom'

export default function SearchResult({ id, name, alias, image, status, categories, rating, review, coordinates, phone, location, price }) {

    return (
        <Link to={`/biz/${alias}`} className='search__result'>
            <div className='business__info'>
                <div className='img__container'>
                    <img src={image} alt={alias} />
                </div>
                <div className='search__result-details'>
                    <h2>{name}</h2>
                    <span>(⭐{rating}) - </span>
                    <span>{review} reviews</span>
                    <p>{price} ● <span className='tags'><Categories /></span></p>
                </div>
            </div>
            <div className='business__detail'>
                <p>{phone ? phone : '📵 No Phone'}</p>
                <p>{location}</p>
            </div>
        </Link>
    )
}