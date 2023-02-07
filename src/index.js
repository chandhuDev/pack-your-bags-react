import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter } from 'react-router-dom'
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider,createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
  uri: 'http://localhost:1337/graphql'
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('JWT');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
</BrowserRouter>
);


