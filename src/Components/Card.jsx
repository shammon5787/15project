import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { BiSolidCart } from "react-icons/bi";

const Card = () => {
    const [activeCard, setactiveCard] = useState(true)
  return (
   <>
    <div className={`bg-blue-950 w-full h-full fixed top-0 right-0 lg:w-[26vw] p-3 ${activeCard ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50 `}>
        <div className='flex items-center justify-between'>
            <h1 className='text-3xl font-semibold'>Your Orders</h1>
            <IoMdClose onClick={()=>setactiveCard(false)} className='text-3xl font-semibold cursor-pointer hover:text-red-950 hover:bg-white rounded-full transition-all duration-500' />
        </div>
        <div className='font-semibold fixed bottom-0'>
            <h1>Total Items: </h1>
            <h1>Total Price: </h1>
            <hr />
            <button className='bg-slate-600 px-2 rounded-md font-semibold hover:text-black hover:bg-white transition-all duration-500 my-2 w-[90vw] lg:w-[23vw] '>Check Out</button>
        </div>
    </div>
     <BiSolidCart onClick={()=>setactiveCard(true)} className='text-5xl fixed right-8 bottom-5 text-green-600 cursor-pointer bg-white rounded-full' />
   </>
  )
}

export default Card