import React, { useRef, useEffect } from "react";
import "../App.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Recipes = () => {
  const refs = useRef([]);

  useEffect(() => {
    refs.current[0].classList.add("active-category");
  }, []);

  const categories = [
    "Beef",
    "Breakfast",
    "Chicken",
    "Dessert",
    "Goat",
    "Lamb",
    "Miscellaneous",
    "Pasta",
    "Pork",
    "Seafood",
    "Side",
    "Starter",
    "Vegan",
    "Vegetarian",
  ];

  const selectCategory = (index) => {
    for (let i = 0; i < categories.length; i++) {
      if (i === index) {
        refs.current[i].classList.add("active-category");
      } else {
        refs.current[i].classList.remove("active-category");
      }
    }
  };
  return (
    <div className="recipes-container">
      <h2 className="recipes-text">Recipes</h2>
      <div className="categories">
        <ul>
          {categories.map((item, index) => {
            return (
              <li
                key={index}
                ref={(element) => {
                  refs.current[index] = element;
                }}
                onClick={() => selectCategory(index)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="recipe-cards">
        <div className="box">
          <div className="img-box">
            <img src={require("../images/f1.png")} />
          </div>
          <div className="detail-box">
            <h2>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
              perspiciatis quod facere consequuntur cumque sapiente. In nesciunt
              error officiis, obcaecati saepe necessitatibus dicta nobis
              explicabo aperiam quod assumenda ex aliquam?
            </h2>
            <button>
              <BsFillArrowRightCircleFill size={"40px"} color={"#ffbe33"} />
            </button>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src={require("../images/f2.png")} />
          </div>
          <div className="detail-box">
            <h2>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
              perspiciatis quod facere consequuntur cumque sapiente. In nesciunt
              error officiis, obcaecati saepe necessitatibus dicta nobis
              explicabo aperiam quod assumenda ex aliquam?
            </h2>
            <button>
              <BsFillArrowRightCircleFill size={"40px"} color={"#ffbe33"} />
            </button>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src={require("../images/f3.png")} />
          </div>
          <div className="detail-box">
            <h2>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
              perspiciatis quod facere consequuntur cumque sapiente. In nesciunt
              error officiis, obcaecati saepe necessitatibus dicta nobis
              explicabo aperiam quod assumenda ex aliquam?
            </h2>
            <button>
              <BsFillArrowRightCircleFill size={"40px"} color={"#ffbe33"} />
            </button>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src={require("../images/f4.png")} />
          </div>
          <div className="detail-box">
            <h2>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
              perspiciatis quod facere consequuntur cumque sapiente. In nesciunt
              error officiis, obcaecati saepe necessitatibus dicta nobis
              explicabo aperiam quod assumenda ex aliquam?
            </h2>
            <button>
              <BsFillArrowRightCircleFill size={"40px"} color={"#ffbe33"} />
            </button>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src={require("../images/f1.png")} />
          </div>
          <div className="detail-box">
            <h2>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
              perspiciatis quod facere consequuntur cumque sapiente. In nesciunt
              error officiis, obcaecati saepe necessitatibus dicta nobis
              explicabo aperiam quod assumenda ex aliquam?
            </h2>
            <button>
              <BsFillArrowRightCircleFill size={"40px"} color={"#ffbe33"} />
            </button>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src={require("../images/f2.png")} />
          </div>
          <div className="detail-box">
            <h2>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
              perspiciatis quod facere consequuntur cumque sapiente. In nesciunt
              error officiis, obcaecati saepe necessitatibus dicta nobis
              explicabo aperiam quod assumenda ex aliquam?
            </h2>
            <button>
              <BsFillArrowRightCircleFill size={"40px"} color={"#ffbe33"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
