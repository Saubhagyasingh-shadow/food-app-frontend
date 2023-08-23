import React from 'react';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';


import Cardplan from './components/Cardplan';
import Login from './components/Login';
import Signin from './components/Signin'
import AllUsers from './components/AllUsers';
function App() {
 
  
  return (
    <>
  {/* <h1 style={{color:'white'}}> ABOUT US</h1>
    <About/> */}



      <NavBar title="Singh&sons" aboutText="about singh&sons" />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/users/allusers" element={<AllUsers />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signin' element={<Signin />} />

      </Routes>
  
   
   
    {/* <Login /> */}
    {/* <Signin/> */}
    </>
    );
}


export default App;
