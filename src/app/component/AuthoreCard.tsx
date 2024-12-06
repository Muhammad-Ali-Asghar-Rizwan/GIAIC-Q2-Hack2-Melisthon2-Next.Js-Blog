import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";

const AuthorCard = () => {
  return (
    <div className="max-w-[1200px] mx-auto bg-white shadow-lg rounded-lg p-6 mt-12">
      <div className='flex items-center animate-fadeIn'>
        <Image src="/images/my 3.jpg" alt='picture' width={300} height={500} className='w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500'/>

        <div>
          <h3 className='text-xl font-bold'>Ali Asghar</h3>
          <p className='text-slate-500'>Fronted Developer</p>
        </div>
      </div>

      <p className='mt-4 text-black  leading-relaxed'>
      I am frontend web developer, I am proficient in front-end technology, capable of building complete web applications from start to finish. My skill set likely includes languages and frameworks like HTML, CSS, JavaScript,Typescript (and popular libraries like React and Next), as well as server-side language like Node.js.I thrive on bringing ideas to life through clean, efficient code
      </p>
      <div className='mt-4 flex space-x-3'>
        <Link href="#" className='px-4 py-2 flex items-center gap-1 text-white bg-blue-600 rounded-md hover:bg-blue-700'>
        Linkedin
        <CiLinkedin className='text-[25px]'/>
        </Link>
        
        <Link href="#" className='px-4 py-2 flex items-center gap-1 text-white bg-black rounded-md hover:bg-stone-800'>
        Github
        <VscGithub className='text-[25px]'/>
        </Link>
        
      </div>
    </div>
  )
}

export default AuthorCard
