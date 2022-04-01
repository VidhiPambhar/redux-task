import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { productReducer } from "../redux/reducers/productReducer";
import { setProducts } from "../redux/actions/productAction";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import nodata from "../Components/assets/no-result.gif";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
function ProductList() {
  const navigate = useNavigate();

  const food = useSelector((state) => state.allProducts.filteredFoodData);
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
  console.log("data", data);

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      Swal.fire({
        text: "You have to login first",
      });
      navigate("/login");
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

  // console.log(token);

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
  return (
    <div>
      <Container>
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
          {data && data.length ? (
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
