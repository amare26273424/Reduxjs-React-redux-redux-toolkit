import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";



const Layout = () => {

const showcart = useSelector((state)=>  state.card.showcart)



  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
{  showcart && <CartItems />  }
        
        {" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
