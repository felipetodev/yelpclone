import React from 'react'
import { useHistory } from 'react-router-dom'

function Pagination({ totalPags, page, setPage, term, location }) {
    const history = useHistory()

    const handlePrevPage = () => {
        if (page > 0) {
            setPage(prevPage => prevPage - 1)
            history.push(`/search?find_desc=${term}&find_loc=${location}&start=${page - 1}`)
        }
    }

    const handlePage = (e) => {
        const pageIndex = e.target.dataset.page
        setPage(pageIndex)
        history.push(`/search?find_desc=${term}&find_loc=${location}&start=${pageIndex}`)
    }

    const handleNextPage = () => {
        if (page < totalPags) {
            setPage(prevPage => prevPage + 1)
            history.push(`/search?find_desc=${term}&find_loc=${location}&start=${page + 1}`)
        }
    }

    return (
        <div className='pagination__container'>
            <div className='pagination__numbers'>
                <span onClick={(handlePrevPage)}>{'<'}</span>
                {totalPags
                    ? [...Array(totalPags)].map((_, i) => {
                        const pageValue = i + 1
                        return (
                            <span
                                className={pageValue === page + 1 || 0 ? 'active' : ''}
                                key={pageValue}
                                data-page={pageValue - 1}
                                onClick={handlePage}>
                                {pageValue}
                            </span>
                        )
                    })
                    : ''}
                <span onClick={handleNextPage}>{'>'}</span>
            </div>
            <div className='total__pagination'>
                <p>1 of {totalPags}</p>
            </div>
        </div>
    )
}

export default React.memo(Pagination)