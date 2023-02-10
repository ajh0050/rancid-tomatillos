import React from 'react';
import './Movies.css';
import Card from '../Card/Card'
import Error from '../Error/Error'
import { fetchMovies } from '../../apiCalls';

export default class Movies extends React.Component {
  constructor() {
    super()

    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    fetchMovies()
    .then((data) => {
      this.setState({ movies: data.movies })
    })
    .catch((error) => {
      console.log('fetch movies error', error)
      this.setState({ error: error })
    })
  }

  render() {
    return (
      <div className='movies-container'>
        {this.state.error && <Error message={this.state.error} />}
        {this.state.movies.map(movie => {
          return (
            <Card
              title={movie.title}
              rating={movie.average_rating}
              id={movie.id}
              releaseDate={movie.release_date}
              image={movie.poster_path}
              key={movie.id}
            />
          )
        })}
      </div>
    )
  }
}