import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


const SinUp = () => {
  return (
    <>
    <div className=' w-full h-[60rem] py-[4rem]'>
        <div className=' w-[70rem] h-[50rem] mx-auto my-auto'>
            <div className='h-[35rem] w-[33rem]'>
                <h1 className='font-semibold text-3xl mx-10 mt-9'>Sign Up</h1>
                <p className='mx-10 mb-5 mt-1'>Already have an account yet?  
                    <Link to="/Login" className='text-orange-700 ml-[1rem] '>
                       Login
                    </Link>
                </p>
                <div className='mx-10'>
                    <label htmlFor="" className='font-semibold '>
                        Enter your email
                    </label><br/>
                    <input type="text" required='required'   placeholder='Enter your email' className='h-15 w-[40rem] border-2  border-black rounded-lg p-4 text-black'/><br/><br/>
                    <label htmlFor="" className='font-semibold '>
                        Full name
                    </label><br/>
                    <input type="text" required='required'   placeholder='Full name' className='h-15 w-[40rem] border-2  border-black rounded-lg p-4 text-black'/><br/><br/>
                    <label htmlFor="" className='font-semibold '>
                        Last name
                    </label><br/>
                    <input type="text" required='required'   placeholder='you@example.com' className='h-15 w-[40rem] border-2  border-black rounded-lg p-4 text-black'/><br/><br/>
                    <div className='flex'>
                    <label htmlFor="" className='font-semibold '>Enter password</label>
                    
                    </div>
                    <input type="text" required="required" placeholder='Enter Password' className='h-15 w-[40rem] border-2  border-black rounded-lg p-4 text-black'/>
                </div>
                <div className='mx-10 my-9'>
                    <button style={{background: '#CB8342'}} className='  text-white rounded-xl h-[4.5rem] w-[40rem] text-2xl  font-semibold'>Sign Up</button>
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

export default SinUp