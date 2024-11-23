import React from 'react'
import img from '../Food/4.avif'
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeCard } from '../Store/CardSlice';

const CardItem = ({id, name, image, price, qty}) => {
    const dispatch = useDispatch()
  return (
    <div className='bg-slate-800 p-2 rounded-md mt-1 shadow-xl flex gap-5'>
        <MdDelete onClick={()=>dispatch(removeCard({id}))} className='absolute right-7 cursor-pointer hover:text-red-900' />
        <img className='rounded-full w-[55px] h-[55px]' src= {image} alt="" />
        <div className='flex font-semibold'>
            <div className='leading-4 mt-4'>
                <h1>{name}</h1>
                <h1>$: {price}</h1>
            </div>
            <div className='flex items-center gap-3 absolute mt-8 right-6 '>
                <FaMinus className='cursor-pointer hover:text-green-600' />
                <span>{qty}</span>
                <FaPlus className='cursor-pointer hover:text-green-600' />
            </div>
        </div>
    </div>
  )
}

export default CardItem