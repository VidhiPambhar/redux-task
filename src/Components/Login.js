import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import axiosInstance from "../AxiosUtils";
import { useNavigate } from "react-router";
import { RiUserShared2Line } from "react-icons/ri";
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
        className="shadow-lg p-3 mb-6 bg-white rounded"
        style={{
          width: "50%",
          marginLeft: "25%",
          marginTop: "1rem",
          marginBottom: "8rem",
        }}
      >
        <Form
          style={{
            width: "70%",
            marginLeft: "10%",
          }}
        >
            <Form.Group
              className="mb-3"
              style={{ width: "100%", marginLeft: "10%" }}
              controlId="formBasicEmail"
              >
              <div >
              <RiUserShared2Line size={35} style={{
                  marginLeft: "7rem",marginBottom:"1rem"}} />
              <h1
                className="text-center mt-4"
                style={{
                  marginLeft: "1rem",
                  marginBottom: "2rem",
                   fontFamily: "Helvetica Neue",
                  display:"inline-block"
                }}
              >
                Login
              </h1>
              </div>
              
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
            style={{ width: "100%", marginLeft: "10%" }}
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
            style={{ marginLeft: "40%", marginBottom: "2rem", width: "40%" }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};
export default Login;
