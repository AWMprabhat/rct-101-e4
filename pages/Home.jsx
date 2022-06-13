import React from "react";
import { Products } from "../components/Products";

const Home = () => {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "auto",
      }}
    >
      <Products />
    </div>
  );
};

export default Home;
