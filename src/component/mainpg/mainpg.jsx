import { Cached, Facebook, HeadsetMic, Instagram, LocalShipping, Loyalty, Store, Twitter } from '@mui/icons-material';
import './mainpg.css'
import { Link } from 'react-router-dom';
import { Popular, recomnd } from "../../Dumy";
import { Star } from '@mui/icons-material';
function Mainpg(){
    return(
        <>
        <div className="mainpg" >
            <div className="mainpgcontener">
                <div className="mainpgtop">
                    <div className="mainpgtopleft">
                        <div className="pleft">
                        <p>embracy every where to describe</p>
                        <h1 className="mainhead">Earn Up To <b>20% Casch Back</b> For Limit Time</h1>
                        <button className='shop'>Shop now</button>
            
                        </div>
                        <div className="slogins">
                            <img src="/images/samsung-1-logo-svg-vector.svg" alt="" className="slogin sam" />
                            <img src="/images/Puma-Logo.png" alt="" className="slogin" />
                            <img src="/images/apple-logo-6-1024x1024.png" alt="" className="slogin" />
                            <img src="/images/Adidas_logo.png" alt="" className="slogin" />
                            <img src="/images/20602d43cc993811e5a6bd1886af4f33.png" alt="" className="slogin" />
                        </div>
                    </div>
                    <div className="mainpgtopright">
                        <div className="backimg">
                        <img src="/images/kk.png" alt=""  className='bigimg'/>
                        </div>
                    </div>
                    </div>
                    <div className="maincenter">
                        <div className="infocenter">
                            <LocalShipping className='infoicon'/>
                            <div className="infolarg">
                            <h2 className='infotext'>Get your order fast</h2>
                            <p className='infop'>express deliviry for all your order</p>
                            </div>
                        </div>
                        <div className="infocenter">
                            <HeadsetMic className='infoicon'/>
                            <div className="infolarg">
                            <h2 className='infotext'>online support 24/7</h2>
                            <p className='infop'>power support 24 hours to day</p>
                                </div> 
                        </div>
                        <div className="infocenter">
                            <Cached className='infoicon'/>
                            <div className="infolarg">
                            <h2 className='infotext'>Cach Back on wallet</h2>
                            <p className='infop'>set cache back for your order</p>
                            </div>
                        </div>
                        <div className="infocenter">
                            <Loyalty className='infoicon'/>
                            <div className="infolarg">
                            <h2 className='infotext'>Alot of discounts</h2>
                            <p className='infop'>Save mony injoy for discount</p>
                            </div>
                        </div>
                    </div>
                    {/* shopcatgory */}
                <div className="mainpgbottom">
                    <p className="shopcat"> Shop by category:</p>
                    <div className="bloks">
                        <div className="blok">
                            <div className="backimg">
                                <Link to={"/laptops"}>
                                <img src="https://parspng.com/wp-content/uploads/2023/02/laptoppng.parspng.com-4.png" alt="" className='imgblock i'/>
                                </Link>
                            </div>
                            <span className="textblok">Laptops</span>
                        </div>
                        <div className="blok">
                            <Link to={"/phones"}>
                            <img src="https://parspng.com/wp-content/uploads/2021/10/phone.parspng.com-3-300x300.png" alt="" className='imgblock ii'/>
                            </Link>
                            <span className="textblok">Phones</span>
                        </div>
                        <div className="blok">
                            <Link to={"/headphones"}>
                            <img src="https://parspng.com/wp-content/uploads/2022/12/headphonepng.parspng.com_-300x300.png" alt="" className='imgblock iii'/>
                            </Link>
                            <span className="textblok">Headphones</span>
                        </div>
                        <div className="blok">
                            <Link to={"/thirts"}>
                            <img src="https://parspng.com/wp-content/uploads/2022/07/Tshirtpng.parspng.com-10-300x300.png" alt="" className='imgblock iiii'/>
                            </Link>
                            <span className="textblok">T-Shirts</span>
                        </div>
                        <div className="blok">
                            <Link to={"/playstation"}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Black_and_white_Playstation_5_base_edition_with_controller.png" alt=""  className='imgblock iiiii'/>
                            </Link>
                            <span className="textblok">Playstation</span>
                        </div>
                        <div className="blok">
                            <Link to={"/sports"}>
                            <img src="https://png.pngtree.com/png-vector/20230407/ourmid/pngtree-green-transparent-sports-shoes-png-image_6687298.png" alt="" className='imgblock iiiiii'/>
                            </Link>
                            <span className="textblok">Sports</span>
                        </div>
                    </div>
                </div>
          {/* shopcatgory */}
            {/* hot deals */}
                <div className="Hot">
                    <p className="Hotp">Hot deails:</p>
                    <div className="Hotimges">
                        <div className="bag">
                        <div className="bakgr"></div>
                        <img src="/images/adidas.webp" alt="" className="os" />
                        <div  className='main'><span>Get<b> 40% offer</b><br/>for adides prodect</span></div>
                        </div>
                        <div className="bag">
                            <div className="bakgr"></div>
                        <img src="/images/iphone.jpeg" alt="" className="os" />
                        <div className='main'><span>Get <b> 50% offer </b><br/>for application prodect</span></div>
                        </div>
                        <div className="Hotimagestwo">
                        <div className="bag2">
                        <div className="bakgr2"></div>
                        <img src="/images/shoping.jpg" alt="" className="os" />
                        <div  className='main2'><span>Get <b><br/> 70% off</b></span></div>
                        </div>
                        <div className="bag2">
                        <div className="bakgr2"></div>
                        <img src="/images/zara.jpg" alt="" className="os" />
                        <div className='main2'><span>Get<b><br/> 85% offer </b>for zara prodect</span></div>
                        </div>
                        </div>
                    </div>
                </div>
                  {/* hot deals */}
                 {/* mostpopulr */}
                 <p className="mostp">Most popular:</p>
                <div className="mostpoplr">
                {
            Popular.map((e)=>{
              return(
                <div className="mostpoplrcontener" key={e.id}>
<div key={e.id} className=" card">
  <img src={e.img} className="cardimg" alt="..."/>
  <div className="cardbody">
    <div className="cardtop">
<div className="cardtleft">
<p className="cardtext">{e.des}</p>
    <div className="inf">
      <div className="offers">45%off</div>
      <div className="price">{e.price}</div>
      <div className="insted"><del><sup>1,5566</sup></del></div>
    </div>
</div>
<div className="cardtright">
<span className="rate">4.5 <Star/><Star/><Star/></span>
<p>{e.brand}</p>
<img src={e.marka} alt="" className="marka" />
</div>
    </div>
    <div className="cardbottom">
<div className="bleft">
<p>Get the coupon</p>
<button className="Buy">Buy</button>
</div>
<div className="bright">
    <button className='Add'>Add To Cart</button>
</div>
    </div>
    </div>
  </div>
  </div>
              )
            })
          }
                    </div>    
                 {/* mostpopulr */}
                 {/* flashsale */}
                 <div className="flashsale" id='#flach'>
                    <p className='mainp'>Flash Sale:</p>
                    <div className="flashcontener">
                        <div className="fleft">
                        <img src="/images/—Pngtree—big sale icon tag label_3712537.png" alt="" className="sale" />  
                        <div className="bag">  
                        <div className="bakgr v"></div>
                        <img src="/images/pl.webp" alt="" className="os v" />
                        </div> 
                        </div>
                        <div className="fcenter">
                            <h5>deal of the day</h5>
                            <p className='one'>sony dul sences wirless controller for playstation 5-Black and white</p>
                            <span className='mony'>750$ <del>1300$</del></span>
                            <p className='two'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nihil consequuntur sapiente aperiam facere magnam iste ullam quisquam quis culpa itaque magni accusamus est doloremque repellat quam tempora, eum ducimus?</p>
                       <div className="collect">
                        <div className="text">
                            <div className="onet">solid:14</div>
                            <div className="twot">Avilable:85</div>
                        </div>
                        <div className="line">
                        <div className="gg"></div>
                        </div>
                       </div>

                       <div className="offerin">
                        <p className="offerp">offer end in</p>
                        <div className="boxs">
                            <div className="box">
                                <span className='num'>10</span>
                                <span className='time'>Hours</span>
                            </div>:
                            <div className="box">
                            <span className='num'>40</span>
                                <span className='time'>mints</span>
                            </div>:
                            <div className="box">
                            <span className='num'>36</span>
                                <span className='time'>second</span>
                            </div>
                        </div>
                       </div>
                       <button className="getnow">Get Now</button>
                        </div>
                        <div className="fright">
                        <div className="Hotimagestwo">
                        <div className="bag2">
                        <div className="bakgr2 v"></div>
                        <img src="/images//headpp.jpg" alt="" className="os v" />
                        <div  className='main2'><span>Tomo010 Bluetooth Headphone<b><br/>70$  <del>170$</del></b></span></div>
                        </div>
                        <div className="bag2">
                        <div className="bakgr2 v"></div>
                        <img src="/images/TV.jpg" alt="" className="os v" />
                        <div className='main2'><span>Samsung Gaming Odyssey G3<b><br/>200$  <del>350$</del></b></span></div>
                        </div>
                        </div>
                        </div>
                    </div>
                 </div>
                 {/* flashsale */}
                 {/* recomend */}
                 <p className="mostp">Recomend For you:</p>
                <div className="mostpoplr">
                <div className="mostpoplrcontener">
                {
            recomnd.map((e)=>{
              return(
<div key={e.id} className="card col-3">
  <img src={e.img} className="cardimg" alt="..."/>
  <div className="cardbody">
    <div className="cardtop">
<div className="cardtleft">
<p className="cardtext">{e.des}</p>
    <div className="inf">
      <div className="offers">45%off</div>
      <div className="pric">{e.price}</div>
      <div className="insted"><del><sup>1,5566</sup></del></div>
    </div>
</div>
<div className="cardtright">
<span className="rate">4.5 <Star/><Star/><Star/></span>
<p>{e.brand}</p>
<img src={e.marka} alt="" className="marka" />
</div>
    </div>
    <div className="cardbottom">
<div className="bleft">
<p>Get the coupon</p>
<button  className="Buy">Buy</button>
</div>
<div className="bright">
    <button className='Add'>Add To Cart</button>
</div>
    </div>
    </div>
  </div>
              )
            })
          }
                    </div>    
                    </div>
                  {/* recomend */}
                  {/*finally*/}
                  <div className="finally">
                    <div className="finallycontener">
                    <div className="bak"></div>
                    <img src="/images/yy.webp" alt="" className="finallyimg" />
                    <div className="infof">
                    <div className="ftext">get Your first <span>dirction code</span>now</div>
                    <p className="fp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas a ratione reprehenderit modi</p>
                    <div className="inp">
                        <input type="email" placeholder="Your email address"/>
                        <button className="send">send now</button>
                        </div>
                    </div>
                    </div>
                  </div>
                    {/*finally*/}
                    {/*last*/}
                    <div className="last">
                        <div className="lastcontener">
                        <div className="baklast"></div>
                    <img src="/images/last.jpg" alt="" className="lastimg" />
                           <div className="collection">
                            <div className="lastleft">
                            <div className="mainlogolast">
        <Store className="logoiconlast"/>
    <span className="logotextlast">Affiliate</span>
        </div>
    <div className="lasttext">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium omnis officia, cumque incidunt repudiandae cupiditate rerum. Doloremque eum, exercitationem vitae corporis et ipsam deserunt quisquam officia quaerat asperiores illo libero.</div>
    <div className="inps">
                        <input type="email" placeholder="Your email address"/>
                        <button className="send">send now</button>
                        </div>
                        <div className="logins">
                            <div className="logoback">
                            <img src="/images/samsung-1-logo-svg-vector.svg" alt="" className="slogin sam" />
                            </div>
                            <div className="logoback">
                            <img src="/images/Puma-Logo.png" alt="" className="slogin" />
                            </div>
                            <div className="logoback">
                            <img src="/images/apple-logo-6-1024x1024.png" alt="" className="slogin" />
                            </div>
                            <div className="logoback">
                            <img src="/images/Adidas_logo.png" alt="" className="slogin" />
                            </div>
                            <div className="logoback">
                            <img src="/images/20602d43cc993811e5a6bd1886af4f33.png" alt="" className="slogin" />
                            </div>
                        </div>
                            </div>
                            <div className="lastcenter">
                                <div className="lastlefta">
                                <a href='#' rel='stylsheet'>category</a>
                                <a href='#' rel='stylsheet'>fashion</a>
                                <a href='#' rel='stylsheet'>sports</a>
                                <a href='#' rel='stylsheet'>tecnology</a>
                                <a href='#' rel='stylsheet'>man</a>
                                <a href='#' rel='stylsheet'>woman</a>
                                <a href='#' rel='stylsheet'>kids</a>
                                </div>
                                <div className="lastrighta">
                                <a href='#' rel='stylsheet'>compony</a>
                                <a href='#' rel='stylsheet'>FQA</a>
                                <a href='#' rel='stylsheet'>Help</a>
                                <a href='#' rel='stylsheet'>Contact us</a>
                                <a href='#' rel='stylsheet'>Affiliate program</a>
                                <a href='#' rel='stylsheet'>feedback</a>
                                    </div>
                           </div>
                                <div className="lastright">
                                <p className='lastp'>social media</p>
                                    <div className="lasticons">
                                       <a href="https://www.facebook.com/profile.php?id=100012454170528"><Facebook className='f'/></a> 
                                     <a href="https://www.instagram.com/abdallahel_shahat/"><Instagram className='ins'/></a>  
                                        <Twitter className='twi'/>
                                    </div>
                                    </div>
                           </div>
                        </div>
                    </div>
                     {/*last*/}
            </div>
            </div>
        </>
    )
}
export default Mainpg;