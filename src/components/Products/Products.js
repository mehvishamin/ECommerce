import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNavigate } from 'react-router-dom';

export default function Products({prod,productsList}) {
  //creating instance for use navigate function
  const navigate=useNavigate() 
  //this function navigates to a path and also sends state to that path.
  const ViewProduct=((prod)=>{
         navigate("/productdetails",{state:{product:prod,pList:productsList}})
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
        
      </CardContent>
      <CardActions  >
       <Button size="small" onClick={()=>{ViewProduct(prod)}}>View</Button>
      
        
         </CardActions>
      
    </Card>
    
  );
}