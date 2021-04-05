import React from "react";

import "@styles/components/InitialComponent.css";
import ProductCard from "./ProductCard/ProductCard";

const InitialComponent = () => {
  return (
    <div className="initial-component">
      <h3>Your project is running</h3>
      <h1>Let's code!</h1>
      <ProductCard />
    </div>
  );
};

export default InitialComponent;
