import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter,Routes, Route, Outlet } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Courses from './Components/Courses/Courses';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  )};

const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Layout/>}>
            <Route path='/' element={<Home/>} />
            <Route path='courses' element={<Courses/>} />
            <Route path='about' element={<About/>} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App