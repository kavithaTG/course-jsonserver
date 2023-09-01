import React from 'react'
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

const Nav = () => {
  return (
   <div className="navmaindiv">
    <div className="container">
        <ul className='d-flex p-3 mt-2 p-4'>
            <li><Link className="text-decoration-none" to="/">Regiter</Link></li>
            <li><Link className='text-decoration-none' to="/coursedetail">Course</Link></li>
            <Link  to="/detail"></Link> 
        </ul>
    </div>
   </div>
  )
}

export default Nav