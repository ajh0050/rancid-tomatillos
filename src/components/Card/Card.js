import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({rating, id, releaseDate, image}) => {
    return (
        <Link className='card' to={`/movies/${id}`}>
            <img src={image} alt="Movie Poster" className='poster-image'></img>
            <div className="card-footer">
                <div className='info-container'>
                    <p className='card-date'>{releaseDate}</p>
                    <p className='card-rating'>{parseFloat(rating.toFixed(2))}/10</p>
                </div>
            </div>
        </Link>
    )
}

export default Card