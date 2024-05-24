import {  useParams } from 'react-router-dom';
import './prodect.css'
import { Laptopss } from '../../Dumy';
import { Star } from '@mui/icons-material';
function Product(){
  let prams=useParams();
  return(
Laptopss.map((e)=>{
  if(+prams.prodectid===e.id){
  return(
  <>
   <div className="card1" key={e.id}>
  <img src={e.img} className="card1-img-top" alt="..."/>
  <div className="card-body1">
    <h5 className="card-title1">{e.brand}</h5>
    <span className="rate">4.5 <Star/><Star/><Star/><Star/><Star/></span>
    <p className="cardtext">{e.des}</p>
    <div className="inf">
      <div className="offers">45%off</div>
      <div className="pric">{e.price}</div>
      <div className="insted"><del><sup>1,5566</sup></del></div>
  </div>
  <div className="finish">
      <div className="finishleft">
<p>Get the coupon</p>
<button  className="Buy1">Buy</button>
      </div>
    </div>
</div>
</div>
        </>
  )
  }
})
  )
}
export default Product;