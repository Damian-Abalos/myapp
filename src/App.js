import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import "./components/NavBar/NavBar";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";
// import Events from "./components/Events/Events";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>

          <Route exact path="/">
            {/* <Events/> */}
            <Home greeting="Productos"/>
          </Route>

          <Route exact path="/productos/:id">
            <DetailPage/>
          </Route>

          <Route exact path="/categorias/:category">
            <ItemListContainer greeting="Productos" />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
