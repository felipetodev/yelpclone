import 'styles/styles.scss'
import Home from 'pages/Home';
import SearchResults from 'pages/SearchResults'
import ResultsDetail from 'pages/ResultsDetail'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/search' component={SearchResults} />
      <Route path='/biz/:id' component={ResultsDetail} />
      <Route path='*' component={() => <h1>ERROR: 404 :( 💔</h1>} />
    </Switch>
  );
}

export default App;