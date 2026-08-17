import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";

import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter basename="/react.1-">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) {
  const navigate = useNavigate();
  const total = cart.reduce(
    (sum, product) =>
      sum + product.price * product.quantity,
    0
  );
 
  
  return (
    <div className="cart-page">

      <h1>Shopping Cart </h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>.</p>
        </div>
      ) : (
        <div className="cart-container">

          {/* Products */}
          <div className="cart-items">

            {cart.map((product) => (
              <div
                className="cart-item"
                key={product.id}
              >

                <img
                  src={product.image}
                  alt={product.name}
                />

                <div className="cart-item-info">

                  <h2>{product.name}</h2>

                  <p>
                    Rs.{" "}
                    {product.price.toLocaleString()}
                  </p>

                  <div className="quantity">

                    <button
                      onClick={() =>
                        decreaseQuantity(product.id)
                      }
                    >
                      −
                    </button>
            
                    <span>
                      {product.quantity}
                    </span>
            <button
    onClick={() => increaseQuantity(product.id)}
  > 
  +         </button>
                  </div>
                              
                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeFromCart(product.id)
                    } 
                  >
                    
                    Remove
                  </button>

                </div>

                <div className="item-subtotal">
                  Rs.{" "}
                  {(
                    product.price *
                    product.quantity
                  ).toLocaleString()}
                </div>

              </div>
            ))}

          </div>

          {/* Summary */}
          <div className="cart-summary">

            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Subtotal</span>

              <span>
                Rs. {total.toLocaleString()}
              </span>
            </div>

            <div className="summary-row">
              <span>Delivery</span>

              <span>Free</span>
            </div>

            <hr />

            <div className="summary-total">
              <span>Total</span>

              <strong>
                Rs. {total.toLocaleString()}
              </strong>
            </div>
<button
  className="checkout-btn"
  onClick={() => navigate("/checkout")}
>
  Proceed to Checkout
</button>

          </div>

        </div>
      )}

    </div>
  );
}
function App() {
  const [cart, setCart] = useState([]);
  
const addToCart = (product) => {
  setCart((currentCart) => {
    const existingProduct = currentCart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      return currentCart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    }

    return [
      ...currentCart,
      {
        ...product,
        quantity: 1,
      },
    ];
  });
};

const increaseQuantity = (id) => {
  setCart((currentCart) =>
    currentCart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    )
  );
};

const decreaseQuantity = (id) => {
  setCart((currentCart) =>
    currentCart
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
};

const removeFromCart = (id) => {
  setCart((currentCart) =>
    currentCart.filter(
      (item) => item.id !== id
    )
  );
};
const clearCart = () => {
  setCart([]);
};
return (  
    <BrowserRouter>
      <Navbar cart={cart} />

      <Routes>
        <Route path="/" element={<Home />} />
<Route
  path="/checkout"
  element={
    <Checkout
      cart={cart}
      clearCart={clearCart}
    />
  }
/>
        <Route
          path="/products"
          element={<Products addToCart={addToCart} />}
        />
<Route
  path="/cart"
  element={
    <Cart
      cart={cart}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
      removeFromCart={removeFromCart}
    />
  }
/>
<Route
  path="/products/:id"
  element={
    <ProductDetails
      addToCart={addToCart}
    />
  }
/>

      </Routes>
    </BrowserRouter>
  );
}
 
export default App;