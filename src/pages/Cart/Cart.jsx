import React from "react";
import './cart.css';

import { remove,add,sub } from "../../features/counter/cart";

import { useDispatch, useSelector } from "react-redux";


export const Cart=()=>{
const data=useSelector(state=>state.carter.value);
const dispatch=useDispatch();



 function adding(num){
  let array=[...data];
  let x = JSON.parse(JSON.stringify(array));
  
console.log("add",num);
var newArray = x.map((elem) =>{
   
  if(elem.id==num){let n=elem.qty+1;
    console.log("i m qty",n);
    return Object.assign(elem, {qty:n});}
  else return elem;
  
});
// (s)***********************for testing**********************
// console.log(newArray);
// (e)***********************for testing**********************
dispatch(add(newArray));


 }
 function subtract(num){
  console.log("sub",num);

  let array=[...data];
  let x = JSON.parse(JSON.stringify(array));
  
console.log("add",num);
var newArray = x.map((elem) =>{
   
  if(elem.id==num){
    if(elem.qty>1){let n=elem.qty-1;
    console.log("i m qty",n);
    return Object.assign(elem, {qty:n});
  }else{
    return elem;
  }
    
    }
  else return elem;
  
});

dispatch(sub(newArray));

 }

function removing(e){
  // let eleToRemoveId=e.target.parentElement.parentElement.id;
  let eleToRemoveId=e.target.id;
  
 let num=parseFloat(eleToRemoveId);



  

  // *(s)******************for testing*******************************
  console.log('id to be removed' ,eleToRemoveId);
  console.log('i m num' ,num);
 let removedata=data.filter(function(value){ 

  console.log(eleToRemoveId ,value.id)
 return (value.id!== num);
});



var newArray = data.filter((item) => item.id !== 2);

 
  console.log("i m removedData",removedata);
  console.log("i m new array",newArray);
  // *(e)******************for testing*******************************

  dispatch(remove(removedata));
}
const total = data.reduce((acc, item) => acc + item.price*item.qty, 0);
 return (
    <div className="cart">
      <h2> Cart Items</h2>
      <ul>


        {data.map((item) => (<div className="pro" id={item.id}>
            <img src={item.productImage} alt="" className="image" />
            <div className="cartCard">
            <li key={item.id}>
              <h2>{item.productName} - ${item.price}</h2>
            
            <p>{item.description}</p>
          </li>
          <button onClick={(e)=>{removing(e)}} id={item.id}>remove</button>

          <span className="add" onClick={()=>{adding(item.id)}}>+</span><span className="display">{item.qty}</span><span className="sub" onClick={()=>{subtract(item.id)}}>-</span>
            </div>
          </div>
        ))}


      </ul>
       
       

      <div className="total">
      <div className="ttl">Happy Buying</div>
      <div className="disc"><p >"It comes down to how our customer experiences the brand – and how that brand makes a person feel." </p></div>
      <div className="cartTotal"><p>Total Items In Cart : {data.length}</p><br />
        <p >Total Cart Value: ${total}</p></div>
      
</div>
      
    </div>
  );



};