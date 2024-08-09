import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full
    h-screen text-white'>
      <div className='max-w-screen-lg p-4 pt-44 mx-auto flex flex-col justify-center w-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <p className='text-xl pt-10'>
          Hey I'm Jeffery! I am currently working as an IT graduate for Aon.
        </p>

        <br />

        <p className='text-xl'>
          As a high-school tutor and former e-sports player, I like to tackle challenging projects that allow me to leverage my ability to learn, adapt, and thrive in a team-oriented environment. I am currently bolstering my professional skills in a technical analysis rotation - applying concepts that I've absorbed throughout my academic journey to real-world situations.
        </p>
      </div>

    </div>
  )
}

export default About