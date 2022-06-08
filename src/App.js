import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import { CgSearch, CgMenu } from "react-icons/cg";

const App = () => {
  const menu = useRef(null);
  const [isMenuActive, setIsMenuActive] = useState(false);

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
    <div>
      <header>
        <div className="logo-container">
          <a className="logo" href="/">
            <div className="logo-text">RecipeApp</div>
          </a>
          <button
            className="menu"
            onClick={() => setIsMenuActive(!isMenuActive)}
          >
            <CgMenu style={{ color: "white", fontSize: "36px" }} />
          </button>
        </div>
        <div ref={menu} className="menu-container">
          <nav>
            <div className="nav_links">
              <a href="#home">HOME</a>
              <a href="#menu">MENU</a>
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
      <div style={{ color: "red" }}>
        Et aute esse cillum incididunt fugiat duis occaecat cupidatat in quis
        cillum excepteur fugiat.
      </div>
    </div>
  );
};

export default App;
