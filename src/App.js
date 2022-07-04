import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
  
    <BrowserRouter>

    <NavBar/>

      <Routes>    

        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/:category" element={<ItemListContainer />} />
        <Route exact path="/detalles/:id" element={<ItemDetailContainer />} />
      

        
      </Routes>
      </BrowserRouter>
  );
}

export default App;
