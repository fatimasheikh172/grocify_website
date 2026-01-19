import React from "react";
import Hero from "../Hero/Hero";
import Category from "../Category/Category";
import Value from "../Values/Value";
import Products from "../Products/Products";
import Discount from "../Discount/Discount";
import Method from "../Method/Method";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Value />
      <Products />
      <Discount />
      <Method />
      <Testimonials />
    </div>
  );
};

export default Home;
