import { useEffect } from 'react'
import Nav from "../components/Nav";
import NavOptions from "../components/NavOptions";
import SearchResultDetail from '../components/SearchResultDetail'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loadDetailBusiness } from '../actions/BusinessDetailAction'

export default function ResultsDetail() {
    const location = useLocation()
    const dispatch = useDispatch()
    const pathId = location.pathname.split('/')[2]

    useEffect(() => {
        dispatch(loadDetailBusiness(pathId))
        localStorage.setItem('viewed', JSON.stringify({key: pathId}))
    }, [pathId, dispatch])

    return(
        <div>
            <Nav />
            <NavOptions />
            <SearchResultDetail />
        </div>
    )
}

