import { useNavigate, useLocation } from "react-router";
import axiosInstance from "../AxiosUtils";

import Button from "react-bootstrap/Button";

import Swal from "sweetalert2";

const Logout = () => {
  const Navigate = useNavigate();
  const location = useLocation();

  const logout = (e) => {
    e.preventDefault();
    alert("Logout")
 
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
      Navigate("/login");
    };
    

  return (
    <>
      <div className="shadow-lg p-3 mb-6 bg-white rounded" style={{width:"40%",marginLeft:"35%",marginTop:"3rem"}}>
     <h2 style={{marginLeft:"2rem"}}>Are You sure for logout?</h2>
        <Button onClick={logout}  type="submit" size="lg" variant="primary" style={{marginLeft:"10rem",marginTop:"1rem"}}>
          Logout
        </Button>
        <br />
        <br />
       
      </div>
    </>
  );
};

export default Logout;