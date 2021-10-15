import React, { useEffect, useState } from "react";


import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({ id }) => {
  const misProductos = [
    {
      id: 1,
      nombre: "TOQUES DE GARBANZOS",
      descripcion: `
          CONTIENE: GARBANZOS, CEBOLLA, HARINA DE TRIGO, CILANTRO, AJO, POLVO DE HORNEAR, SAL MARINA Y PIMIENTA.
          
          Prefritos (ya estan cocidos), calentarlos sin aceite.
          
          Sin conservantes, ni saborizantes. 100% naturales
          
          Apto intolerantes a la lactosa.
          
          Peso total 420 grs / Pack de 20 unidades
          
          Duración : Heladera: 20 días / freezer 6 meses`,
      stock: 5,
      sabor: "salado",
      tipo: "toques",
      precio: 370,
      img: "https://damian-abalos.github.io/casa-vegana/img/1.jpg",
    },
    {
      id: 2,
      nombre: "TOQUES DE LENTEJAS",
      descripcion: `CONTIENE: LENTEJÓN CANADIENSE, GARBANZOS, CEBOLLA, HARINA DE TRIGO, CILANTRO, AJO, POLVO DE HORNEAR, SAL MARINA Y PIMIENTA.

          Prefritos (ya estan cocidos), calentarlos sin aceite.
          
          Sin conservantes, ni saborizantes. 100% naturales
          
          Apto intolerantes a la lactosa.
          
          Peso total 420 grs / Pack de 20 unidades
          Duración : Heladera: 20 días / freezer 6 meses`,
      stock: 8,
      sabor: "salado",
      tipo: "toques",
      precio: 370,
      img: "https://damian-abalos.github.io/casa-vegana/img/2.jpg",
    },
    {
      id: 3,
      nombre: "PIZZA FUGAZZETTA",
      descripcion: `Ingredientes: Queso de arroz, Cebolla morada, Olivas negras.

          Pizza a base de plantas hecha con una combinación de harina integral orgánica y 000.
          
          Masa estilo New York, eslástica, fina y crujiente, de 27 cm de diámetro
          
          Todas estan congeladas y precocidas, listas para hornear!
          
          - Contenido por caja: 1 pizza de 500 grs -`,
      stock: 9,
      sabor: "salado",
      tipo: "pizza",
      precio: 800,
      img: "https://damian-abalos.github.io/casa-vegana/img/3.jpg",
    },
    {
      id: 4,
      nombre: "PIZZA NAPOLITANA",
      descripcion: `Ingredientes: Salsa de tomate, Queso de arroz, Tomate, Olivas y Ajo.

          Pizza a base de plantas hecha con una combinación de harina integral orgánica y 000.
          
          Masa estilo New York, eslástica, fina y crujiente, de 27 cm de diámetro
          
          Todas estan congeladas y precocidas, listas para hornear!
          
          - Contenido por caja: 1 pizza de 500 grs -`,
      stock: 10,
      sabor: "salado",
      tipo: "pizza",
      precio: 800,
      img: "https://damian-abalos.github.io/casa-vegana/img/4.jpg",
    },
    {
      id: 5,
      nombre: "PIZZA PORTOBELLO",
      descripcion: `Ingredientes: Queso de almendras, tipo mozarella, queso de arroz tipo cheddar, Queso de almendras y Castañas tipo provolone con Portobello, Ailioli, Olivas negras.

          Pizza a base de plantas hecha con una combinación de harina integral orgánica y 000.
          
          Masa estilo New York, eslástica, fina y crujiente, de 27 cm de diámetro
          
          Todas estan congeladas y precocidas, listas para hornear!
          
          - Contenido por caja: 1 pizza de 500 grs -`,
      stock: 10,
      sabor: "salado",
      tipo: "pizza",
      precio: 930,
      img: "https://damian-abalos.github.io/casa-vegana/img/5.jpg",
    },
    {
      id: 6,
      nombre: "MEDALLONES ADUKI",
      descripcion: `CONTIENE: QUINOA ROJA, AVENA, POROTOS ADUKI, ZANAHORIA, CALABAZA, ZAPALLITOS, CEBOLLA, MORRON, CEBOOLA, TOMATE DESECADO, SAL MARINA, AJO Y PIMIENTA.

          Recien horneados (ya estan cocidos). Sin conservantes, ni saborizantes. 100% naturales
          
          Sin harinas, sin trigo, sin soja, sin grasas trans. Apto intolerantes a la lactosa.
          
          Peso total 480 grs / Pack de 4 unidades
          Duración : Heladera: 20 días / freezer 6 meses`,
      stock: 6,
      sabor: "salado",
      tipo: "medallones",
      precio: 300,
      img: "https://damian-abalos.github.io/casa-vegana/img/6.jpg",
    },
    {
      id: 7,
      nombre: "MEDALLONES QUINOA",
      descripcion: `CONTIENE: QUINOA ROJA, AVENA, POROTOS ADUKI, ZANAHORIA, CALABAZA, ZAPALLITOS, CEBOLLA, MORRON, CEBOOLA, TOMATE DESECADO, SAL MARINA, AJO Y PIMIENTA.

          Recien horneados (ya estan cocidos). Sin conservantes, ni saborizantes. 100% naturales
          
          Sin harinas, sin trigo, sin soja, sin grasas trans. Apto intolerantes a la lactosa.
          
          Peso total 480 grs / Pack de 4 unidades
          Duración : Heladera: 20 días / freezer 6 meses`,
      stock: 8,
      sabor: "salado",
      tipo: "medallones",
      precio: 300,
      img: "https://damian-abalos.github.io/casa-vegana/img/7.jpg",
    },
    {
      id: 8,
      nombre: "MEDALLONES GREEN MOON",
      descripcion: `CONTIENE: POROTOS MUNG, BROCOLI, AVENA, ZANAHORIA, CALABAZA, ZAPALLITOS, CEBOLLA, ESPINACA, SAL MARINA Y PIMIENTA

          Recien horneados (ya están cocidos). Sin conservantes, ni saborizantes. 100% naturales
          
          Sin harinas, sin trigo, sin soja, sin grasas trans. Apto intolerantes a la lactosa.
          
          Peso tota:l 480 grs / Pack de 4 unidades
          Duración: Heladera: 20 dias / freezer 6 meses`,
      stock: 15,
      sabor: "salado",
      tipo: "medallones",
      precio: 300,
      img: "https://damian-abalos.github.io/casa-vegana/img/8.jpg",
    },
    {
      id: 9,
      nombre: "MOUSSE DE CHOCOLATE",
      descripcion: `INGREDIENTES: PRODUCTO A BASE DE BEBIDA DE ALMENDRAS Y CACAO EN POLVO

          Ingredientes: Bebida a base de almendras (almendras, agua, sal, azucar), cacao en polvo, azucar, almidon de maiz, aceite de coco, harina de trigo, nuez, sal,
          
          CONTIENE ALMENDRAS, NUEZ Y DERIVADOS DE TRIGO. PUEDE CONTENER AVENA Y DERIVADOS DE SOJA.`,
      stock: 12,
      sabor: "dulce",
      tipo: "postres",
      precio: 350,
      img: "https://damian-abalos.github.io/casa-vegana/img/9.jpg",
    },
    {
      id: 10,
      nombre: "VOLCAN DE CHOCOLATE",
      descripcion: `INGREDIENTES: MASA CON RELLENO Y SALSA A BASE DE CHOCOLATE SEMIAMARGO.

          Harina de trigo con chocolate semiamargo, bebida a base de almendras (almendras, agua, sal, azucar), chocolate semiamargo, azucar, aceite de coco, aceite de girasol, cacao en polvo, esencia natural de vainilla)). 
          
          CONTIENE ALMENDRAS Y DERIVADOS DE TRIGO. PUEDE CONTENER AVENA, NUEZ Y DERIVADOS DE SOJA.`,
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
    }, 1500);
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
  
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const getItem = misProductos.find((item) => item.id == id);
    getItem ? setProducto(getItem) : alert("error");
  }, []);

  return (
    <div className="text-center">
      {producto && products.length ? (
        <ItemDetail
          nombre={producto.nombre}
          img={producto.img}
          descripcion={producto.descripcion}
          stock={producto.stock}
          precio={producto.precio}
        />
      ) : (
        <div>
            <p className="text-center mt-5 w-100">
              Cargando producto...
            </p>
            <div
              className="text-center d-flex align-items-center justify-content-center"
              style={{ height: "80vh" }}
            >
              <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
      )}
      
    </div>
  );
};

export default ItemDetailContainer;
