import Rating from '../components/Rating'
import Tags from '../components/Tags'
import { Link } from 'react-router-dom'

export default function SearchResult({ id, name, alias, image, categories, rating, review, phone, location, price }) {

    return (
        <Link to={`/biz/${alias}`} className='search__result'>
            <div className='business__info'>
                <div className='img__container'>
                    <img src={image} alt={alias} />
                    <span className='tags'>💖</span>
                </div>
                <div className='search__result-details'>
                    <h2>{name}</h2>
                    <Rating rating={rating}/>
                    <span> {review} reviews</span>
                    <p>
                        {price} ● 
                        <Tags categories={categories} id={id}/>
                    </p>
                </div>
            </div>
            <div className='business__detail'>
                <p>{phone ? phone : '📵 No Phone'}</p>
                {location.map(address => (
                    <p key={id + address}>{address}</p>
                ))}
            </div>
        </Link>
    )
}