import React from "react";
import style from "./../../assets/cssModules/menu.module.css";
import { Link } from "react-router-dom";
import {
  fastFoodDesc,
  menuList,
} from "../../assets/helper/constants/constants";
// const menuList = [
//   {
//     src: "https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-menu-pasta-img.png",
//     type: "pasta",
//   },
//   {
//     src: "https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-menu-pizza-img.png",
//     type: "pizza",
//   },
//   {
//     src: "https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-menu-dessert-img.png",
//     type: "dessert",
//   },
// ];
function Menu() {
  return (
    <>
      <div className={style.menuContainerWrapper}>
        <div className={style.menuContainer}>
          <div className={style.chooseFlavor}>Choose your Flavor</div>
          <div className={style.foodTogether}>
            Food that brings people together!
          </div>
          <div className={style.description}>{fastFoodDesc}</div>
          <div className={style.viewMenu}>
            <Link to={`/items/`}>
              <button>View all Menu</button>
            </Link>
          </div>
          <div className={style.menuListWrapper}>
            {menuList.map((ele, i: number) => (
              <div
                key={i}
                className={
                  i == 0 || i == 2
                    ? `d-flex justify-content-center align-items-center flex-column ${style.menuItem}`
                    : "d-flex justify-content-center align-items-center flex-column"
                }
              >
                <Link to={`/items/${ele.type}`}>
                  <img
                    src={ele.src}
                    height={300}
                    width={300}
                    className={style.itemImage}
                  />
                </Link>

                <div className={style.itemName}>{ele.type}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
