import './App.css';
// import DynamicObjects from "./components/DynamicObjects"
// import SpreadOperators from "./components/SpreadOperator/SpreadOperators";
import "./components/NavBar/NavBar";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import Icon from './components/Stateless/Icon/Icon'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Productos"/>
      {/* <Icon icon={faCoffee}/> */}
      {/* <button className="btn btn-primary"></button> */}
    </div>
  );
}

export default App;
