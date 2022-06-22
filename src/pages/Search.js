import React from "react";
import { useSelector } from "react-redux";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const Search = () => {
  const header = useSelector((state) => state.header);

  return (
    <div className="recipes-container">
      <h2 className="recipes-text">Recipes</h2>
      <div className="recipe-cards">
        {header.search &&
          header.search.map((item, index) => {
            return (
              <div className="box" key={index}>
                <div className="img-box">
                  <LazyLoadImage
                    alt=""
                    src={item.strMealThumb}
                    effect="opacity"
                  />
                </div>
                <div className="detail-box">
                  <h2>{item.strMeal}</h2>
                  <button>
                    <BsFillArrowRightCircleFill
                      size={"40px"}
                      color={"#ffbe33"}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        {header.search ? null : (
          <div className="no-result">
            <h2>No Result Found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
