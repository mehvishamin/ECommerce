import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Typography } from '@mui/material';
import CartContext from '../../utils/CartContext';
import {useContext} from "react"

export default function AnchorTemporaryDrawer({state,setState,toggleDrawer}) {
  const {cartProduct,setCartProduct}=useContext(CartContext)
//this function adds products in the cart by using + icon
 const AddProduct=((id)=>{

let cart=JSON.parse(localStorage?.getItem("cart"))||[];
   cart.map((c)=>{
      if(c.product.id==id){
         c.quantity++;
      }
   })
   localStorage.setItem("cart",JSON.stringify(cart))
    setCartProduct(cart);
 })
  // this function deletes products from the cart by using -icon
 const RemoveProduct = (id) => {
  let uCart = cartProduct.filter((r) => {
    if (r.product.id === id) {
      if (r.quantity > 1) {
        r.quantity -= 1;
        return true;
      } else {
        return false;
      }
    }
    return true;
  });

  setCartProduct(uCart);
  localStorage.setItem("cart", JSON.stringify(uCart));
};
  

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
      role="presentation"
      // onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List >
        {cartProduct.map((cp, index) => (
          <ListItem key={cp.product.id} disablePadding >
            <ListItemButton sx={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
            <ListItemText primary={cp.product.title} />
              <ListItemIcon>
                <AddIcon onClick={()=>{AddProduct(cp.product.id)}}/>
                <Typography variant='h6' color={"red"} sx={{margin:" 0 5px"}}>
                  {cp.quantity}
                </Typography>
                <RemoveIcon onClick={()=>{RemoveProduct(cp.product.id)}}/>
              </ListItemIcon>
              <Typography variant='h6' color={"red"} sx={{margin:"0 5px 0 15px"}}>
                  {cp.product.price *cp.quantity}
                </Typography>
            
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    
      
        
    </Box>
  );

  return (
    <div>
      <React.Fragment >
          
          <Drawer
            anchor={"right"}
            open={state}
            onClose={toggleDrawer(false)}
          >
            {list("right")}

          </Drawer>
        </React.Fragment>
    </div>
  );
}
