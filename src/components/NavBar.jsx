import React, { useState } from 'react'
import logo from '../assets/logo.png'
import {FaBars, FaTimes} from 'react-icons/fa'

const NavBar = () => {

  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'About'
    },
    {
      id: 2,
      link: 'Projects'
    },
    {
      id: 3,
      link: 'Resume'
    },
    {
      id: 4,
      link: 'Contact'
    }
  ];

  return (
    <div className='flex justify-between items-center w-full h-24 px-4 text-white fixed'>
      <div>
        <img src={logo} alt='home button pic' className='w-1/3 md:w-1/4 cursor-pointer pr-20 hover:saturate-200'/>
      </div>

      <ul className='hidden md:flex pr-4'>
        {links.map(({id, link}) => (
            <li key={id} className='px-8 cursor-pointer text-l font-extrabold hover:scale-110 hover:text-cyan-300 duration-150'>{link}</li>
        ))}
      </ul>
      
      {/* mobile view */}
      <div className='flex md:hidden cursor-pointer z-10 text-gray-500' onClick={() => setNav(!nav)}>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} /> }
      </div>     
      
      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-900 to-cyan-800'>
        {links.map(({id, link}) => (
            <li key={id} className='px-4 cursor-pointer py-10 font-medium text-4xl'>{link}</li>
        ))}
        </ul>
      )}

    </div>
  )
}

export default NavBar