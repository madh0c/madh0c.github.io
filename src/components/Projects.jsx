import React from 'react'
import dungeonMania from '../assets/projects/dungeonMania.png'
import website from '../assets/projects/website.png'
import simpleIotNetwork from '../assets/projects/simpleIotNetwork.png'

const Projects = () => {

  const projects = [
    {
      id: 1,
      src: dungeonMania,
      name: 'Dungeon Mania',
      href: 'https://github.com/madhoc-bytes/dungeon-mania'
    },
    {
      id: 2,
      src: website,
      name: 'Portfolio Website',
      href: 'https://github.com/madhoc-bytes/madhoc-bytes.github.io'
    },
    {
      id: 3,
      src: simpleIotNetwork,
      name: 'Simple IoT Network',
      href: 'https://github.com/madhoc-bytes/simple-IoT-network'
    }
  ]

  return (
    <div name='projects' className='w-full md:h-screen'>
      <div className='max-w-screen-lg p-4 pb-28 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
          <p className='py-6 text-xl'>Check out some of my work here!</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {projects.map(({id, src, name, href}) => (
            <div key={id} className='shadow-lg shadow-gray-400 rounded-lg'>
              <div className='flex items-center justify-center'>
                <p className='m-4 text-2xl font-bold'>{name}</p>
              </div>
              <img src={src} alt="" className='rounded-md duration-150 hover:scale-105' />
              <a href={href} target='_blank'>
                <div className='flex items-center justify-center'>
                  <button className='m-1 hover:scale-110 duration-150'>Code</button>
                </div>
              </a>
              
            </div>          
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects