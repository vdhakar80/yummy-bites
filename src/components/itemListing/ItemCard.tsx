import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import style from "./../../assets/cssModules/itemListing.module.css";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  updateItem,
} from "../../store/cart/cartSlice";
import { useSelector } from "react-redux";
import { CartObjectType } from "./../../store/cart/cartTypes";
import { ItemListType } from "../../store/itemListing/itemListingTypes";

function ItemCard(props: { data: ItemListType }) {
  const dispatch = useDispatch();

  const cart = useSelector(
    (state: { cart: CartObjectType }) => state.cart.cart
  );

  const [cartValue, setCartValue] = useState(0);
  useEffect(() => {
    const isAddedInCart = cart.filter((ele) => ele.itemId === props.data._id);
    if (isAddedInCart.length > 0) {
      setCartValue(isAddedInCart[0].itemQuantity);
    }
  }, []);

  const addToCartClick = (data: ItemListType, value: number) => {
    const isavailable = cart.filter((ele) => {
      if (ele.itemId === data._id) {
        return true;
      } else {
        return false;
      }
    });
    if (value == 0) {
      dispatch(removeFromCart(data._id));
    } else {
      if (isavailable.length == 0) {
        dispatch(
          addToCart({
            itemId: data._id,
            itemDescription: data.description,
            itemImg: data.image,
            itemName: data.name,
            itemPrice: data.price,
            itemQuantity: value,
          })
        );
      } else {
        {
          dispatch(updateItem({ itemId: data._id, itemQuantity: value }));
        }
      }
    }
  };

  return (
    <div className={style.itemCard}>
      <img
        src={props.data.image}
        alt="food"
        height={150}
        width={300}
        className={style.itemImage}
      />
      <div className={style.itemCardContent}>
        <div className={style.itemName}>{props.data.name}</div>
        <div className={style.itemPrice}>&#8377;{props.data.price}</div>
        <div className={style.itemDescription}>
          {props.data.description.length <= 50
            ? props.data.description
            : `${props.data.description.substring(0, 50)}...`}
        </div>
        {cartValue == 0 ? (
          <button
            className={style.addToCartButton}
            onClick={() => {
              setCartValue((val) => val + 1);
              addToCartClick(props.data, 1);
            }}
          >
            Add to cart
          </button>
        ) : (
          <div className={style.incDecItems}>
            <button
              onClick={() => {
                addToCartClick(props.data, cartValue + 1);
                setCartValue((val) => val + 1);
              }}
            >
              <AddCircleOutlineIcon color="success" />
            </button>
            <div>{cartValue}</div>
            <button
              onClick={() => {
                addToCartClick(props.data, cartValue - 1);
                setCartValue((val) => val - 1);
              }}
            >
              <RemoveCircleOutlineIcon color="success" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemCard;
