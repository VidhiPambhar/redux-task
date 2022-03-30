import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom';

function BreadCrumb() {
    const location = useLocation();
    const breadCrumbView = () => {
      const { pathname } = location;
      const pathnames = pathname.split("/").filter((item) => item);
      const capatilize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
      return (
        <div>
          <nav aria-label="breadcrumb " class="first d-md-flex">
          <Breadcrumb  style={{marginLeft:"20%"}} >
             {pathnames.length > 0 ? (
              <Breadcrumb.Item  >
                <Link to="/">Home</Link>
              </Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            )} 
            {pathnames.map((name, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1;
              return isLast ? (
                
                <Breadcrumb.Item>{capatilize(name)}</Breadcrumb.Item>
              ) : (
                <Breadcrumb.Item>
                  <Link to={`${routeTo}`}>{capatilize(name)}</Link>
                </Breadcrumb.Item>
              );
            })}
          </Breadcrumb>
          </nav>  
        </div>
      );
    };
  
    return <>{breadCrumbView()}</>;
  };
  
  export default BreadCrumb;