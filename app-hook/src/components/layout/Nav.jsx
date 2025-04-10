import React from 'react'
import {Link} from "react-router-dom"
const Nav = () => {
  return (
    <nav className='flex flex-row items-center justify-center gap-10 bg-[#333] text-white font-semibold py-2 text-[20px]'>
      <Link to={"/"}>Home</Link>
      <Link to={"/About"}>About</Link>
      <Link to={"/Contact"}>Contact</Link>
      <Link to={"/Create"}>Create</Link>
    </nav>
  )
}

export default Nav