import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import "./components/NavBar/NavBar";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Home from "./pages/Home";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import DetailPage from "./pages/DetailPage";
// import DynamicObjects from "./components/DynamicObjects"
// import SpreadOperators from "./components/SpreadOperator/SpreadOperators";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>

          <Route exact path="/">
            <Home greeting="Productos"/>
          </Route>

          <Route exact path="/productos">
            <ItemListContainer greeting="Productos/:category" />
          </Route>

          <Route exact path="/productos/:id">
            <DetailPage/>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
