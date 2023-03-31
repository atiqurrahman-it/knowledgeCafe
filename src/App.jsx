import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import ShowData from "./component/ShowData/ShowData";
import Footer from "./component/Footer/Footer";
const App = () => {
  return (
    <div className="App container mx-auto">
      <Header></Header>
      <ShowData></ShowData>
      <Footer></Footer>
    </div>
  );
};

export default App;
