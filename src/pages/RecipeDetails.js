import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../redux/actions/recipesActions";
import Spinner from "../components/Spinner";

const RecipeDetails = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(getDetails({ i: id }));
  }, [dispatch]);

  const renderIngredients = () => {
    var rows = [];
    for (var i = 1; i <= 20; i++) {
      let strMeasure = `strMeasure${i}`;
      let strIngredient = `strIngredient${i}`;
      recipes.selectedItem[strMeasure] &&
        recipes.selectedItem[strIngredient] &&
        rows.push(
          <li key={i}>
            {recipes.selectedItem[strMeasure] +
              " " +
              recipes.selectedItem[strIngredient]}
          </li>
        );
    }
    return rows;
  };

  return recipes.selectedItemLoading ? (
    <Spinner color="#212529" height="100vh" />
  ) : (
    <div className="recipe-details-container">
      <div className="reciped-details-image-container">
        <img src={recipes.selectedItem.strMealThumb} alt="" />
      </div>
      <div className="recipe-details-header">
        <h2>{recipes.selectedItem.strMeal}</h2>
        <div className="recipe-info-container">
          <div className="recipe-info-line"></div>
          <div className="recipe-info">
            <h6>Category: {recipes.selectedItem.strCategory}</h6>
            <h6>Area: {recipes.selectedItem.strArea}</h6>
            <h6>Tags: {recipes.selectedItem.strTags}</h6>
          </div>
        </div>
      </div>
      <div className="instructions-ingredients">
        <div className="instructions">
          <p>{recipes.selectedItem.strInstructions}</p>
        </div>
        <div className="ingredients">
          <h4>Ingredients</h4>
          <ul>{renderIngredients()}</ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
