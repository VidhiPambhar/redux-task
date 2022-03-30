import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import axiosInstance from "../AxiosUtils";
import { useNavigate } from "react-router";

const Login = () => {


  const Navigate = useNavigate();
  const [empno, setEmpno] = useState("");
  const [password, setPassword] = useState("");

  const getData = (e) => {
    e.preventDefault();

    const details = {
      empno,
      password,
    };
    if (empno !== "" || password !== "") {
      axiosInstance
        .post("/Login/Login", details)
        .then((response) => {
          localStorage.setItem(
            "token",
            JSON.stringify(response.data.data.tokenData)
          );

          if (response.data.data.tokenData != "") {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Login successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            // Navigate("/vendorlist")
            Navigate("/productlist");
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Employee no and password Required",
          });
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Employee no and password Required",
      });
    }
  };

  return (
    <>
      <div
        className="container mt-4"
        style={{
          // marginLeft: "5rem",

          paddingTop: "3rem",
          paddingBottom: "3rem",
        }}
      >
        <Form
          style={{
            border: "2px solid gray",
            borderRadius: "2rem",
            width: "50%",
            display: "flex",
            flexDirection: "column",
            marginLeft: "25%",
            backgroundColor:"#A3E4D7"
          }}
        >
          <Form.Group
            className="mb-3"
            style={{ width: "50%", marginLeft: "20%" }}
            controlId="formBasicEmail"
          >
            <h1
              className="text-center mt-4"
              style={{
                marginLeft: "3rem",
                marginBottom: "2rem",
                //  fontFamily: "Helvetica Neue",
              }}
            >
              Login
            </h1>
            <Form.Label>User No</Form.Label>
            <Form.Control
              type="text"
              value={empno}
              onChange={(e) => {
                setEmpno(e.target.value);
              }}
              name="empno"
              placeholder="Enter Employee no"
            />
          </Form.Group>
          <br />
          <Form.Group
            className="mb-3"
            controlId="formBasicPassword"
            style={{ width: "50%", marginLeft: "20%" }}
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              name="password"
              placeholder=" Password"
            />
          </Form.Group>
          <br />
          <Button
            variant="dark"
            onClick={getData}
            size="lg"
            type="submit"
            style={{ marginLeft: "30%", marginBottom: "2rem", width: "30%" }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};
export default Login;
