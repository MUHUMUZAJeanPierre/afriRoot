import React from "react";
import { useState } from "react";

const HistoryProfile = () => {

  const userData = {
    
    bio: "Lorem ipsum dolorve  sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  };
 const token = localStorage.getItem("token");
 const loginData = JSON.parse(localStorage.getItem("logindata"));
 console.log(token);
 console.log(loginData);
  const [name, setThename] = useState(loginData ? loginData.name : "");
  const [phone, setPhone] = useState(loginData ? loginData.phone : "");
  const [email, setEmail] = useState(loginData ? loginData.email : "");

  return (
    <div className="bg-gray-100 h-[48rem] flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md max-w-2xl mx-auto">
        <div className="flex items-center mb-6">
          <img
            src="http://t2.gstatic.com/images?q=tbn:ANd9GcQ7wzEC9Rqr2Qs42xBpwpoiAV2uF6FGS-nzCRXhXT-XIyASRlApdDYYITcIiKqpU2QXLPCR"
            alt="Profile"
            className="rounded-full mr-4"
          />
          <div>
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="text-gray-500">{email}</p>
          </div>
        </div>
        <div className="mb-4">
          <strong>Phone:</strong> {phone}
        </div>
        <div className="mb-4">
          <strong>Level:</strong> Beginner
        </div>
        <div className="mb-4">
          <strong>Grades:</strong> 67
        </div>
        <div className="mb-6">
          <strong>Bio:</strong>
          <p className="text-gray-700">{userData.bio}</p>
        </div>
        <div className="flex justify-end">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default HistoryProfile;
