import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Products({prod,cartProduct,setCartProduct}) {
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
    
    <Card sx={{ maxWidth:200, maxHeight:300,margin:"5px"}}>
       
         <CardMedia
        sx={{ width:200, height:150}}
        image={prod.thumbnail}
        title="green iguana"
      />
      <CardContent sx={{padding:0}} >
        <Typography gutterBottom variant="p" component="div" sx={{fontWeight:"bold",padding:"10px "}} >
          {prod.title}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions  >
        <Button size="small">View</Button>
        <Button size="small" onClick={()=>{AddToCart(prod)}}>Add to Cart</Button>
      </CardActions>
      
    </Card>
    
  );
}