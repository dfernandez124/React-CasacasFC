import React, { useState } from "react";
import "./ItemCard.css";
import { Link } from "react-router";
import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../../context/CartContext";

const ItemCard = ({ producto }) => {
  const [cantidad, setCantidad] = useState(1);
  const { addToCart } = useCart();
  const handleAddToCart = (cantidad) => {
    addToCart(producto, cantidad);

    Swal.fire({
      title: `Agregaste ${cantidad} unidad(es) de ${producto.nombre}`,
      icon: "success",
      confirmButtonColor: "#111"
    });
  };

  return (
    <div className="card">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>{producto.liga}</p>
      <p>Año: {producto.anio}</p>

      <p className="precio">${producto.precio}</p>

      <ItemCount
        stock={producto.stock}
        inicial={1}
        onAdd={handleAddToCart}
      />

      <div className="botones-card">
        <Link to={`/detalle/${producto.id}`} className="btn-detalle">
          Ver detalle
        </Link>

      </div>
    </div>
  );
};

export default ItemCard;