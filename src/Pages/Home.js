import React from "react";
import Announcement from "../Components/Announcement";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import Categories from "../Components/Category/Categories";
import Products from "../Components/Product/Products";
import Newletter from "../Components/Newletter";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newletter />
      <Footer />
    </div>
  );
};

export default Home;
