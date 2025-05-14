import React from "react";
import { Outlet } from "react-router-dom";
import TopHeader from "./../components/header/TopHeader";
import MainHeader from "./../components/header/MainHeader";
import Footer from "./../components/footer/Footer";

const FrontendLayouts = () => {
  return (
    <>
      <header>
        <TopHeader />
        <MainHeader />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default FrontendLayouts;
