export default function Reviews({ id, text, timeCreated, user }) {
    console.log(user)
    return (
        <div className='review__container'>
            <div className='user__container'>
                <img src={user.image_url} alt={user.name}/>
                <span>{user.name}</span>
            </div>
            <p>"{text}"</p>
        </div>
    )
}