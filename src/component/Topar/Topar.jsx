import {  LocalMall, Search, Store} from "@mui/icons-material";
import './Topar.css'
import '../mainpg/mainpg.css'
import '../mainpg/mainpg.jsx'
import '../catgories/laptops/Laptops.css'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { procontext } from "../store.jsx";
import { arr } from "../catgories/laptops/Laptops";
function Topar(){
    return(
 <div className="toparcontainer">
    <div className="toparleft">
        <div className="mainlogo">
        <Store className="logoicon"/>
    <span className="logotext">Affiliate</span>
        </div>
    </div>
    <div className="toparcenter">
        <div className="links">
        <Link className="active" rel="stylsheet" to={"/Home"}>Home</Link>
        <Link to={"/laptops"}>laptops</Link>
        <a rel="stylsheet" href="#" >Affiliate programm</a>
        <a rel="stylsheet" href="#" >other</a>
        <a rel="stylsheet" href="#">help</a>
        </div>
 </div>
 <div className="toparright">
    <label className="theme-switch">
        <input type="checkbox" className="checkbox"/>
      <div className="container"onClick={(()=>{
        document.querySelector('.toparcontainer').classList.toggle("light");
        let root=document.documentElement;
        if(document.querySelector(".toparcontainer").classList.contains("light")){
          root.style.setProperty("--mainwhite","black");
          root.style.setProperty("--mainblack","white");
        }
        else{
          root.style.setProperty("--mainblack","black");
          root.style.setProperty("--mainwhite","white");
        }
      })}>
        <div className="circle-container">
          <div className="sun-moon-container">
            <div className="moon">
              <div className="spot"></div>
              <div className="spot"></div>
              <div className="spot"></div>
            </div>
          </div>
        </div>
      </div>
        </label>
    <div className="Search">
      <Search className="searchicon"/>
        <input type="text" placeholder="Search for products.." className="searchtext" onBlur={((e)=>{
          e.preventDefault();
          if(e.target.value==="laptop"){
            window.open("http://localhost:3000/laptops", "_self")
          }
          else if(e.target.value==="phone"){
            window.open("http://localhost:3000/Phones", "_self")
          }
          else if(e.target.value==="playstation"){
            window.open("http://localhost:3000/Playstation", "_self")
          } else if(e.target.value==="Home"){
            window.open("http://localhost:3000/Home", "_self")
          } else if(e.target.value==="Shirt"){
            window.open("http://localhost:3000/Shirt", "_self")
          } else if(e.target.value==="Sports"){
            window.open("http://localhost:3000/Sports", "_self")
          }
        })}/>
    </div>
    <div className="loginbb">
    <Link to={"/buy"}><LocalMall className="shoppingbag"/></Link>
    <Link to={"/login"} className="loginbtn">login</Link>
    </div>
 </div>
 </div>
    )   
}
export default Topar;