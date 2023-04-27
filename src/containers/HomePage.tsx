import React from "react";
import Header from "./Header";
import Counter from "./Counter";
import Banner from "../components/homepage/Banner";
import Category from "../components/homepage/Category";
import Categories from "../components/homepage/Categories";
import AutoPlay from "../components/Autoplay";
import Navbar from "../components/Navbar";
import Footer from "../components/homepage/Footer";

function HomePage() {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <Banner />
      {/* <Counter /> */}
      <Categories />
      <Category />
      {/* <AutoPlay /> */}
      <div style={{ height: "500px" }}></div>
      <Footer />
    </>
  );
}

export default HomePage;
