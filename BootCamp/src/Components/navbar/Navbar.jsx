import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { BiSearch, BiUser, BiHeart } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "antd";
import { authLogout } from "../../Redux/auth/action";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const auth = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const handleClick = (param = "", value = "") => {
    setClick(!click);
    if (param === "" || value === "") {
      setClick(!click);
    } else if (param === "men") {
      return navigate("/men");
    }  else if (param === "women") {
      return navigate("/women");
    }  else if (param === "kids") {
      return navigate("/kids");
    } 
  };
  const handleSearchClick = () => {
    if (keyword.trim()) {
      return navigate(`/product?keyword=${keyword.trim()}`);
    }
  };
  console.log(auth.data.isAuthenticated)
  const styleA = { left: "-100%" };
  const styleB = { left: "0%" };
  const items = [
    {
      label: auth.data.isAuthenticated ? (
        <p onClick={() => dispatch(authLogout())} p="10px">
          Logout
        </p>
      ) : (
        <Link padding="10px" to="/login">
          Login / Signup
        </Link>
      ),
      key: "0",
    },
  ];
  return (
    <div className="container">
      <div className="row v-center">
        <div className="nav-item item-left">
          <div className="logo">
            <Link to="/">
              <img
                src="https://www.freelogovectors.net/wp-content/uploads/2021/02/myntra-logo-freelogovectors.net_.png"
                alt="logo"
              />
            </Link>
          </div>
        </div>
        <div className="nav-item item-center">
          <nav className="menu" style={click ? styleB : styleA}>
            <ul className="menu-main">
              <p className="mobItem">
                <Link>SHOP FOR</Link>
                <MdClose className="cross" onClick={() => handleClick()} />
              </p>
              <li
                className="menuItem"
                onClick={() => handleClick("men")}
              >
                <Link to={`/men`}>MEN</Link>
              </li>
              <li
                className="menuItem"
                onClick={() => handleClick( "women")}
              >
                <Link to={`/women`}>WOMEN</Link>
              </li>
              <li
                className="menuItem"
                onClick={() => handleClick("kids")}
              >
                <Link to={`/kids`}>KIDS</Link>
              </li>
              <p className="mobItem" onClick={handleClick}>
                <Link to="/signup">Login / Signup</Link>
              </p>
              <p className="mobItem" onClick={handleClick}>
                <Link to="/admin">Admin</Link>
              </p>
              <p className="mobItem" onClick={handleClick}>
                <Link to="/profile">Profile</Link>
              </p>
              <p className="mobItem" onClick={handleClick}>
                <Link to="/orders">Orders</Link>
              </p>
            </ul>
          </nav>
        </div>
        <div className="nav-item item-right">
          <div
            className="navSearch"
            onKeyUp={({ keyCode }) => {
              if (keyCode === 13) {
                handleSearchClick();
              }
            }}
          >
            <input
              type="text"
              placeholder="Search for products, brands and more"
              onChange={({ target }) => setKeyword(target.value)}
            />
            <BiSearch className="searchIcon" onClick={handleSearchClick} />
          </div>
          <div className="navIcons hide">
            <BiSearch className="sideIcons" />
          </div>
          <div className="navIcons display">
            <Dropdown
              menu={{ items, selectable: true, defaultSelectedKeys: ["0"] }}
              placement="bottom"
              trigger={["hover"]}
            >
              <Link onClick={(e) => e.preventDefault()}>
                <BiUser className="sideIcons" />
                <p>Profile</p>
              </Link>
            </Dropdown>
          </div>
          <div className="navIcons">
            <Link to="/wishlist">
              <BiHeart className="sideIcons" />
              <p className="display">Wishlist</p>
            </Link>
          </div>
          <div className="navIcons">
            <Link to="/bag">
              <HiOutlineShoppingBag className="sideIcons" />
              <span>1</span>
              <p className="display">Bag</p>
            </Link>
          </div>
          <div className="navIcons hamburger">
            <RxHamburgerMenu className="sideIcons" onClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
