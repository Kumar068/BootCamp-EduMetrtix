import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerList">
          <h4>SHOPPING</h4>
          <ul>
            <li>
              <Link to={"/men"}>Men</Link>
            </li>
            <li>
              <Link to={"/women"}>Women</Link>
            </li>
            <li>
              <Link to={"/kids"}>Kids</Link>
            </li>
          </ul>
        </div>
        <div className="footerList">
          <h4>Menu</h4>
          <ul>
            <li>
              <Link to="/bag">Bag</Link>
            </li>
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
