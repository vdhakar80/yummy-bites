import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </>
  );
}

export default App;
