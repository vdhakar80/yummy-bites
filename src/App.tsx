// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./containers/Header";
import HomePage from "./containers/HomePage";
import Login from "./components/Login";
import Register from "./containers/Register";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
