import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import CartCustomProvider from "./Context/CartContext";
import Cart from './components/Cart/Cart';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
  
    <CartCustomProvider>

      <BrowserRouter>
    <NavBar/>

      <Routes>    

        <Route exact path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />}/>
        <Route exact path="/detalles/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart></Cart>}></Route>

        
      </Routes>
    
      </BrowserRouter>
      </CartCustomProvider>
  );
}

export default App;
