import React, {useState} from 'react'
import './App.css';
// import DynamicObjects from "./components/DynamicObjects"
// import SpreadOperators from "./components/SpreadOperator/SpreadOperators";
import "./components/NavBar/NavBar";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import Icon from './components/Stateless/Icon/Icon'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Comp2 from './components/clase-componentes-2/Comp2';

function App() {

  const [open, setOpen] = useState(false)

  const changeBgColor = () => {
      setOpen(!open)
  }

  function SuperButton({texto}) {
    return (
      <button className="d-flex m-auto">
        {texto}
      </button>
    )
  }
  



  return (
    <div className="App" 
    // style={{backgroundColor: open ? "white" : "black"}} 
    >
      <NavBar changeBgColor={changeBgColor}/>
      <ItemListContainer greeting="Productos"/>
      {/* <Comp2 title="hola mundo" button={SuperButton}></Comp2> */}
      {/* <Icon icon={faCoffee}/> */}
      {/* <button className="btn btn-primary"></button> */}
    </div>
  );
}

export default App;
