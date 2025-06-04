import React from "react";
import "./assets/css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontendLayouts from "./layouts/FrontendLayouts";
import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Categories from "./pages/Categories";
import SingleProduct from "./pages/SingleProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FrontendLayouts />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category/:name" element={<Categories />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
