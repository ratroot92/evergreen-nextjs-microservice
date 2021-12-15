import React from "react";
import * as FaIcons from "react-icons/fa";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand" href="#">
          <FaIcons.FaShoppingBasket size={30} /> Evergreen
        </a>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              DryFruits
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Condiments
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">
              Others
            </a>
          </li>
        </ul>
        {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
      </div>
    </nav>
  );
}
