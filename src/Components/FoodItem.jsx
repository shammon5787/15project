import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../Data/FoodData'
import { useSelector } from 'react-redux'

const FoodItem = () => {
    const category = useSelector((state)=>state.category.category)
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-2'>
        {
            FoodData.map((food)=>{
                return(
                    <FoodCard key={food.id} id = {food.id} name = {food.name} price = {food.price} image = {food.image} desc = {food.desc} rating = {food.ratting} />
                )
            }) 
        }


    </div>
  )
}

export default FoodItem