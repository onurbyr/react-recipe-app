import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import { CgSearch, CgMenu } from "react-icons/cg";

const App = () => {
  const overlay = useRef(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  useEffect(() => {
    if (isOverlayVisible) {
      overlay.current.classList.add("overlay--active");
    } else {
      overlay.current.classList.remove("overlay--active");
    }
  }, [isOverlayVisible]);

  return (
    <div>
      <header>
        <a className="logo" href="/">
          <div className="logo-text">RecipeApp</div>
        </a>
        <button
          className="menu"
          onClick={() => setIsOverlayVisible(!isOverlayVisible)}
        >
          <CgMenu style={{ color: "white", fontSize: "36px" }} />
        </button>
        <nav>
          <ul className="nav_links">
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#menu">MENU</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
          </ul>
        </nav>
        <div className="search-container">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit">
            <CgSearch style={{ color: "white", fontSize: "22px" }} />
          </button>
        </div>
      </header>
      <div ref={overlay} className="overlay">
        <div className="overlay_content">
          <a href="#home">HOME</a>
          <a href="#menu">MENU</a>
          <a href="#about">ABOUT</a>
          <div className="mobile_search">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit">
              <CgSearch style={{ color: "white", fontSize: "22px" }} />
            </button>
          </div>
        </div>
      </div>
      <div style={{ color: "red" }}>
        Et aute esse cillum incididunt fugiat duis occaecat cupidatat in quis
        cillum excepteur fugiat.
      </div>
    </div>
  );
};

export default App;
