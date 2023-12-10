import React from 'react'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import array from './CoursesArray';
import CoursesArrays from './CoursesArray'
import { useState } from 'react';

const Courses = () => {
    const [name, setName] = useState('')
    const [year, setYear] = useState(0)
    // const [employees, setEmployees] = useState([])
  return (
    <div>
      <div>
        <div
          style={{ background: "#F3F5F5" }}
          className=" w-full  h-full lg:h-[80rem] pt-[7rem] pl-14 "
        >
          <div className="flex  justify-evenly pr-36 mb-[-1rem]">
            <p style={{ color: "#CB8342" }} className="font-serif pl-[7rem]">
              From
            </p>
            <p style={{ color: "#CB8342" }} className=" text-lg font-serif ">
              To
            </p>
            <p
              style={{ color: "#CB8342" }}
              className=" text- font-serif pr-[10rem]"
            >
              Country
            </p>
          </div>
          <div className="flex lg:px-[15rem] px-auto py-4">
            <select
              name=""
              id=""
              className="w-[12rem] h-[3rem] pl-10 rounded-l-3xl border-2 border-[#CB8342] focus:outline-none font-serif "
            >
              <option value="" style={{ color: "#CB8342" }}>
                From
              </option>
              <option value="">1970</option>
              <option value="">1971</option>
              <option value="">1972</option>
              <option value="">1973</option>
              <option value="">1974</option>
              <option value="">1975</option>
              <option value="">1976</option>
              <option value="">1977</option>
              <option value="">1978</option>
              <option value="">1979</option>
              <option value="">1980</option>
              <option value="">1981</option>
              <option value="">1982</option>
              <option value="">1983</option>
              <option value="">1984</option>
              <option value="">1985</option>
              <option value="">1986</option>
              <option value="">1987</option>
              <option value="">1988</option>
              <option value="">1989</option>
              <option value="">1990</option>
              <option value="">1991</option>
              <option value="">1992</option>
              <option value="">1993</option>
              <option value="">1994</option>
              <option value="">1995</option>
              <option value="">1996</option>
              <option value="">1997</option>
              <option value="">1998</option>
              <option value="">1999</option>
            </select>
            <select
              name=""
              id=""
              className="w-[12rem] h-[3rem] pl-10 border-2 border-[#CB8342] focus:outline-none font-serif"
            >
              <option value="" style={{ color: "#CB8342" }}>
                To
              </option>
              <option value="">1970</option>
              <option value="">1971</option>
              <option value="">1972</option>
              <option value="">1973</option>
              <option value="">1974</option>
              <option value="">1975</option>
              <option value="">1976</option>
              <option value="">1977</option>
              <option value="">1978</option>
              <option value="">1979</option>
              <option value="">1980</option>
              <option value="">1981</option>
              <option value="">1982</option>
              <option value="">1983</option>
              <option value="">1984</option>
              <option value="">1985</option>
              <option value="">1986</option>
              <option value="">1987</option>
              <option value="">1988</option>
              <option value="">1989</option>
              <option value="">1990</option>
              <option value="">1991</option>
              <option value="">1992</option>
              <option value="">1993</option>
              <option value="">1994</option>
              <option value="">1995</option>
              <option value="">1996</option>
              <option value="">1997</option>
              <option value="">1998</option>
              <option value="">1999</option>
            </select>
            <select
              name=""
              id=""
              className="w-[12rem] h-[3rem] pl-2  focus:outline-none font-serif border-2 border-[#CB8342]"
            >
              <option value="" style={{ color: "#CB8342" }}>
                Country
              </option>
              <option value="">Rwanda</option>
              <option value="">Uganda</option>
              <option value="">Burundi</option>
              <option value="">DRC</option>
              <option value="">Nigeria</option>
              <option value="">Kenya</option>
              <option value=""></option>
            </select>

            <div
              style={{ backgroundColor: "#CB8342" }}
              className="bg-white text-white w-[6rem] flex justify-center items-center text-4xl font-bold rounded-r-3xl  "
            >
              <CiSearch />
            </div>
          </div>
          {/* <div className='flex justify-evenly content-center gap-10 flex-wrap mt-[4rem] '>
                    <Link className='bg-white w-[13rem] h-[13rem] block px-auto shadow-xl rounded-md'>
                        <img src="../../../src/assets/YuhiVMusinga.jpg" alt="" className='w-[8rem] h-[8rem] mx-auto my-3 pt-2' />
                        <h2 className='italic font-semibold font-serif flex justify-center'> Yuhi V Musinga </h2>
                        <p className='italic font-serif flex justify-center pt-2'>1883-1994</p>
                    </Link>
                    <Link className='bg-white w-[13rem] h-[13rem] block px-auto shadow-lg rounded-md'>
                        <img src="../../../src/assets/YuhiVMusinga.jpg" alt="" className='w-[8rem] h-[8rem] mx-auto my-3 pt-2' />
                        <h2 className='italic font-semibold font-serif flex justify-center'> Yuhi V Musinga </h2>
                        <p className='italic font-serif flex justify-center pt-2'>1883-1994</p>
                    </Link>
                    <Link className='bg-white w-[13rem] h-[13rem] block px-auto shadow-lg rounded-md'>
                        <img src="../../../src/assets/YuhiVMusinga.jpg" alt="" className='w-[8rem] h-[8rem] mx-auto my-3 pt-2' />
                        <h2 className='italic font-semibold font-serif flex justify-center'> Yuhi V Musinga </h2>
                        <p className='italic font-serif flex justify-center pt-2'>1883-1994</p>
                    </Link>
                    <Link className='bg-white w-[13rem] h-[13rem] block px-auto shadow-lg rounded-md'>
                        <img src="../../../src/assets/YuhiVMusinga.jpg" alt="" className='w-[8rem] h-[8rem] mx-auto my-3 pt-2' />
                        <h2 className='italic font-semibold font-serif flex justify-center'> Yuhi V Musinga </h2>
                        <p className='italic font-serif flex justify-center pt-2'>1883-1994</p>
                    </Link>
                    <Link className='bg-white w-[13rem] h-[13rem] block px-auto shadow-lg rounded-md'>
                        <img src="../../../src/assets/YuhiVMusinga.jpg" alt="" className='w-[8rem] h-[8rem] mx-auto my-3 pt-2' />
                        <h2 className='italic font-semibold font-serif flex justify-center'> Yuhi V Musinga </h2>
                        <p className='italic font-serif flex justify-center pt-2'>1883-1994</p>
                    </Link>
                    <Link className='bg-white w-[13rem] h-[13rem] block px-auto shadow-lg rounded-md'>
                        <img src="../../../src/assets/YuhiVMusinga.jpg" alt="" className='w-[8rem] h-[8rem] mx-auto my-3 pt-2' />
                        <h2 className='italic font-semibold font-serif flex justify-center'> Yuhi V Musinga </h2>
                        <p className='italic font-serif flex justify-center pt-2'>1883-1994</p>
                    </Link>
                    <Link className='bg-white w-[13rem] h-[13rem] block px-auto shadow-lg rounded-md'>
                        <img src="../../../src/assets/YuhiVMusinga.jpg" alt="" className='w-[8rem] h-[8rem] mx-auto my-3 pt-2' />
                        <h2 className='italic font-semibold font-serif flex justify-center'> Yuhi V Musinga </h2>
                        <p className='italic font-serif flex justify-center pt-2'>1883-1994</p>
                    </Link>
                    <Link className='bg-white w-[13rem] h-[13rem] block px-auto shadow-lg rounded-md'>
                        <img src="../../../src/assets/YuhiVMusinga.jpg" alt="" className='w-[8rem] h-[8rem] mx-auto my-3 pt-2' />
                        <h2 className='italic font-semibold font-serif flex justify-center'> Yuhi V Musinga </h2>
                        <p className='italic font-serif flex justify-center pt-2'>1883-1994</p>
                    </Link>
                    <Link className='bg-white w-[13rem] h-[13rem] block px-auto shadow-lg rounded-md'>
                        <img src="../../../src/assets/YuhiVMusinga.jpg" alt="" className='w-[8rem] h-[8rem] mx-auto my-3 pt-2' />
                        <h2 className='italic font-semibold font-serif flex justify-center'> Yuhi V Musinga </h2>
                        <p className='italic font-serif flex justify-center pt-2'>1883-1994</p>
                    </Link>
                    <Link className='bg-white w-[13rem] h-[13rem] block px-auto shadow-lg rounded-md'>
                        <img src="../../../src/assets/YuhiVMusinga.jpg" alt="" className='w-[8rem] h-[8rem] mx-auto my-3 pt-2' />
                        <h2 className='italic font-semibold font-serif flex justify-center'> Yuhi V Musinga </h2>
                        <p className='italic font-serif flex justify-center pt-2'>1883-1994</p>
                    </Link>
                    
                </div> */}

          <div className="flex justify-evenly content-center gap-10 flex-wrap mt-[4rem] ">
            {array.map((items, index) => (
              <Link
                to="/detailCourse"
                key={items.id}
                className="bg-white w-[13rem] h-[13rem] block px-auto shadow-xl rounded-md"
              >
                <img
                  src={items.imgi}
                  alt=""
                  className="w-[8rem] h-[8rem] mx-auto my-3 pt-2"
                />
                <h2 className="italic font-semibold font-serif flex justify-center">
                  {items.name}
                </h2>
                <p className="italic font-serif flex justify-center pt-2">
                  {items.year}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses