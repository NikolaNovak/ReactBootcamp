import React from 'react'
import style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients}) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol className={style.ingredients}>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <img className={style.image} src={image} alt=""/>
      <h3>Calories: {Math.round(calories)}</h3>

    </div>
  )
}

export default Recipe;