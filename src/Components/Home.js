import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import background from "./assets/home.png";
function Home() {
  
  return (
    <>
    <section style={{marginTop:"8rem"}} className='d-flex align-items-center'>
      <div className='container-fluid nav_bg'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row'>
            <div className='col-md-6 pt-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
              <h1 style={{fontSize:"48px",fontWeight:"700"}}>
                Welcome to My Website, I am Form <strong className='brand-name text-primary'>DRC Systems</strong>
              </h1>
              <h2 className='my-3' style={{color:"#484848",fontSize:"24px"}}>
                We are the team of reactJS
              </h2>
              <div className='mt-3'>
                <a href='/login' className='btn btn-primary' style={{fontWeight:"500",fontSize:"16px",borderRadius:"50px"}}>Get Products</a>
              </div>
            </div>
            <div className='col-lg-6 pt-6 order-1 order-lg-2 header-img'>
              <img src={background} className="img-fluid animated" alt="dfd"/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home