import React, { Component } from 'react'
import './MovieDetails.css'
import { fetchMovie } from '../../apiCalls';
import { Link, Redirect } from 'react-router-dom';

export default class MovieDetails extends Component {
    constructor() {
        super();
        this.state = {
            movie: {},
            error: false
        }
    }

    componentDidMount(){
        fetchMovie(this.props.id).then((data) => {
          this.setState({ movie: data.movie })
        })
        .catch(() => {
          this.setState({ error: true })
        })
    }

    render(){
        const {error, movie} = this.state

        if (error) {
            return <Redirect to="/not-found" />
        }

        return (
            <div className='movie-details-container'>
                <section className='main-info'>
                    <div className='image-section'>
                        <div className='home-button-container'><Link to="/"><button className='home-button'>Return to all movies</button></Link></div>
                        <div className='title-section'>
                            <h1 className='movie-title'>{movie.title} {movie.average_rating}/10</h1>
                        </div>
                        <img className='hero-image' src={movie.backdrop_path} alt='movie backdrop'/>
                        <p className='tagline'>{movie.tagline}</p>
                    </div>
                    <div className='main-details'>
                        <p className='overview'>
                            <b>Description:</b> {movie.overview}
                        </p>
                    <h3 className='release-date'>Release Date: {movie.release_date}</h3>
                    <h3 className='runtime'>Runtime: {movie.runtime} minutes</h3>
                    <h3 className='budget'>Movie Budget: ${movie.budget?.toLocaleString("en-US")}</h3>
                    <h3 className='revenue'>Movie Revenue: ${movie.revenue?.toLocaleString("en-US")}</h3>
                    <h3 className='genres'>Genres: {String(movie.genres)} </h3>
                    </div>
                </section>
            </div>
        )
    }
}