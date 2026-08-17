import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout({ cart, clearCart }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
  });

  const total = cart.reduce(
    (sum, product) =>
      sum + product.price * product.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
clearCart();

navigate("/order-success");
  };

  return (
    <div className="checkout-page">

      <h1>Checkout</h1>

      <div className="checkout-container">

        <form
          className="checkout-form"
          onSubmit={handleSubmit}
        >

          <h2>Delivery Information</h2>

          <label>Full Name</label>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />

          <label>Phone Number</label>

          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="03XXXXXXXXX"
            required
          />

          <label>Address</label>

          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Enter your complete address"
            required
          />

          <label>City</label>

          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="Enter your city"
            required
          />

          <button
            type="submit"
            className="place-order-btn"
          >
            Place Order
          </button>

        </form>

        <div className="checkout-summary">

          <h2>Order Summary</h2>

          {cart.map((product) => (
            <div
              className="checkout-product"
              key={product.id}
            >
              <span>
                {product.name} × {product.quantity}
              </span>

              <span>
                Rs.{" "}
                {(
                  product.price *
                  product.quantity
                ).toLocaleString()}
              </span>
            </div>
          ))}

          <hr />

          <h2>
            Total: Rs. {total.toLocaleString()}
          </h2>

        </div>

      </div>

    </div>
  );
}

export default Checkout;