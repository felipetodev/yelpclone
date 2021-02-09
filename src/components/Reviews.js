import imageError from '../assets/images/no-image.png'

export default function Reviews({ id, text, user }) {
    return (
        <div className='review__container'>
            <div className='user__container'>
                <img src={user.image_url ? user.image_url : imageError} alt={user.name}/>
                <span>{user.name}</span>
            </div>
            <p>"{text}"</p>
        </div>
    )
}