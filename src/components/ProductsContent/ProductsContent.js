import React from 'react'
import Products from '../Products/Products'

const ProductsContent = (props) => {
    const {productsList,setCartProduct,cartProduct}=props
  return (
    <>
    <div style={{display:"flex", flexDirection:"row",justifyContent:"center", flexWrap:"wrap"}}>
       {productsList?.map((prod)=>{
          return(
    
        <Products prod={prod} cartProduct={cartProduct} setCartProduct={setCartProduct}/>
          )
        })}
    </div>
    </>
  )
}

export default ProductsContent