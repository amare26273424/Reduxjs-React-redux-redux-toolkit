import React from "react";
import "./Cart.css";
import { useSelector,useDispatch } from "react-redux";
import { setshowcart } from "../store/cartslice";
const Cart = () => {
  const quantity =useSelector((state)=>  state.card.totalquentity)
  const dispatch = useDispatch()

  function showcart(){
    dispatch(setshowcart())
  }


  return (
    <div className="cartIcon">
      <h3  onClick={showcart}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
