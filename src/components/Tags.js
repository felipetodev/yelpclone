export default function Tags({ id, categories }) {
    const tags = categories.map((category) => (<span key={id + category.title} className='tags'>{category.title}</span>))
    
    return tags
}