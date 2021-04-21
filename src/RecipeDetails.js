import React from 'react'

const RecipeDetails = ({ title, source, calories, ingredients }) => {
    return (
        <>
            <h1>{title}</h1>
            <div className='detail'>
                <div >
                    <img src={source} alt="recipe"></img>
                    <h3>Calories : {Math.floor(calories)} kJ </h3>
                </div>
                <div >
                    <h1>Ingredients needed:</h1>
                    <ol>
                        {ingredients.map(ingredient => (
                            <li>{ingredient.text}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default RecipeDetails
