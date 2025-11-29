import React from "react";
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./pages/ItemListContainer.jsx";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import ItemDetail from "./pages/ItemDetail/ItemDetail.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Contacto from "./pages/Contacto/Contacto.jsx";
import Nosotros from "./pages/Nosotros/Nosotros.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Checkout from "./pages/Checkout/CheckOut.jsx";

function App() {
  return (
    <div className="container">
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/ligas/:ligaId" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetail />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;