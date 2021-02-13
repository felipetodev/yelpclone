import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const INITIAL_PAGE = 0

function Pagination({ totalPags, term, location, pagePath }) {
    const [ page, setPage ] = useState(INITIAL_PAGE)
    const history = useHistory()
    
    useEffect(() => {
        pagePath === 0 ? setPage(INITIAL_PAGE) : setPage(parseInt(pagePath))
    }, [pagePath])

    const handlePrevPage = () => {
        if (page > 0) {
            history.push(`/search?find_desc=${term}&find_loc=${location}&start=${page - 1}`)
        }
    }

    const handlePage = (e) => {
        const pageIndex = parseInt(e.target.dataset.page)
        history.push(`/search?find_desc=${term}&find_loc=${location}&start=${pageIndex}`)
    }

    const handleNextPage = () => {
        if (page < totalPags - 1) {
            history.push(`/search?find_desc=${term}&find_loc=${location}&start=${page + 1}`)
        }
    }

    return (
        <div className='pagination__container'>
            <div className='pagination__numbers'>
                <span onClick={handlePrevPage}>{'<'}</span>
                {totalPags
                    ? [...Array(totalPags)].map((_, i) => {
                        const pageValue = i + 1
                        return (
                            <span
                                className={pageValue === page + 1 || 0 ? 'active' : ''}
                                key={pageValue}
                                data-page={i++}
                                onClick={handlePage}>
                                {pageValue}
                            </span>
                        )
                    })
                    : ''}
                <span onClick={handleNextPage}>{'>'}</span>
            </div>
            <div className='total__pagination'>
                <p>{page === 0 ? 1 : page + 1} of {totalPags}</p>
            </div>
        </div>
    )
}

export default React.memo(Pagination)