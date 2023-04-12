import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./nav.css";

export const Navbar =()=>{

return (

<div className="navbar">
<div className="links">
  <div className="logo">
    <Link to="/" className="navbar-brand"><h1 className="text">style me</h1></Link>
    </div>
    <div className="addItem"><Link to='Additem'><img src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png" alt="Add Item" className="log"/></Link></div>
 <div className="shop"><Link to="/Shop">Shop</Link></div>
 
 <div className="cart"><Link to="/Cart"><ShoppingCart size={32}/></Link></div>


</div>



</div>





);




};