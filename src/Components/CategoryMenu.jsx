import React, { useEffect, useState } from 'react'
import FoodData from '../Data/FoodData.js'

const CategoryMenu = () => {
    const [categories, setcategories] = useState([])
    const ListUniqueItem = ()=>{
        const UniqueItem = [... new Set(FoodData.map((food)=>food.category))]
        setcategories(UniqueItem);
    }
    useEffect(() => {
      ListUniqueItem()
    }, [])
    
  return (
    <div className='mt-20'>
        <h1 className='uppercase text-3xl font-bold'>order your favorite</h1>
        <div className='flex items-center gap-5 overflow-x-scroll lg:overflow-x-hidden'>
            {
                categories.map((category ,i)=>{
                    return(
                        <button className='bg-slate-600 px-2 py-0.5 rounded-md font-semibold hover:text-black hover:bg-white transition-all duration-500 my-2'>{category}</button>
                    )
                })
            }
        </div>
    </div>
  )
}

export default CategoryMenu