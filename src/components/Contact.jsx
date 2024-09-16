import React from 'react'
import { FaRegSmileBeam } from 'react-icons/fa'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen p-4 '>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>

          
          <p className='pt-6 flex'>
            Get in touch - simply fill out this form!             
            <FaRegSmileBeam className='ml-1' size={18}/>                      
          </p> 
                
          
        </div>

        <div className='flex justify-center items-center'>
          <form action="https://getform.io/f/0cd18b63-ece4-4632-9c30-9fbb4eaa9f9d" method='POST' className='flex flex-col w-full md:w-1/2'>
            <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md' />
            <input type="text" name='email' placeholder='Enter your email' className='p-2 my-4 bg-transparent border-2 rounded-md ' />
            <textarea name="message" rows="10" className='p-2 bg-transparent border-2 rounded-md ' placeholder='Enter your message'></textarea>

            <button className=' bg-gradient-to-b from-cyan-500 to-blue-500 text-white px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-200'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact