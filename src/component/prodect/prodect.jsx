import { useParams } from "react-router-dom";
import "./prodect.css";
import { Laptopss } from "../../Dumy";
import { Star } from "@mui/icons-material";

function Product() {
  const params = useParams();

  const product = Laptopss.find(
    (e) => e.id === +params.prodectid
  );

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="card1">
      <img src={product.img} className="card1-img-top" alt="" />

      <div className="card-body1">
        <h5 className="card-title1">{product.brand}</h5>

        <span className="rate">
          4.5 <Star /><Star /><Star /><Star /><Star />
        </span>

        <p className="cardtext">{product.des}</p>

        <div className="inf">
          <div className="offers">45% off</div>
          <div className="pric">{product.price}</div>
          <div className="insted">
            <del><sup>15566</sup></del>
          </div>
        </div>

        <div className="finish">
          <p>Get the coupon</p>
          <button className="Buy1">Buy</button>
        </div>
      </div>
    </div>
  );
}

export default Product;