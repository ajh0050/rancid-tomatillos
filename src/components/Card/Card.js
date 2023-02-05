import React from 'react'
import './Card.css'

const Card = ({rating, id, releaseDate, image, selectMovie}) => {
    return (
        <div className='card' onClick={()=> selectMovie(id)}>
            <img src={image} alt="Movie Poster" className='poster-image'></img>
            <div className="card-footer">
                <div className='info-container'>
                    <p className='card-date'>{releaseDate}</p>
                    <p className='card-rating'>{parseFloat(rating.toFixed(2))}/10</p>
                </div>
            </div>
        </div>
    )
}

export default Card