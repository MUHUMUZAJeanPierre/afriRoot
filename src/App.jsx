import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import History from "./Components/History/History";
import Grades from "./Components/Grades/Grades";
import Courses from "./Components/Courses/Courses";
import Login from "./Components/Register/Login/Login";
import SignUp from "./Components/Register/SignUp/SignUp";
import DetailCourse from "./Components/DetailCourse";


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="courses" element={<Courses />} />
            <Route path="about" element={<About />} />
            <Route path="history" element={<History />} />
            <Route path="grades" element={<Grades />} />
            <Route path="courses/:courseId/*" element={<DetailCourse />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
