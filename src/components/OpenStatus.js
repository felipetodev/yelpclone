export default function OpenStatus({ hours }) {
    if(hours === true) {
        return <span className='is-open'>Open 🟢</span>
    } else if(hours === false) {
        return <span className='is-closed'>Closed 🔴</span>
    } else {
        return ''
    }
}