import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import style from "./../assets/cssModules/itemListing.module.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const categoryList = [
  "",
  "pizza",
  "burger",
  "pasta",
  "paratha",
  "dosa",
  "idli",
  "poha",
  "dessert",
];

function ItemListing() {
  const { itemType } = useParams();
  const [itemCategory, setItemCategory] = useState(itemType);
  const [itemList, setItemList] = useState<any>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/items/${itemCategory}`)
      .then((res) => {
        setItemList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [itemCategory, itemType]);

  return (
    <div style={{ background: "rgb(250, 250, 250)" }}>
      <Navbar />
      <div className={style.itemListing}>
        <div className={style.categoryList}>
          {categoryList.map((ele) => {
            return (
              <>
                <Link
                  to={`/items/${ele}`}
                  className={style.category}
                  style={
                    ele === itemCategory
                      ? { background: "rgb(71, 215, 172)", color: "white" }
                      : {}
                  }
                  onClick={() => setItemCategory(ele)}
                >
                  {ele ? ele : "All"}
                </Link>
              </>
            );
          })}
        </div>
        <div className={style.itemList}>
          {itemList.map((ele: any) => {
            return (
              <>
                <div className={style.itemCard}>
                  <img
                    src={ele.image}
                    alt="food"
                    height={150}
                    width={300}
                    className={style.itemImage}
                  />
                  <div className={style.itemCardContent}>
                    <div className={style.itemName}>{ele.name}</div>
                    <div className={style.itemPrice}>&#8377;{ele.price}</div>
                    <div className={style.itemDescription}>
                      {ele.description.length <= 50
                        ? ele.description
                        : `${ele.description.substring(0, 50)}...`}
                    </div>
                    <button className={style.addToCartButton}>
                      Add to cart
                    </button>
                  </div>
                </div>
              </>
            );
          })}
          {itemList.length < 1 && (
            <div style={{ textAlign: "center" }}>No Item Found</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemListing;
