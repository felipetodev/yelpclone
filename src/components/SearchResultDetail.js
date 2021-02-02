import { useSelector } from 'react-redux'
import ScheduleStatus from './ScheduleStatus'
import Rating from './Rating'

export default function SearchResultDetail() {

    const { detail } = useSelector((state) => state.detail)

    return (
        <div className='search__result-detail'>
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
                        <span className='is__claimed'>{detail.is_claimed = true ? '✔ Claimed' : ''}</span>
                        <span>{detail.price}</span>
                        {detail.categories ? (detail.categories.map((category, index) => (
                            <button key={index}>{category.alias}</button>
                        ))) : null}
                    </div>
                    <div className='store__status'>
                        <ScheduleStatus 
                            hours={detail.hours ? detail.hours[0].is_open_now : ''}
                            schedule={detail.hours ? detail.hours[0].open : ''}
                        />
                        <span>11:00AM - 9:00PM</span>
                        <p>Hours updated 2 days ago</p>
                    </div>
                </div>
            </div>
        </div>
    )
}