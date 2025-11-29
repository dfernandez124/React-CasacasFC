import { Link } from "react-router-dom";
import "./NotFound.css";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-card">
        <SearchX size={70} className="notfound-icon" />

        <h1>404</h1>
        <h2>Página no encontrada</h2>

        <p>
          Lo sentimos, la página que estás buscando no existe o fue movida.
        </p>

        <Link to="/" className="notfound-btn">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}