import Site from "./Components/Productos/site";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";
import Rutas from "./Components/Rutas/rutas";
import { CartProvider } from "./Context/cartContext";


function App() {
  return (

      <CartProvider>
        <Rutas />
      </CartProvider>

  );
}

export default App;
//     </CartProvider>

//https://www.youtube.com/watch?v=ywvsztMU_oM
// 41.36
