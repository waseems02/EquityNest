// import React from 'react'
// import "./Hero.css"
// import CountUp from 'react-countup';
// import SearchBar from '../SearchBar/SearchBar';
// import BgVideo from '../BgVideo';

// const Hero = () => {
//   return (
//     <section className="hero-wrapper">
//         <div className="paddings innerWidth flexCenter hero-container">
//             {/*left side*/}
//             <div className="flexColStart hero-left">
//                 <div className="hero-title">
//                     <div className="orange-circle"/>
//                     <h1>
//                         בואו נגלה <br/>
//                         נכסים חדשים <br/>
//                     </h1>
//                 </div>
//                 <div className="flexColStart hero-des">
//                     <span className='secondaryText'>גשדצגשל</span>
//                     <span className='secondaryText'> עאבד אח יקר ובשאר אכוווו</span>
//                 </div>

//                 <SearchBar/>
//                 <div className="flexCenter stats">
//                     <div className="flexColCenter stat">
//                         <span>
//                             <CountUp start={8800} end={9000} duration={4}/>
//                             <span>+</span>
//                         </span>
//                         <span className='secondaryText'>דירות השקעה</span>
//                     </div>

//                     <div className="flexColCenter stat">
//                         <span>
//                             <CountUp start={1950} end={2000} duration={4}/>
//                             <span>+</span>
//                         </span>
//                         <span className='secondaryText'>לקוחות מרוצים</span>
//                     </div>

//                     <div className="flexColCenter stat">
//                         <span>
//                             <CountUp end={28}/>
//                             <span>+</span>
//                         </span>
//                         <span className='secondaryText'>זכיית פרסים</span>
//                     </div>
//                 </div>
//             </div>
//             {/*right side*/}
//             <div className="flexCenter hero-right">
//                 {/* <div className="image-container2">
//                     <video src="RealEstate.mp4" className="v-co"/>   */}
//                 {/* </div> */}
//                 <div className="image-container">
//                     <video className="video-content" src="earth3.mp4" autoPlay loop muted/>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Hero

import React from "react";
import "./Hero.css";
import CountUp from "react-countup";
import SearchBar from "../SearchBar/SearchBar";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      {/* Video Background */}
      <div className="video-container">
        <video
          className="background-video"
          src={"Earth1.mp4"}
          autoPlay
          loop
          muted
        />
      </div>
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              השקעה בנדל"ן <br />
              בלי לצאת  <br />
              מהבית <br/>
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">ברוכים הבאים</span>
            <span className="secondaryText"> לעולם הנדל"ן הישראלי </span>
          </div>

          <SearchBar />
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">דירות השקעה</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">לקוחות מרוצים</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondaryText">זכיית פרסים</span>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flexCenter hero-right">
        </div>
      </div>
    </section>
  );
};

export default Hero;
