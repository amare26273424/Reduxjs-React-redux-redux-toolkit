import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import {useSelector,useDispatch} from "react-redux";
import { setshowcart } from "../store/cartslice";

const CartItems = () => {
let total = 0
  
const cardlist = useSelector((state) => state.card.cardlist);
cardlist.forEach(element => {
  total+= element.totalprice
});

 const dispatch = useDispatch()
 function   closecartitem (){
       dispatch(setshowcart())
 }


 
 

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <button className="closebtn"  onClick={closecartitem}>close</button>
      <ul>
       
          {cardlist.map((item) => (
             <li  key={item.id} >
            <CartItem name={item.name}  price={item.price} id={item.id}  total={item.totalprice} quantity={item.quantity}/>
            </li>
          ))}
      
      </ul>

      <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>
    </div>
  );
};

export default CartItems;
