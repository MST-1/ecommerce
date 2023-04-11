import React from "react";
// import {PRODUCTS} from "../../products";
import "../Shop/shop.css"
import { Product } from "./product";

import { useSelector } from "react-redux";



export const Shop=()=>{
 
const count=useSelector(state=>state.counter.value);
// console.warn("count",count);




   

    return <div className="shop">
       <div className="container-fluid">
       <div className="container text-center">
       

       <div className="products">{count.map((prod)=>{
        // console.log(prod);
     return (
      
      <div className="row">
        
          <Product data={prod}/>

          {/* {for adding  other  products} */}
          {/* <button onClick={()=>{dispatch(ADD_TO_CART([...count,primary]))}}>dispatch me</button> */}
      
    </div>)
    })}</div>
       </div>
      
        </div>
    
    

    </div>
    
    
    
    };