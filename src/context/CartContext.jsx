import { createContext, useContext, useState } from "react";

const CartContext = createContext();

// Hook para consumir el carrito
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  // Agregar producto al carrito
  const addToCart = (producto, cantidad) => {
    const existe = carrito.find(item => item.id === producto.id);

    if (existe) {
      const actualizado = carrito.map(item =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + cantidad }
          : item
      );
      setCarrito(actualizado);
    } else {
      setCarrito([...carrito, { ...producto, cantidad }]);
    }
  };

  // ❗ Eliminar producto del carrito
  const removeItem = (id) => {
    setCarrito(carrito.filter(item => item.id !== id));
  };

  // ❗ Vaciar el carrito completo
  const clearCart = () => {
    setCarrito([]);
  };

  // ❗ Total de productos (badge del carrito)
  const totalCantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  // ❗ Total en dinero
  const getTotal = () => {
    return carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        addToCart,
        removeItem,
        clearCart,
        totalCantidad,
        getTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};