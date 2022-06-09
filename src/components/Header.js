import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import { CgSearch, CgMenu } from "react-icons/cg";
import { Link } from "react-router-dom";

const Header = (props) => {
  const menu = useRef(null);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    if (isMenuActive) {
      if (props.homeRef) {
        props.homeRef.current.classList.add("menu--active--bg");
        props.homeRef.current.classList.remove("menu--deactive--bg");
      }
      menu.current.classList.add("menu--active");
      menu.current.classList.remove("menu--deactive");
    } else {
      if (props.homeRef) {
        props.homeRef.current.classList.remove("menu--active--bg");
        props.homeRef.current.classList.add("menu--deactive--bg");
      }
      menu.current.classList.remove("menu--active");
      menu.current.classList.add("menu--deactive");
    }
  }, [isMenuActive]);

  return (
    <header
      style={
        props.homeRef
          ? null
          : { background: "linear-gradient(to right, #0D0E10, #3A4243)" }
      }
    >
      <div className="logo-container">
        <Link className="logo" to="/">
          <div className="logo-text">RecipeApp</div>
        </Link>
        <button className="menu" onClick={() => setIsMenuActive(!isMenuActive)}>
          <CgMenu style={{ color: "white", fontSize: "36px" }} />
        </button>
      </div>
      <div ref={menu} className="menu-container">
        <nav>
          <div className="nav_links">
            <Link to="/">HOME</Link>
            <Link to="/recipes">RECIPES</Link>
            <a href="#about">ABOUT</a>
          </div>
        </nav>
        <div className="search-container">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit">
            <CgSearch style={{ color: "white", fontSize: "22px" }} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
