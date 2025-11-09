import React, { useState } from "react";
import "./ItemCard.css";
import { Link } from "react-router";
import ItemCount from "../ItemCount/ItemCount";

const ItemCard = ({ producto }) => {
  const [cantidad, setCantidad] = useState(1);

const agregarAlCarrito = (cantidad) => {
    Swal.fire({
      title: `Agregaste ${cantidad} Camiseta(s) de ${producto.nombre}`,
      icon: "success",
      draggable: true,
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
        onAdd={agregarAlCarrito}
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