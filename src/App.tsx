// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./containers/Header";
import HomePage from "./containers/HomePage";
import Login from "./components/Login";
import Register from "./containers/Register";
import { ToastContainer } from "react-toastify";
import UploadItem from "./containers/UploadItem";
import ItemListing from "./containers/ItemListing";
import CartPage from "./containers/CartPage";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/uploadItems" element={<UploadItem />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/items" element={<ItemListing />} />
          <Route path="/items/:itemType" element={<ItemListing />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
