import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
// import AddPropertyModel from "../AddPropertyModel/AddPropertyModel";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  // const [modalOpened, setModalOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: menuOpened ? "0" : "-100%" }; // Use "0" to show and "-100%" to hide
    }
  };

  return (
    <section className="h-wrapper">
      <div className="flexBetween paddings innerWidth h-container">
        <Link to="/">
          <img src="./logo.png" alt="logo" width={100} />
        </Link>
        <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
          {/* <NavLink to="/properties">נכסים להשקעה</NavLink> */}
          {/* <a href> מי אנחנו </a> */}
          <NavLink to="/properties">מימון ומשכנתאות</NavLink>
          <div onClick={() => {
            const section = document.getElementById("contact-us");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
            }}>
              ליצור קשר
              </div>

          <div onClick={() => {
            const section = document.getElementById("value");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
            }}>
              דירות מגורים להשקעה
              </div>


          {/*add Property*/}
          <div onClick={() => {
            const section = document.getElementById("team");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
            }}>
              מי אנחנו
              </div>
                        {/* <AddPropertyModel opened={modalOpened} setOpened={setModalOpened} />
          {/*login button*/}
          <button className="button">התחברות</button>
        </div>
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
