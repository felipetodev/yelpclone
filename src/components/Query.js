import { useQuery, gql } from '@apollo/client'

const BURRITOS = gql`
  query {
  search(term:"burrito",
         location:"san francisco") {
    total
    business {
      name
      reviews {
        text
        rating
        time_created
        url
      }
    }
  }
}
`;

export default function Query() {
    const { loading, error, data } = useQuery(BURRITOS);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return data.search.map((item) => (
      <p>Response: {item.total}</p>
    ));
  }