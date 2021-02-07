export default function Spinner({ loading }) {
    return (
        loading ? (
            <div className="loader">
                <div className="dot first"></div>
                <div className="dot second"></div>
                <div className="dot third"></div>
            </div>
        ) : ''
    )
}