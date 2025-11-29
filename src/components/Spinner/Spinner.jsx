import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="loader"></div>
      <p>Cargando productos...</p>
    </div>
  );
};

export default Spinner;