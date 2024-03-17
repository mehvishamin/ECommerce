import About from "./pages/About/About";
import Contact from "./pages/ContactUs/ContactUs";
import Home from "./pages/Home/Home";
import CartContext from "../src/utils/CartContext"
import ProductDetails from "./pages/ProductDetails/ProductDetails"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css"
import React from "react"
import {useState,useEffect} from "react"
import Header from '../src/components/Header/Header';
import { fetchProducts } from "./module/Products";
import Cart from "../src/components/Cart/Cart"
function App() {
  
  const[cartState,setCartState]=useState([])
  const [state, setState] = React.useState(false);
  const[productsList,setProductsList]=useState([]);

  useEffect(()=>{
       
      
    fetchProducts()
    .then((response)=>{
       console.log(response,"data")
       setProductsList(response.products);
            })
           
  },[])
  useEffect(()=>{
    let cart=JSON.parse(localStorage?.getItem("cart"))||[];
    setCartState(cart);
    localStorage.setItem("cart",JSON.stringify(cart));

  },[])


  const toggleDrawer =  (isOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(isOpen);
  };

  return (
    <CartContext.Provider value={{cartProduct:cartState,setCartProduct:setCartState}}>
    <Header toggleDrawer={toggleDrawer}/>
    <Cart state={state} setState={setState} toggleDrawer={toggleDrawer} />
    
    <BrowserRouter>
    <Routes>
    <Route path="/" element={ <Home productsList={productsList}/>}/>
    <Route path="/about" element={ <About/>}/>
    <Route path="/contact" element={ <Contact/>}/>
    <Route path="/productdetails" element={<ProductDetails/>}/>
    </Routes>
  
  
   </BrowserRouter>
   </CartContext.Provider>
  );
}

export default App;
