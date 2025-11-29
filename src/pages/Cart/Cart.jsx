import { useCart } from "../../context/CartContext.jsx";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { carrito, removeItem, clearCart, getTotal } = useCart();

  if (carrito.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Tu carrito está vacío </h2>
      </div>
    );
  }

  return (
    <div className="cart-container">

      <h2 className="cart-title">Tu Carrito</h2>

      <div className="cart-items">
        {carrito.map(item => (
          <div key={item.id} className="cart-item">
            
            <img src={item.imagen} alt={item.nombre} className="cart-item-img" />

            <div className="cart-item-details">
              <h3>{item.nombre}</h3>
              <p>Precio: ${item.precio}</p>
              <p>Cantidad: {item.cantidad}</p>
              <p><b>Subtotal:</b> ${item.precio * item.cantidad}</p>
            </div>

            <button
              className="cart-remove-btn"
              onClick={() => removeItem(item.id)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Total: ${getTotal()}</h2>

        <button className="cart-btn-clear" onClick={clearCart}>
          Vaciar carrito
        </button>

        <button className="cart-btn-buy">
          <Link to="/checkout" className="cart-btn-buy">Finalizar Compra</Link>
        </button>
      </div>

    </div>
  );
};

export default Cart;