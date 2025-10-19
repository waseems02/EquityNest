import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero';
import "./Layout.css";

const Layout = () => {
  return (
    <>
        <div className='main-layout'>
          <div className="video-container">
          <video
          className="background-video"
          src={"vid1.mp4"}
          autoPlay
          loop
          muted
        />
          </div>
            <Header/>
            <Outlet/>
        </div>
        <Footer/>
    </>
  );
};

export default Layout