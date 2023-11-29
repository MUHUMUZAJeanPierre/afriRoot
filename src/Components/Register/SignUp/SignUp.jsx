import React from 'react';
import { Link } from 'react-router-dom';
import {FaGoogle} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';

const SignUp = () => {
  return (
    <div className='bg-orange-500 w-full h-[50rem] py-[2rem]'>
        <div className=' bg-white w-[70rem] h-[47rem] flex justify-evenly items-center mx-auto'>
            <div className='bg-green-500 h-[45rem] w-[33rem]'>
                <h1 className='font-semibold font-serif text-5xl mx-10 mt-9'>Student SignUp</h1>
                <p className='mx-10 mb-5 mt-1'>If you have already an account, You can
                    <Link to="/signUp" className='underline text text-orange-700 ml-[1rem]'>
                        Login.  
                    </Link>
                </p>
                <div className='mx-10'>
                    <input type="text" required="required" placeholder='Enter your Name' className='h-14 w-[26rem] border-2 rounded-md outline-none focus:border-orange-600'/><br/><br/>
                    <input type="text" required="required" placeholder='Enter your Email'className='h-14 w-[26rem] border-2 rounded-md outline-none focus:border-orange-600'/><br/><br/>
                    <input type="text" required="required" placeholder='Enter your Phone ' className='h-14 w-[26rem] border-2 rounded-md outline-none focus:border-orange-600'/><br/><br/>
                    <input type="text" required="required" placeholder='Create PassWord' className='h-14 w-[26rem] border-2 rounded-md outline-none focus:border-orange-600'/>
                </div>
                <div className='mx-10 my-9'>
                    <button className=' bg-orange-600 rounded h-14 w-[26rem] text-2xl font-serif font-semibold'>Sign up</button>
                </div>
                <div>
                    <p className='text-center '>Or sign up with</p>
                    <div className='flex justify-evenly mt-10'>
                        <button className='bg-white border-2 border-red-500 px-16 py-4 rounded-md' >
                            <FaGoogle className='text-red-500 '/>
                        </button >
                        <button className='bg-white border-2 border-blue-500 px-16 py-4 rounded-md'>
                            <FaFacebookF className='text-blue-500'/>
                        </button>
                    </div>
                </div>
            </div>
            <div>
            <div className='bg-blue-500 h-[45rem] w-[35rem] '>
                <img src="../../../../src/assets/pnglogo.png" alt=""  className='h-[45rem] w-[35rem]'/>
            </div>
            </div>
        </div>

    </div>
  )
}

export default SignUp