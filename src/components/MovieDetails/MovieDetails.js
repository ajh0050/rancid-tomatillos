import React from 'react'
import './MovieDetails.css'

const MovieDetails = ({movie,returnHome}) => {
    console.log('movie prop inside MovieDetails', movie)
    
    return (
        <div className='movie-details-container'>
            <section className='main-info'>
                <div className='image-section'>
                    <img className='hero-image' src={movie.backdrop_path} alt='movie backdrop'/>
                    <p className='tagline'>{movie.tagline}</p>
                </div>
                <div className='main-details'>
                    <div className='title-section'>
                    <h1 className='movie-title'>{movie.title} {movie.average_rating}/10</h1>
                    <button className='home-button' onClick={()=>returnHome()}>Return to all movies</button>
                    </div>
                    <p className='overview'>
                        <b>Description:</b> {movie.overview}
                    </p>
                </div>
            </section>
            <section className='extra-details'>
                <h3 className='release-date'>Release Date: {movie.release_date}</h3>
                <h3 className='runtime'>Runtime: {movie.runtime} minutes</h3>
                <h3 className='budget'>Movie Budget: ${movie.budget.toLocaleString("en-US")}</h3>
                <h3 className='revenue'>Movie Revenue: ${movie.revenue.toLocaleString("en-US")}</h3>
                <h3 className='genres'>Genres: {String(movie.genres)} </h3>
            </section>
        </div>
    )
}

export default MovieDetails