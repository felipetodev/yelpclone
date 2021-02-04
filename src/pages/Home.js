import { useEffect } from 'react'
import Nav from '../components/Nav'
import NavOptions from '../components/NavOptions'
import Hero from '../components/Hero'
import Wrapper from '../components/Wrapper'
import SearchResult from '../components/SearchResult'
import Spinner from '../components/Spinner'
import { loadSearchBusinesses } from '../actions/BusinessesSearchAction'

import { useDispatch, useSelector } from 'react-redux'

export default function Home() {

  const dispatch = useDispatch()

  const lastTerm = localStorage.getItem('lastTerm') || ''
  const lastLocation = localStorage.getItem('lastLocation') || 'Chile' //<-- add Geolocation instead

  useEffect(() => {
      dispatch(loadSearchBusinesses(lastTerm, lastLocation))
  }, [dispatch, lastTerm, lastLocation])

  const { businesses } = useSelector((state) => state.businesses)

  return (
    <>
      <Wrapper>
        <Nav />
        <NavOptions />
        <Hero />
      </Wrapper>
      {lastTerm ? (<div className='recent__activity'>
        <h2>Recent Activity</h2>
        <span>{lastTerm} in {lastLocation}</span>
      </div>): ''}
      {
        businesses.length ? businesses.map((business) => (
          <div key={business.id}>
            <SearchResult
              id={business.id}
              name={business.name}
              alias={business.alias}
              image={business.image_url}
              categories={business.categories}
              rating={business.rating}
              review={business.review_count}
              phone={business.display_phone}
              location={business.location.display_address}
              price={business.price}
              transactions={business.transactions}
            />
          </div>
        )) : <Spinner />
      }
    </>
  )
}