import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../assets/Data/FoodData.js'

const FoodItem = () => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3'>
        {
            FoodData.map((food)=>{
                return(
                    <FoodCard key={food.id} id = {food.id} name = {food.name} price = {food.price} image = {food.image} rating = {food.ratting} desc = {food.desc} />
                )
            })
        }
    </div>
  )
}

export default FoodItem