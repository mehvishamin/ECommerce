import About from "./pages/About/About";
import Contact from "./pages/ContactUs/ContactUs";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css"


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={ <Home/>}/>
    <Route path="/about" element={ <About/>}/>
    <Route path="/contact" element={ <Contact/>}/>
    </Routes>
  
  
   </BrowserRouter>
  );
}

export default App;
