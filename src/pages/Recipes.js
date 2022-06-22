import { useRef, useEffect } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoriesAndfilterByFirstCategory,
  filterByCategory,
  resetRecipesReducer,
} from "../redux/actions/recipesActions";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const Recipes = () => {
  const refs = useRef([]);
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(getCategoriesAndfilterByFirstCategory());
    return () => {
      dispatch(resetRecipesReducer());
    };
  }, [dispatch]);

  const selectCategory = (index, strCategory) => {
    for (
      let i = 0;
      i < recipes.categoriesAndFilteredMealsByFirstCategory.categories.length;
      i++
    ) {
      if (i === index) {
        refs.current[i].classList.add("active-category");
      } else {
        refs.current[i].classList.remove("active-category");
      }
    }
    dispatch(filterByCategory({ c: strCategory }));
  };
  return (
    <div className="recipes-container">
      <h2 className="recipes-text">Recipes</h2>
      <div className="categories">
        <ul>
          {recipes.categoriesAndFilteredMealsByFirstCategory.categories &&
            recipes.categoriesAndFilteredMealsByFirstCategory.categories.map(
              (item, index) => {
                return (
                  <li
                    key={index}
                    className={index === 0 ? "active-category" : ""}
                    ref={(element) => {
                      refs.current[index] = element;
                    }}
                    onClick={() => selectCategory(index, item.strCategory)}
                  >
                    {item.strCategory}
                  </li>
                );
              }
            )}
        </ul>
      </div>
      <div className="recipe-cards">
        {/* filteredMealsByFirstCategory */}
        {!recipes.filteredMealsByCategory.length &&
          recipes.categoriesAndFilteredMealsByFirstCategory
            .filteredByFirstCategory &&
          recipes.categoriesAndFilteredMealsByFirstCategory.filteredByFirstCategory.map(
            (item, index) => {
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
            }
          )}
        {/* filteredMealsByCategory */}
        {recipes.filteredMealsByCategory &&
          recipes.filteredMealsByCategory.map((item, index) => {
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
      </div>
    </div>
  );
};

export default Recipes;
