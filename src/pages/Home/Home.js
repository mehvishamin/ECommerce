import React, { useState,useEffect } from 'react'
import ProductsContent from '../../components/ProductsContent/ProductsContent';
import Cart from '../../components/Cart/Cart';
import { fetchProducts } from '../../module/Products';
const Home = ({productsList}) => {
  
   
    

   
  return (
    <>
    
    <ProductsContent productsList={productsList}
/>
    </>
  )
}

export default Home