import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:items-center justify-between'>
        <div className='text-2xl lg:text-5xl font-bold gap-y-3 '>
            <h1>{new Date().toUTCString().slice(0,16)}</h1>
            <h1 className='uppercase'>welcome to our new fast food</h1>
        </div>
        <input className='p-2 outline-none rounded-md w-full lg:w-[25vw]' type="search" name="search" placeholder='search here' id="" />
    </div>
  )
}

export default Navbar