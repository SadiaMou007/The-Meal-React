import React, { useEffect, useState } from "react";
import useCategory from "../../Hooks/setCategory";
import Products from "../Products/Products";
import "./Shop.css";
const Shop = () => {
  const [category] = useCategory();
  const [s, setS] = useState(category);
  const handleSearch = (e) => {
    const v = e.target.value;
    const result = category.filter((c) =>
      c.strCategory.toLowerCase().includes(v)
    );
    setS(result);
  };
  return (
    <div>
      <div className="p-2 text-center">
        <input
          className="border-2"
          type="text"
          placeholder="search category"
          onChange={handleSearch}
        />
      </div>
      <div className=" p-2 grid grid-cols-3 gap-7">
        {s.map((item) => (
          <Products product={item} key={item.idCategory}></Products>
        ))}
      </div>
    </div>
  );
};

export default Shop;
