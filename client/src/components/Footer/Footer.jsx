import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
          <img src="./logo 2.png" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to make everyone happy <br />
            and be the best
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 Jerusalem, 970231</span>

          <div className="flexCenter f-menu">
            <span>השקעה</span>
            <span>מוצר</span>
            <span>מי אנחנו</span>
            <span> רכישה </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
