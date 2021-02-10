import { useHistory } from 'react-router-dom'

export default function Pagination({ totalPags, term, location }) {
    const history = useHistory()

    const handlePrevPage = () => { } // under construction ⚠

    const handleNextPage = (e) => {
        const pageIndex = e.target.dataset.page
        history.push(`/search?find_desc=${term}&find_loc=${location}&start=${pageIndex}`)
    }

    return (
        <div className='pagination__container'>
            <div className='pagination__numbers'>
                <span onClick={handlePrevPage}>{'<'}</span>
                {totalPags
                    ? [...Array(totalPags)].map((_, i) => {
                        const pageValue = i + 1
                        return <span key={pageValue} data-page={pageValue - 1} onClick={handleNextPage}>{pageValue}</span>
                    })
                    : ''}
                <span>{'>'}</span>
            </div>
            <div className='total__pagination'>
                <p>1 of {totalPags}</p>
            </div>
        </div>
    )
}