import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, inicial = 1, onAdd }) => {
  const [cantidad, setCantidad] = useState(inicial);

  const aumentar = () => {
    if (cantidad < stock) setCantidad(cantidad + 1);
  };

  const disminuir = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  return (
    <div className="item-count">
      <div className="item-count-controls">
        <button onClick={disminuir}>–</button>
        <span>{cantidad}</span>
        <button onClick={aumentar}>+</button>
      </div>

      {onAdd && (
        <button
          className="btn-carrito"
          onClick={() => onAdd(cantidad)}
        >
          Agregar al carrito
        </button>
      )}
    </div>
  );
};

export default ItemCount;