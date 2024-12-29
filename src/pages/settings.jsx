import { Settings2 } from 'lucide-react'
import React from 'react'

const Settings = () => {
  return (
    <div className='flex flex-col h-[70vh] items-center justify-center gap-y-5'>
      <h3 className='text-3xl font-bold flex items-center gap-x-4'>
        <Settings2/>
        <span>Settings Page</span>
        <Settings2/>
      </h3>
    </div>
  )
}

export default Settings