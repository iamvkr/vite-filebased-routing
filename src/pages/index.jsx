import { Github, Home } from 'lucide-react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const index = () => {
  const [username, setusername] = useState("");
  const navigate = useNavigate();

  const handleDynamicRoute = () => {
    navigate("/dynamicRoute/" + username)
  }
  return (
    <div className='flex flex-col min-h-[70vh] items-center justify-center gap-y-5'>
      <h3 className='text-3xl font-bold flex items-center gap-x-4 mt-4'>
        <Home/>
        <span>Home page</span>
        <Home/>
      </h3>
      <h3 className='text-2xl font-bold text-center'>A Template for Next js like Routing in React Vite </h3>
      <h3 className='text-xl font-semibold text-center'>Pre Installed Libraries with this template</h3>
      <ul className='list-disc list-inside'>
        <li>Tailwind css ^3.4.17</li>
        <li>react-router-dom ^7.1.1</li>
        <li>lucide-react ^0.469.0</li>
      </ul>

      <h3 className='font-bold'>Also Support Dynamic Route:</h3>
      <h3 className=''>/dynamicRoute/[username]/index.jsx</h3>
      <p>
        <input type="text" placeholder='enter user name' className='border-2 outline-none border-blue-600 rounded p-2 dark:text-black' value={username} onChange={(e) => { setusername(e.target.value) }} />
      </p>
      <p>
        <button className='bg-blue-600 text-white px-8 py-2 rounded' onClick={handleDynamicRoute}>Submit</button>
      </p>
      <p>
        <a href='https://github.com/iamvkr/vite-filebased-routing' className='bg-blue-600 text-white px-8 py-2 rounded flex items-center gap-x-2'>
          <span>Installation</span>
          <Github className='w-4 h-4'/>
        </a>
      </p>
    </div>
  )
}

export default index