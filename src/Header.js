import React from "react";
import "./Css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import MyLocationIcon from '@mui/icons-material/MyLocation';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <div className="header__img">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </div>
      </Link>

      <div className="header__cont">
        <MyLocationIcon style={{color: 'white', marginRight:'-9px', marginTop: '0.73vw', height:'1.3vw'}}/>
          <div className="header_location">
          <span className="header__optionLineOne">Deliver to Akaki</span>
          <span className="header__optionLineTwo">Tbilisi 2150</span>
        </div>
      </div>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__flag" >
          <img src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png'></img>
          <div className="arrow-down"></div>
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello, {!user ? 'Guest' : user.email.substring(0, user.email.indexOf("@"))}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to='/orders'>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon style={{ height: '2.19vw'}}/>
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;