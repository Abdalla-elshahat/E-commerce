import { useContext} from "react";
import "./buy.css"
import { procontext } from "../store";
import { arr } from "../catgories/laptops/Laptops";
import { useNavigate } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
function Buy(){
  let nav=useNavigate();
    function delet(ele){
      arr.splice(arr.indexOf(ele),1);
      nav("/buy");
    }
    function clear(){
      arr.splice(0,arr.length);
      nav("/buy");
    }
let pric=0;
    let x=useContext(procontext);
      for(let i=0;i<x.length;i++){
        pric+=Number.parseFloat(x[i].price);
      }
return(
  <div className="contener">
    <h1>Wellcom to cart</h1>
<h2>Your Pric is: {pric}$</h2>
    <button className="clear" onClick={()=>clear()}>clearcart</button>
   <table border={1}>
      <thead>
        <tr>
          <th>id</th>
          <th>brand</th>
          <th>Image</th>
          <th>price</th>
          <th className="des">description</th>
        </tr>
      </thead>
      <tbody>
        {x.map((item)=>(
        <tr key={item.id}>
          <td className="id">{item.id}</td>
          <td className="prand">{item.brand}</td>
          <td><img src={item.img} alt={item.title} style={{width:"100px",height:"100px"}}/></td>
          <td className="price">{item.price}$</td>
          <td className="des">{item.des}</td>
          <td><button className="delet" onClick={()=>delet(item)}>delete</button></td>
        </tr>
        ))}
      </tbody>
    </table>
  </div>
)
}
export default Buy;