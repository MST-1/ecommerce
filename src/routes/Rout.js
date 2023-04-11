import { BrowserRouter ,Routes,Route } from "react-router-dom"; 

import {Home,Products,Contact,About,SingleProduct,Shop,Cart} from "../pages/Export";
import { Navbar } from "../components/navbar";


 
const Router =()=>{
return (<BrowserRouter>
<Navbar/>
<Routes>
<Route path="/" element={<Home/>}/>

<Route path="/product" element={<Products/>}/>
<Route path="/Cart" element={<Cart/>}/>
<Route path="/Shop" element={<Shop/>}/>
<Route path="/Additem" element={<Contact/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/singleProduct/:id" element={<SingleProduct/>}/>





</Routes>

</BrowserRouter>
)






}

export default Router;