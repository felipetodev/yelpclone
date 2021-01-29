import Nav from './components/Nav'
import './styles/styles.scss'
import { ApolloProvider } from '@apollo/client'
import { client } from './client'
import Query from './components/Query'

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Nav />
        <Query />
      </ApolloProvider>
    </div>
  );
}

export default App;