import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home=()=>{
return(<div className="homebox">
{/* start */}



<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
        <Link to="/shop"><img src="https://images.pexels.com/photos/583842/pexels-photo-583842.jpeg" class="img1" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Tech Items</h5>
        <p>Tech items refer to electronic gadgets or devices that are designed to make our lives easier, more convenient, or more entertaining.</p>
      </div></Link>
      
    </div>
    <div class="carousel-item">
    <Link to="/shop"><img src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg" class="img1" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Cloths</h5>
        <p> Clothes come in different styles, colors, shapes, and patterns, based on the materials used, the occasion and cultural preferences</p>
      </div></Link>
      
    </div>
    <div class="carousel-item">
    <Link to="/shop"><img src="https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"class="img1" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Shoes</h5>
        <p> boots, sandals, sneakers, loafers, and heels explore a lot.</p>
      </div></Link>
      
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>





{/* ends */}

{/* <div className="img">
   
<div className="img1"><Link to="/shop" ><img src="https://images.pexels.com/photos/583842/pexels-photo-583842.jpeg" alt="Tech" /><h1>Tech</h1></Link></div>
<div className="img2"> <Link to="/shop"><img src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg" alt="Cloths" /></Link> </div>
<div className="img3">
<Link to="/shop"><img src="https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" /></Link>
</div>
</div> */}

<div className="elem">

</div>




Home
</div>)




}


export default Home;