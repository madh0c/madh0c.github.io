import React from 'react'
import HeroImage from '../assets/heroImage.png'
import { AiFillCaretRight } from 'react-icons/ai'

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-gray-900 to-cyan-800'>        
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
          <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-semibold text-white'>
              Jeffery Pan
            </h2>
            <p className='text-gray-400 py-4 max-w-md'>
              Comp-Sci Student & Aspiring Software Engineer
            </p>
            <div>
              <button>
                Portfolio
                <span>
                  <AiFillCaretRight />
                </span>                
              </button>
            </div>
          </div>

          <div>
            <img src={HeroImage} alt="heroImg" className='rounded-full mx-auto w-2/3' />
          </div>
        </div>
    </div>
  )
}

export default Home