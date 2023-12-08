import React from 'react'
// import { MdNavigateNext } from "react-icons/md";
import { Link } from 'react-router-dom';
import {BiServer} from 'react-icons/bi'
import {FaGraduationCap} from 'react-icons/fa'
import {HiOutlineLightBulb} from 'react-icons/hi'

const Home = () => {
  return (
    <div >

      {/* Home image  */}
        <div className=' bg-image  bg-cover bg-center -z-10'>
          <div className='flex justify-evenly py-44'>
            <div className=' my-[6rem] lg:10 mx-3 xl:w-[35rem] lg:w-[20rem]  h-[9rem] ' >
                <h1 className='lg:text-4xl text-lg text-white'>This's <span style={{color: '#A16733'}} className='italic light font-serif uppercase'>Afri culture</span> heritage site. </h1>
                <h1  className='lg:text-xl mt-10 font-serif text-white'>
                  Every man's ability may be strengthened or increased by culture.
                </h1>
                <a to='/detailCourse' style={{ backgroundColor: '#A16733' }} className='font-normal z-50 mt-6 absolute  font-serif  flex justify-center items-center py-3 xl:w-[13rem] lg:w-[15rem] border hover:text-white transition text-white rounded-lg xl:text-3xl pt-2 md:text-5xl cursor-pointer'>
                  <button className='cursor-pointer z-50 '>Register</button> 
                </a>
            </div>
            <div className='xl:my-[-2rem]   my-[4rem] lg:my-[1rem] lg:w-[18rem] xl:w-[32rem]  lg:h-[5rem]'>
              <img src="../../../src/assets/pnglogo.png" alt="" className='' />
            </div>

          </div>
        </div>

{/* OUR HISTORY AND WHAT WE ARE  */}
        <div className=' w-full pt-[4rem] '>
        <div className=' md:flex justify-evenly  md:h-[30rem]'>
          <div className=' md:w-[37rem] pl-6 md:h-[29rem]'>
            <h1 className='mt-[0.5rem] text-2xl font-serif'>Who we are</h1>
            <p className='font-light'>We are African </p>
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
            <img src="../../../src/assets/10001.jpg" alt="" className='bg-[#F3F5F5] mt-2 md:w-[29rem]'/>
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

  {/* <div className="py-[6rem]">
    
    <div className="flex lg:flex-row md:flex-col space-y-6   flex-col p-[3rem] container mx-auto justify-around lg:space-x-8">
      <div className="bg-white rounded-lg p-6 mt-6 shadow-black shadow-xl">
        <h2  style={{color: '#CB8342'}} className="font-serif font-semibold text-lg flex flex-row items-center">
          <span className="text-3xl px-2">
            <BiServer className=' text-5xl' />
          </span>
          Comprehensive Cultural 
        </h2>
        <p className="max-w-md pl-12 pt-2 text-[#3A3A3A]">
        A single comprehensive program that covers various aspects of the culture, including history, traditions, language, arts, and social practices.
        </p>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-black shadow-xl">
        <h2 style={{color: '#CB8342'}} className=" font-serif flex flex-row items-center font-semibold text-lg ">
          <span className="px-2 text-3xl">
            <FaGraduationCap />
          </span>
          Cultural Exchange Programs
        </h2>
        <p className="px-16 max-w-2xl text-[#3A3A3A]">
        Programs that facilitate cultural exchange, either through travel or virtual means, 
        providing participants with hands-on experiences and interactions with people from the culture.
        </p>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-black shadow-xl">
        <h2  style={{color: '#CB8342'}} className="font-serif font-semibold text-lg flex flex-row items-center ">
          <span className="text-3xl px-2">
            <HiOutlineLightBulb />
          </span>
          Applied Cultural Studies
        </h2>
        <p className="max-w-md pl-16 text-[#3A3A3A]">
        Programs that apply cultural studies to real-world 
        scenarios, such as business practices, diplomacy, or intercultural communication. 
        </p>
      </div>
    </div>
      </div> */}
      

      <div className="bg-[#F3F5F5] py-[6rem]">
    <div className="space-y-[2rem]">
      <h2  style={{color: '#CB8342'}} className="text-center  font-semibold text-xl uppercase font-serif">
        Today's History
      </h2>
      {/* <p className="text-center text-[#3A3A3A]">Trending culture </p> */}
    </div>
    <div className="flex lg:flex-row md:flex-col space-y-6   flex-col p-[3rem] container mx-auto justify-around lg:space-x-8">
      <div className="bg-white rounded-lg p-6 mt-6">
        <h2  style={{color: '#CB8342'}} className="font-serif font-semibold text-lg flex flex-row items-center">
          <span className="text-3xl px-2">
            <BiServer />
          </span>
          Comprehensive Cultural 
        </h2>
        <p className="max-w-md pl-12 pt-2 text-[#3A3A3A]">
        A single comprehensive program that covers various aspects of the culture, including history, traditions, language, arts, and social practices.
        </p>
      </div>
      <div className="bg-white rounded-lg p-4">
        <h2 style={{color: '#CB8342'}} className=" font-serif flex flex-row items-center font-semibold text-lg ">
          <span className="px-2 text-3xl">
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
        <h2  style={{color: '#CB8342'}} className="font-serif font-semibold text-lg flex flex-row items-center ">
          <span className="text-3xl px-2">
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