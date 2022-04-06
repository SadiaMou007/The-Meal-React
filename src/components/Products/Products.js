import React from "react";
import "./Products.css";

const Products = ({ product }) => {
  const { strCategoryThumb, strCategoryDescription, strCategory } = product;

  return (
    <div className="border-2 p-4">
      <img src={strCategoryThumb} alt="" />
      <p className="text-xl font-bold text-yellow-600">{strCategory}</p>
      <p title={strCategoryDescription}>
        {strCategoryDescription.slice(0, 200)}...
      </p>
      <button className="w-full bg-slate-400 p-4 text-xl text-white font-bold hover:bg-slate-800">
        See All
      </button>
    </div>
  );
};

export default Products;
