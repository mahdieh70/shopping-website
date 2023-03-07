import React, { useState, useEffect, useContext } from "react";

//assets
import logo from "../../assets/logoipsum-248.svg";

//router
import { Link, NavLink } from "react-router-dom";

//context
import { cartContext } from "../../context/CartContextProvider";

//style
import "./Navbar.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [menu, setMenu] = useState(false);
  const { state } = useContext(cartContext);

  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <>
      <header className={navbar ? "header-section active" : "header-section"}>
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <ul
            id="navbarList"
            className={menu ? "#navbarList active" : "#navbarList"}
          onClick={() => setMenu(false)}
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "activeElem" : "inActive"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? "activeElem" : "inActive"
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "activeElem" : "inActive"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "activeElem" : "inActive"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="navbar-icons">
            <div className="shoppingCartIcon">
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
                <span>{state.itemsCounter}</span>
              </Link>
            </div>
            <div className="mobile" onClick={() => setMenu(!menu)}>
            {menu ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
