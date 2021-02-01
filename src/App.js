import './styles/styles.scss'
import { ApolloProvider } from '@apollo/client'
import { client } from './client'
import Home from './pages/Home';
import SearchResults from './pages/SearchResults'
import ResultsDetail from './pages/ResultsDetail'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <ApolloProvider client={client}>
      <Switch>
        <Route path='/search' component={SearchResults} />
        <Route path='/biz/:id' component={ResultsDetail} />
        <Route path='/' component={Home} />
      </Switch>
    </ApolloProvider>
  );
}

export default App;