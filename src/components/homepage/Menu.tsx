import React from "react";
import style from "./../../assets/cssModules/menu.module.css";
function Menu() {
  return (
    <>
      <div className={style.menuContainerWrapper}>
        <div className={style.menuContainer}>
          <center>
            <div className="text-center">Choose your Flavor</div>
            <div>Food that brings people together!</div>
            <div>
              Cursus ultricies in maecenas pulvinar ultrices integer quam amet,
              semper dictumst sit interdum ut venenatis pellentesque nunc.
            </div>
            <div>View all Menu</div>
          </center>
        </div>
      </div>
    </>
  );
}

export default Menu;
