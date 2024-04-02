// import React from'react';

import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//pages
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';


import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import RegisterLogin from './pages/Register-Login';
import Profile from './pages/Profile'

function App() {
  const [userName, setUserName] = useState(null);

    const updateUserName = (name) => {
        setUserName(name);
    };
  return (
    <>
      <BrowserRouter>
        <Navbar userName={userName}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/register' element={<RegisterLogin />} />
          <Route path="/login" element ={<Login updateUserName={updateUserName}/>} />
          <Route path="/profile" element ={<Profile/>} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;