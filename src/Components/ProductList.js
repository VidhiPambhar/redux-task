import axios from "axios";
import React, { useEffect } from "react";

import ProductComponent from "./ProductComponent";

function ProductList() {
  // const products = useSelector((state) => state.allProducts.products);
  
  return (
    <div>
      <ProductComponent />
    </div>
  );
}

export default ProductList;
