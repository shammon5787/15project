import React, { useState } from 'react'
import CardItem from './CardItem'
import { useSelector } from 'react-redux'

const Card = () => {
    const [activeCard, setactiveCard] = useState(true)
    const selectItem = useSelector((state)=>state.card.card)
    return (
        <>
            <div className={`bg-zinc-800 w-full h-full fixed top-0 right-0 lg:w-[28vw] p-3 ${activeCard ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50 `}>
                <div className='flex items-center justify-between'>
                    <h1 className='font-semibold text-3xl'>Your Orders </h1>
                    <h1 onClick={() => setactiveCard(false)} className='cursor-pointer font-semibold text-3xl hover:text-green-800 transition-all duration-500'>⨁</h1>
                </div>

                {
                    selectItem.map((item)=>{
                        return(
                            <CardItem key={item.id} id = {item.id} name = {item.name} image = {item.image} price = {item.price} qty = {item.qty} />
                        )
                    })
                }

                <div className='fixed bottom-3'>
                    <h1>Total Items: 0</h1>
                    <h1>Total Price: 0</h1>
                    <hr />
                    <button className='px-2 rounded-md font-semibold transition-all duration-500 bg-blue-950 my-2  w-[90vw] lg:w-[26vw] '>Add To Card</button>
                </div>
            </div>
            <h1 onClick={()=>setactiveCard(true)} className={`bg-white text-yellow-950 text-4xl fixed bottom-6 right-8 rounded-full cursor-pointer ${selectItem.length > 0 ? "animate-bounce" : "animate-none"} `}>⨝</h1>
            
        </>
    )
}

export default Card