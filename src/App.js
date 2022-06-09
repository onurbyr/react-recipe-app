import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import { CgSearch, CgMenu } from "react-icons/cg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import { BsFillCircleFill } from "react-icons/bs";

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
      <Carousel
        showThumbs={false}
        autoPlay={true}
        showStatus={false}
        infiniteLoop={true}
        showArrows={false}
        renderIndicator={(onClickHandler, isSelected, index) => {
          const defStyle = {
            marginLeft: '20px',
            color: "white",
            cursor: "pointer",
            fontSize: "14px",
          };
          const style = isSelected
            ? { ...defStyle, fontSize: "16px", color: "#ffbe33" }
            : { ...defStyle };
          return (
            <span
              style={style}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
            >
              <BsFillCircleFill />
            </span>
          );
        }}
      >
        <div>
          <div className="carousel-title">Recipe App</div>
          <div className="carousel-text">
            Velit mollit occaecat aliquip dolore aliqua consectetur.
          </div>
        </div>
        <div>
          <div className="carousel-title">Recipe App2</div>
          <div className="carousel-text">
            Sit occaecat reprehenderit veniam minim eu nostrud adipisicing anim
            fugiat amet nulla aliqua et ut.
          </div>
        </div>
        <div>
          <div className="carousel-title">Recipe App3</div>
          <div className="carousel-text">
            Deserunt non laborum ipsum consectetur.
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default App;
