import React from "react";
import App from "./App";
import Header from "./component/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./component/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header></Header>
      
       {/* all the other elements */}
       <>
        <Outlet />
      </>

      <Footer></Footer>
    </div>
  );
};

export default Home;
