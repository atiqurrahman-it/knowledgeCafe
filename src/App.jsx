import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import ShowData from "./component/ShowData/ShowData";
const App = () => {
  return (
    <div className="App container mx-auto">
      <Header></Header>
      <ShowData></ShowData>
    </div>
  );
};

export default App;
