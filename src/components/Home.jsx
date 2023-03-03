import React from 'react'
import HeroImage from '../assets/heroImage.png'
import { AiFillCaretRight } from 'react-icons/ai'

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-gray-900 to-cyan-800'>        
        <div className='max-w-screen-lg px-4 mx-auto flex flex-col items-center justify-center h-full md:flex-row'>
          <div className='flex flex-col justify-center h-full'>
            <h2 className='text-3xl sm:text-5xl font-bold text-white'>
              Hi, I'm Jeffery
            </h2>
            <p className='text-gray-400 py-4 max-w-md'>
              Penultimate-Year Comp-Sci Student at UNSW
            </p>
            <div>
              <button className='group text-white w-fit px-6 py-2 my-2 flex items-center rounded-full bg-gradient-to-r from from-cyan-500 to-blue-500'>
                Projects
                <span className='ml-1 group-hover:rotate-90 duration-150'>
                  <AiFillCaretRight size={18}/>
                </span>                
              </button>
            </div>
          </div>

          <div>
            <img src={HeroImage} alt="heroImg" className='rounded-full mx-auto place-self-auto w-[45%]' />
          </div>
        </div>
    </div>
  )
}

export default Home