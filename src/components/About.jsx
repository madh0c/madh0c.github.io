import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full
    h-screen bg-gradient-to-b from-cyan-800 to-gray-900 text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <p className='text-xl mt-10'>
          Hey I'm Jeffery! I am currently completing my Bachelor's of Computer Science at the University of New South Wales.
        </p>

        <br />

        <p className='text-xl'>
          As a former e-sports player and aspiring software engineer, I am excited to tackle challenging projects that allow me to leverage my ability to learn, adapt, and thrive in a team-oriented environment. I am currently seeking an internship to gain industry experience and eager to apply my technical skills to real-world situations.
        </p>
      </div>

    </div>
  )
}

export default About