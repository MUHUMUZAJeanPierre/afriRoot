import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


const SinUp = () => {
  return (
    <>
    <div style={{background: '#FFFAF5'}} className=' w-full h-[60rem] py-[4rem]'>
        <div  className=' lg:w-[35rem]  h-[39rem] shadow-slate shadow-2xl mx-auto my-auto rounded-3xl'>
            <div className='h-[36rem] w-[34rem] py-1'>
                <h1 className='font-semibold text-3xl mx-10 mt-9 flex justify-center'>Sign Up</h1>
                {/* <p className='mx-10 mb-5 mt-1'>Already have an account yet?  
                    <Link to="/login" className='text-orange-700 ml-[1rem] underline '>
                       Login
                    </Link>
                </p> */}
                <div className='mx-10 my-6'>
                    <label htmlFor="" className='font-semibold '>
                        Enter your email
                    </label><br/>
                    <input type="text" required='required'   placeholder='Enter your email' className='w-[28rem] h-12 border-2  border-black rounded-lg p-4 text-black '/><br/><br/>
                    <label htmlFor="" className='font-semibold '>
                        Full name
                    </label><br/>
                    <input type="text" required='required'   placeholder='Full name' className='h-12 w-[28rem] border-2  border-black rounded-lg p-4 text-black'/><br/><br/>
                    <label htmlFor="" className='font-semibold '>
                        Last name
                    </label><br/>
                    <input type="text" required='required'   placeholder='you@example.com' className='h-12 w-[28rem] border-2  border-black rounded-lg p-4 text-black'/><br/><br/>
                    <div className='flex'>
                    <label htmlFor="" className='font-semibold '>Enter password</label>
                    
                    </div>
                    <input type="text" required="required" placeholder='Enter Password' className='h-12 w-[28rem] border-2  border-black rounded-lg p-4 text-black'/>
                </div>
                <div className='mx-10 my-5'>
                    <button style={{background: '#CB8342'}} className='  text-white rounded-xl h-14 w-[28rem] text-2xl  font-semibold'>Sign Up</button>
                </div>
                <div className=' mt-9'>
                <p className='flex justify-center  font-semibold'>Already have an account yet?  
                    <Link to="/login" className='text-orange-700 ml-[1rem] underline '>
                       Login
                    </Link>
                </p>
                    {/* <p className=' flex justify-center font-semibold'>You can login with: </p>
                    <div className='flex justify-evenly items m-auto py-2'>
                        <button  className='bg-white  rounded-md border-2 border-red-500 px-12 py-4 ' >
                            <FaGoogle style={{color: '#CB8342'}}/>
                        </button >
                        <button className='bg-white border-2 border-blue-500 px-12  py-2 rounded-md'>
                            <FaFacebookF className='text-blue-500'/>
                        </button>
                    </div> */}
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