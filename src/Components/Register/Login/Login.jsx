import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


const Login = () => {
  return (
    <>
    <div style={{background: '#FFFAF5'}} className=' w-full h-[50rem] py-[5rem]'>
        {/* <div className='bg-green-500  lg:w-[35rem] h-[35rem]  shadow-slate- shadow-2xl mx-auto my-auto pt-5 rounded-xl '> */}
            <div className=' lg:h-[35rem] lg:w-[33rem] w-[20rem] shadow-slate- shadow-2xl mx-auto rounded-xl pt-5'>
                <h1 className='font-semibold text-3xl mx-10 mt-5 lg:flex justify-center'>Login</h1>
                <p className='mx-10 mb-5 mt-3 lg:flex lg:justify-center '>Doesn't have an account yet? 
                    <Link to="/signUp" className='text-orange-700 lg:ml-[1rem]  underline '>
                        Sign Up
                    </Link>
                </p>
                <div className='mx-10'>
                    <label htmlFor="" className='font-semibold '>
                        Enter your email
                    </label><br/>
                    <input type="text" required='required'   placeholder='you@example.com' className='h-12 lg:w-[28rem] border-2  border-black rounded-lg p-4 text-black'/><br/><br/>
                    <div className=''>
                        <label htmlFor="" className='font-semibold '>Enter your password</label>
                        <Link to='/signUp'className='text-orange-700 lg:ml-[11rem] ml-[2rem] underline '>
                        Forget Password
                        </Link>
                    </div>
                    <input type="text" required="required" placeholder='Enter Your Password' className='h-12 lg:w-[28rem] border-2  border-black rounded-lg p-4 text-black'/>
                </div>
                <div className='mx-10 my-5'>
                    <button style={{background: '#CB8342'}} className='   text-white rounded-lg lg:h-14 lg:w-[28rem] w-[13.5rem] h-[3.5rem] text-2xl  font-semibold'>Log in</button>
                </div>
                    <p className=' flex mx-[3rem] font-semibold mt-8'>You can login with: </p>
                {/* <div className='bg-red-500 my-5 mx-10 p-36 '>
                    <div className='bg-blue-900 mx-auto  flex justify-evenly items m-auto py-2'>
                        <button  className='bg-white  rounded-md border-2 border-red-500 px-12 py-4 ' >
                            <FaGoogle style={{color: '#CB8342'}}/>
                        </button >
                        <button className='bg-white border-2 border-blue-500 px-12 py-2 rounded-md'>
                            <FaFacebookF className='text-blue-500'/>
                        </button>
                        <button className='bg-white border-2 border-blue-500 px-12 py-2 rounded-md'>
                            <FaLinkedinIn className='text-blue-500'/>
                        </button>
                    </div>
                </div> */}
                <div className=' mx-10 my-6 pb-6 lg:h-14 lg:w-[28rem] lg:flex justify-evenly'>
                
                    <button  className='bg-white text-red-600  rounded-md border-2 border-white px-8 py-4 shadow-slate shadow-2xl ' >
                        <FaGoogle />
                    </button >
                    <button  className='bg-white text-blue-700  rounded-md border-2 border-white px-8 py-4 shadow-slate shadow-2xl' >
                        <FaLinkedin />
                    </button >
                    <button  className='bg-white text-blue-700  rounded-md border-2 border-white px-8 py-4 shadow-slate shadow-2xl' >
                        <FaFacebookF />
                    </button >
                </div>
            </div>
            {/* <div className='  h-[35rem] w-[32rem] '>
                <img src="../../../../src/assets/pnglogo.png" alt=""  className='h-[35rem] w-[32rem]'/>
            </div> */}
        {/* </div> */}
    </div>
    </>
  )
}

export default Login