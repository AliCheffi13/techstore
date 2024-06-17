import React from "react";
import "./CSS/Admin.css";
import Sidebar from "../Components/Sidebar/Sidebar";
import AddProduct from "../Components/AddProduct/AddProduct";
import PrivateRoutes from "../Components/PrivateRoutes";
import { Route, Routes } from "react-router-dom";
import ListProduct from "../Components/ListProduct/ListProduct";
import LoginSignup from "./LoginSignup";

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/addproduct" element={AddProduct} />
          <Route path="/listproduct" element={ListProduct} />
        </Route>
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </div>
  );
};

export default Admin;
