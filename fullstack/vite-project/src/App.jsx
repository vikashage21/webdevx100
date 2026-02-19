import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./components/products";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/products" element={<Products />}></Route>
        <Route path='/products/:id' element={<ProductDetails/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/login" element={<Login />}></Route>
       <Route path="/signup"  element={<Signup/>} ></Route>
       <Route path="*"  element={<NotFound/>}> </Route>

      </Routes>
    </>
  );
};

export default App;
