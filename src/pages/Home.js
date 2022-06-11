import React, { useEffect } from "react";
import "../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BsFillCircleFill } from "react-icons/bs";
import Header from "../components/Header";
import { useSelector } from "react-redux";

const Home = () => {
  const isMenuActive = useSelector((state) => state.menu.value);

  useEffect(() => {
    document.body.classList.add("background");
    return () => {
      document.body.classList.remove("background");
      document.body.classList.remove("menu--active--bg");
      document.body.classList.remove("menu--deactive--bg");
    };
  }, []);

  useEffect(() => {
    if (isMenuActive) {
      document.body.classList.add("menu--active--bg");
      document.body.classList.remove("menu--deactive--bg");
    } else {
      document.body.classList.remove("menu--active--bg");
      document.body.classList.add("menu--deactive--bg");
    }
  }, [isMenuActive]);

  return (
    <div>
      <Header />
      <Carousel
        showThumbs={false}
        autoPlay={true}
        showStatus={false}
        infiniteLoop={true}
        showArrows={false}
        swipeable={false}
        renderIndicator={(onClickHandler, isSelected, index) => {
          const defStyle = {
            marginLeft: "20px",
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

export default Home;
