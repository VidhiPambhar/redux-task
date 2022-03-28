import React from 'react'
import background from "./assets/employee.png";


function ContactUs() {
  return (
    <>
      <section style={{marginTop:"5rem"}} className='d-flex align-items-center'>
      <div className='container-fluid nav_bg'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row'>
            <div className='col-md-6 pt-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
              <h1 style={{fontSize:"48px",fontWeight:"700"}}>
                Welcome to our  <strong className='brand-name text-primary'>Contact Us Page</strong>
              </h1>
              
              <h2 className='my-3' style={{color:"#484848",fontSize:"24px"}}>
            For More info Contact Us :<br></br><strong className='text-danger'>8849162367</strong> <br></br>
              </h2>
            </div>
            <div className='col-lg-6 pt-6 order-1 order-lg-2 header-img'>
              <img src={background} style={{textAlign:"right"}} className="img-fluid animated" alt="dfd"/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ContactUs