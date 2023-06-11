import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import DataFetchFromDB from "./DataFetchFromDB";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql",
  });

  return (
    <ApolloProvider client={client}>
      <h1>Recipe App</h1>
      <DataFetchFromDB />
    </ApolloProvider>
  );
}

export default App;
