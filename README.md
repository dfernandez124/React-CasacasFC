# 📝 **README -- CasacasFC \| Ecommerce de Camisetas de Fútbol**

## ⚽ CasacasFC -- Ecommerce Fullstack con React + Firebase

CasacasFC es un proyecto de ecommerce desarrollado como parte del curso
de Desarrollo Web Fullstack.\
Permite visualizar camisetas de fútbol de distintas ligas del mundo, ver
sus detalles, agregarlas al carrito y realizar una compra completa con
generación de orden en Firebase.

------------------------------------------------------------------------

## 🚀 Tecnologías utilizadas

-   **React JS**\
-   **Vite**\
-   **React Router DOM**\
-   **Firebase Firestore**\
-   **Context API**\
-   **CSS personalizado**\
-   **Lucide-react**\
-   **SweetAlert2**

------------------------------------------------------------------------

## 📦 Funcionalidades principales

### 🛒 Carrito de compras

-   Agregar productos\
-   Control de cantidad\
-   Vista del carrito\
-   Total dinámico\
-   Badge en navbar\
-   Vaciar carrito

### 🔥 Checkout completo

-   Formulario del comprador\
-   Crear orden en Firebase (colección `orders`)\
-   Actualizar stock en Firebase (colección `items`)\
-   Transacción con `runTransaction()`\
-   Mostrar ID de orden\
-   Vaciar carrito

### 🏷 Listado de productos

-   Datos desde Firestore\
-   Filtrar por liga\
-   Animaciones fade-in\
-   Spinner de carga

### 🎽 Detalle de producto

-   Imagen grande\
-   Precio, talles, stock\
-   Agregar al carrito\
-   Ruta dinámica

------------------------------------------------------------------------

## 📁 Colecciones de Firebase

### **items**

``` json
{
  "id": 1,
  "nombre": "Boca Juniors",
  "liga": "Liga Profesional Argentina",
  "anio": 2025,
  "precio": 74999,
  "marca": "Adidas",
  "stock": 45,
  "talles": ["S", "M", "L", "XL"],
  "imagen": "URL"
}
```

### **orders**

``` json
{
  "buyer": {
    "nombre": "Juan",
    "email": "juan@mail.com",
    "telefono": "123",
    "direccion": "Calle falsa"
  },
  "items": [
    {
      "id": "1",
      "nombre": "Boca Juniors",
      "precio": 74999,
      "cantidad": 2
    }
  ],
  "total": 149998,
  "createdAt": "timestamp"
}
```

------------------------------------------------------------------------

## 🔗 Rutas del proyecto

  Ruta               Descripción
  ------------------ ------------------
  `/`                Home
  `/ligas/:ligaId`   Filtrar por liga
  `/item/:id`        Detalle
  `/cart`            Carrito
  `/checkout`        Compra

------------------------------------------------------------------------

## 🛠 Instalación

1.  Clonar repo\
2.  `npm install`\
3.  Crear `FireBase.js` con config\
4.  `npm run dev`

------------------------------------------------------------------------

## 🤝 Autor

Proyecto creado por **Daniel Fernández**.

------------------------------------------------------------------------