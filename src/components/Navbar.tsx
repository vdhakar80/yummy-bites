import React from "react";
import "./../assets/css/navbar.css";
import yummyBitesLogo from "./../assets/images/yummyBitesLogo.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Navbar() {
  return (
    <>
      {/* <div> */}
      <div className="my-navbar">
        <div className="my-navbar-left">
          <img
            src={yummyBitesLogo}
            height={50}
            width={50}
            className="my-logo"
          />
        </div>
        <div className="my-navbar-right">
          <div className="cart">
            <ShoppingCartOutlinedIcon color="primary" />
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
