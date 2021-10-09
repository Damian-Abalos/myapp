import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import "./components/NavBar/NavBar";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Comp2 from "./components/pruebas/clase-componentes-2/Comp2";
import MiPromise from "./components/pruebas/Promise/MiPromise";
import Api from "./components/API/Api";
// import DynamicObjects from "./components/DynamicObjects"
// import SpreadOperators from "./components/SpreadOperator/SpreadOperators";

function App() {
  // const [open, setOpen] = useState(false)
  // const changeBgColor = () => {
  //     setOpen(!open)
  // }
  function SuperButton({ texto }) {
    return <button className="d-flex m-auto">{texto}</button>;
  }

  return (
    <BrowserRouter>
      <div
        className="App"
        // style={{backgroundColor: open ? "white" : "black"}}
      >
        <NavBar
        // changeBgColor={changeBgColor}
        />
        <Switch>
          <Route exact path="">
            <ItemListContainer greeting="Productos" />
          </Route>
          <Route path="/api">
            <Api />
          </Route>
        </Switch>
        {/* <MiPromise/> */}
        {/* <Comp2 title="hola mundo" button={SuperButton}></Comp2> */}
        {/* <Icon icon={faCoffee}/> */}
        {/* <button className="btn btn-primary"></button> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
