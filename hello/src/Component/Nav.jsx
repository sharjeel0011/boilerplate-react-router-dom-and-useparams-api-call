import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <ul>

   <li> <Link to='/'>home</Link></li>
   <li> <Link to='Product'>Product</Link></li>

    </ul>
    </>
  )
}

export default Nav