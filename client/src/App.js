import logo from "./logo.svg";
import "./App.css";
import AddPerson from "./AddPerson";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import AddCar from "./addCar";
import Records from "./records";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <AddPerson />
        <AddCar />

        <Records />
      </div>
    </ApolloProvider>
  );
}

export default App;
