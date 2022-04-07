import axios from "axios";
import "animate.css";
import "../db.json";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { productReducer } from "../redux/reducers/productReducer";
import { setProducts } from "../redux/actions/productAction";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { searchProducts } from "../redux/actions/productAction";
import * as FaIcons from "react-icons/fa";
import {MdFavoriteBorder }from "react-icons/md"
import nodata from "../Components/assets/no-result.gif";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import SelectSearch from "react-select-search";
import { Select } from "grommet";
import { isDisabled } from "@testing-library/user-event/dist/utils";
function ProductList() {
  const navigate = useNavigate();

  const food = useSelector((state) => state.allProducts.filteredFoodData);
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);
  const [searchInput, setSearchInput] = useState("");
const[isHidden,setIsHidden]=useState(false);
  const [productFlag, setProductFlag] = useState(false);
  const dispatch = useDispatch();
  const foodData = useSelector((state) => state.allProducts.products);
  console.log("data", data);

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      Swal.fire({
        title: "Login Required!",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "yes, go for Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
          setProductFlag(false);
        }
      });
    } else {
      setProductFlag(true);
    }
  });
  useEffect(() => {
    setData(food);
    console.log("data in effect", data);
  }, [food]);

  const fetchProducts = async () => {
    const res = await axios
      .get("http://localhost:3001/food")
      .catch((err) => console.log(err));

    await dispatch(setProducts(res.data));
    await setData(res.data);
    await setFlag(!flag);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    searchInput === "" && dispatch(setProducts(foodData));
  }, [searchInput]);


  const handleSort = (param, dataOrder) => {
    const sortData = param.sort((a, b) => {
      var titleA = a.title.toUpperCase();
      var titleB = b.title.toUpperCase();

      if (dataOrder === "dsc") {
        if (titleA > titleB) {
          return -1;
        }
        if (titleA < titleB) {
          return 1;
        }
      } else {
        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
      }
      return 0;
    });
    dispatch(setProducts(sortData));
    setData(sortData);
    setFlag(!flag);
  };
  const handleSearchChange = (e) => {
    dispatch(searchProducts(searchInput, foodData));
  };



console.log(food);

  return (
    <div>
      <Container>
        <div class="input-group" style={{ borderRadius: "3rem",width:"30%",marginLeft:"35%" }}>
 
          <input
            type="text"
            class="form-control"
            placeholder="Search the products"
            value={searchInput}
            onChange={(e) => {
              handleSearchChange(e);
              setSearchInput(e.target.value);
            }}
          />
          <button
            class="btn btn-primary"
            type="submit"
            onClick={handleSearchChange}
          >
             <FaIcons.FaSearchMinus />
          </button>
        </div>
        {/* <SelectSearch
      //  options=  {data &&
      //     data.map((item) => (
      //       <li  onClick={() => setSearchInput(item.title)}>{item.title}</li>
      //     ))}
        // filterOptions={food}
        value=""
        name="Workshop"
        placeholder="Select items.."
        search
        onChange={(e)=>{
          handleSearchChange(e);
          setSearchInput(e.target.value);
          }}
     />    */}
      {/* <button
     class="btn btn-primary"
     type="submit"
     onClick={handleSearchChange}
   >
     Search
   </button> */}
   {isHidden&&(
<div>
{data &&
          data.map((item) => (
            <li style={{marginLeft:"35%" ,display:"inline-list-item",border:"1px solid black",borderRadius:"0.5rem",width:"30%",listStyle:"none",padding:"4px"}}  onClick={() => setSearchInput(item.title)}>{item.title}</li>
          ))}
  </div>
  )}
          {/* {!isHidden &&(
        <div>
    {data && data.length ? (
            data.map((item) => (
              <li style={{display:"inline-list-item",border:"1px solid black",borderRadius:"0.5rem",width:"94%",listStyle:"none",padding:"4px"}} onClick={() => setSearchInput(item.title)}>{item.title}</li>
              ))
              ) : (
                <div>
                 { console.log("no data")}
                </div>
              )}
        </div>
        )}
 */}

        <div
          style={{ marginTop: "0.5rem", marginLeft: "90%", cursor: "pointer" }}
        >
          <AiOutlineSortAscending
            size={40}
    
            onClick={() => handleSort(data, "asc")}
          />
          <AiOutlineSortDescending
            size={40}
            onClick={() => handleSort(data, "dsc")}
          />
        </div>

        <Row className="justify-content-md-center">
          {productFlag && data && data.length ? (
            data.map((item) => (
              <Col>
                <Card
                  style={{
                    width: "18rem",
                    marginLeft: "3rem",
                    marginTop: "1rem",
                  }}
                >
                  <Card.Img variant="top" />
                  <img
                    src={require(`./../Components/assets/${item.img}`)}
                    alt=""
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.foodtype}</Card.Text>
                    <Button variant="primary">
                      <Link
                        to={`/productlist/productdetails/${item.id}`}
                        className="btn btn-sm btn-primary mr-1"
                      >
                        Click Here
                      </Link>
                    </Button>

                    
                    <MdFavoriteBorder style={{marginLeft:"6rem"}}  size={25}/>
            

                  </Card.Body>

                </Card>
              </Col>
            ))
          ) : (
            <div>
              <img
                style={{ marginLeft: "30%", marginBottom: "20%" }}
                src={nodata}
                alt="data is not available"
              />
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default ProductList;
