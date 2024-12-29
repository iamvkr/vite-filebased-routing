import { Info } from 'lucide-react'
import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col h-[70vh] items-center justify-center gap-y-5'>
      <h3 className='text-3xl font-bold flex items-center gap-x-4'>
        <Info/>
        <span>About Page</span>
        <Info/>
      </h3>
    </div>
  )
}

export default About