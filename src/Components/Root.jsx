import React from "react";
import Head from "./Head";
import Navbar from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Head />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
