import PropTypes from "prop-types";
import "./Cart.css"; // يمكنك إنشاء ملف CSS مخصص لتنسيق إضافي

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  const calculateTotal = () => {
    return cart
      .reduce((total, product) => total + product.price * product.quantity, 0)
      .toFixed(2);
  };

  const handleQuantityChange = (product, type) => {
    updateQuantity(product, type);
  };

  return (
    <div className="container my-5">
      <div className="row">
        {/* قسم السلة */}
        <div className="col-md-7">
          <h3>Shopping Cart</h3>
          <p>You have {cart.length} items in your cart</p>

          {cart.map((product, index) => (
            <div
              className="d-flex align-items-center justify-content-between py-3 border-bottom"
              key={index}
            >
              <div className="d-flex align-items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-thumbnail"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <div className="ms-3">
                  <p className="fw-bold mb-0">{product.name}</p>
                  <p className="mb-1 text-muted">{product.description}</p>

                  <p className="fw-bold mb-0">${product.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <button
                  className="btn btn-secondary btn-sm px-3"
                  onClick={() => handleQuantityChange(product, "decrease")}
                >
                  -
                </button>
                <span className="mx-3">{product.quantity}</span>
                <button
                  className="btn btn-secondary btn-sm px-3"
                  onClick={() => handleQuantityChange(product, "increase")}
                >
                  +
                </button>
              </div>

              <button
                className="btn btn-danger btn-sm ms-3"
                onClick={() => removeFromCart(product.id)}
              >
                <i className="bi bi-trash"></i>
              </button>
            </div>
          ))}
        </div>

        {/* قسم الدفع */}
        <div className="col-md-5">
          <div className="bg-primary text-white p-4 rounded">
            <h5>Card Details</h5>
            <div className="mb-3">
              <label className="form-label">Name on Card</label>
              <input
                type="text"
                className="form-control"
                placeholder="Cardholder Name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Card Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="1111 2222 3333 4444"
              />
            </div>

            <div className="row">
              <div className="col-6 mb-3">
                <label className="form-label">Expiration Date</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="MM/YY"
                />
              </div>
              <div className="col-6 mb-3">
                <label className="form-label">CVV</label>
                <input type="text" className="form-control" placeholder="123" />
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <p>Subtotal:</p>
              <p>${calculateTotal()}</p>
            </div>

            <div className="d-flex justify-content-between">
              <p>Shipping:</p>
              <p>$20.00</p>
            </div>

            <div className="d-flex justify-content-between fw-bold">
              <p>Total:</p>
              <p>${(parseFloat(calculateTotal()) + 20).toFixed(2)}</p>
            </div>

            <button className="btn btn-success w-100 mt-3">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired,
};

export default Cart;
