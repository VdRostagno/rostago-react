import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import CartContextProvider from "./Context/CartContext";
import Cart from './components/Cart/Cart';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    
    <CartContextProvider>

      <BrowserRouter>

        <NavBar/>

          <Routes>    

            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/:category/:categoryId" element={<ItemListContainer />} />
            <Route exact path="/detalles/:id" element={<ItemDetailContainer />} />
            <Route exact path="/Cart" element={<Cart/>} />

            
          </Routes>

      </BrowserRouter>

    </CartContextProvider>
    
  );
}

export default App;
