import React from 'react'
import img from '../assets/Food/2.avif'
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { decreaseItem, increaseItem, removeCard } from '../Store/CardSlice';

const CardItem = ({id, name,  price, image, qty}) => {
    const dispatch = useDispatch()
    return (
        <div className='bg-slate-900 p-2 rounded-md mt-1 shadow-md flex gap-5 z-50'>
            <MdDelete onClick={()=>dispatch(removeCard({id}))} className='absolute right-5 hover:text-red-800 cursor-pointer' /> 
            <img className='w-[55px] h-[55px] rounded-full' src={image} alt="" />
            <div className='flex'>
                <div className='leading-5 mt-3 font-semibold'>
                    <h1>{name}</h1>
                    <h1>$: {price}</h1>
                </div>
                <div className='flex items-center justify-between gap-3 absolute right-6 mt-8'>
                    <FaMinus onClick={()=>qty > 1 ? dispatch(decreaseItem({id})) : qty = 1} className='cursor-pointer hover:bg-green-900 transition-all duration-500 rounded-full' />
                    <span> {qty} </span>
                    <FaPlus onClick={()=>dispatch(increaseItem({id}))} className='cursor-pointer hover:bg-green-900 transition-all duration-500 rounded-full' />
                </div>
            </div>
        </div>
    )
}

export default CardItem