import { useRef, useEffect } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoriesAndfilterByFirstCategory,
  filterByCategory,
  setActiveCategory,
} from "../redux/actions/recipesActions";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";

const Recipes = () => {
  const refs = useRef([]);
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(getCategoriesAndfilterByFirstCategory());
  }, [dispatch]);

  const selectCategory = (index, strCategory) => {
    dispatch(setActiveCategory(index));
    dispatch(filterByCategory({ c: strCategory }));
  };
  return recipes.categoriesAndFilteredMealsByFirstCategoryloading ? (
    <Spinner color="#212529" />
  ) : (
    <div className="recipes-container">
      <h2 className="recipes-text">Recipes</h2>
      <div className="categories">
        <ul>
          {recipes.categoriesAndFilteredMealsByFirstCategory.categories.map(
            (item, index) => {
              return (
                <li
                  key={index}
                  className={
                    index === recipes.activeCategory ? "active-category" : ""
                  }
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
                    <Link to={`/recipes/${item.idMeal}`}>
                      <BsFillArrowRightCircleFill
                        size={"35px"}
                        color={"#ffbe33"}
                      />
                    </Link>
                  </div>
                </div>
              );
            }
          )}
        {/* filteredMealsByCategory */}
        {recipes.filteredMealsByCategoryLoading ? (
          <Spinner color="#212529" />
        ) : (
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
                  <Link to={`/recipes/${item.idMeal}`}>
                    <BsFillArrowRightCircleFill
                      size={"35px"}
                      color={"#ffbe33"}
                    />
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Recipes;
