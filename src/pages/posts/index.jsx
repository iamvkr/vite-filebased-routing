import { File } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <div className='flex flex-col h-[70vh] items-center justify-center gap-y-5'>
      <h3 className='text-3xl font-bold flex items-center gap-x-4'>
        <File/>
        <span>Posts INDEX PAGE</span>
        <File/>
      </h3>
      <div>
      - <Link className='underline text-blue-600 text-xl' to={"topic1"}>Topic 1</Link>
      </div>
    </div>
  )
}

export default index