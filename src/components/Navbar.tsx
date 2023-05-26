import React from "react";
import "./../assets/css/navbar.css";
import yummyBitesLogo from "./../assets/images/yummyBitesLogo.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CartObjectType } from "../store/cart/cartTypes";
import style from "./../assets/cssModules/navbar.module.css";

function Navbar() {
  const cart = useSelector(
    (state: { cart: CartObjectType }) => state.cart.cart
  );
  return (
    <>
      {/* <div> */}
      <div className="my-navbar">
        <div className="my-navbar-left">
          <Link to={"/"}>
            <img
              src={yummyBitesLogo}
              height={50}
              width={50}
              className="my-logo"
            />
          </Link>
        </div>
        <div className="my-navbar-right">
          <div className="cart">
            <Link to={"/cart"}>
              <ShoppingCartOutlinedIcon color="primary" />
              <span className={style.cartValue}>{cart.length} </span>
            </Link>
          </div>
          <div className="profile-button">
            <img
              src={yummyBitesLogo}
              height={40}
              width={40}
              className="profile-image"
            />
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Navbar;
