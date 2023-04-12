import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_TO_CART } from "../features/counter/counterSlice";

const About=()=>{

    const value=useSelector((state)=>state.counter.value);
    const forId=useSelector((state)=>state.forId.value);
    const dispatch=useDispatch();
    const [name, setname] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState(0);
    // const [imag, setimag] = useState('');
    // const id=(value.length)+1;
    
//  const name=document.getElementById('name');
//  const desc=document.getElementById('description');
//  const price=document.getElementById('price');
//  const imag=document.getElementById('imag');
    
    let data={};
 const forminput=(e)=>{
    // e.preventDefault();
    // console.log(name,desc,price,imag);
    console.log(forId);
    
 data={productName:name,
    description:desc,price:price,qty:1};

    let array=[...value];
    let x = JSON.parse(JSON.stringify(array));
    
  console.log("i m id",forId);
  var newArray = x.map((elem) =>{
     
    if(elem.id===forId){
      return Object.assign(elem, {productName:name,
        description:desc,price:price});}
    else return elem;
    
  });



console.log(newArray)
    

 dispatch(ADD_TO_CART(newArray));

 



 }




    return (
        <div className="container">
            <h1>Edit The Data</h1>
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
          {/* <div className="mb-3" id="imag">
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
          </div> */}
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
    
    
    
    
    
    }
    
    export default About;