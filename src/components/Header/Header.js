import React from "react";
import "./Header.css";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
const Header = () => {
  return (
    <div>
      <nav className="navbar bg-light navbar-expand-lg">
        <div className="container-fluid">
          <a className=" fw-bold nav-name" href="./home">
            The Meal
          </a>

          <div className="me-2">
            <span type="button" className=" position-relative fs-5 me-3">
              <FaShoppingCart />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill p-1 b-main">
                <small className="b-counter">0</small>
                <span className="visually-hidden">unread messages</span>
              </span>
            </span>

            <FcLike className="me-3 fs-5" />
            <FaUserAlt className="me-3 fs-5" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
