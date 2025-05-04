import React from "react";
import road from "../assets/road.jpg";

const Products = ({ img, name, price }) => {
  //   const myName = "john doe";
  //   const img =
  //     "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/home.jpg";
  //   const name = "Genie Perfume";
  //   const price = 2000;
  //   console.log(props);
  return (
    <div className="product-card">
      <img src="{props.img}" alt="product image" />
      <h3 style={{ color: "blue", fontStyle: "italic" }}>{name}</h3>
      <p className="text-4xl text-red-500">${price}</p>
      {/* <img
        src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/home.jpg"
        alt="product image"
      />
      <h3 style={{ color: "blue" }}>Genie Perfume</h3>
      <p className="text-400 text-red-500">$600</p>
      <img src="{road}" alt="road" /> */}
      {/* <h1 className="text-4xl">{1 + 1}</h1>
      <p>{myName}</p>
      <h3>{name}</h3>
      <p>{price}</p> */}
    </div>
  );
};

export default Products;
