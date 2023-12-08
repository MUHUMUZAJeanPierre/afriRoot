import React from 'react'
// import {BiMenuAltRight} from 'react-icons/bs'

import { Link } from 'react-router-dom'

const Modal = () => {
  return (
    <div>
        
        <div style={{color: '#A16733'}} className="afriContainer pb-[2rem]  font-bold text-xl  bg-white h-[20rem] lg:h-60 w-full absolute grid grid-cols-1 mt-16 px-[1.5rem] items-end">
          <Link to="/">
          <a href="" className="hover:underline" >
              Home
            </a>
          </Link>
          <Link to="/about">
            <a href="" className="hover:underline">
              About Us
            </a>
          </Link>

           <Link to="programs"> 
          <a href="" className="hover:underline">
            Courses
          </a>
           </Link> 

           <Link to="fabClass"> 
          <a href="" className="hover:underline">
            Today's history
          </a>
           </Link> 

           <Link to="ourServices"> 
          <a href="" className="hover:underline">
            Grades
          </a>
           </Link>
          <Link to="/dashboard">
            <a href="" className="hover:underline">
              Dashboard
            </a>
          </Link>
        </div>
        
    </div>
  )
}

export default Modal