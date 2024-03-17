import axios from "axios";
//This function makes an api call

const fetchProducts=(async()=>{
    try{
    const response=await axios.get('https://dummyjson.com/products')
    return response.data;
    }
    catch(error){
        console.error(error);
        throw error;

    }
})


export{fetchProducts};