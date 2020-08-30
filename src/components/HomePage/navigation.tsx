import React from "react";
import "./main.scss"
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <div className="nav-container">
      <ul>
        <li><Link to="/">
            Home |
          </Link>
        </li>
        <li><a href="#news">My Orders | </a></li>
        <li>
          <Link to="/cart">
            Cart
          </Link></li>
      </ul>
    </div>
  );
};


export default Navigation;