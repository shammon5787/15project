import React from 'react'
import img from '../Food/3.avif'
import { MdOutlineStar } from "react-icons/md";

const FoodCard = ({id, name, price, image, desc, rating}) => {
    return (
        <div className='bg-gradient-to-r from-slate-500 to-slate-700 w-full lg:w-[22vw] mt-3 rounded-md '>
            <div className='p-3 bg-zinc-600 w-full flex items-center flex-col rounded-t-md hover:bg-white cursor-pointer transition-all duration-700 '>
                <img className='w-[200px] h-[100px] rounded-md cursor-grab hover:scale-110 transition-all duration-500' src={image} alt="" />
            </div>
            <div className='p-3'>
                <div className='flex items-center justify-between font-semibold'>
                    <h1>{name}</h1>
                    <h1>$: {price}</h1>
                </div>
                <p>{desc}?</p>
                <div className='flex items-center justify-between'>
                    <span className='flex items-center gap-1'>
                        <MdOutlineStar className='text-yellow-400 text-4xl' />
                        <h1 className='font-semibold'>{rating}</h1>
                    </span>
                    <button className='bg-slate-800 px-2 py-0.5 rounded-md font-semibold hover:text-black hover:bg-white transition-all duration-500 my-2'>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard