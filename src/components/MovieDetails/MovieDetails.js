import React from 'react'
import './MovieDetails.css'

const MovieDetails = ({movie,returnHome}) => {
    console.log('movie prop inside MovieDetails', movie)
    return (
        <div className='MovieDetails'>
            <h1>{movie.title}</h1>
            <button onClick={()=>returnHome()}>Return to all movies</button>
        </div>
    )
}

export default MovieDetails