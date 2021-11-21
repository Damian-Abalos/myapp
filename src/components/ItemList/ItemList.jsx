import React, { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import { getFirestore } from "../../services/getFirebase";

import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = memo(
  ({ category }) => {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
      if (category) {
        const db = getFirestore();
        db.collection("items")
          .where("categoryId", "==", category)
          .get()
          .then((resp) =>
            setItems(resp.docs.map((it) => ({ id: it.id, ...it.data() })))
          )
          .catch((err) => console.log(err))
          .finally(() => setLoading(false));
      } else {
        const db = getFirestore();
        db.collection("items")
          .get() //traigo toda la coleccion
          .then((resp) =>
            setItems(resp.docs.map((it) => ({ id: it.id, ...it.data() })))
          )
          .catch((err) => console.log(err))
          .finally(() => setLoading(false));
      }
    }, [category]);

    return (
      <div className="mt-3">
        <div class="dropdown m-auto text-center">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Filtrar productos
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <Link to={`/`} className="dropdown-item">
                <u>Todos</u>
              </Link>
            </li>
            <li>
              <Link to={`/categorias/toques`} className="dropdown-item">
                <u>Toques</u>
              </Link>
            </li>
            <li>
              <Link to={`/categorias/pizza`} className="dropdown-item">
                <u>Pizzas</u>
              </Link>
            </li>
            <li>
              <Link to={`/categorias/medallones`} className="dropdown-item">
                <u>Medallones</u>
              </Link>
            </li>
            <li>
              <Link to={`/categorias/postres`} className="dropdown-item">
                <u>Postres</u>
              </Link>
            </li>
          </ul>
        </div>
        <div className="row justify-content-center mi-div-item">
          {loading ? (
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
          ) : (
            items.map((items) => (
              <Item
                id={items.id}
                nombre={items.title}
                stock={items.stock}
                img={items.image}
                price={items.price}
                descripcion={items.descripcion}
              />
            ))
          )}
        </div>
      </div>
    );
  },
  (oldProps, newProps) => console.log(newProps)
);

export default ItemList;
