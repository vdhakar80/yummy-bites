import React from "react";
import Navbar from "../components/Navbar";
import style from "./../assets/cssModules/cart.module.css";
import { useSelector } from "react-redux";
import { CartObjectType } from "../store/cart/cartTypes";
import { CartItemType } from "../store/cart/cartTypes";

function CartPage() {
  const cart = useSelector(
    (state: { cart: CartObjectType }) => state.cart.cart
  );

  return (
    <>
      <Navbar />
      <div className={style.cartWrapper}>
        <hr />
        <div>Your Cart</div>
        <hr />
        <div className={style.cartItemWrapper}>
          <div className={style.cartItemWrapper}>
            <div className={style.cartItemImg}>Image</div>
            <div className={style.cartItemNameAndDescription}>
              Name and Description
            </div>
            <div className={style.cartItemQuantity}>Quantity</div>
            <div className={style.cartItemPrice}>Amount</div>
          </div>
        </div>
        {cart.map((ele: CartItemType, index: number) => (
          <>
            <div className={style.cartItemWrapper}>
              <img
                className={style.cartItemImg}
                src={ele.itemImg}
                alt={ele.itemName}
                width={50}
                height={50}
              />
              <div className={style.cartItemNameAndDescription}>
                <div>{ele.itemName}</div>
                <div>{ele.itemDescription}</div>
              </div>
              <div className={style.cartItemQuantity}>{ele.itemQuantity}</div>
              <div className={style.cartItemPrice}>{ele.itemPrice}</div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default CartPage;
