import { useSelector } from 'react-redux'
import OpenStatus from './OpenStatus'
import Rating from './Rating'
import Spinner from './Spinner'

export default function SearchResultDetail() {
    const { detail, hourSchedule } = useSelector((state) => state.detail)
    const timeFormat = (num) => num.match(/.{1,2}/g).join(":")

    return (
        <>
            {detail.id ? (<div className='search__result-detail'>
                <img src={detail.image_url} alt={detail.name} />
                <div className='search__detail'>
                    <div className='store__logo'>
                        <img src={detail.image_url} alt={detail.alias} />
                    </div>
                    <div className='store__description'>
                        <h1>{detail.name}</h1>
                        <div className='store__detail'>
                            <div className='rating'>
                                <Rating rating={detail.rating}/>
                            </div>
                            <span>{detail.review_count} reviews</span>
                            <button>Details</button>
                        </div>
                        <div className='store__info'>
                            <span className='is__claimed'>{detail.is_claimed === true ? '✔ Claimed' : '⚠ Unclaimed'}</span>
                            <span>• {detail.price} •</span>
                            {detail.categories ? (detail.categories.map((category, index) => (
                                <button key={index}>{category.alias}</button>
                            ))) : null}
                        </div>
                        <div className='store__status'>
                            <OpenStatus 
                                hours={detail.hours ? detail.hours[0].is_open_now : ''}
                            />
                            {hourSchedule.map(hour => (
                                <p key={hour.start + hour.end}>{timeFormat(hour.start)} - {timeFormat(hour.end)} 
                                    <strong className={hourSchedule.length > 1 ? 'display-dot' : 'remove-dot'}>•</strong>
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>) : <Spinner />}
        </>
    )
}