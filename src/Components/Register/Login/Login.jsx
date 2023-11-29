import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


const Login = () => {
  return (
    <>
    <div className=' w-full h-[50rem] py-[9rem]'>
        <div className='bg-orange-200 w-[70rem] h-[40rem] flex justify-evenly items-center mx-auto opacity-90'>
            <div className='h-[35rem] w-[33rem]'>
                <h1 className='font-semibold font-serif text-5xl mx-10 mt-9'>Login</h1>
                <p className='mx-10 mb-5 mt-1'>Doesn't have an account yet? 
                    <Link to="/Login" className='underline text text-orange-700 '>
                        Sign Up
                    </Link>
                </p>
                <div className='mx-10'>
                    <label htmlFor="" className='font-semibold text-xl'>
                        Email Address</label><br/>
                    <input type="text" required='required'   placeholder='you@example.com' className='h-14 w-[26rem] border-2 rounded-md outline-none focus:border-orange-600'/><br/><br/>
                    <div className='flex gap-[9.2rem]'>
                    <label htmlFor="" className='font-semibold text-xl'>Password</label>
                    <Link to='' className='underline text text-orange-700 mt-3'>
                        Forgot Password?
                    </Link>
                    </div>
                    <input type="text" required="required" placeholder='Enter Your Password' className='h-14 w-[26rem] border-2 rounded-md outline-none focus:border-orange-600'/>
                </div>
                <div className='mx-10 my-9'>
                    <button className=' bg-orange-600 rounded h-14 w-[26rem] text-2xl font-serif font-semibold'>Login</button>
                </div>
                <div>
                    <p></p>
                    <div className='flex justify-evenly mt-10'>
                        <button className='bg-white rounded-md border-2 border-red-500 px-16 py-4 ' >
                            <FaGoogle className='text-red-500 '/>
                        </button >
                        <button className='bg-white border-2 border-blue-500 px-16 py-4 rounded-md'>
                            <FaFacebookF className='text-blue-500'/>
                        </button>
                    </div>
                </div>
            </div>
            <div className='  h-[35rem] w-[32rem] '>
                <img src="../../../../src/assets/pnglogo.png" alt=""  className='h-[35rem] w-[32rem]'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login