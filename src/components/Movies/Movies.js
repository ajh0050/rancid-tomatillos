import React from 'react';
import './Movies.css';
import Card from '../Card/Card'

const Movies = ({movies}) => {

    const movieCards = movies.map(movie => {
      return (
        <Card
          title={movie.title}
          rating={movie.average_rating}
          id={movie.id}
          releaseDate={movie.release_date}
        />
      )
    })
  
    return (
      <div className='movies-container'>
        {movieCards}
      </div>
    )
  }
  
  export default Movies;