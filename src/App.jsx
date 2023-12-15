import MainRoutes from "./routes/MainRouter";
import { CartProvider } from "./context/CartContext/CartContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  return (
    <div>
      <CartProvider>
        <MainRoutes />
      </CartProvider>
    </div>
  );
}

export default App;