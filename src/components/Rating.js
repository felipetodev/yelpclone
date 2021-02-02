export default function Rating({ rating }) {
    return (
        <>
            {rating ? [ ...Array(Math.floor(rating))].map((star, i) => {
                const ratingValue = i + 1
                return <span key={ratingValue}>⭐</span>
            }) : '⭐'}
        </>
    )
}
    