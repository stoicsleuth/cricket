import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'

import client from './apollo'
import { SchedulePage, NotFoundPage } from './pages'

import './App.css'

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <SchedulePage />} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
