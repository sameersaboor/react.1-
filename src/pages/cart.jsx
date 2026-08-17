function Cart({ cart, setCart, onClose, onCheckout }) {

  // Remove product
  const removeItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  // Increase quantity
  const increaseQuantity = (index) => {
    const newCart = [...cart];

    newCart[index] = {
      ...newCart[index],
      quantity: (newCart[index].quantity || 1) + 1,
    };

    setCart(newCart);
  };

  // Decrease quantity
  const decreaseQuantity = (index) => {
    const newCart = [...cart];

    const currentQuantity =
      newCart[index].quantity || 1;

    if (currentQuantity > 1) {
      newCart[index] = {
        ...newCart[index],
        quantity: currentQuantity - 1,
      };
    } else {
      newCart.splice(index, 1);
    }

    setCart(newCart);
  };

  // Price handle
  const getPrice = (price) => {
    if (typeof price === "number") {
      return price;
    }

    return Number(
      String(price).replace(/[^0-9]/g, "")
    );
  };

  // Total
  const total = cart.reduce((sum, item) => {
    const price = getPrice(item.price);
    const quantity = item.quantity || 1;

    return sum + price * quantity;
  }, 0);

  return (
    <div
      className="cart-overlay"
      onClick={onClose}
    >

      <div
        className="cart-box"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close */}
        <button
          className="cart-close"
          onClick={onClose}
        >
          ✕
        </button>

        <h2>Your Cart 🛒</h2>

        {/* Empty Cart */}

        {cart.length === 0 ? (

          <div className="empty-cart">

            <h3>🛒</h3>

            <p>
              Your cart is empty.
            </p>

            <button
              className="checkout-btn"
              onClick={onClose}
            >
              Continue Shopping
            </button>

          </div>

        ) : (

          <>

            {/* Cart Items */}

            <div className="cart-items">

              {cart.map((item, index) => {

                const quantity =
                  item.quantity || 1;

                const itemTotal =
                  getPrice(item.price) * quantity;

                return (

                  <div
                    className="cart-item"
                    key={item.id || index}
                  >

                    {/* Image */}

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    {/* Information */}

                    <div className="cart-item-info">

                      <h3>
                        {item.name}
                      </h3>

                      <p>
                        Rs{" "}
                        {getPrice(
                          item.price
                        ).toLocaleString()}
                      </p>

                      {/* Quantity */}

                      <div className="quantity-box">

                        <button
                          onClick={() =>
                            decreaseQuantity(index)
                          }
                        >
                          −
                        </button>

                        <span>
                          {quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(index)
                          }
                        >
                          +
                        </button>

                      </div>

                      {/* Item Total */}

                      <strong>
                        Rs{" "}
                        {itemTotal.toLocaleString()}
                      </strong>

                      <br />

                      {/* Remove */}

                      <button
                        className="remove-btn"
                        onClick={() =>
                          removeItem(index)
                        }
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                );
              })}

            </div>

            {/* Total */}

            <div className="cart-total">

              <h3>
                Total: Rs{" "}
                {total.toLocaleString()}
              </h3>

              <button
                className="checkout-btn"
                onClick={onCheckout}
              >
                Checkout
              </button>

            </div>

          </>

        )}

      </div>

    </div>
  );
}

export default Cart;