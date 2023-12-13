import React from "react";
import { Link } from "react-router-dom";
import { dummyCourses } from "./DummyData"; // Import dummyCourses from DummyData
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Courses = () => {


  return (
    <div>
      <div>
        <div
          style={{ background: "#F8FAFA" }} 
          className="w-full h-full lg:h-[80rem] pt-[6rem] "
        >
        <div className="flex justify-end ">
          <input type="text" className=" h-[3rem] pl-4 pr-[10rem] rounded-2xl border-2 border-white-600 focus:border-white-600 outline-none" />
          <CiSearch style={{backgroundColor: '#A16733'}} className="text-white font-bold w-10 h-[3rem] mr-[6rem] bg-white ml-[-2rem] rounded-r-2xl  "/>
        </div>
          <div className="flex justify-evenly content-center gap-10 flex-wrap mt-[4rem] ">
            {dummyCourses.map((course) => (
              <Link
                to={`/courses/${course.id}`} 
                key={course.id}
                className=" bg-white w-[22rem] h-[23rem] block px-auto shadow-xl rounded-md border-2  ease-in-out duration-300 hover:scale-105 transition-all"
              >
                <img
                  src={course.imgi}
                  alt=""
                  className="w-[21rem] h-[15rem] m-1 pl-1 rounded-lg "
                />
                <h2 style={{ color: '#CB8342' }} className='m-2 flex justify-start bg-white  font-bold '> AFRI ROOT</h2>
                <h2 className="m-2 font-light">
                  {course.name}
                </h2>
                <p className="m-2 flex justify-start font-light ">
                  {course.year}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
