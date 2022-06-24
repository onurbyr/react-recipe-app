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

  return recipes.selectedItemLoading ? (
    <Spinner color="#212529" height="100vh" />
  ) : (
    <div>
      <div>{recipes.selectedItem.strMeal}</div>
    </div>
  );
};

export default RecipeDetails;
