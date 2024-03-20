import React from "react";

const ProductDetails = ({ params }) => {
  console.log(params.id);
  return <div>Product Details of product {params.id}</div>;
};

export default ProductDetails;
