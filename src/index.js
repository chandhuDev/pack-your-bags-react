import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter } from 'react-router-dom'
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';




const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
</BrowserRouter>
);


