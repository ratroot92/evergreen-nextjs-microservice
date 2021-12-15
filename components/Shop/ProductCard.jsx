import React from "react";
import * as FaIcons from "react-icons/fa";

export default function ProductCard({ product }) {
  return (
    <div
      key={product._id}
      className="bg-faded col-sm-12 col-md-6 col-lg-4  mb-3 mt-3"
    >
      <div className="row  ">
        <div className=" col-lg-12 ">
          <img
            alt="Product Image"
            className=" w-100"
            src={`${product.coverImg}`}
          />
          {/* <Image   alt="Landscape picture" className="img-thumbnail" src={`${product.coverImg}`} /> */}
        </div>
        <div
          className="col-lg-12 d-flex flex-row justify-content-center align-items-center"
          style={{ height: "20px" }}
        >
          <small className="text-uppercase text-muted    ">
            {product.name}
          </small>
        </div>
        <div
          className="col-lg-12 d-flex flex-row justify-content-center align-items-center"
          style={{ height: "20px" }}
        >
          <small className="text-uppercase text-muted    pull-left ">
            {product.price} PKR
          </small>
        </div>
      </div>
    </div>
  );
}
