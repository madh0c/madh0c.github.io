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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae quis, fugiat labore sequi vel error hic facere nam eius quas mollitia praesentium quod reprehenderit sint exercitationem facilis? Minima aliquid, fuga molestiae illo vero obcaecati quam voluptatibus alias tempore dicta quisquam impedit aperiam molestias facilis dolorum consequatur earum voluptate officia quia.
        </p>

        <br />

        <p className='text-xl'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non enim dolore vero, alias ullam tempora voluptatum nulla tenetur accusamus voluptatem veniam modi minus temporibus accusantium, possimus ipsum. Nesciunt, eveniet? Quibusdam facilis autem repellendus, delectus temporibus laboriosam ratione corrupti fugit neque eligendi hic obcaecati incidunt saepe earum, quam voluptatibus necessitatibus blanditiis.
        </p>
      </div>

    </div>
  )
}

export default About