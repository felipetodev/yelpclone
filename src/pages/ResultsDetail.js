import { useEffect } from 'react'
import Nav from "../components/Nav";
import NavOptions from "../components/NavOptions";
import SearchResultDetail from '../components/SearchResultDetail'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loadDetailBusiness } from '../actions/BusinessDetailAction'

export default function ResultsDetail() {
    const location = useLocation()
    const pathId = location.pathname.split('/')[2]

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadDetailBusiness(pathId))
    }, [pathId, dispatch])

    return(
        <div>
            <Nav />
            <NavOptions />
            <SearchResultDetail />
        </div>
    )
}

