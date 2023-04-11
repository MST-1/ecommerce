import './contact.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { increment } from '../features/counter/counterSlice';
import { useDispatch, useSelector } from 'react-redux';




const Contact = () => {

    const value=useSelector((state)=>state.counter.value);
    const dispatch=useDispatch();
    const [name, setname] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState(0);
    const [imag, setimag] = useState('');
    const id=(value.length)+1;
    
//  const name=document.getElementById('name');
//  const desc=document.getElementById('description');
//  const price=document.getElementById('price');
//  const imag=document.getElementById('imag');
    
    let data={};
 const forminput=(e)=>{
    // e.preventDefault();
    console.log(name,desc,price,imag);
    console.log(id);
    
 data={productName:name,
    description:desc,price:price,productImage:imag,id:id,qty:1};

 dispatch(increment(data));

 



 }



  return (
    <div className="container">
        <form action="/">
      <div className="input-group mb-3" id="name">
        <span className="input-group-text" id="basic-addon1">
          Name
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e)=>{
           e.preventDefault();
           setname(e.target.value);
          }}
        />
      </div>

      <div className="input-group mb-3" id="price">
        <span className="input-group-text">$</span>

        <input
          type="number"
          className="form-control"
          aria-label="Dollar amount (with dot and two decimal places)"
          onChange={(e)=>{
            e.preventDefault();
            setPrice(e.target.value);
           }}
        />
      </div>
      <div className="mb-3" id="description">
        <label for="exampleFormControlTextarea1" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={(e)=>{
            e.preventDefault();
            setDesc(e.target.value);
           }}></textarea>
      </div>
      <div className="mb-3" id="imag">
        <label for="formFileMultiple" className="form-label">
          Upload URL of Image 
        </label>
        <input
          className="form-control"
          type="text"
          id="formFileMultiple"
          multiple
          onChange={(e)=>{
            e.preventDefault();
            setimag(e.target.value);
           }}
        />
      </div>
      <div className="mb-3">
       <Link to='/shop' >
        <input
          className="form-control"
          id="submit"
          type="submit"
          onClick={(e)=>forminput(e)}
        /></Link>
      </div>
      </form>
    </div>
  );
};

export default Contact;
