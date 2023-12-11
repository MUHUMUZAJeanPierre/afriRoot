import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
    const [password,setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate(false)
   
    const handleLogin = ()=>{
        // e.preventDelfault();
        axios({
            method:"post",
            url:"https://afriroot.onrender.com/auth/login/",
            data:{
                email: email,
                password:password,
            },
            headers: {
                "Content-Type": "application/json",
            },

        }).then((response)=>{
            console.log("response ", response);
            localStorage.setItem("token", response.data.access_token);
            localStorage.setItem("user",JSON.stringify(response.data.user));
            toast.success(response.data.message)
            // const token = localStorage.getItem("token");
            // console.log(token)
            setTimeout(()=>{
                navigate("/DetailCourse");
            }, 2000)
            setIsLoading(false);
        }).catch((error)=>{
            console.log(error);
            toast.error(error.message);
            setIsLoading(true);
        })
    }
  return (
    <>
    <ToastContainer/>
    <div style={{background: '#FFFAF5'}} className=' w-full h-[50rem] py-[5rem]'>
        {/* <div className='bg-green-500  lg:w-[35rem] h-[35rem]  shadow-slate- shadow-2xl mx-auto my-auto pt-5 rounded-xl '> */}
            <div className=' lg:h-[35rem] lg:w-[33rem] w-[20rem] shadow-slate- shadow-2xl mx-auto rounded-xl pt-5'>
                <h1 className='font-semibold text-3xl mx-10 mt-5 lg:flex justify-center'>Login</h1>
                <p className='mx-10 mb-5 mt-3 lg:flex lg:justify-center '>Doesnt have an account yet? 
                    <Link to="/signUp" className='text-orange-700 lg:ml-[1rem]  underline '>
                        Sign Up
                    </Link>
                </p>
                <div className='mx-10'>
                    <label htmlFor="" className='font-semibold '>
                        Enter your email
                    </label><br/>
                    <input 
                    onChange={(e)=>setEmail(e.target.value)}
                    type="text" 
                    required='required'   
                    placeholder='you@example.com' 
                    className='h-12 lg:w-[28rem] border-2  border-black rounded-lg p-4 text-black'/><br/><br/>
                    <div className=''>
                        <label htmlFor="" className='font-semibold '>Enter your password</label>
                        <Link to='/signUp'className='text-orange-700 lg:ml-[11rem] ml-[2rem] underline '>
                        Forget Password
                        </Link>
                    </div>
                    <input 
                    onChange={(e)=>setPassword(e.target.value)}
                    type="password" 
                    required="required" 
                    placeholder='Enter Your Password' 
                    className='h-12 lg:w-[28rem] border-2  border-black rounded-lg p-4 text-black'/>
                </div>
                <div className='mx-10 my-5'>
                    <button 
                        onClick={handleLogin}
                        style={{background: '#CB8342'}} 
                        className='text-white rounded-lg lg:h-14 lg:w-[28rem] w-[13.5rem] h-[3.5rem] text-2xl  font-semibold'>
                        Log in
                    </button>
                </div>
                    <p className=' flex mx-[3rem] font-semibold mt-8'>You can login with: </p>
            
                <div className=' mx-10 my-6 lg:h-14 lg:w-[28rem] lg:flex justify-evenly'>
                
                    <Link  
                    className='bg-white text-red-600  rounded-md border-2 border-white px-8 py-4 shadow-slate shadow-2xl ' >
                        <FaGoogle className='' />
                    </Link >
                    <Link  
                    className='bg-white text-blue-700  rounded-md border-2 border-white px-8 py-4 shadow-slate shadow-2xl' >
                        <FaLinkedin />
                    </Link >
                    <Link  
                    className='bg-white text-blue-700  rounded-md border-2 border-white px-8 py-4 shadow-slate shadow-2xl' >
                        <FaFacebookF />
                    </Link >
                </div>
            </div>
    </div>
    </>
  )
}

export default Login