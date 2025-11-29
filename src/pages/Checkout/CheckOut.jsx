import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import Swal from "sweetalert2";

import { db } from "../../Firebase/FireBase.js";
import {
  doc,
  collection,
  runTransaction,
  serverTimestamp,
} from "firebase/firestore";

import "./CheckOut.css";

const Checkout = () => {
  const { carrito, getTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [buyer, setBuyer] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
  });

  const handleChange = (e) => {
    setBuyer((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validarFormulario = () => {
    if (!buyer.nombre || !buyer.email || !buyer.telefono) {
      Swal.fire({
        title: "Campos incompletos",
        text: "Nombre, Email y Teléfono son obligatorios.",
        icon: "warning",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (carrito.length === 0) {
      Swal.fire("Carrito vacío", "No tenés productos en el carrito.", "info");
      return;
    }

    if (!validarFormulario()) return;

    setLoading(true);

    const orderRef = doc(collection(db, "orders"));
    const total = getTotal();

    const orderData = {
      buyer,
      items: carrito.map((item) => ({
        id: item.id,
        nombre: item.nombre,
        precio: item.precio,
        cantidad: item.cantidad,
        imagen: item.imagen,
      })),
      total,
      createdAt: serverTimestamp(),
    };

    try {
      await runTransaction(db, async (transaction) => {
        for (const item of carrito) {
          const prodRef = doc(db, "items", String(item.id));
          const prodSnap = await transaction.get(prodRef);

          if (!prodSnap.exists()) {
            throw new Error(`El producto ${item.nombre} no existe.`);
          }

          const data = prodSnap.data();
          const stockActual = data.stock ?? 0;

          if (stockActual < item.cantidad) {
            throw new Error(
              `Stock insuficiente para ${item.nombre}. Disponibles: ${stockActual}`
            );
          }

          transaction.update(prodRef, {
            stock: stockActual - item.cantidad,
          });
        }

        transaction.set(orderRef, orderData);
      });

      const orderId = orderRef.id;
      clearCart();

      Swal.fire({
        title: "Compra exitosa",
        html: `Tu compra fue registrada.<br><b>ID de orden:</b> ${orderId}`,
        icon: "success",
        confirmButtonText: "Volver al inicio",
      }).then(() => navigate("/"));
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Finalizar compra</h2>

      <div className="checkout-products">
        {carrito.map((item) => (
          <div key={item.id} className="checkout-product">
            <img src={item.imagen} alt={item.nombre} />
            <div>
              <h4>{item.nombre}</h4>
              <p>Precio: ${item.precio}</p>
              <p>Cantidad: {item.cantidad}</p>
              <p>Subtotal: ${item.precio * item.cantidad}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="checkout-total">Total: ${getTotal()}</h3>

      <form onSubmit={handleSubmit} className="checkout-form">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={buyer.nombre}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={buyer.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="telefono"
          placeholder="Teléfono"
          value={buyer.telefono}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="direccion"
          placeholder="Dirección (opcional)"
          value={buyer.direccion}
          onChange={handleChange}
        />

        <button type="submit" className="checkout-btn" disabled={loading}>
          {loading ? "Procesando..." : "Confirmar compra"}
        </button>
      </form>
    </div>
  );
};

export default Checkout;