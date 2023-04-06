import React from "react";
import App from "./App";
import Header from "./component/Header/Header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import LoadingPage from "./component/LodingPage/LoadingPage";

const Home = () => {
  // data loaded then show 
  const navigation=useNavigation()
  return (
    <div>
      <Header></Header>
      
       {/* all the other elements */}
       <div className="text-center">
          {navigation.state === "loading" && <LoadingPage></LoadingPage> }
       </div>
       <>
        <Outlet />
      </>

      <Footer></Footer>
    </div>
  );
};

export default Home;
