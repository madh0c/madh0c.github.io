import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

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

  function toggleTheme() {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className='flex justify-center items-center w-full h-16 px-4 z-10 fixed bg-gray-100 dark:bg-slate-900 bg-opacity-80 border-b border-gray-300 dark:border-gray-700'>
      <a href={'/'}>
        <img src={logo} alt='home button pic' className='object-scale-down h-10 cursor-pointer  hover:saturate-200' />
      </a>

      <h1 className='flex-1 text-xl font-bold'>
        /madhoc-bytes
      </h1>

      <nav className='hidden md:flex pr-16 capitalize items-center'>
        {links.map(({ id, link }) => (
          <div key={id} className='px-6 cursor-pointer text-base font-semibold hover:scale-110 hover:text-cyan-300 duration-150'>
            <Link to={link} smooth duration={500}>{link}</Link>
          </div>
        ))}

        <button onClick={toggleTheme} className="flex justify-center items-center dark:bg-purple-600 dark:hover:bg-purple-700 bg-cyan-700 hover:bg-cyan-800 transition-color duration-200 ease-in-out mx-6 px-2 py-2 rounded-lg">
          <svg class="dark:hidden" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path class="fill-slate-300" d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z" />
            <path class="fill-slate-400" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z" />
          </svg>
          <svg class="hidden dark:block" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path class="fill-slate-400" d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z" />
            <path class="fill-slate-500" d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z" />
          </svg>
        </button>

      </nav>

      {/* mobile view */}
      <div className='flex md:hidden cursor-pointer z-10  text-gray-500' onClick={() => setNav(!nav)}>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white dark:bg-slate-900'>
          {links.map(({ id, link }) => (
            <li key={id} className='px-4 cursor-pointer py-10 font-medium text-xl'>
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}

          <button onClick={toggleTheme} className="flex justify-center items-center dark:bg-purple-600 dark:hover:bg-purple-700 bg-cyan-700 hover:bg-cyan-800 transition-color duration-200 ease-in-out px-10 py-5 rounded-lg">
            <svg class="dark:hidden" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <path class="fill-slate-300" d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z" />
              <path class="fill-slate-400" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z" />
            </svg>
            <svg class="hidden dark:block" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <path class="fill-slate-400" d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z" />
              <path class="fill-slate-500" d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z" />
            </svg>
          </button>
        </ul>
      )}

    </div>
  )
}

export default NavBar