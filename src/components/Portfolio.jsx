import React from 'react'
import dungeonMania from '../assets/projects/dungeonMania.png'

const Portfolio = () => {

  const projects = [
    {
      id: 1,
      src: dungeonMania
    }
  ]

  return (
    <div name='portfolio' className='bg-gradient-to-b from-gray-900 to-cyan-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
          <p className='py-6 text-xl'>Check out some of my work here!</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          <div className='shadow-lg shadow-cyan-600 rounded-lg'>
            <div className='flex items-center justify-center'>
              <p className='m-4 text-2xl font-bold'> Dungeon Mania</p>
            </div>
            <img src={dungeonMania} alt="" />
            <div className='flex items-center justify-center'>
              <button className='m-1 hover:scale-110 duration-150'> Code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio