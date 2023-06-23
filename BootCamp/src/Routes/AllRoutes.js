import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/navbar/Navbar";
import Login from "../Pages/login/Login";
import Footer from "../Components/footer/Footer";
import Home from "../Pages/home/Home";
import Admin from "../Pages/admin/Admin";
import Signup from "../Pages/login/Signup";
import Wishlist from "../Pages/wishlist/Wishlist";
import Bag from "../Pages/bag/Bag";
import Orders from "../Pages/orders/Orders";
import Kids from '../Pages/Gender/kids';
import Mens from '../Pages/Gender/men';
import Womens from '../Pages/Gender/women';
const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/kids" element={<Kids />}></Route>
        <Route path="/men" element={<Mens />}></Route>
        <Route path="/women" element={<Womens />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/bag" element={<Bag />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default AllRoutes;
