import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


const Login = () => {
  return (
    <>
    <div style={{background: '#FFFAF5'}} className=' w-full h-[50rem] py-[5rem]'>
        <div className=' w-[70rem] h-[40rem] mx-auto'>
            <div className='h-[35rem] w-[33rem]'>
                <h1 className='font-semibold text-3xl mx-10 mt-9'>Login</h1>
                <p className='mx-10 mb-5 mt-1'>Doesn't have an account yet? 
                    <Link to="/Login" className='text-orange-700 ml-[1rem] '>
                        Sign Up
                    </Link>
                </p>
                <div className='mx-10'>
                    <label htmlFor="" className='font-semibold '>
                        Enter your email
                    </label><br/>
                    <input type="text" required='required'   placeholder='you@example.com' className='h-15 w-[35rem] border-2  border-black rounded-lg p-4 text-black'/><br/><br/>
                    <div className='flex'>
                        <label htmlFor="" className='font-semibold '>Enter your password</label>
                    </div>
                    <input type="text" required="required" placeholder='Enter Your Password' className='h-15 w-[35rem] border-2  border-black rounded-lg p-4 text-black'/>
                </div>
                <div className='mx-10 my-9'>
                    <button style={{background: '#CB8342'}} className='  text-white rounded-lg h-[4rem] w-[35rem] text-2xl  font-semibold'>Log in</button>
                </div>
                <div>
                    <p className='flex justify-center font-semibold'>You can login with: </p>
                    <div className='flex justify-evenly mt-6'>
                        <button  className='bg-white rounded-md border-2 border-red-500 px-16 py-4 ' >
                            <FaGoogle style={{color: '#CB8342'}}/>
                        </button >
                        <button className='bg-white border-2 border-blue-500 px-16 py-4 rounded-md'>
                            <FaFacebookF className='text-blue-500'/>
                        </button>
                    </div>
                </div>
            </div>
            {/* <div className='  h-[35rem] w-[32rem] '>
                <img src="../../../../src/assets/pnglogo.png" alt=""  className='h-[35rem] w-[32rem]'/>
            </div> */}
        </div>
    </div>
    </>
  )
}

export default Login