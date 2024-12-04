import React from 'react'
import img from '../assets/Food/3.avif'
import { FaStar } from "react-icons/fa6";

const FoodCard = ({id, name, image, price, rating, desc}) => {
    return (
        <div className='bg-slate-900 flex flex-col items-center w-full lg:w-[23vw] rounded-md  '>
            <div className='p-3 bg-zinc-900 w-full flex flex-col items-center hover:bg-white transition-all duration-500 cursor-pointer rounded-t-md opacity-60'>
                <img className='w-[200px] h-[100px] rounded-md cursor-grab hover:scale-110 transition-all duration-500' src={image} alt="" />
            </div>
            <div className='w-full p-3 '>
                <div className='flex items-center justify-between font-semibold'>
                    <h1>{name}</h1>
                    <h1>$: {price}</h1>
                </div>
                <p className='leading-5 my-2'>{desc}.</p>
                <div className='flex items-center justify-between'>
                    <span className='flex items-center gap-3'>
                        <FaStar />
                        <h1>{rating}</h1>
                    </span>
                    <button className='bg-blue-800 px-2 rounded-md font-semibold hover:bg-green-600 transition-all duration-500'>Add To Card</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard