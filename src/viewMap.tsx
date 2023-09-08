import Home from "./pages/Home.tsx";
import Item from "./pages/Item.tsx";
import NotFound from "./pages/NotFound.tsx";
import List from "./pages/List.tsx";
import {ShoppingCart} from "./store/ShoppingCartStore.ts";


const shoppingCartStore= new ShoppingCart()

export const viewMap={
    Home:<Home cartStore={shoppingCartStore} />,
    ItemList:<List cartStore={shoppingCartStore}/>,
    Item:<Item />,
    notFound:<NotFound />
};