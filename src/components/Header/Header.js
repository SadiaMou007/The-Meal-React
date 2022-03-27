import React from "react";
import "./Header.css";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-light bg-light navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand text-warning fw-bold" href="./home">
            The Meal
          </a>

          <div class="me-2">
            <span type="button" class=" position-relative fs-5 me-3">
              <FaShoppingCart />
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill p-1 b-main">
                <small className="b-counter">0</small>
                <span class="visually-hidden">unread messages</span>
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
