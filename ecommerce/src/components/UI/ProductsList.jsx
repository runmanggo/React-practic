import { Fragment } from "react";
import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = ({ data }) => {
  return (
    <Fragment>
      {data?.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </Fragment>
  );
};
export default ProductsList;
