import { Cached, Facebook, HeadsetMic, Instagram, LocalShipping, Loyalty, Store, Twitter } from '@mui/icons-material';
import './mainpg.css'
import { Link } from 'react-router-dom';
import { Popular, recomnd } from "../../Dumy";
import { Star } from '@mui/icons-material';
function Mainpg() {
    return (
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
                                <img src="/images/kk.png" alt="" className='bigimg' />
                            </div>
                        </div>
                    </div>
                    <div className="maincenter">
                        <div className="infocenter">
                            <LocalShipping className='infoicon' />
                            <div className="infolarg">
                                <h2 className='infotext'>Get your order fast</h2>
                                <p className='infop'>express deliviry for all your order</p>
                            </div>
                        </div>
                        <div className="infocenter">
                            <HeadsetMic className='infoicon' />
                            <div className="infolarg">
                                <h2 className='infotext'>online support 24/7</h2>
                                <p className='infop'>power support 24 hours to day</p>
                            </div>
                        </div>
                        <div className="infocenter">
                            <Cached className='infoicon' />
                            <div className="infolarg">
                                <h2 className='infotext'>Cach Back on wallet</h2>
                                <p className='infop'>set cache back for your order</p>
                            </div>
                        </div>
                        <div className="infocenter">
                            <Loyalty className='infoicon' />
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
                                        <img src="data:image/avif;base64,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" alt="" className='imgblock i' />
                                    </Link>
                                </div>
                                <span className="textblok">Laptops</span>
                            </div>
                            <div className="blok">
                                <Link to={"/phones"}>
                                    <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSoD_6JLTl5DlKPNkyapCe6UyO7ElXI77VqJlz0xhfS2LYh1CDO20JgHctnK0OwbJ2QKFpE0rTaDdK84J3o434QE6HXmjLF8y8ZpSWJhAUY9UDVUAondDKNTzE&usqp=CAc" alt="" className='imgblock ii' />
                                </Link>
                                <span className="textblok">Phones</span>
                            </div>
                            <div className="blok">
                                <Link to={"/headphones"}>
                                    <img src="data:image/avif;base64,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" alt="" className='imgblock iii' />
                                </Link>
                                <span className="textblok">Headphones</span>
                            </div>
                            <div className="blok">
                                <Link to={"/thirts"}>
                                    <img src="data:image/jpeg;base64,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" alt="" className='imgblock iiii' />
                                </Link>
                                <span className="textblok">T-Shirts</span>
                            </div>
                            <div className="blok">
                                <Link to={"/playstation"}>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Black_and_white_Playstation_5_base_edition_with_controller.png" alt="" className='imgblock iiiii' />
                                </Link>
                                <span className="textblok">Playstation</span>
                            </div>
                            <div className="blok">
                                <Link to={"/sports"}>
                                    <img src="https://png.pngtree.com/png-vector/20230407/ourmid/pngtree-green-transparent-sports-shoes-png-image_6687298.png" alt="" className='imgblock iiiiii' />
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
                                <div className='main'><span>Get<b> 40% offer</b><br />for adides prodect</span></div>
                            </div>
                            <div className="bag">
                                <div className="bakgr"></div>
                                <img src="/images/iphone.jpeg" alt="" className="os" />
                                <div className='main'><span>Get <b> 50% offer </b><br />for application prodect</span></div>
                            </div>
                            <div className="Hotimagestwo">
                                <div className="bag2">
                                    <div className="bakgr2"></div>
                                    <img src="/images/shoping.jpg" alt="" className="os" />
                                    <div className='main2'><span>Get <b><br /> 70% off</b></span></div>
                                </div>
                                <div className="bag2">
                                    <div className="bakgr2"></div>
                                    <img src="/images/zara.jpg" alt="" className="os" />
                                    <div className='main2'><span>Get<b><br /> 85% offer </b>for zara prodect</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* hot deals */}
                    {/* mostpopulr */}
                    <p className="mostp">Most popular:</p>
                    <div className="mostpoplr">
                        {
                            Popular.map((e) => {
                                return (
                                    <div className="mostpoplrcontener" key={e.id}>
                                        <div key={e.id} className=" card">
                                            <img src={e.img} className="cardimg" alt="..." />
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
                                                        <span className="rate">4.5 <Star /><Star /><Star /></span>
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
                                        <div className='main2'><span>Tomo010 Bluetooth Headphone<b><br />70$  <del>170$</del></b></span></div>
                                    </div>
                                    <div className="bag2">
                                        <div className="bakgr2 v"></div>
                                        <img src="/images/TV.jpg" alt="" className="os v" />
                                        <div className='main2'><span>Samsung Gaming Odyssey G3<b><br />200$  <del>350$</del></b></span></div>
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
                                recomnd.map((e) => {
                                    return (
                                        <div key={e.id} className="card col-3">
                                            <img src={e.img} className="cardimg" alt="..." />
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
                                                        <span className="rate">4.5 <Star /><Star /><Star /></span>
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
                                    <input type="email" placeholder="Your email address" />
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
                                        <Store className="logoiconlast" />
                                        <span className="logotextlast">Affiliate</span>
                                    </div>
                                    <div className="lasttext">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium omnis officia, cumque incidunt repudiandae cupiditate rerum. Doloremque eum, exercitationem vitae corporis et ipsam deserunt quisquam officia quaerat asperiores illo libero.</div>
                                    <div className="inp">
                                        <input type="email" placeholder="Your email address" />
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
                                        <Link to='/category' rel='stylsheet'>category</Link>
                                        <Link to='/fashion' rel='stylsheet'>fashion</Link>
                                        <Link to='/sports' rel='stylsheet'>sports</Link>
                                        <Link to='/tecnology' rel='stylsheet'>tecnology</Link>
                                        <Link to='/man' rel='stylsheet'>man</Link>
                                        <Link to='/woman' rel='stylsheet'>woman</Link>
                                        <Link to='/kids' rel='stylsheet'>kids</Link>
                                    </div>
                                    <div className="lastrighta">
                                        <Link to='/compony' rel='stylsheet'>compony</Link>
                                        <Link to='/FQA' rel='stylsheet'>FQA</Link>
                                        <Link to='/Help' rel='stylsheet'>Help</Link>
                                        <Link to='/Contact us' rel='stylsheet'>Contact us</Link>
                                        <Link to='/Affiliate program' rel='stylsheet'>Affiliate program</Link>
                                        <Link to='/feedback' rel='stylsheet'>feedback</Link>
                                    </div>
                                </div>
                                <div className="lastright">
                                    <p className='lastp'>social media</p>
                                    <div className="lasticons">
                                        <a href="https://www.facebook.com/profile.php?id=100012454170528"><Facebook className='f' /></a>
                                        <a href="https://www.instagram.com/abdallahel_shahat/"><Instagram className='ins' /></a>
                                        <Twitter className='twi' />
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