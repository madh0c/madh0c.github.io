import React, { useState } from 'react'
import logo from '../assets/logo.png'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'

const NavBar = () => {

  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'projects'
    },
    {
      id: 4,
      link: 'contact'
    }
  ];

  return (
    <div className='flex justify-between items-center w-full h-16 px-4 z-10 text-white  fixed bg-gray-700'>
      <a href={'/'}>
        <img src={logo} alt='home button pic' className='object-scale-down h-10 cursor-pointer pr-2  hover:saturate-200'/>
      </a>

      <h1 className='flex-1 text-xl font-bold'>
        /madhoc-bytes
      </h1>

      <ul className='hidden md:flex pr-16 capitalize'>
        {links.map(({id, link}) => (
            <li key={id} className='px-8 cursor-pointer text-lg font-semibold hover:scale-110 hover:text-cyan-300 duration-150'>
              <Link to={link} smooth duration={500}>{link}</Link>
            </li>
        ))}
      </ul>
      
      {/* mobile view */}
      <div className='flex md:hidden cursor-pointer z-10 text-gray-500' onClick={() => setNav(!nav)}>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} /> }
      </div>     
      
      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-900 to-cyan-800'>
        {links.map(({id, link}) => (
            <li key={id} className='px-4 cursor-pointer py-10 font-medium text-xl'>
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>  
            </li>
        ))}
        </ul>
      )}

    </div>
  )
}

export default NavBar