import React, { useEffect, useRef } from "react";
import "../App.css";
import { CgSearch, CgMenu } from "react-icons/cg";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setIsMenuActive } from "../redux/actions/menuActions";

const Header = (props) => {
  const menu = useRef(null);
  const isMenuActive = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isMenuActive) {
      menu.current.classList.add("menu--active");
      menu.current.classList.remove("menu--deactive");
    } else {
      menu.current.classList.remove("menu--active");
      menu.current.classList.add("menu--deactive");
    }
  }, [isMenuActive]);

  return (
    <header
      style={
        props.pullIsMenuActive
          ? null
          : { background: "linear-gradient(to right, #0D0E10, #3A4243)" }
      }
    >
      <div className="logo-container">
        <Link className="logo" to="/">
          <div className="logo-text">RecipeApp</div>
        </Link>
        <button className="menu" onClick={() => dispatch(setIsMenuActive())}>
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
