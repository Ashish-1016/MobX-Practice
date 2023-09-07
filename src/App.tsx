
import './App.css'
import {ShoppingCart} from "./store/ShoppingCartStore.ts";
import ShoppingCartInput from "./components/ShoppingCartInput.tsx";
import ItemCard from "./components/ItemCard.tsx";

function App() {


    const shoppingCartStore = new ShoppingCart()

  return (
    <>
      <h1>MobX Practice</h1>
        <div>
            <h1>Shopping Cart Store:</h1>
            <ShoppingCartInput cartStore={shoppingCartStore} />
            <ItemCard cartStore={shoppingCartStore} />
        </div>
    </>
  )
}

export default App
