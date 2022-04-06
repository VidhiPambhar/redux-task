import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { SidebarData, SidebarData1 } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts, setProducts } from "../redux/actions/productAction";
import "bootstrap/dist/css/bootstrap.min.css";
import axiosInstance from "../AxiosUtils";
import { FiLogOut } from "react-icons/fi";

function Navbar() {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const foodData = useSelector((state) => state.allProducts.products);
  // console.log("foodData all products", foodData);
  const [sidebar, setSidebar] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const location = useLocation();
  const navigate = useNavigate();
  const { productId } = useParams();
  const token = localStorage.getItem("token");

  // console.log(location.pathname);

  const Navigate = useNavigate();
  // useEffect(() => {
  //   location.pathname === "/logout" ?  alert("Logout Success") : alert("Logout Unsuccess"); navigate("/")
  // }, [location])

  useEffect(() => {
    location.pathname === "/productlist" ||
    location.pathname === "productlist/productdetails/"
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
  const logout = (e) => {
    e.preventDefault();

    const removeData = {
      empno: location.state,
      token: `bearer  ${JSON.parse(localStorage.getItem("token"))}`,
    };

    axiosInstance
      .post("http://103.138.234.244:9067/api/Login/LogOutLog", removeData)
      .then(() => {
        localStorage.removeItem("token");
      })
      .catch((error) => console.log(error));
    Navigate("/");
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
              {token ? (
                <>
                  {SidebarData1.map((item, index) => {
                    return (
                      <li key={index} className={item.cName}>
                        <Link to={item.path}>
                          {item.icon}
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                  <div
                    style={{
                      backgroundColor: "#060b26",
                      justifyContent: "inline-flex",
                      height: "60px",
                      fontSize: " 1.2rem",
                      paddingLeft: "1rem",
                      paddingTop: "0.1rem",
                    }}
                  >
                    <FiLogOut size={20} />
                    <button onClick={logout} className="click-logout">
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <>
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
                </>
              )}
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
            style={{
              color: "white",
              marginLeft: "40%",
              marginTop: "0.5rem",
              position: "absolute",
            }}
          >
            Foodie Zone
          </h2>
          {/* <Button onClick={logout}style={{ marginLeft:"89%",marginTop: "0.5rem",position:"absolute"}}><FiLogOut size={30}/></Button> */}

          <img
            style={{
              position: "absolute",
              right: "10px",
              justifyContent: "flex-end",
            }}
            src={require("./assets/logoo.jpg")}
            width="50px"
            height="50px"
            onClick={() => navigate("/")}
            alt=""
          />
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;