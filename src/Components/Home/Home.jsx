import React from 'react'
import { MdNavigateNext } from "react-icons/md";
import { Link } from 'react-router-dom';
import {BiServer} from 'react-icons/bi'
import {FaGraduationCap} from 'react-icons/fa'
import {HiOutlineLightBulb} from 'react-icons/hi'

const Home = () => {
  return (
    <div >

      {/* Home image  */}
        <div className=' bg-image bg-cover bg-center'>
          <div className='flex justify-evenly py-44'>
            <div className=' my-20' >
              <div>
                <h1 style={{color: '#A16733'}} className='text-4xl font-semibold font-serif  w-[40rem]'>
                  Every man's ability may be strengthened or increased by culture
                </h1>
              </div>
              {/* <Link className=''> */}
                <button style={{ backgroundColor: '#A16733' }} className=' font-normal font-serif  text-[1rem]  my-10 flex justify-center items-center py-3 mx-  xl:w-[18rem] border hover:text-white transition text-white rounded-lg xl:text-3xl pt-2 md:text-5xl '>
                  Register 
                </button>
            </div>
            <div className=' w-[27rem] h-[7rem]'>
              <img src="../../../src/assets/pnglogo.png" alt="" className='' />
            </div>

          </div>
        </div>

{/* OUR HISTORY AND WHAT WE ARE  */}
        <div className=' w-full pt-[4rem]'>
        <div className=' md:flex justify-evenly  md:h-[30rem]'>
          <div className=' md:w-[37rem] pl-6 md:h-[29rem]'>
            {/* <div ></div> */}
            <p className='font-light text-[0.9rem]'>We are African </p>
            <h1 className='mt-[0.5rem] text-[1.8rem] font-semibold'>Who we are</h1>
            <p className='mt-[1.2rem] font-serif '>
            Africa root culture could potentially refer to the foundational or fundamental
            aspects of African culture. The term <b>root</b> often conveys the idea of something essential,
            fundamental, or originating. In the context of African culture, it might imply the core values,
            traditions, and practices that have deep historical roots and form the basis of the diverse cultures found across the continent.
            African culture is incredibly diverse, with each region, ethnic group, and community having its unique traditions, languages, art forms, and 
            If there is a specific context or source where <b>Africa root culture</b> is discussed, it would be beneficial to refer to that context for a more precise understanding.
            </p>
          </div>
          <div className=' md:h-[23rem] xl:w-[32rem] md:w-[30rem] sm:w-[10rem] sm:h-[40rem] block justify-end px-4 py-2 '>
            <span className='flex justify-end '>
            <img src="../../../src/assets/10001.jpg" alt="" className=' mt-2 md:w-[29rem]'/>
            </span>

            <span className=' flex justify-end '>
              <p style={{ color: '#CB8342' }} className='mt-3 bg-white italic font-bold'>AFRI ROOT </p>
            </span>
            
          </div>
        </div>
      </div>


      {/* COURSES THAT WE OFFERS */}

      <div className="">
        <div className="bg-image-1 lg:h-screen" />
        <div>
            <div>
              
            </div>
            <div></div>
        </div>
      
      </div>


  {/* Our program */}

  <div className="bg-[#F3F5F5] py-5">
    <div className="space-y-[2rem]">
      <h2  style={{color: '#CB8342'}} className="text-center  font-bold text-3xl uppercase">
        Today's History
      </h2>
      {/* <p className="text-center text-[#3A3A3A]">Trending culture </p> */}
    </div>
    <div className="flex lg:flex-row md:flex-col space-y-6   flex-col p-[3rem] container mx-auto justify-around lg:space-x-8">
      <div className="bg-white rounded-lg p-6 mt-6">
        <h2  style={{color: '#CB8342'}} className=" font-semibold text-2xl flex flex-row items-center">
          <span className="text-4xl px-2">
            <BiServer />
          </span>
          Comprehensive Cultural Program
        </h2>
        <p className="max-w-md pl-12 pt-2 text-[#3A3A3A]">
        A single comprehensive program that covers various aspects of the culture, including history, traditions, language, arts, and social practices.
        </p>
      </div>
      <div className="bg-white rounded-lg p-4">
        <h2 style={{color: '#CB8342'}} className="flex flex-row items-center font-semibold text-2xl ">
          <span className="px-2 text-5xl">
            <FaGraduationCap />
          </span>
          Cultural Exchange Programs
        </h2>
        <p className="px-16 max-w-2xl text-[#3A3A3A]">
        Programs that facilitate cultural exchange, either through travel or virtual means, 
        providing participants with hands-on experiences and interactions with people from the culture.
        </p>
      </div>
      <div className="bg-white rounded-lg p-4">
        <h2  style={{color: '#CB8342'}} className="font-semibold text-2xl flex flex-row items-center ">
          <span className="text-5xl px-2">
            <HiOutlineLightBulb />
          </span>
          Applied Cultural Studies
        </h2>
        <p className="max-w-md pl-16 text-[#3A3A3A]">
        Programs that apply cultural studies to real-world 
        scenarios, such as business practices, diplomacy, or intercultural communication. 
        {/* This can be particularly useful in a globalized world where cultural competence is valuable. */}
        </p>
      </div>
    </div>
  </div>
      

      </div>
  )
}

export default Home