import React from 'react';
import "../Shop/product.css";
import { Link } from 'react-router-dom';
import {addtoCART} from '../../features/counter/cart';
import { add } from '../../features/counter/forId';
import { ADD_TO_CART } from '../../features/counter/counterSlice';
import { useDispatch, useSelector } from 'react-redux';



export const Product = (props) => {
    const{id,productName,price,productImage,description,qty}=props.data;

  
    const cartData=useSelector(state=>state.counter.value);
       const dispatch=useDispatch();
  //*******************(s) */ function for deleteing element*********************
       const delme=(id)=>{
        
        let removedata=cartData.filter(function(value){ 

         return (value.id!== id);
        });


        //  console.log(removedata);

        dispatch(ADD_TO_CART(removedata));

       }
        //*******************(e) */ function for deleteing element*********************




         //*******************(s) */ function for editing element*********************
       const editMe=(id)=>{


        //  console.log(removedata);

        dispatch(add(id));

       }
        //*******************(e) */ function for editing element*********************

  return (
    
    <div className="col" key={id}> 
    {/* start */}

    <div className="card" >
  <img src={productImage}className="card-img-top" alt={productName}/>

<div className="card-body">
    <h5 className="card-title">{productName}</h5>
    <p className="card-text">$ : {price}/-</p>
    {/* <Link to="/cart" className="btn btn-primary">
      add to cart
    </Link> */}

    <button className='addToCartBttn' onClick={()=>{dispatch(addtoCART({id,productName,price,productImage,description,qty}))}}>Add To Cart</button>
    <button className='deleteMe' onClick={()=>{delme(id)}}>Remove</button>
    <Link to="/about"><button className='editMe' onClick={()=>{editMe(id)}}><img src="https://cdn-icons-png.flaticon.com/512/1828/1828911.png" alt="" height="20" width="20"/></button></Link>

  </div>

</div>
    {/* end */}


    {/* <h1>product</h1> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwA0EtOV4lxhGtbkZKuzeleeoPXUljNQs9Xbp3-1-SOywXWsTJFLsQzrj0d8KGZxZJfg2fXBfBJc8&usqp=CAU&ec=48665701" alt="" />
        <div className='description'>
      <p>

        <b>{productName}</b>
      </p>
      <p>

        <b>{price}</b>
      </p>

        </div> */}
       
    </div>
  )
}
