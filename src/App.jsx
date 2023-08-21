import "./index.css"
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {

  return (
    
      <div>
      <NavBar />  
      <ItemListContainer greeting='Bienvenida a mi tienda' /> 
      </div>
    
  )
}

export default App;
