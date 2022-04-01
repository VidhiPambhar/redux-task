import axios from "axios";
import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { setSelectedProducts } from "../redux/actions/productAction";

function ProductDetails() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.selecteProduct);
  const { desc, name, img } = product;
  const { productId } = useParams();

  const [data, setData] = useState([]);
  console.log("data", data);
  useEffect(() => {
    fetchFoodDetails();
  }, []);

  useEffect(() => {
    setData(product);
    console.log("selected data", data);
  }, [product]);

  const fetchFoodDetails = async () => {
    const res = await axios
      .get(`http://localhost:3003/food-details/${productId}`)
      .catch((err) => console.log(err));
    console.log(res.data);
    dispatch(setSelectedProducts(res.data));
setData(res.data);


  };
  
    

  return (
    
    <>
      <div>

        <Container>
          <Row className="justify-content-md-center">
       
                <Col>
                  <Card
                    style={{
                      width: "100%",
                      paddingLeft: "10%",
                      border: "none",
                      paddingRight: "10%",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <h1 style={{ marginTop: "1rem" }}>{name}</h1>
                    </div>
                    {/* <Card.Img variant="top" />
                    <img
                      src={require(`.././Components/assets/${img}`)}
                      alt=""
                    /> */}

                    <Card.Body>
                      <Card.Text>{desc}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ProductDetails;
