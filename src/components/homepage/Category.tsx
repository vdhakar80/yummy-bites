import React from "react";

function Category() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          height: "300px",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <div>
          <img
            style={{
              height: "300px",
            }}
            src={
              "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=996&t=st=1682183046~exp=1682183646~hmac=c656f51accb171ee69f5ced2d72fa40be03b2fd8ae81e2d07bd413ec5eb78896"
            }
          />
        </div>
        <div>text</div>
      </div>
    </>
  );
}

export default Category;
