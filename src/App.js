import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import "./components/NavBar/NavBar";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import Comp2 from "./components/pruebas/clase-componentes-2/Comp2";
// import MiPromise from "./components/pruebas/Promise/MiPromise";
// import Api from "./components/API/Api";
import Home from "./pages/Home";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
// import DynamicObjects from "./components/DynamicObjects"
// import SpreadOperators from "./components/SpreadOperator/SpreadOperators";

function App() {
  // const [open, setOpen] = useState(false)
  // const changeBgColor = () => {
  //     setOpen(!open)
  // }
  // function SuperButton({ texto }) {
  //   return <button className="d-flex m-auto">{texto}</button>;
  // }

  return (
    <BrowserRouter>
      <div
        className="App">
        <NavBar/>
        <Switch>
          <Route exact path="">
            <ItemListContainer greeting="Productos" />
          </Route>
          <Route path="/#Home">
            <Home/>
          </Route>
          <Route path="Productos/:id">
            <ItemDetailContainer/>
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
