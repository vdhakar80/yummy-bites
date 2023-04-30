import React from "react";
import Header from "./Header";
import Counter from "./Counter";
import Banner from "../components/homepage/Banner";
import Category from "../components/homepage/Category";
import Categories from "../components/homepage/Categories";
import AutoPlay from "../components/Autoplay";
import Navbar from "../components/Navbar";
import Footer from "../components/homepage/Footer";
import MenuSlider from "../components/homepage/MenuSlider";
import UploadImage from "../components/UploadImage";

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
      <MenuSlider />
      <div style={{ height: "500px" }}></div>
      <Footer />
      {/* <UploadImage /> */}
    </>
  );
}

export default HomePage;
