import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
const Navbar = () => {
  const [openModal,setOpenModal] = useState(false);
  const [scrolling, setScrolling] = useState(false)

const toogleModal = ()=>{
    setOpenModal(!openModal)
}
const handleScroll = () =>{
  if(window.scrollY > 0) {
    setTimeout(()=>{
      setScrolling(true);
    },1000)
  } else {
    setScrolling(false);
  }
};
useEffect(()=>{
  window.addEventListener("scroll", handleScroll);
  return()=>{
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
const navbarClass = scrolling ? "bg-whiteScroll " : "bg-whiteScroll ";
  return (
    <>
      <div className={`fixed md:px-14 flex w-full font-serif  p-4 lg:px-20 justify-between items-center z-40 ${navbarClass}`}>
        <div style={{color: '#CB8342'}} className=" font-normal   text-xl italic">
          <p>AFRI ROOT</p>
        </div>

        {/* navigation */}

        <div  className="hidden lg:flex lg:space-x-4 font-normal  index font-serif" style={{color: '#CB8342'}}>
          <Link to="/">
          <a  href="" className="hover:underline px-2">
              Home
            </a>
          </Link>
          <Link to="/courses">
            <a href="" className="hover:underline px-2">
              Courses
            </a>
          </Link>

           <Link to="/history"> 
            <a href="" className="hover:underline px-2">
              Todays history
            </a>
           </Link> 

           <Link to="/grades"> 
            <a href="" className="hover:underline px-2">
              Grades
            </a>
           </Link> 

           <Link to="/about"> 
              <a href="" className="hover:underline px-2">
                About Us
              </a>
           </Link>
           <Link to="/login"> 
              <a href="" className="hover:underline px-2">
                Login
              </a>
           </Link>
           <Link to="signUp"> 
              <a href="" className="hover:underline px-2">
                signUp
              </a>
           </Link>
        </div>
            <div className="lg:hidden text-xl text-white " onClick={toogleModal}>
                <BiMenuAltRight className="bg-black" />
            </div>
        {/* </div> */}
        
      </div>
      
      {/* navigation modal */}

      {openModal && <Modal/> }

      
    </>
  );
};

export default Navbar;
