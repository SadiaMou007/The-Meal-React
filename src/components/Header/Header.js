import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="flex text-xl justify-around border-b-2 items-center">
      <h4 className="p-2">The Meal</h4>
      <div>
        <Link to={"/shop"} className="r text-green-600 font-serif font-bold">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Header;
