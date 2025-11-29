import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ItemCount from "../../components/ItemCount/ItemCount";
import "./ItemDetail.css";
import { useCart } from "../../context/CartContext";

import { db } from "../../Firebase/FireBase.js";
import { doc, getDoc } from "firebase/firestore";

import Swal from "sweetalert2";

const ItemDetail = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [talleSeleccionado, setTalleSeleccionado] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        // 👉 COLECCIÓN ITEMS
        const docRef = doc(db, "items", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProducto({ id: docSnap.id, ...docSnap.data() });
        } else {
          setProducto(null);
        }
      } catch (error) {
        console.error("Error al cargar producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducto();
  }, [id]);

  if (loading) return <p>Cargando detalle...</p>;
  if (!producto) return <p>No se encontró el producto.</p>;

  const handleAddToCart = (cantidad) => {
    addToCart(producto, cantidad);

    Swal.fire({
      title: `Agregaste ${cantidad} unidad(es) de ${producto.nombre}`,
      icon: "success",
      confirmButtonColor: "#111",
    });
  };

  return (
    <div className="detalle-container">
      <img src={producto.imagen} alt={producto.nombre} className="detalle-img" />

      <div className="detalle-info">
        <h2>{producto.nombre}</h2>
        <p className="liga">{producto.liga}</p>
        <p className="anio">Año: {producto.anio}</p>
        <p className="marca">Marca: {producto.marca}</p>
        <p className="precio-detalle">$ {producto.precio}</p>

        <div className="talles">
          <p>Talles disponibles:</p>
          <div className="talles-opciones">
            {producto.talles.map((talle) => (
              <button
                key={talle}
                onClick={() => setTalleSeleccionado(talle)}
                className={`talle-btn ${
                  talleSeleccionado === talle ? "activo" : ""
                }`}
              >
                {talle}
              </button>
            ))}
          </div>
        </div>

        <ItemCount stock={producto.stock} onAdd={handleAddToCart} />

        <Link to="/" className="btn-volver">
          ← Volver al Home
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;