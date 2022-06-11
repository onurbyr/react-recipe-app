import React, { useRef, useEffect } from "react";
import "../App.css";

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
      <h2>Recipes</h2>
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
    </div>
  );
};

export default Recipes;
