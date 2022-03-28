import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import "./Shop.css";
const Shop = () => {
  const [category, setCategory] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => res.json())
      .then((data) => setCategory(data.categories));
  }, []);
  console.log(category);
  return (
    <div className="row ms-4">
      <div className=" p-2 col-lg-7">
        <h3 className=" text-center">Available Category</h3>
        <div className="row g-4">
          {category.map((product, index) => {
            return <Products key={index} product={product} />;
          })}
        </div>
      </div>
      <div className=" col-lg-5">
      <Cart/>
      </div>
    </div>
  );
};

export default Shop;
