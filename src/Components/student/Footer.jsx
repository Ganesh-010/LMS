import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gray-900 md:px-36 text-left w-full mt-10 text-white'>
      <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30'>
        <div className='flex flex-col md:items-start items-center w-full'>
          <img src={assets.logo_dark} alt="Company Logo" className="mb-4" />
          <p className='text-gray-300'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>
        <div className='flex flex-col md:items-start items-center w-full'>
          <h2 className='font-semibold mb-5'>Company</h2>
          <ul className='flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Privacypolicy</a></li>
           
          </ul>
        </div>
        <div className='hidden md:flex flex-col items-start w-full'>
          <h2 className='font-semibold text-white mb-5'>Subscribe to our newsletter</h2>
          <p className='text-sm white/80'>The latest news, articles, and resources, sent to your inbox weekly</p>
        <div className='flex items-center gap-2 pt-4'>
          <input className='borderborder-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none
          w-64 h-9 rounded px-2 text-sm' type='email' placeholder='Enter your email'   />
          <button className='bg-blue-600 w-24 h-9 text-white rounded' >Subscribe</button>
        </div>
        </div>
      </div>
      <p className="text-center text-white py-4 border-t border-white/20 text-sm">
       Copyright 2025 © Greatstack. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
