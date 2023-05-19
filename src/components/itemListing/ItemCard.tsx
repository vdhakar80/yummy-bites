import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import style from "./../../assets/cssModules/itemListing.module.css";

function ItemCard(props: any) {
  const [cartValue, setCartValue] = useState(0);

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
            onClick={() => setCartValue((val) => val + 1)}
          >
            Add to cart
          </button>
        ) : (
          <div className={style.incDecItems}>
            <button onClick={() => setCartValue((val) => val + 1)}>
              <AddCircleOutlineIcon color="success" />
            </button>
            <div>{cartValue}</div>
            <button onClick={() => setCartValue((val) => val - 1)}>
              <RemoveCircleOutlineIcon color="success" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemCard;
