import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, useLocation, useParams } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts, setProducts } from "../redux/actions/productAction";

function Navbar() {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const foodData = useSelector((state) => state.allProducts.products);
  console.log("foodData all products", foodData);
  const [sidebar, setSidebar] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const location = useLocation();
  const { productId } = useParams();

  useEffect(() => {
    location.pathname === "/productlist" ||
    location.pathname === `/productdetails/${productId}`
      ? setShowSearch(true)
      : setShowSearch(false);
  }, [location.pathname]);

  useEffect(() => {
    searchInput === "" && dispatch(setProducts(foodData));
  }, [searchInput]);

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    dispatch(searchProducts(searchInput, foodData));
  };

  const handleSubmit = () => {
    dispatch(searchProducts(searchInput, foodData));
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>

              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {showSearch && (
            <div
              className="form-group has-search"
              style={{
                position: "absolute",
                right: "6%",
                marginLeft: "63%",
                marginTop: "0.5rem",
              }}
            >
                <div class="input-group" style={{ borderRadius: "3rem" }}>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search the products"
                    value={searchInput}
                    onChange={handleSearchChange}
                  />
                  <button
                    class="btn btn-primary"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    <FaIcons.FaSearchMinus />
                  </button>
                </div>

            </div>
          )}
        
          <h2
             style={{ color: "white", marginLeft:"40%",marginTop: "0.5rem",position:"absolute"}}
          >
            Food Shop
          </h2>
          

          <img
            style={{
              position: "absolute",
              right: "10px",
              justifyContent: "flex-end",
            }}
            src={require("./assets/logoo.jpg")}
            width="50px"
            height="50px"
            alt=""
          />
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
