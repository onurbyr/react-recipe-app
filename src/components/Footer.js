import {
  MdLocationOn,
  MdLocalPhone,
  MdEmail,
  MdOutlineArrowRight,
} from "react-icons/md";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-upside">
        <div className="footer-upside-items">
          <h4>Contact Us</h4>
          <a className="contact-items" href="#location">
            <MdLocationOn />
            <span>Location</span>
          </a>
          <a className="contact-items" href="#phone">
            <MdLocalPhone />
            <span>+01 234567890</span>
          </a>
          <a className="contact-items" href="#mail">
            <MdEmail />
            <span>lorem@gmail.com</span>
          </a>
        </div>
        <div className="footer-upside-items">
          <a className="footer-logo" href="#footerlogo">
            RecipeApp
          </a>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
            corrupti mollitia at. Officiis temporibus quia sit blanditiis
            praesentium neque voluptatem
          </p>
          <div className="footer-social">
            <a href="#facebook">
              <AiFillFacebook />
            </a>
            <a href="#twitter">
              <AiFillTwitterCircle />
            </a>
            <a href="#linkedin">
              <AiFillLinkedin />
            </a>
            <a href="#instagram">
              <AiFillInstagram />
            </a>
          </div>
        </div>
        <div className="footer-upside-items">
          <h4>QuickLinks</h4>
          <div className="footer-quick-links">
            <div className="home">
              <MdOutlineArrowRight />
              <Link to="/">Home</Link>
            </div>
            <div className="recipes">
              <MdOutlineArrowRight />
              <Link to="/recipes">Recipes</Link>
            </div>
            <div className="about">
              <MdOutlineArrowRight />
              <Link to="/about">About</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-downside">
        <p>© 2022 All Rights Reserved</p>
        <p>© Designed By ThemeWagon</p>
      </div>
    </footer>
  );
};

export default Footer;
