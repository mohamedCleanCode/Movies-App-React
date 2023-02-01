import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <h1 className="logo">
          <Link to="/">Movies</Link>
        </h1>
        <ul className="nav">
          <li>
            <Link to="/WatchList">Watch List</Link>
          </li>
          <li>
            <Link to="/Watched">Watched</Link>
          </li>
          <li>
            <Link to="/add" className="add-btn">
              add
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
