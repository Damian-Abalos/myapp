import React, { useState, useEffect } from "react";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  const productos = [
    {
      id: 1,
      nombre: "TOQUES DE GARBANZOS",
      stock: 5,
      sabor: "salado",
      tipo: "toque",
      precio: 370,
      img: "https://damian-abalos.github.io/casa-vegana/img/1.jpg",
    },
    {
      id: 2,
      nombre: "TOQUES DE LENTEJAS",
      stock: 8,
      sabor: "salado",
      tipo: "toque",
      precio: 370,
      img: "https://damian-abalos.github.io/casa-vegana/img/2.jpg",
    },
    {
      id: 3,
      nombre: "PIZZA FUGAZZETTA",
      stock: 9,
      sabor: "salado",
      tipo: "pizza",
      precio: 800,
      img: "https://damian-abalos.github.io/casa-vegana/img/3.jpg",
    },
    {
      id: 4,
      nombre: "PIZZA NAPOLITANA",
      stock: 10,
      sabor: "salado",
      tipo: "pizza",
      precio: 800,
      img: "https://damian-abalos.github.io/casa-vegana/img/4.jpg",
    },
    {
      id: 5,
      nombre: "PIZZA PORTOBELLO",
      stock: 10,
      sabor: "salado",
      tipo: "pizza",
      precio: 930,
      img: "https://damian-abalos.github.io/casa-vegana/img/5.jpg",
    },
    {
      id: 6,
      nombre: "MEDALLONES ADUKI REMOLACHA ",
      stock: 6,
      sabor: "salado",
      tipo: "medallon",
      precio: 300,
      img: "https://damian-abalos.github.io/casa-vegana/img/6.jpg",
    },
    {
      id: 7,
      nombre: "MEDALLONES QUINOA MEDITERRANEA",
      stock: 8,
      sabor: "salado",
      tipo: "medallon",
      precio: 300,
      img: "https://damian-abalos.github.io/casa-vegana/img/7.jpg",
    },
    {
      id: 8,
      nombre: "MEDALLONES GREEN MOON",
      stock: 15,
      sabor: "salado",
      tipo: "medallon",
      precio: 300,
      img: "https://damian-abalos.github.io/casa-vegana/img/8.jpg",
    },
    {
      id: 9,
      nombre: "MOUSSE DE CHOCOLATE",
      stock: 12,
      sabor: "dulce",
      tipo: "postre",
      precio: 350,
      img: "https://damian-abalos.github.io/casa-vegana/img/9.jpg",
    },
    {
      id: 10,
      nombre: "VOLCAN DE CHOCOLATE",
      stock: 20,
      sabor: "dulce",
      tipo: "postre",
      precio: 350,
      img: "https://damian-abalos.github.io/casa-vegana/img/10.jpg",
    },
  ];
  const [user, setUser] = useState(null);

  // const getAllProducts = async () => {
  //     try {
  //       const respuesta = await productos;
  //       const {} = respuesta;
  //       setUser();
  //       console.log(respuesta);
  //       setUser(respuesta);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  // const getAllProducts = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(productos);
  //   }, 3000);
  // });

  // useEffect(() => {
  //   // fetch(productos)
  //   //   .then((res) => res)
  //   //   .catch((err) => console.log(err))
  //   //   .then((res) => console.log(res));

  //   getAllProducts();
  // }, []);

  return (
    <div className="row">
      {
      // user &&
        productos.map((producto) => (
          <Item
            key={producto.id}
            nombre={producto.nombre}
            stock={producto.stock}
            img={producto.img}
            price={producto.precio}
          />
        ))}
    </div>
  );
};

export default ItemList;
