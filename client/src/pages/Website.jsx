import React from 'react'
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Companies from "../components/Companies/Companies";
import Residencies from "../components/Residencies/Residencies";
import Value from "../components/Value/Value";
import Contact from "../components/Contact/Contact";
import GetStarted from '../components/GetStarted/GetStarted';
import Footer from '../components/Footer/Footer';
import Team from '../components/Team/Team';

const Website = () => {
  return (
    <div className="App">
    <div>
      {/* <div className="white-gradient"/> */}
      <Hero/>
    </div>
    <Companies/>
    <Residencies/>
    <Value/>
    <Contact/>
    <Team/>
    <GetStarted/>
  </div>
  )
}

export default Website