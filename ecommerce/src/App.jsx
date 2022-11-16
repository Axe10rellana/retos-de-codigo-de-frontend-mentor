//componentes
import { Header, Main } from "./components";
import CartDetailsProvider from "./context/useCartDetails";

const App = () => {
  return (
    <CartDetailsProvider>
      <Header />
      <Main />
    </CartDetailsProvider>
  );
};

export default App;
