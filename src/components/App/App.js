import './App.css';
import React from "react"
import Movies from '../Movies/Movies'
import Header from '../Header/Header'
import { Route, Switch } from 'react-router-dom';
import Error from '../Error/Error'
import MovieDetails from '../MovieDetails/MovieDetails'

const App = () => {
    return (
      <main className='main'>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div>
                  <Header />
                  <Movies/>
                </div>
              )
            }}
          />
          <Route path='/movies/:id'
            render={
              ({ match }) => <MovieDetails id={match.params.id} />}/>
          <Route path="*" render={()=> <Error message="Page Not Found"/>} />
        </Switch>
      </main>
    )
}

export default App;
