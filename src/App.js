import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/landing";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Card from "./components/card";
import About from "./components/about/index";
import Contact from "./components/contact";
import ShoppingCart from "./components/shoppingCart";
import Checkout from "./components/check out";
import CartContextProvider from "./context/CartContextProvider";

const App = () => {
  return (
    <CartContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Card />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </CartContextProvider>
  );
};



export default App;