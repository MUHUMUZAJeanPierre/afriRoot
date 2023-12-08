import React from "react";

const DetailCourse = () => {
  return (
    <div className="flex   h-[50rem] pt-[4rem] pl-10">
      {/* Left Sidebar */}
      <div className="w-1/4 overflow-y-auto border-r">
        {/* Module List */}
        <div className="p-4">
          {/* Module 1 */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Module 1</h2>
            <div className="flex items-center mt-2">
              <div className="w-10 h-1 bg-orange-500"></div>
              {/* I saw there is a way they import colors in configuration youcan use it changing colors */}
              <span className="ml-2">50% Complete</span>
            </div>
            <a href="#" className="text-orange-500 mt-2 block">
              Access Module
            </a>
          </div>
          {/*  second Module  */}
          {/* Repeat similar structure for other modules */}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Top Header */}
        <div className="mb-4 flex items-center">
          <img
            src="http://t2.gstatic.com/images?q=tbn:ANd9GcQ7wzEC9Rqr2Qs42xBpwpoiAV2uF6FGS-nzCRXhXT-XIyASRlApdDYYITcIiKqpU2QXLPCR"
            alt="Avatar"
            className="w-10 h-10 rounded-full mr-2"
          />
          {/* Learner's Name */}
          <div>
            <h1 className="text-lg font-semibold">Learner's Name</h1>
            <p className="text-gray-500">Score: 85</p>
          </div>
        </div>

        {/* Main Section */}
        <div>
          {/* Module Title */}
          <h2 className="text-xl font-semibold mb-2">Module 1: Introduction</h2>
          {/* Module Description */}
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>

          {/* Video Player */}
          {/* Add your video player component here */}
          {/* Quiz */}
          {/* Add your quiz component here */}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-1/4 border-l">
        {/* Assignments */}
        <div className="p-4">
          {/* Assignment 1 */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Assignment 1</h2>
            <p className="text-gray-500">Deadline: 2023-12-31</p>
            <button className="bg-orange-500 text-white px-2 py-1 mt-2">
              Submit
            </button>
          </div>
          {/* Assignment 2 */}
          {/* Repeat similar structure for other assignments */}
        </div>
      </div>
    </div>
  );
};

export default DetailCourse;