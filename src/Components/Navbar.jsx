import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:items-center justify-between'>
        <div className='text-4xl font-bold font-sans'>
            <h1> {new Date().toUTCString().slice(0, 16)} </h1>
            <h1 className='uppercase'>welcome to our new food center</h1>
        </div>
        <input className='p-2 w-full lg:w-[24vw] rounded-md text-slate-900 outline-none font-semibold ' type="search" name="search" placeholder='Search here' id="" />
    </div>
  )
}

export default Navbar