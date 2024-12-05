import React from 'react'
import { useDispatch } from 'react-redux'
import { addSearch } from '../Store/SearchSlice'

const Navbar = () => {
  const dispatch = useDispatch()
  return (
    <div className='flex flex-col lg:flex-row lg:items-center justify-between'>
        <div className='text-2xl lg:text-5xl font-bold gap-y-3 '>
            <h1>{new Date().toUTCString().slice(0,16)}</h1>
            <h1 className='uppercase'>welcome to our new fast food</h1>
        </div>
        <input onChange={(e)=>dispatch(addSearch(e.target.value))} className='p-2 outline-none rounded-md w-full lg:w-[25vw] text-black' type="search" name="here" placeholder='search here' id="" />
    </div>
  )
}

export default Navbar