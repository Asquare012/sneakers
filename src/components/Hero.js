import { useState } from "react";

// nav images
import logo from "./images/logo.svg";
import cart from "./images/icon-cart.svg";
import avatar from "./images/image-avatar.png";
import menu from "./images/icon-menu.svg";
import del from "./images/icon-delete.svg";

// hero Images
import firstH from "./images/image-product-1.jpg";
import secondH from "./images/image-product-2.jpg";
import thirdH from "./images/image-product-3.jpg";
import fourthH from "./images/image-product-4.jpg";

// thumbnails
import firstT from "./images/image-product-1-thumbnail.jpg";
import secondT from "./images/image-product-2-thumbnail.jpg";
import thirdT from "./images/image-product-3-thumbnail.jpg";
import fourthT from "./images/image-product-4-thumbnail.jpg";

// signs
import minus from "./images/icon-minus.svg";
import plus from "./images/icon-plus.svg";

const Hero = () => {
  //  nav-cart state
  const [cartOpen, setCartOpen] = useState(false);
  const handleClick = () => {
    return setCartOpen(!cartOpen);
  };

  // add to cart
  const [price, setPrice] = useState(0);

  const handleCart = () => {
    return setPrice(125 * count);
  };

  // delete cart
  const handleDelete = () => {
    return setCount(0);
  };
  // side menu(bar)
  const [side, openSide] = useState(false);
  const handleSide = () => {
    return openSide(!side);
  };

  // hero images state
  const [heroImg, setHeroImg] = useState(firstH);

  const [count, setCount] = useState(0);
  return (
    <div className="Container">
      <nav>
        <ul>
          <li onClick={handleSide}>
            <img src={menu} alt="menu" />
          </li>
          <li>
            <img src={logo} alt="logo" />
          </li>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <img src={cart} alt="cart" onClick={handleClick} />
            <span className="Count" onClick={handleClick}>
              {count}
            </span>
            <div
              className="Box"
              style={
                cartOpen ? { visibility: "visible" } : { visibility: "hidden" }
              }
            >
              <div className="Title">Cart</div>
              {count ? (
                <>
                  <div className="Item">
                    <div>
                      <img src={heroImg} alt="thumbnail" height="50px" />
                    </div>
                    <div>
                      fall Limited Edition Sneakers
                      <br />
                      {`$125.00 x ${count} $${price}`}
                    </div>
                    <div onClick={handleDelete}>
                      <img src={del} alt="delete" />
                    </div>
                  </div>
                  <div className="Order">
                    <button>Checkout</button>
                  </div>
                </>
              ) : (
                <div className="Empty">Your cart is empty.</div>
              )}
            </div>
          </li>
          <li>
            <img src={avatar} alt="avatar" height="50px" />
          </li>
        </ul>
      </nav>
      <div className="Hero">
        <div className="Hero-main">
          <div className="Left">
            <div className="Top">
              <img src={heroImg} alt="hero-img" height="90%" />
            </div>
            <div className="Bottom">
              <ul>
                <li>
                  <img
                    src={firstT}
                    alt="thumbnail"
                    height="80px"
                    onClick={() => setHeroImg(firstH)}
                  />
                </li>
                <li>
                  <img
                    src={secondT}
                    alt="thumbnail"
                    height="80px"
                    onClick={() => setHeroImg(secondH)}
                  />
                </li>
                <li>
                  <img
                    src={thirdT}
                    alt="thumbnail"
                    height="80px"
                    onClick={() => setHeroImg(thirdH)}
                  />
                </li>
                <li>
                  <img
                    src={fourthT}
                    alt="thumbnail"
                    height="80px"
                    onClick={() => setHeroImg(fourthH)}
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="Right">
            <div>SNEAKER COMPANY</div>
            <div className="Big">
              fall Limited Edition <br />
              Sneakers
            </div>
            <div>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </div>
            <div>
              $125.00 <span className="Discount">50%</span>
            </div>
            <div> $250.00</div>
            <div>
              <div className="First">
                <img
                  src={minus}
                  alt="minus"
                  onClick={() => setCount((prev) => (count > 0 ? prev - 1 : 0))}
                />

                <div className="Digit">{count}</div>
                <img
                  src={plus}
                  alt="plus"
                  onClick={() => setCount((prev) => prev + 1)}
                />
              </div>
              <div className="Second">
                <button onClick={handleCart}>
                  <img src={cart} alt="cart" height="15px" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
