import { useEffect } from 'react'
import './styles/styles.scss'
import { ApolloProvider } from '@apollo/client'
import { client } from './client'
import Query from './components/Query'
import Home from './pages/Home';
import SearchResults from './pages/SearchResults'
import { Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loadSearchBusinesses } from './actions/BusinessesSearchAction'


function App() {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(loadSearchBusinesses())
  })

  return (
    <ApolloProvider client={client}>
      <Switch>
        <Route path='/search' component={SearchResults} />
        <Route path='/' component={Home} />
        <Query />
      </Switch>
    </ApolloProvider>
  );
}

export default App;