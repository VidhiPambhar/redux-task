import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { productReducer } from "../redux/reducers/productReducer";
import axios from "axios";
import { setProducts } from "../redux/actions/productAction";
import { Link, useParams } from "react-router-dom";

function ProductComponent() {
  // const [products, setProducts] = useState(null);
  const food = useSelector((state) => state.allProducts.filteredFoodData);
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
  console.log("data", data);

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

  const handleSort = (param) => {
    const sortData = param.sort(function (a, b) {
      if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
      if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
      return 0;
    });
    console.log(sortData);
    dispatch(setProducts(sortData));
    setData(sortData);
    // console.log("Product" , products);
    setFlag(!flag);
  };
  return (
    <div>
      <Container>
        <Button
          type="submit"
          style={{ marginTop: "2rem", marginLeft: "90%" }}
          onClick={() => handleSort(data)}
          className="btn btn-primary"
        >
          Sort Data
        </Button>
        <Row className="justify-content-md-center">
          {data &&
            data.length &&
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
                        to={`/productdetails/${item.id}`}
                        className="btn btn-sm btn-primary mr-1"
                      >
                        Click Here
                      </Link>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}

export default ProductComponent;
