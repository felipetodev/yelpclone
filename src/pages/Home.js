import { useEffect } from 'react'
import Nav from '../components/Nav'
import NavOptions from '../components/NavOptions'
import Hero from '../components/Hero'
import Wrapper from '../components/Wrapper'
import { getGeolocation } from '../actions/GeolocationAction'
import { useDispatch } from 'react-redux'
import GeoResults from '../components/GeoResults'
import BusinessResults from '../components/BusinessResults'

export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGeolocation())
  }, [dispatch])

  return (
    <>
      <Wrapper>
        <Nav />
        <NavOptions />
        <Hero />
      </Wrapper>
      <BusinessResults />
      <GeoResults />
    </>
  )
}