export default function ScheduleStatus({ hours, schedule }) {

    console.log('days open', schedule)

    if(hours === true) {
        return <span>Open 🟢</span>
    } else if(hours === false) {
        return <span>Closed 🔴</span>
    } else {
        return ''
    }
}