import React from 'react'
import { Link } from 'react-router-dom'

const Recipe = ({ currentIndex, title, src, onclick }) => {
    return (
        <Link to="/details" className="link">
            <div className='recipe-block' onClick={() => onclick(currentIndex)}>
                <img src={src} alt="imageOfRecipe"></img>
                <h3>{title}</h3>
            </div >
        </Link>
    )
}

export default Recipe
