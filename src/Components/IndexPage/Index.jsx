import React from "react";
import Home from "../Home/Home";

const Index = () => {
  return (
    <div className="container-fluid p-3">
      <div className=" d-flex justify-content-between align-items-center">
      <h1>Order</h1>
      
      <button className="btn btn-primary">Create New</button>
    </div>
      <Home />
    </div>
  );
};

export default Index;
