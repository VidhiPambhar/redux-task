// import "bootstrap/dist/css/bootstrap.min.css";
// import { Navbar } from "react-bootstrap";
// import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";

// import './App.css';
// import AboutUs from "./Components/AboutUs";
// import ContactUs from "./Components/ContactUs";
// import Head from "./Components/Head";
// import Header from "./Components/Header";
// import Home from "./Components/Home";
// import Login from "./Components/Login";
// import ProductDetails from "./Components/ProductDetails";
// import ProductList from "./Components/ProductList";
// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Navbar />

//         <Routes>
//           <Route exact path="/home" element={<Home/>} />
//           <Route exact path="/login" element={<Login/>} />
//           <Route exact path="/about" element={<AboutUs/>} />
//           <Route exact path="/contact" element={<ContactUs/>} />
//           <Route exact path="/productlist" element={<ProductList/>} />
//           <Route exact path="/productdetails/:productId" element={<ProductDetails />} />

//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from "./Components/Home"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./Components/Login";
import AboutUs from "./Components/AboutUs"
import Logout from './Components/Logout';
import ContactUs from "./Components/ContactUs"
import ProductList from './Components/ProductList';
import ProductDetails from './Components/ProductDetails';
import BreadCrumb from './Components/BreadCrumb';
import ProductComponent from './Components/ProductComponent';
import Search from './Components/Search';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <BreadCrumb/>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        
       <Route exact path="/login" element={<Login/>} />
          <Route exact path="/about" element={<AboutUs/>} />
           <Route exact path="/contact" element={<ContactUs/>} />
          <Route exact path="/productlist" element={<ProductList/>} />

          <Route exact path="/productlist/productdetails/:productId" element={<ProductDetails />} />
          <Route exact path="/logout" element={<Logout/>} />
          <Route exact path="/search" element={<Search/>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;