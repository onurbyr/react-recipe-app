import { useEffect, useRef } from "react";
import { CgSearch, CgMenu } from "react-icons/cg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSearch, setIsMenuActive } from "../redux/actions/headerActions";

const Header = () => {
  const menu = useRef(null);
  const isMenuActive = useSelector((state) => state.header.isMenuActive);
  const isHome = useSelector((state) => state.home.isHome);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isMenuActive) {
      menu.current.classList.add("menu--active");
      menu.current.classList.remove("menu--deactive");
    } else {
      menu.current.classList.remove("menu--active");
      menu.current.classList.add("menu--deactive");
    }
  }, [isMenuActive]);

  const handleChange = (e) => {
    location.pathname !== "/search" && navigate("../search");
    dispatch(getSearch(e.target.value));
    e.target.value === "" && navigate(-1);
  };

  return (
    <header
      style={
        isHome
          ? null
          : { background: "linear-gradient(to right, #0D0E10, #3A4243)" }
      }
    >
      <div className="logo-container">
        <Link className="logo" to="/">
          <div className="logo-text">RecipeApp</div>
        </Link>
        <button className="menu" onClick={() => dispatch(setIsMenuActive())}>
          <CgMenu style={{ color: "white", fontSize: "36px" }} />
        </button>
      </div>
      <div ref={menu} className="menu-container">
        <nav>
          <div className="nav_links">
            <Link to="/">HOME</Link>
            <Link to="/recipes">RECIPES</Link>
            <Link to="/about">ABOUT</Link>
          </div>
        </nav>
        <div className="search-container">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Search.."
            name="search"
          />
          <CgSearch
            style={{ color: "white", fontSize: "22px", marginLeft: "10px" }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
