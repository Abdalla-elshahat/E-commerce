import { Route, Routes } from 'react-router-dom';
import Topar from '../Topar/Topar';
import Mainpg from '../mainpg/mainpg';
import Laptops from  '../catgories/laptops/Laptops';
import Login from "../login/login" ;
import Product from '../prodect/prodect';
import './Home.css';
import { Laptopss, Phones } from '../../Dumy';
import Buy from '../buy/buy';
import Store from '../store';
function Home(){
    return(
 <>
   <Store>
 <Topar/>
     <div className="homecontainer">
        <Routes>
<Route path="/" element={<Mainpg />}/>
<Route path="/Home" element={<Mainpg />}/>
<Route path="/login" element={<Login/>}/>
<Route path='/laptops' element={<Laptops p={Laptopss}/>}/>
<Route path='/phones' element={<Laptops p={Phones}/>}/>
<Route path='/headphones' element={<Laptops p={Laptopss}/>}/>
<Route path='/thirts' element={<Laptops p={Laptopss}/>}/>
<Route path='/playstation' element={<Laptops p={Laptopss}/>}/>
<Route path='/sports' element={<Laptops p={Laptopss}/>}/>
<Route path='/laptops/:prodectid' element={<Product/>}/>
<Route path='/buy' element={<Buy/>}/>
        </Routes>
     </div>
     </Store>
 </>
    )   
}
export default Home;