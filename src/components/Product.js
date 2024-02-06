import React from "react";
import { useDispatch } from "react-redux";
import { addtocart } from "../store/cartslice";


import "./Product.css";
const Product = ({ name, id, imgURL, price }) => {
const dispatch =  useDispatch()
     function addtocartfun(){

           dispatch(addtocart ({
             name:name,
             id:id,
             price:price

           }))
     }

  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button  onClick={addtocartfun}>Add to cart</button>
    </div>
  );
};

export default Product;
