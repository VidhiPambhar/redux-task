import { useNavigate, useLocation } from "react-router";
import axiosInstance from "../AxiosUtils";

import Button from "react-bootstrap/Button";

import Swal from "sweetalert2";

const Logout = () => {
  const Navigate = useNavigate();
  const location = useLocation();

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

    // Swal.fire({
    //   position: "center",
    //   icon: "success",
    //   title: "Successfully Logout",
    //   showConfirmButton: false,
    //   timer: 1500,
    // });
    Navigate("/login");
  };

  return (
    <>
      <div className="container text-center mt-5">
        <Button onClick={logout} type="submit" size="lg" variant="primary">
          Logout
        </Button>
        <br />
        <br />
        <h4>Go to Login Page</h4>
      </div>
    </>
  );
};

export default Logout;