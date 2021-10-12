import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Item from "../Item/Item";

const ItemList = ({ items }) => {
  const [categorias, setCategorias] = useState("");

  const filtrarToques = () => {
    setCategorias("toques");
  };

  const filtrarPizzas = () => {
    setCategorias("pizza");
  };

  const filtrarMedallones = () => {
    setCategorias("medallones");
  };

  const filtrarPostres = () => {
    setCategorias("postres");
  };
  const filtrarTodos = () => {
    setCategorias("");
  };



  const misProductos = [
    {
      id: 1,
      nombre: "TOQUES DE GARBANZOS",
      descripcion: "crear descripcion",
      stock: 5,
      sabor: "salado",
      tipo: "toques",
      precio: 370,
      img: "https://damian-abalos.github.io/casa-vegana/img/1.jpg",
    },
    {
      id: 2,
      nombre: "TOQUES DE LENTEJAS",
      descripcion: "crear descripcion",
      stock: 8,
      sabor: "salado",
      tipo: "toques",
      precio: 370,
      img: "https://damian-abalos.github.io/casa-vegana/img/2.jpg",
    },
    {
      id: 3,
      nombre: "PIZZA FUGAZZETTA",
      descripcion: "crear descripcion",
      stock: 9,
      sabor: "salado",
      tipo: "pizza",
      precio: 800,
      img: "https://damian-abalos.github.io/casa-vegana/img/3.jpg",
    },
    {
      id: 4,
      nombre: "PIZZA NAPOLITANA",
      descripcion: "crear descripcion",
      stock: 10,
      sabor: "salado",
      tipo: "pizza",
      precio: 800,
      img: "https://damian-abalos.github.io/casa-vegana/img/4.jpg",
    },
    {
      id: 5,
      nombre: "PIZZA PORTOBELLO",
      descripcion: "crear descripcion",
      stock: 10,
      sabor: "salado",
      tipo: "pizza",
      precio: 930,
      img: "https://damian-abalos.github.io/casa-vegana/img/5.jpg",
    },
    {
      id: 6,
      nombre: "MEDALLONES ADUKI",
      descripcion: "crear descripcion",
      stock: 6,
      sabor: "salado",
      tipo: "medallones",
      precio: 300,
      img: "https://damian-abalos.github.io/casa-vegana/img/6.jpg",
    },
    {
      id: 7,
      nombre: "MEDALLONES QUINOA",
      descripcion: "crear descripcion",
      stock: 8,
      sabor: "salado",
      tipo: "medallones",
      precio: 300,
      img: "https://damian-abalos.github.io/casa-vegana/img/7.jpg",
    },
    {
      id: 8,
      nombre: "MEDALLONES GREEN MOON",
      descripcion: "crear descripcion",
      stock: 15,
      sabor: "salado",
      tipo: "medallones",
      precio: 300,
      img: "https://damian-abalos.github.io/casa-vegana/img/8.jpg",
    },
    {
      id: 9,
      nombre: "MOUSSE DE CHOCOLATE",
      descripcion: "crear descripcion",
      stock: 12,
      sabor: "dulce",
      tipo: "postres",
      precio: 350,
      img: "https://damian-abalos.github.io/casa-vegana/img/9.jpg",
    },
    {
      id: 10,
      nombre: "VOLCAN DE CHOCOLATE",
      descripcion: "crear descripcion",
      stock: 20,
      sabor: "dulce",
      tipo: "postres",
      precio: 350,
      img: "https://damian-abalos.github.io/casa-vegana/img/10.jpg",
    },
  ];

  const [products, setProducts] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(misProductos);
    }, 3000);
  });

  const getProductsFromDB = async () => {
    try {
      const result = await getProducts;
      setProducts(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductsFromDB();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // let filtro = products && products.filter((p) => p.nombre.indexOf(search) >= 0)

  const filtro =
    categorias !== ""
      ? products.filter(
          (filtro) => categorias.toLowerCase() === filtro.tipo.toLowerCase()
        )
      : products;
  // console.log(filtro)


  return (
    <div className="mt-3">
      <div className="text-center d-flex align-items-center">
        <p className="text-light m-0">Filtrar productos</p>
        <ul>
          <li onClick={() => filtrarTodos()} style={{ cursor: "pointer" }}>
            Todos
          </li>
          <li onClick={() => filtrarToques()} style={{ cursor: "pointer" }}>
            Toques
          </li>
          <li onClick={() => filtrarPizzas()} style={{ cursor: "pointer" }}>
            Pizzas
          </li>
          <li onClick={() => filtrarMedallones()} style={{ cursor: "pointer" }}>
            Medallones
          </li>
          <li onClick={() => filtrarPostres()} style={{ cursor: "pointer" }}>
            Postres
          </li>

          {/* <Link to={`/productos/toques`}><li>Toques</li></Link>
          <Link to={`/productos/pizzas`}><li>Pizzas</li></Link>
          <Link to={`/productos/medallones`}><li>Medallones</li></Link>
          <Link to={`/productos/postres`}><li>Postres</li></Link> */}
        </ul>
        {/* <input className="ms-1" type="search" onChange={(e) => setSearch(e.target.value)} /> */}
      </div>

      <div className="row">
        {products && products.length ? (
          filtro.map((producto) => (
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
            <p className="text-light text-center w-100">
              Cargando productos...
            </p>
            <div
              className="text-center d-flex align-items-center"
              style={{ height: "50vh" }}
            >
              <div className="spinner-grow text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemList;
