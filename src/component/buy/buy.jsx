import { useContext, useState } from "react";
import { LocalMall } from "@mui/icons-material";
import "./buy.css"
import { procontext } from "../store";
function Buy() {
  const products = useContext(procontext);
  const [, setCartRevision] = useState(0);
  const total = products.reduce((sum, item) => sum + Number.parseFloat(item.price), 0);

  function deleteProduct(item) {
    products.splice(products.indexOf(item), 1);
    setCartRevision((revision) => revision + 1);
  }

  function clearCart() {
    products.splice(0, products.length);
    setCartRevision((revision) => revision + 1);
  }

  return (
    <main className="contener">
      <header className="cart-header">
        <div>
          <p className="cart-eyebrow">Your selection</p>
          <h1>Your cart</h1>
        </div>
        <div className="cart-total">
          <span>Cart total</span>
          <strong>{total.toFixed(2)}$</strong>
        </div>
      </header>
      {products.length > 0 ? (
        <>
          <div className="cart-toolbar">
            <span>{products.length} {products.length === 1 ? "item" : "items"}</span>
            <button className="clear" type="button" onClick={clearCart}>Clear cart</button>
          </div>
          <div className="cart-list">
            {products.map((item, index) => (
              <article className="cart-item" key={`${item.id}-${index}`}>
                <img className="cart-image" src={item.img} alt={item.title || item.brand} />
                <div className="cart-item-info">
                  <span className="cart-brand">{item.brand}</span>
                  <p className="cart-description">{item.des}</p>
                  <span className="cart-id">Item #{item.id}</span>
                </div>
                <strong className="cart-price">{item.price}$</strong>
                <button className="delet" type="button" onClick={() => deleteProduct(item)} aria-label={`Remove ${item.brand} from cart`}>
                  Remove
                </button>
              </article>
            ))}
          </div>
        </>
      ) : (
        <section className="cart-empty">
          <span className="empty-bag"><LocalMall /></span>
          <h2>Your cart is empty</h2>
          <p>Items you add will appear here.</p>
        </section>
      )}
    </main>
  );
}

export default Buy;