import React from "react";

function Categories() {
  const data = [
    {
      name: "Pizza",
      url: "https://www.vegrecipesofindia.com/wp-content/uploads/2018/05/indian-paneer-pizza-recipe.jpg",
    },
    {
      name: "Burger",
      url: "https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg?w=2000",
    },
    {
      name: "French Fries",
      url: "https://images.themodernproper.com/billowy-turkey/production/posts/2022/Homemade-French-Fries_8.jpg?w=960&h=960&q=82&fm=jpg&fit=crop&dm=1662474181&s=f6b09b96f732330eca2aae43140b3ffa",
    },
  ];
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "30px",
        }}
      >
        {data.map((ele) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={ele.url}
              height={100}
              width={100}
              style={{ borderRadius: "50%" }}
            />
            <div style={{ fontSize: "32px", fontWeight: "600" }}>
              {ele.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Categories;
