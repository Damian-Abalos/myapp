import React, { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";

import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = memo(
  ({ category }) => {
    const misProductos = [
      {
        id: 1,
        nombre: "TOQUES DE GARBANZOS",
        descripcion: "crear descripcion",
        stock: 5,
        sabor: "salado",
        category: "toques",
        precio: 370,
        img: "https://damian-abalos.github.io/casa-vegana/img/1.jpg",
      },
      {
        id: 2,
        nombre: "TOQUES DE LENTEJAS",
        descripcion: "crear descripcion",
        stock: 8,
        sabor: "salado",
        category: "toques",
        precio: 370,
        img: "https://damian-abalos.github.io/casa-vegana/img/2.jpg",
      },
      {
        id: 3,
        nombre: "PIZZA FUGAZZETTA",
        descripcion: "crear descripcion",
        stock: 9,
        sabor: "salado",
        category: "pizza",
        precio: 800,
        img: "https://damian-abalos.github.io/casa-vegana/img/3.jpg",
      },
      {
        id: 4,
        nombre: "PIZZA NAPOLITANA",
        descripcion: "crear descripcion",
        stock: 10,
        sabor: "salado",
        category: "pizza",
        precio: 800,
        img: "https://damian-abalos.github.io/casa-vegana/img/4.jpg",
      },
      {
        id: 5,
        nombre: "PIZZA PORTOBELLO",
        descripcion: "crear descripcion",
        stock: 10,
        sabor: "salado",
        category: "pizza",
        precio: 930,
        img: "https://damian-abalos.github.io/casa-vegana/img/5.jpg",
      },
      {
        id: 6,
        nombre: "MEDALLONES ADUKI",
        descripcion: "crear descripcion",
        stock: 6,
        sabor: "salado",
        category: "medallones",
        precio: 300,
        img: "https://damian-abalos.github.io/casa-vegana/img/6.jpg",
      },
      {
        id: 7,
        nombre: "MEDALLONES QUINOA",
        descripcion: "crear descripcion",
        stock: 8,
        sabor: "salado",
        category: "medallones",
        precio: 300,
        img: "https://damian-abalos.github.io/casa-vegana/img/7.jpg",
      },
      {
        id: 8,
        nombre: "MEDALLONES GREEN MOON",
        descripcion: "crear descripcion",
        stock: 15,
        sabor: "salado",
        category: "medallones",
        precio: 300,
        img: "https://damian-abalos.github.io/casa-vegana/img/8.jpg",
      },
      {
        id: 9,
        nombre: "MOUSSE DE CHOCOLATE",
        descripcion: "crear descripcion",
        stock: 12,
        sabor: "dulce",
        category: "postres",
        precio: 350,
        img: "https://damian-abalos.github.io/casa-vegana/img/9.jpg",
      },
      {
        id: 10,
        nombre: "VOLCAN DE CHOCOLATE",
        descripcion: "crear descripcion",
        stock: 20,
        sabor: "dulce",
        category: "postres",
        precio: 350,
        img: "https://damian-abalos.github.io/casa-vegana/img/10.jpg",
      },
    ];

    let filtrarCategoria = misProductos.filter(
      (items) => items.category == category
    );

    const [products, setProducts] = useState([]);
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        {
          category == undefined
            ? resolve(misProductos)
            : resolve(filtrarCategoria);
        }
      }, 3000);
    });

    const getProductsFromDB = async () => {
      try {
        const result = await getProducts;
        setProducts(result);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      getProductsFromDB();
    }, [category]);

    return (
      <div className="mt-3">
        <div className="text-center d-flex align-items-center justify-content-center row div-filtros">
          <p className="m-3 col-12">Filtrar productos</p>
          <ul className="justify-content-center ul-productos">
            <li>
              <Link to={`/`} className="text-dark m-4">
                <u>Todos</u>
              </Link>
            </li>
            <li>
              <Link to={`/categorias/toques`} className="text-dark m-4">
                <u>Toques</u>
              </Link>
            </li>
            <li>
              <Link to={`/categorias/pizza`} className="text-dark m-4">
                <u>Pizzas</u>
              </Link>
            </li>
            <li>
              <Link to={`/categorias/medallones`} className="text-dark m-4">
                <u>Medallones</u>
              </Link>
            </li>
            <li>
              <Link to={`/categorias/postres`} className="text-dark m-4">
                <u>Postres</u>
              </Link>
            </li>
          </ul>
        </div>
        <div className="row justify-content-center mi-div-item">
          {products && products.length ? (
            products.map((producto) => (
              <Item
                id={producto.id}
                nombre={producto.nombre}
                stock={producto.stock}
                img={producto.img}
                price={producto.precio}
                descripcion={producto.descripcion}
              />
            ))
          ) : (
            <div>
              <p className="text-dark text-center w-100">
                Cargando productos...
              </p>
              <div
                className="text-center d-flex align-items-center justify-content-center"
                style={{ height: "80vh" }}
              >
                <div className="spinner-grow text-dark" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  },
  (oldProps, newProps) => console.log(newProps)
);

export default ItemList;
