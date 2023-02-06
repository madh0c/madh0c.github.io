import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const NavBar = () => {
  const links = [
    {
      id: 1,
      link: 'About'
    },
    {
      id: 2,
      link: 'Portfolio'
    },
    {
      id: 3,
      link: 'Contact'
    }
  ];

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
      <div>
        <h1 className='text-7xl font-signature ml-2'>madhoc</h1>
      </div>

      <ul className='flex'>
        {links.map(({id, link}) => (
            <li key={id} className='px-20 cursor-pointer font-bold text-3xl hover:scale-105 hover:text-cyan-300 duration-100'>{link}</li>
        ))}
        
      </ul>
    </div>
  )
}

export default NavBar