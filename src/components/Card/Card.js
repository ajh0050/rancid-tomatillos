import React from 'react'
import './Card.css'

const Card = ({title, rating, id, releaseDate}) => {
    console.log('rating',rating)
    return (
        <div className='card'>
            <h3>{title}</h3>
            <p>Rating: {parseFloat(rating.toFixed(2))}</p>
            <p>Release Date: {releaseDate}</p>
        </div>
    )
}

export default Card