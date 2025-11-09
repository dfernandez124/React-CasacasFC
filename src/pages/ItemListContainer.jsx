import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCard from "../components/ItemCard/ItemCard";

const ItemListContainer = () => {
  const { ligaId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("/products.json");
        if (!response.ok) throw new Error("Error al obtener productos");

        const data = await response.json();

        // Filtro de ligas
        if (!ligaId || ligaId === "todas") {
          setProductos(data);
        } else {
          const filtrados = data.filter((p) =>
            p.liga.toLowerCase().includes(ligaId.toLowerCase())
          );
          setProductos(filtrados);
        }
      } catch (error) {
        console.error("Error al cargar productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, [ligaId]);

  if (loading) {
    return <p className="cargando">Cargando productos...</p>;
  }

  return (
    <div className="item-list-container">
      <h2 className="titulo-lista">
        {ligaId && ligaId !== "todas"
          ? `Camisetas de la ${ligaId.charAt(0).toUpperCase() + ligaId.slice(1)}`
          : "Todas las camisetas"}
      </h2>

      <div className="item-list">
        {productos.length > 0 ? (
          productos.map((prod) => <ItemCard key={prod.id} producto={prod} />)
        ) : (
          <p>No se encontraron productos en esta categoría.</p>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;