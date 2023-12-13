import React, { useState } from "react";
import { Link } from "react-router-dom";
import { dummyCourses } from "./DummyData";
import { CiSearch } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCourses = dummyCourses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.year.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div
        style={{ background: "#F8FAFA", paddingLeft: "8rem" }} // Left padding applied here
        className="w-full h-full lg:h-[80rem] pt-[6rem] "
      >
        <div className="flex justify-end ">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            className="h-[2.5rem] pl-4 pr-[10rem] rounded-3xl border-2 border-white-600 focus:border-white-600 outline-none"
          />
          <div>

          <IoMdSearch
          size={10}
          style={{ backgroundColor: "#A16733" }}
          className="text-white w-10 h-[2.5rem] mr-[6rem] bg-white ml-[-2rem] rounded-r-3xl  "
          />
          </div>
        </div>
        <div className="flex justify-start content-start gap-6 flex-wrap mt-[2rem] ">
          {filteredCourses.map((course) => (
            <Link
              to={`/courses/${course.id}`}
              key={course.id}
              // className="bg-white w-[18rem] h-[24rem] block px-4 py-2 shadow-xl rounded-md mb-4"
              className=" bg-white w-[22rem] h-[23rem] block px-4 py-2 shadow-xl rounded-md border-2  ease-in-out duration-300 hover:scale-105 transition-all"
              >

              <img
                src={course.imgi}
                alt=""
                className="w-full h-[12rem] object-cover mx-auto my-3 pt-2 rounded-t-md rounded-lg"
              />
              <h2 style={{ color: '#CB8342' }} className='m-2 flex justify-start bg-white  font-light  italic'> AFRI ROOT</h2>
              <h2 className=" font-semibold font-serif text-left">
                {course.name}
              </h2>
              <p className=" font-light text-left pt-2">{course.year}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
