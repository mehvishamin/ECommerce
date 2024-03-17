import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import Products from '../../components/Products/Products';

import CartContext from '../../utils/CartContext';
import {useContext} from "react"
export default function ProductDetails(props) {
    const[details,setDetails]=React.useState(); //forming state for products received from component "product"
    const[items,setItems]=React.useState([]);   //forming state for products filtered from product list
    const {cartProduct,setCartProduct}=useContext(CartContext)//
        const location=useLocation()
        
    React.useEffect(()=>{
    
        setDetails(location.state.product)
        console.log(location.state)
        const rProducts=location?.state?.pList?.filter(p=>p.category==location.state.product.category)
        setItems(rProducts);
    },[location])
    // this fnc takes product and adds it to localstorage.It checks if the product is present in cart then add
    // product otherwise push that product into cart.
    const AddToCart=((prod)=>{
      let productFound=false;
       let cart=JSON.parse(localStorage?.getItem("cart"))||[];
       cart.map((cp)=>{
       if(prod.id==cp.product.id){
             cp.quantity++;
           productFound=true
        }
       
      })
      if(!productFound){
       cart.push({product:prod,quantity:1})}
       localStorage.setItem("cart",JSON.stringify(cart));
       setCartProduct(cart)
    })
    
  return (
    <>
    <div style={{ display: 'flex', flexDirection:'row',justifyContent:"space-evenly" }}>
    <Card sx={{ minWidth: 345,margin:"10px",display:"flex",flexDirection:"column" }}>
      <Box>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250px"
        width="450px"
        image={details?.images[0]}
      />
      </Box>
      <Box sx={{height:"40px",display:"flex",flexDirection:"row",marginTop:"10px",justifyContent:"space-between"}}>
        {details?.images?.map((i)=>{
          return(
          <img style={{objectFit:"cover"}}
        
        alt="green iguana"
        height="100px"
        width="100px"
        src={i}
      />)
        })}
      
      </Box>
      
    </Card>
    <Card sx={{ minWidth: 345,margin:"10px", padding:"10px"}}>
      {/* <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        maxWidth="345"
        image="/static/images/cards/contemplative-reptile.jpg"
      /> */}
      <CardContent sx={{width:"300px"}}>
        <Typography gutterBottom variant="h5" component="div">
          DESCRIPTION
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
           {details?.description}
        </Typography>
        <Typography variant="body1" color="text.secondary" fontSize="20px">
         title: {details?.title}
        </Typography>

        <Typography variant="body1" color="text.secondary" fontSize="20px">
         brand: {details?.brand}
        </Typography>
         
        <Typography variant="body1" color="text.secondary" fontSize="20px">
          price: Rs {details?.price}
        </Typography> 
        <Typography variant="body1" color="text.secondary" fontSize="20px">
          rating: {details?.rating}
        </Typography>
        <Typography variant="body1" color="text.secondary" fontSize="20px">
          discount: {details?.discountPercentage}%
        </Typography>
        <Typography variant="body1" color="text.secondary" fontSize="20px">
          stock: {details?.stock}
        </Typography>
      </CardContent>
      <CardActions sx={{width:"300px"}}>
         <Button variant="contained" onClick={()=>{AddToCart(details)}}> Add to Cart</Button>
        <Button variant="contained"color="success"> Buy Now</Button> 
      </CardActions>
    </Card>
</div> 
<Typography variant='h5' sx={{margin:"10px 5px "}}>
  Related Products
</Typography>
<Box sx={{display:'flex',flexDirection:'row'}}>
 {items?.map((prod)=>{
  return(
     //Giving props to component product......component reusability
      <Products prod={prod} productsList={location?.state?.pList}/> 
 )
 })}


</Box>
</>
  );
}