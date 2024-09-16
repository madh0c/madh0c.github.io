import React from 'react'
import HeroImage from '../assets/heroImage.png'
import { AiFillCaretRight } from 'react-icons/ai'
import { Link } from 'react-scroll'

const Home = () => {
  function getGreeting() {
    var res = ''
    const hourNow = new Date().getHours();
    console.log(hourNow);

    if (4 < hourNow && hourNow < 12) {
      res = 'Good morning';
    } else if (12 <= hourNow && hourNow < 17) {
      res = 'Good afternoon';
    } else {
      res = 'Good evening';
    }
    return res;
  }

  return (
    <div name='home' className='h-screen w-full '>        
        <div className='max-w-screen-lg px-4 py-28 mx-auto flex flex-col items-center justify-center h-full md:flex-row'>
          <div className='flex flex-col justify-center h-full'>
            <h2 className='text-3xl sm:text-4xl font-bold'>
              <blockquote>
              {getGreeting()}, 
              </blockquote>
              I'm Jeffery
            </h2>
            <p className='text-gray-600 dark:text-gray-400 py-4 max-w-md'>
              Information Technology Graduate @ Aon
            </p>
            <div>
              <Link to='projects' smooth duration={500} className='cursor-pointer group text-white w-fit px-6 py-2 my-2 flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500'>
                Projects
                <span className='ml-1 group-hover:rotate-90 duration-150'>
                  <AiFillCaretRight size={18}/>
                </span>                
              </Link>
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