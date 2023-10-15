/* eslint-disable no-unused-vars */
import React from "react";
import NavBar from "../pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default LoginLayout;
