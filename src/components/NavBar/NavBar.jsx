import React from "react";
import "./Navbar.css";
import { ShoppingCart } from "lucide-react";
import logo from "../img/Logotipo.png";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const { totalCantidad } = useCart();
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="CasacasFC" className="logo" />
      </div>

      <div className="navbar-center">
        <h1 className="site-title">CasacasFC</h1>
      </div>

      <div className="navbar-right">
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>

          <li className="dropdown">
            <span className="dropdown-title">Ligas ▾</span>
            <ul className="dropdown-menu">
              <li><Link to="/ligas/todas">Todos los productos</Link></li>
              <li><Link to="/ligas/argentina">Liga Argentina</Link></li>
              <li><Link to="/ligas/inglesa">Premier League (Inglesa)</Link></li>
              <li><Link to="/ligas/españa">La Liga (Española)</Link></li>
              <li><Link to="/ligas/selecciones">Selecciones</Link></li>
              <li><Link to="/ligas/historicas">Historicas</Link></li>
            </ul>
          </li>

          <li><Link to="/contacto">Contacto</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>

          <li>
            <Link to="/cart" className="cart-widget">
              <div className="cart-icon">
                <ShoppingCart size={22} />
                {totalCantidad > 0 && (
                  <span className="cart-badge">{totalCantidad}</span>
                )}
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;