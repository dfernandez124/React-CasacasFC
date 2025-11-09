import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ItemCount from "../../components/ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [talleSeleccionado, setTalleSeleccionado] = useState("");

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const response = await fetch("/products.json");
                if (!response.ok) throw new Error("Error al obtener producto");

                const data = await response.json();
                const item = data.find((p) => p.id === parseInt(id));
                setProducto(item);
            } catch (error) {
                console.error("Error al cargar producto:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducto();
    }, [id]);

    if (loading) return <p className="cargando">Cargando detalle...</p>;
    if (!producto) return <p>No se encontró el producto.</p>;

   const agregarAlCarrito = (cantidad) => {
    Swal.fire({
      title: `Agregaste ${cantidad} unidad(es) de ${producto.nombre}`,
      icon: "success",
      draggable: true,
    });
    }

    return (
        <div className="detalle-container">
            <img src={producto.imagen} alt={producto.nombre} className="detalle-img" />

            <div className="detalle-info">
                <h2>{producto.nombre}</h2>
                <p className="liga">{producto.liga}</p>
                <p className="anio">Año: {producto.anio}</p>
                <p className="marca">Marca: {producto.marca}</p>
                <p className="precio-detalle">{producto.precio}</p>

                <div className="talles">
                    <p>Talles disponibles:</p>
                    <div className="talles-opciones">
                        {producto.talles.map((talle) => (
                            <button
                                key={talle}
                                onClick={() => setTalleSeleccionado(talle)}
                                className={`talle-btn ${talleSeleccionado === talle ? "activo" : ""
                                    }`}
                            >
                                {talle}
                            </button>
                        ))}
                    </div>
                </div>

                <ItemCount
                    stock={producto.stock}
                    inicial={1}
                    onAdd={agregarAlCarrito}
                />

                <Link to="/" className="btn-volver">← Volver al Home</Link>
            </div>
        </div>
    );
};

export default ItemDetail;