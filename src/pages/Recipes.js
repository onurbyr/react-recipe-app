import { useRef, useEffect } from "react";
import "../App.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAndfilterByFirstCategory } from "../redux/actions/recipesActions";

const Recipes = () => {
  const refs = useRef([]);
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  console.log(recipes.categoriesAndFilteredMealsByFirstCategory);

  useEffect(() => {
    dispatch(getCategoriesAndfilterByFirstCategory());
  }, [dispatch]);

  const selectCategory = (index) => {
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
                    onClick={() => selectCategory(index)}
                  >
                    {item.strCategory}
                  </li>
                );
              }
            )}
        </ul>
      </div>
      <div className="recipe-cards">
        <div className="box">
          <div className="img-box">
            <img alt="" src={require("../images/f1.png")} />
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
            <img alt="" src={require("../images/f2.png")} />
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
            <img alt="" src={require("../images/f3.png")} />
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
            <img alt="" src={require("../images/f4.png")} />
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
            <img alt="" src={require("../images/f1.png")} />
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
            <img alt="" src={require("../images/f2.png")} />
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
