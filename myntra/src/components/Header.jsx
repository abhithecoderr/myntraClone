import { IoIosSearch } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import { IoBag } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="./images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">
            Studio <sup>New</sup>
          </a>
        </nav>
        <div className="search_bar">
          <IoIosSearch className="search_icon" />
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <div className="action_container">
            <IoPerson size={20} />
            <span className="action_name">Profile</span>
          </div>

          <div className="action_container">
            <IoMdHeart size={20} />
            <span className="action_name">Wishlist</span>
          </div>

          <Link to="/bag" className="action_container" href="">
            <IoBag size={20} />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">0</span>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
