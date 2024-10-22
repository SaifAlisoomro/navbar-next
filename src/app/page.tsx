import React from 'react'
import Image from 'next/image'
import profile from '../../image/saifi.png'

function home() {
  return ( 
    <div className='flex bg-gray-800 font-bold'>
      <main className='flex ml-10 rounded-full'> <Image  src={profile} alt='my logo' width={60} height={60} className='rounded-full'/></main>
      <h1 className='flex font-bold text-wrap-500 mt-3 ml-3 text-2xl font-thin text-white'>SAIF SOOMRO</h1>
      <div className='flex text-white justify-between list-none space-x-3 ml-72 mt-5'>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact us</li>
      </div>
      <button className='flex ml-auto mr-5 mt-4 text-white hover:text-orange-400'> Login</button>
     <div className='flex items-center'>
      <input type="text" placeholder='Search Here'  className='px-4 py-2 bordor bordor-gray-300 rounded-md focus:outline-none'/>
      <button className='px-4 py-2 bg-orange-500 text-white rounded-r-md'>Search</button>
     </div>
     
    </div>
   
  )
}

export default home
