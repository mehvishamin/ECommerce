import React, { useState,useEffect } from 'react'
import ProductsContent from '../../components/ProductsContent/ProductsContent';
import Cart from '../../components/Cart/Cart';
import Header from '../../components/Header/Header';

const Home = () => {
    const[productsList,setProductsList]=useState([]);
    const[cartProduct,setCartProduct]=useState([]);
    const [state, setState] = React.useState(false);
    const toggleDrawer =  (isOpen) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState(isOpen);
    };
    useEffect(()=>{
       
      fetch('https://dummyjson.com/products')
      .then(res=>res.json())
      .then(json=>setProductsList(json.products))
                
    },[])
    useEffect(()=>{
      let cart=JSON.parse(localStorage?.getItem("cart"))||[];
      localStorage.setItem("cart",JSON.stringify(cart));
      setCartProduct(cart);

    },[])
  return (
    <>
    <Header toggleDrawer={toggleDrawer}/>
    
    <ProductsContent productsList={productsList} setProductsList={setProductsList}
    cartProduct={cartProduct} setCartProduct={setCartProduct}/>
    <Cart state={state} setState={setState} toggleDrawer={toggleDrawer} cartProduct={cartProduct} setCartProduct={setCartProduct}/>
    </>
  )
}

export default Home