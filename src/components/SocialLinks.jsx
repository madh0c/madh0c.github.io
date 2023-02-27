import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const SocialLinks = () => {

    const links = [
      {
        id: 1,
        child: (
          <>
            Linked <FaLinkedin size={26}/>
          </>
        ),
        href: 'https://www.linkedin.com/in/jefferypan/',
        style: 'rounded-tr-md'
      },
      {
        id: 2,
        child: (
          <>
            GitHub <FaGithub size={26}/>
          </>
        ),
        href: 'https://github.com/madhoc-bytes'
      },
      {
        id: 3,
        child: (
          <>
            E-mail <HiOutlineMail size={26}/>
          </>
        ),
        href: 'mailto:jdpan002@gmail.com',
        style: 'rounded-br-md'
      }
    ];

  return (
    <div className='hidden lg:flex flex-col top-[40%] left-0 fixed'>
      <ul>            
        {links.map(({id, child, href, style}) => (
          <li key={id} className={'flex justify-between items-center w-28 h-12 px-3 ml-[-65px] bg-gray-500 hover:ml-[-4px] hover:rounded-md duration-300' + ' ' + style}>
              <a 
                href={href} 
                className='flex justify-between items-center w-full text-white' 
                target='_blank' 
                rel='noreferrer'
              >
                {child}
              </a>
          </li>
        ))}     
      </ul>
    </div>
  )
}

export default SocialLinks