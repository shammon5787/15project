import React, { useEffect, useState } from 'react'
import FoodData from '../assets/Data/FoodData.js'

const CategoryMenu = () => {
    const [categories, setcategories] = useState([])
    const ListUniqueCategory = ()=>{
        const uniqueCategory = [... new Set(FoodData.map((food)=>food.category)) ]
        setcategories(uniqueCategory)
    }
    useEffect(() => {
      ListUniqueCategory()
    }, [])
    
    return (
        <div className='mt-20'>
            <h1 className='text-2xl text-blue-300 lg:text-4xl font-bold uppercase'>order your favforite food</h1>
            <div className='flex items-center gap-5 my-2 overflow-x-scroll lg:overflow-x-hidden py-2'>
                {
                    categories.map((category, i)=>(
                        <button key={i} className='bg-blue-800 px-2 rounded-md font-semibold text-xl hover:bg-green-600 transition-all duration-500'>{category}</button>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoryMenu