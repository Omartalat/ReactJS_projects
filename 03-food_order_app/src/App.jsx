import Header from "./components/Header";
import Products from "./components/Products";
import CheckoutModal from "./components/CheckoutModal";
import CartModal from "./components/CartModal";

function App() {
  return (
    <>
      <CartModal />
      <CheckoutModal />
      <Header />
      <Products />
    </>
  );
}

export default App;
