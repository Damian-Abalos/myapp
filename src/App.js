import './App.css';
// import DynamicObjects from "./components/DynamicObjects"
// import SpreadOperators from "./components/SpreadOperator/SpreadOperators";
import "./components/NavBar/NavBar";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <button className="btn btn-primary"></button>
    </div>
  );
}

export default App;
