import { useEffect } from "react";
import "../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BsFillCircleFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { setIsHomeFalse, setIsHomeTrue } from "../redux/actions/isHomeActions";
import { getRandomCategories } from "../redux/actions/homeActions";
import Recipes from "./Recipes";
import About from "./About";

const Home = () => {
  const isMenuActive = useSelector((state) => state.menu);
  const home = useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsHomeTrue());
    dispatch(getRandomCategories());
    document.body.classList.add("background");
    return () => {
      dispatch(setIsHomeFalse());
      document.body.classList.remove("background");
      document.body.classList.remove("menu--active--bg");
      document.body.classList.remove("menu--deactive--bg");
    };
  }, [dispatch]);

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
      <div className="carousel-container">
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
          {home.randomCategories.length &&
            home.randomCategories.map((item, index) => {
              return (
                <div key={index}>
                  <div className="carousel-title">{item.strCategory}</div>
                  <div className="carousel-text">
                    {item.strCategoryDescription}
                  </div>
                </div>
              );
            })}
        </Carousel>
      </div>
      <Recipes />
      <About />
    </div>
  );
};

export default Home;
