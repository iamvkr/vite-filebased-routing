import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul className='flex h-12 items-center justify-center gap-x-4 text-blue-600 bg-slate-100'>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/settings"}>Settings</Link></li>
            <li><Link to={"/posts"}>posts</Link></li>
        </ul>
    </div>
  )
}

export default Navbar