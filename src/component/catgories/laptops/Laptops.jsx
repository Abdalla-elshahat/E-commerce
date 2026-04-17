import { Star } from "@mui/icons-material";
import "./Laptops.css"
import { Link } from "react-router-dom";
export const arr = [];
function Laptops({ p }) {

  return (
    <div className="lap">
      <div className="lapcontener">
        {
          p.map((e) => {
            return (
              <div className="col" key={e.id} >
                <div className="card col-4">
                  <Link to={`${e.id}`}>
                    <img src={e.img} className="card-img-top" alt="..." />
                  </Link>
                  <div className="card-body">
                    <span className="rate">4.5 <Star /><Star /><Star /><Star /><Star /></span>
                    <p className="cardtext">{e.des}</p>
                    <div className="inf">
                      <div className="offers">45%off</div>
                      <div className="pric">{e.price}</div>
                      <div className="insted"><del><sup>1,5566</sup></del></div>
                    </div>
                    <div className="finish">
                      <div className="finishleft">
                        <p>Get the coupon</p>
                        <button className="Buy" onClick={(() => {
                          arr.push(e);
                        })}>Buy</button>
                      </div>
                      <div className="finshright">
                        <p>{e.brand}</p>
                        <img src="/images/علم_مصر.png" alt="" className="marka" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            )
          })
        }
      </div>
    </div>
  )
}
export default Laptops;