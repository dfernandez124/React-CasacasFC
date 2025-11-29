import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCard from "../components/ItemCard/ItemCard";
import Spinner from "../components/Spinner/Spinner";

import { db } from "../Firebase/FireBase.js";
import { collection, getDocs, query, where } from "firebase/firestore";

const ligasMap = {
  argentina: "Liga Profesional Argentina",
  inglesa: "Liga Inglesa",
  españa: "La Liga España",
  selecciones: "Selecciones",
  historicas: "Historicas",
};

const ItemListContainer = () => {
  const { ligaId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        let q;

        if (!ligaId || ligaId === "todas") {
          q = collection(db, "items");
        } else {
          const ligaFirebase = ligasMap[ligaId];

          if (!ligaFirebase) {
            setProductos([]);
            setLoading(false);
            return;
          }

          q = query(
            collection(db, "items"),
            where("liga", "==", ligaFirebase)
          );
        }
        const querySnapshot = await getDocs(q);

        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProductos(data);
      } catch (error) {
        console.error("Error al cargar productos desde Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, [ligaId]);

  if (loading) return <Spinner />;

  return (
    <div className="item-list-container">
      <div className="intro-banner">
        <h2>Encontrá las mejores camisetas del fútbol mundial</h2>
        <p>
          Tenemos camisetas originales, retro y de selección, ¡todas al mejor precio!
          Aprovechá nuestras ofertas y disfrutá del envío a todo el país.
        </p>
      </div>
      <h2 className="item-list-title">
        {ligaId && ligaId !== "todas"
          ? `Camisetas de ${ligaId}`
          : "Todas las camisetas"}
      </h2>

      <div className="item-list">
        {productos.length > 0 ? (
          productos.map(prod => (
            <ItemCard key={prod.id} producto={prod} />
          ))
        ) : (
          <p>No se encontraron productos.</p>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;