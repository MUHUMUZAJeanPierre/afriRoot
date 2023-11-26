import React from 'react'
// import {BiMenuAltRight} from 'react-icons/bs'

import { Link } from 'react-router-dom'

const Modal = () => {
  return (
    <div>
        
        <div className=" md:hidden bg-red-500 lg:h-60 w-full absolute grid grid-cols-1 mt-16 px-[9rem] items-end">
          <Link to="/">
          <a href="" className="" >
              Home
            </a>
          </Link>
          <Link to="/about">
            <a href="" className="">
              About Us
            </a>
          </Link>

           <Link to="programs"> 
          <a href="" className="">
            Courses
          </a>
           </Link> 

           <Link to="fabClass"> 
          <a href="" className="">
            Today's history
          </a>
           </Link> 

           <Link to="ourServices"> 
          <a href="" className="">
            Grades
          </a>
           </Link>
          <Link to="/dashboard">
            <a href="" className="">
              Dashboard
            </a>
          </Link>
        </div>
        
    </div>
  )
}

export default Modal